---
title: The Best SC24!
date: 2024-11-18 20:25:35
updated: 2025-05-02 15:40:48
tags: SC, America, Atlanta
categories: Conference
---
![Guess where?](https://a1.boltp.com/2025/05/01/6813702d833b4.jpg)

Guess where I've come? Here is SC24 at Atlanta, Georgia, United States!!!
It's really my honor to be invited to be here to attend one of the most famous and TOP Conference in HPC Area: SC(International Conference for High Performance Computing). This year, the conference is held at ATLANTA,GA. And two of my teammates and I are invited to attend the conference and the student cluster competition on behalf of SUSTech.
[![SUSTech Team](https://a1.boltp.com/2025/05/01/6813702dac956.jpg)](https://a1.boltp.com/2025/05/01/6813702dac956.jpg)

I've participated in several of international HPC competitions all around world, but I have to say the SC is the best! The conference is held at the world's largest conference center GACC. A lot of famous companies, univerisities gathered here.

![I hope you could accept my paper...](https://a1.boltp.com/2025/05/01/681370318355f.jpg)

![This computer is armed!](https://a1.boltp.com/2025/05/01/68137033e809d.jpg)

We were very happy to find our seniors when we first arrived here: they were studying for a doctorate at Georgia Tech, which is one of the most famous Tech Universities around the world. As said, they got over 2000 USD salaries! But their majors were mainly robotics engineering and physics. We had a delicious BBQ together. Almost everyone had their own car when they first came to the United States to study for a doctorate. The seniors drove us on the streets at a speed that would definitely get us arrested in China. However, there were too few people in Atlanta, and there were almost no pedestrians on the streets.
![Georgia Tech seniors' BBQ](https://a1.boltp.com/2025/05/01/6813702dd353d.jpg)

During the four days of the conference, we were almost always at the competition venue. We started our HPL test on the JetStream cloud cluster and ran the test samples provided by the organizer. In addition to the classic numerical simulation competition questions, the organizer also provided a computer vision competition question announced on the spot: Find Cat. I was busy tuning the target detection model and I doubted for a moment whether I was participating in an HPC competition.
![Work hard!](https://a1.boltp.com/2025/05/01/68137031b918b.jpg)

Of course, the most important thing to do when attending a conference is to visit the exhibition! I collected a lot of beautiful stickers and pins to decorate my Macbook and backpack.

![SC Stickers](https://a1.boltp.com/2025/05/01/68137031ef006.jpg)
![Stickers Collector](https://a1.boltp.com/2025/05/01/6813702dbc441.jpg)
![Nice Backpack!](https://a1.boltp.com/2025/05/01/68137034e39e6.jpg)

I went to many exhibition halls to participate in activities, including Google, Microsoft, NASA, and NVIDIA, and received many souvenirs. I have had many discussions with technology enthusiasts, and we all share the same painful problems in the development process. This will become our topic of conversation. I also found that in the era of artificial intelligence, many server and chip manufacturers have begun to try more efficient cooling and communication technologies, such as chips with larger unified memory (Apple). Traditional air cooling seems to have been eliminated, and the latest Lenovo and Dell servers have adopted full liquid cooling technology.
![Exhibition Presentation](https://a1.boltp.com/2025/05/02/681475fb8084b.jpg)

I was excited to see Red Hat, which is definitely a pure company in the eyes of geeks, but unfortunately, when I went there, their Red Hat souvenirs had been distributed. I also participated in the OpenMP lottery. I have to say that writing and compiling OpenMP programs is a very painful thing. Even though they set the development language to be very simple, unknown bugs always give people headaches.
![Troublesome OpenMP](https://a1.boltp.com/2025/05/02/681476ef989e9.jpg)

In the end, it was Tsinghua University, a well-established Chinese university, that won the championship. I have to say it is very worth learning from.

![Tsinghua University!](https://a1.boltp.com/2025/05/01/68137030ebb62.jpg)
![Poster of Tsinghua U](https://a1.boltp.com/2025/05/01/68137030bad58.jpg)

Although SC does not have the 3000W power consumption limit for building a cluster like ASC, TsingHua U also uses Grafana for real-time power consumption monitoring. The cloud-naive project I developed based on kubernetes at NUS also uses Prometheus based on Grafana for power consumption detection. This real-time visual monitoring is indeed very valuable, because HPC software is likely to get stuck due to various strange problems when running tests. We thought it was successfully run, but in fact the application was stuck in the IO part, the CPU did not run, and the system had almost no power consumption.

The most important point of HPC application optimization is still to find a good scheduling strategy to overlap communication and computing overhead. Like us, they first used Profiler Tools to profile the application, but I usually only use Intel Vtune Amplifier. According to their experience, NVIDIA Profiling Tools is more effective when executing GPU tasks. In addition, it is crucial to properly rearrange memory to make full use of cache hits. Maybe I will write a blog about the detailed optimization strategy. Honestly speaking, I am quite busy these days.

The four days in SC are very unforgettable. I think this will be one of the most precious memories in my life. I joined ACM HPC SIG and also left Shenzhen's mark on the world HPC enthusiasts map. Goodbye SC, I hope that one day I can produce scientific research results that will be accepted by you.

![Shenzhen HPC SIG!](https://a1.boltp.com/2025/05/01/681370356b123.jpg)
![Bye SC!](https://a1.boltp.com/2025/05/01/6813703536ac2.jpg)
