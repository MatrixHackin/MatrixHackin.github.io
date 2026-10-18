#!/usr/bin/env python3
"""Download Boltplus images and emit compressed WebP copies for GitHub Pages.

Must live in tools/, not scripts/: Hexo loads every file in scripts/ as JS.
"""
from __future__ import annotations

import re
import subprocess
import sys
from concurrent.futures import ThreadPoolExecutor, as_completed
from pathlib import Path
from urllib.request import Request, urlopen

ROOT = Path(__file__).resolve().parents[1]
POSTS = ROOT / "source" / "_posts"
OUT = ROOT / "source" / "images" / "boltp"
RAW = Path("/tmp/boltp-raw")
URL_RE = re.compile(r"https://(a[12])\.boltp\.com/([^\s)\"<>]+)")


def urls_from_posts() -> list[tuple[str, str, str]]:
    found = []
    seen = set()
    for post in POSTS.glob("*.md"):
        for host, path in URL_RE.findall(post.read_text()):
            url = f"https://{host}.boltp.com/{path}"
            if url in seen:
                continue
            seen.add(url)
            found.append((url, host, path))
    return found


def dest_for(host: str, path: str) -> Path:
    rel = Path(host) / Path(path).with_suffix(".webp")
    return OUT / rel


def download(url: str, dest: Path) -> None:
    dest.parent.mkdir(parents=True, exist_ok=True)
    req = Request(url, headers={"User-Agent": "Mozilla/5.0 DylanLiuBlogMirror/1.0"})
    with urlopen(req, timeout=45) as resp:
        dest.write_bytes(resp.read())


def compress(src: Path, dest: Path) -> None:
    dest.parent.mkdir(parents=True, exist_ok=True)
    cmd = [
        "ffmpeg",
        "-hide_banner",
        "-loglevel",
        "error",
        "-y",
        "-i",
        str(src),
        "-vf",
        "scale='min(1400,iw)':-2",
        "-c:v",
        "libwebp",
        "-quality",
        "72",
        str(dest),
    ]
    subprocess.run(cmd, check=True, timeout=60)


def process(item: tuple[str, str, str]) -> str:
    url, host, path = item
    dest = dest_for(host, path)
    if dest.exists() and dest.stat().st_size > 0:
        return f"skip {dest.relative_to(ROOT)}"
    raw = RAW / host / path
    if not raw.exists() or raw.stat().st_size == 0:
        download(url, raw)
    compress(raw, dest)
    return (
        f"ok {raw.stat().st_size/1024:.0f}KiB -> "
        f"{dest.stat().st_size/1024:.0f}KiB {dest.relative_to(ROOT)}"
    )


def main() -> int:
    RAW.mkdir(parents=True, exist_ok=True)
    items = urls_from_posts()
    print(f"mirroring {len(items)} images", flush=True)
    failed = 0
    with ThreadPoolExecutor(max_workers=6) as pool:
        futs = {pool.submit(process, item): item[0] for item in items}
        for fut in as_completed(futs):
            url = futs[fut]
            try:
                print(fut.result(), flush=True)
            except Exception as exc:
                failed += 1
                print(f"FAIL {url}: {type(exc).__name__}: {exc}", flush=True)
    print(f"done failed={failed}", flush=True)
    return 1 if failed else 0


if __name__ == "__main__":
    sys.exit(main())
