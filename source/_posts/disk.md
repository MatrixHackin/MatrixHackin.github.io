---
title: What is in the Disk Storage
date: 2023-08-15 13:25:35
updated: 2025-05-02 15:45:46
tags: Disk Storage, Computer Organization
categories: Technology
---

由于今天先启动了一下ubuntu系统，再启动windows系统时出现问题导致无法正常启动，最后了解到是由于我加装一块硬盘导致系统启动引导分区出现迁移（万恶的windows自动更新）遂写此篇
# 磁盘

| 特性   | 分区（Partition）            | 分卷（Volume）                       |
| ---- | ------------------------ | -------------------------------- |
| 定义   | 物理磁盘上的实际划分，用于管理磁盘的物理存储空间 | 逻辑上的存储单元，用于操作系统层面的存储管理           |
| 实现层次 | 硬件层次                     | 操作系统层次                           |
| 组成   | 一个连续的物理磁盘区域              | 可以由一个或多个分区组成，可能跨多个物理磁盘           |
| 数量限制 | MBR最多4个主分区，GPT支持更多       | 由操作系统和卷管理器决定，通常没有硬性限制            |
| 管理方式 | 分区表（MBR、GPT）             | 文件系统、卷管理器（如Windows动态卷、Linux LVM） |
| 示例   | 磁盘分区C:、D:、E:             | LVM卷组中的逻辑卷、Windows动态卷            |
## GPT（GUID Partition Table）
### GUID(Globally Unique Identifier)
GUID 用于确保每个分区的唯一标识
### Structure of GPT
- **保护MBR（Protective MBR）**：位于磁盘的第一个扇区，保护GPT磁盘不会被旧的MBR工具误识别为未分区磁盘。
- **GPT头部（Primary GPT Header）**：位于保护MBR之后，包含GPT的全局信息和主分区表的位置。
- **分区条目数组（Partition Entry Array）**：包含所有分区条目，每个条目128字节。通常系统允许多达128个分区。
- **备份GPT头部和分区条目数组（Backup GPT Header and Partition Entry Array）**：位于磁盘末尾，用于冗余和恢复。

以我的电脑为例
- 磁盘管理界面
	![disk management view](/images/boltp/a1/2025/03/17/67d8070b46160.webp)
- diskpart界面
	![diskpart view](/images/boltp/a1/2025/03/17/67d807c5062cc.webp)
	![diskpart view new](/images/boltp/a1/2025/03/17/67d807fe71729.webp)
- linux
	![linux disk](/images/boltp/a1/2025/03/17/67d808e3e7c0c.webp)
	![linux2.png](/images/boltp/a1/2025/03/17/67d8093ee8f61.webp)
	![linux3.png](/images/boltp/a1/2025/03/17/67d8095b23504.webp)
- 此处磁盘1应该是电脑自带的512G SSD
	- 分区1就是ESP
	- 分区2是Windows系统的保留分区
	- 分区3是我分卷的C盘
	- 分区4是我分卷的D盘
	- 分区5是恢复分区
- 磁盘2则是我加装的一块1T SSD
	- 分区1就是ESP
	- 分区2就是Windows系统的保留分区
	- 分区3是我分卷的E盘
	- 除了恢复分区的剩下的分区被我用来做成了Linux Ubuntu
# 计算机启动流程
## POST（Power-On Self Test）
在计算机打开电源的时候，首先BIOS（old）/UEFI(new)会检查硬件是否正常工作
## UEFI
UEFI初始化后读取引导配置，引导配置数据通常存储在EFI系统分区（EFI System Partition,ESP）中的BCD(Boot Configuration Data)

