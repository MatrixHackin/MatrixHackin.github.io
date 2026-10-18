---
title: One of the best HPC Competition around the world-ASC24
date: 2024-04-20 12:45:59
updated: 2025-05-02 20:10:52
tags: ASC, China, Shanghai
categories: Conference
---

![SUSTech ASC Team](/images/boltp/a2/2025/05/02/6814a143a164e.webp)
ASC is one of the three major supercomputing competitions in the world, along with SC and ISC. ASC organizers are usually from a top university in China. We at SUSTech have also hosted ASC22-23. ASC not only requires us to install drivers and OS from bare metal to build a high-performance computing cluster with multiple machines connected, but also requires us to run HPC software on our own supercomputing cluster under limited power consumption and pass test samples. This is a highly comprehensive challenge.

After nearly half a year of careful preparation, we finally learned that the proposal we submitted in the preliminary round passed the assessment of the competition committee. We will go to Shanghai to compete in the live finals with 20 university teams from all over the world.
![Proposal of SUSTech Team](/images/boltp/a2/2025/05/02/6814a143a1800.webp)

The first day's schedule was mainly about setting up the machines. We installed the eight NVIDIA A100 graphics cards we brought with us on four of the machines, and then began to configure the operating system for each machine.

![Configuring OS](/images/boltp/a2/2025/05/02/6814a14de7d83.webp)

We chose UBUNTU 22.04 as the operating system, but found that other teams mostly used Red Hat operating systems. Later we learned that Debian operating systems sacrificed some communication performance in pursuit of user experience. However, we did not prepare a system disk for the Red Hat operating system at the time, so we had to bite the bullet and go for it.
![BIOS which is not common to see nowadays](/images/boltp/a2/2025/05/02/6814a14de79b6.webp)

To be honest, it took us a lot of effort to configure this four-machine, eight-card HPC cluster. It was a very difficult journey, especially the network communication problem between the four machines. For some reason, our IB network cable was not detected by the IB driver, and a GPU on host No. 3 was not recognized. If the IB network is not configured properly, the Ethernet-based communication method will greatly increase the communication overhead across nodes.

![Can you believe how expensive this InfiniBand cable is?](/images/boltp/a2/2025/05/02/6814a144cd99f.webp)

We could only reinstall the IB driver and set the IP permissions between nodes. The GPU was found to be not correctly identified because the PLIE slot was loose. This was a very tense day, but fortunately we finally succeeded in getting our cluster up and running and started running HPL tests. The ASC competition has a power consumption limit of 3kW, but the new generation of Intel CPUs installed on the servers seem to have extremely high no-load power consumption, so everyone's power consumption exceeded the limit on the first day of testing.

![Power Limit Warning](/images/boltp/a2/2025/05/02/6814a202ea952.webp)

In the next few days of the competition, we began to run the test samples according to the established plan. The actual test samples issued in the competition were much larger than the reference samples, and it really required good time planning to complete them within the limited time. In the two competition questions I was responsible for, openCAEPoro and GOMARS, openCAEPoro showed a lot of small matrix multiplications during operation, which brought unnecessary communication waiting overhead. We used local memory rearrangement and specific small matrix multiplication libraries for optimization. GOMARS had many strange errors during on-site compilation. I don’t know why it can run smoothly on a single node but will run empty when running on multiple nodes. There should be problems in the MPI communication layer. But in the end, due to lack of time, we only submitted the results of a single node.

![On-site testing](/images/boltp/a2/2025/05/02/6814a143a1b70.webp)

In the tense competition, although we did not have outstanding performance in a single question, our overall result was good, so we finally won the first prize and the best team award.

![First Prize!](/images/boltp/a2/2025/05/02/6814a14de763f.webp)

In addition to the competition, the most enjoyable thing is to make friends with HPC enthusiasts from all over the world. We and the team from Shanghai University, Hong Kong Polytechnic University, and Qilu University of Technology won the first place in the team competition.

![We are group competition winner!](/images/boltp/a2/2025/05/02/6814a1440d5ba.webp)

It is worth mentioning that I also made good friends from the University of Nuremberg in Germany.
![Friends from Germany](/images/boltp/a2/2025/05/02/6814a220b11b1.webp)

The most exciting thing was that Professor Jack Dongarra, Turing Award winner, founder of HPL, and initiator of the TOP500 HPC cluster, also came to the scene and took a photo with us. The last time I met a Turing machine winner was Professor Joseph Sifakis at the Sifakis Institute for Trusted Autonomy at SUSTech. Of course, I was closer to Professor Dongarra this time.

![Photo with Prof.Jack Dongarra!](/images/boltp/a2/2025/05/02/6814a14308c7f.webp)

Of course, we can't forget our old friends, the team from National Tsing Hua University in Taiwan. Their leader, Prof. Jerry Chou, also came to the scene. I have been listening to Prof. Chou's open courses online, including parallel programming and operating systems. This time I also met him in person.

![Prof. Jerry Chou](/images/boltp/a2/2025/05/02/6814a143a1940.webp)

The strength of the National Tsinghua Supercomputing Team in Taiwan is very strong. They have won the ASC championship. We met them in Sydney some time ago. It was a pleasure to communicate with them. They also gave us a treasure that is said to be often used by developers at TSMC and NVIDIA:GUAIGUAI(A snack whose name means obedient and submissive. It is said that if you put it on the server, the server will run well.)

![National Tsinghua U Team with us!](/images/boltp/a2/2025/05/02/6814a143a19d2.webp)
![Treasure from National Tsinghua U](/images/boltp/a2/2025/05/02/6814a14de5770.webp)