---
title: My MacBook can’t access the Internet via Campus Network!
date: 2024-08-16 13:25:35
updated: 2025-04-05 08:08:53
tags: Computer Network
categories: Technology
---

Today I am energetic and glad to finish my NLP Assignment, but when I tried to connect our campus wifi, something bad happened: no response after clicking CAS(Central Authentication Service). Then I tried to find out what happened and had a review of computer network knowledge. This passage will help thous who have troubles while connecting a WiFi with Captive Portal(usually used in public organization or some shop like Starbucks).

# What Will Happen When a MacBook Connected to a WiFi with Captive Portal

![image.png](/images/boltp/a1/2025/04/05/67f073d3245df.webp)

package got by wireshark

The first thing my mac do is to send request to 23.210.41.53(captive.apple.com)

```jsx
GET /hotspot-detect.html
```

Then because of the Captive Authentication setting of our campus router, it will intercept my request to [captive.apple.com](http://captive.apple.com) and send back a 302 response(redirect to another destination found) which included the IP address of our campus’ Web Authentication Server 172.16.16.20 (for sustechers’ service somehow didn’t open the Web Authentication Window automatically, you can visit the 172.16.16.20 to enter the page). Then our OS detect the unusual redirecting it will open the redirecting window which shown below:

![image 1.png](/images/boltp/a1/2025/04/05/67f073d0bee36.webp)

# Global / Local DNS Server

My problem is no response while clicking CAS button, i.e. while sending requests to cas.sustech.edu.cn

![image 2.png](/images/boltp/a1/2025/04/05/67f073d0beeae.webp)

Then the first step I do is to check if the DNS works right

![image 3.png](/images/boltp/a1/2025/04/05/67f073d06e500.webp)

The result shown that the DNS server successfully analysis the domain name but it’s a Non-authoritative answer, because it was given by a global DNS server (most used DNS server in china is 114.114.114.114, other countries may use 8.8.8.8 provided by Google), Then it must can’t reach 116.7.234.12, I verified it using ping.

```jsx
ping 116.7.234.12
```

![image 4.png](/images/boltp/a1/2025/04/05/67f073d0629b1.webp)

Then I guessed here must existed a local DNS server provided by our campus, so I called the ITS and figured that out, maybe my VPN all something somehow changed my DNS server, it was fixed as 114.114.114.114, but it should be set as automatically detect. 

![image 5.png](/images/boltp/a1/2025/04/05/67f073d080cbd.webp)
So I delete its fixed DNS and got the automatically detected DNS Server

![image 6.png](/images/boltp/a1/2025/04/05/67f073d0ae300.webp)

![image 7.png](/images/boltp/a1/2025/04/05/67f073d075e92.webp)

The local DNS Server gave the authoritative Address and the problem was solved.