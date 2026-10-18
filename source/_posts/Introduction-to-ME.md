---
title: Introduction to ME
date: 2024-10-11 15:40:22
updated: 2025-03-17 19:03:47
tags: Microelectronics
categories: course
mathjax: true
---

- scale of itegration
	![Pasted_image_20240115224127.png](https://a1.boltp.com/2025/03/17/67d7f9a1b973f.png)
- Moore's Law
	the number of transistors in a dense IC doubles about every two years
- process size
	the size in nm is the gate length of the transistor
	- gate length measure transistor speed and density
	![Pasted_image_20240115225320.png](https://a1.boltp.com/2025/03/17/67d7f9cf65d7a.png)
- types of signals
	- continuous & discrete
		- continuous : defined for all time
		- discrete : defined on discrete time
	- analog & digital
		- analog: continuous in value, not necessary in time
		- digital: discrete in value, but can be continuous in time
		- A/D
			![Pasted_image_20240115233138.png](https://a1.boltp.com/2025/03/17/67d7f9f839bfc.png)
- signal processor
	- Filter
		![Pasted_image_20240115233324.png](https://a1.boltp.com/2025/03/17/67d7fa2ca352b.png)
	- Amplifier
		![Pasted_image_20240115233602.png](https://a1.boltp.com/2025/03/17/67d7fa4370302.png)
- Materials for microelectronics
	- Conductor:金属，硅化金属
	- Insulator: 非金属
	- Semiconductor: Si, Ge
- 对导电性的解释
	电子按照能级排布在不同的电子层
	- Valence band:电子分布所能达到的最高能级层
	- Conduction band: 空的电子层中的最低能级层
	- Band Gap: 从valence band 到 conduction band 所需的能量
	- Fermi level: 电子受能量激发会向更高能级跃迁，
		- At absolute zero,
		- the surface of electron sea where no electrons will have enough energy to rise above the surface
	band gap 决定了不同材料导电性的不同
		![Pasted_image_20240115234900.png](https://a1.boltp.com/2025/03/17/67d7fa5dbc18f.png)
- Compound Semiconductor
	3,5族或2，4族混合构成,典型的是GaN(有相对较大的band gap)
	- 两种混合称为binary,三种混合称为ternary
	- 与单独的Si相比，更快，更强，还能发光，检测光的效率也比Si强，但他不会代替Si, 只会辅助Si
- 半导体Si从哪儿来
	- 沙子主要成分是SiO2
	- 先用C烧
	- 再用HCl过一遍
	- 得到比较高纯度的Si，形态是圆柱体，我们称为ingot(高纯度单晶硅)
- Silicon的种类
	按照硅原子的排列划分
	- Amorphous: 非晶，只在少量原子/分子尺度有序
	- Crystalline: 单晶，整个一块硅晶体构成的材料
	- Polycrystalline: 多晶，在很多原子/分子尺度高度有序
	![Pasted_image_20240116000028.png](https://a1.boltp.com/2025/03/17/67d7fa84e760b.png)
- Doping
	- 我们会有意地掺杂一些杂物进材料，这个过程叫Doping, 这些杂物叫Dopants
	- Si 的最外层有4个电子，因此使用不同的dopants会带来不同的效果
		- N & P type dopants
			- N-type: 最外层5个电子，形成电子对后会多出一个能自由活动的电子
				- P, As (group V)
			- P-tyoe: 最外层3个电子，形成电子对后会多出一个能自由活动的空穴
				- B (group III)
- PN-junction(控制电流单向导通的器件，在应用中我们称为diode)
	 我们把doping得到的p-type semiconductor和n-type semiconductor拼接在一起会由于两者的性质而在交界处具有特殊性质
	 - 自然状态的PN-junction(zero-bias)
		 我们考虑会发生什么样的变化，这时候电子的移动受两个力影响（站在空穴视角同理）
		1. Diffusion: driven by concentration gradients
		2. Drift: driven by electric field
		接下来从接通到动态平衡会经历以下几步
		1. 受diffusion影响电子从N跑向P
		2. 形成电场阻碍diffusion
		3. 形成动态平衡，no net flux
		这时我们把中间电子移动动态平衡的这段区域叫Depletion Region（因为电子跑到最后能量会耗尽）
		把产生的电势叫做Built-in potential
		- 平衡方程：
		![Pasted_image_20240116002928.png](https://a1.boltp.com/2025/03/17/67d7faa4349be.png)
		- 能级对齐
			当两块材料正常情况连接在一起时，他们的fermi level应该是对齐的，但当PN-junction形成时
			- P型材料交接处的fermi-level下降了，由于concentration gradients使电子更愿意呆在原地，而N型材料的fermi level则相应地上升了，两个加起来形成的总差距就是由于concentration gradients造成的，出于动态平衡的知识也就等于电势能
				![Pasted_image_20240116004632.png](https://a1.boltp.com/2025/03/17/67d7fabac58c4.png)
	- 使用时控制电流导通的PN-junction
		- forward bias: 让电流能导通
			- 由能级图可知两个导带之间的距离导致电子不能正常的通过，如果我现在加一个电压来对抗甚至逆转由于fermi-level对齐产生的能量差，即P接正极，这样缩小了电场范围（Depletion Region）电子甚至可以导通产生电流（从P到N的电流）
		- reverse bias: 相反不能导通,但会有一点及其微弱的电流
			![Pasted_image_20240116010420.png](https://a1.boltp.com/2025/03/17/67d7fae144d1b.png)
		![Pasted_image_20240116010156.png](https://a1.boltp.com/2025/03/17/67d7face21796.png)
	- Application of PN-junction
		- LED(Light emitted diodes)
		- Rectifier
- BJT（Bipolar Junction Transistor应用中我们称为三极管）
	顾名思义，我们可以把两个PN组合起来形成一个BJT
	- 分类
		根据PN结的排布方式我们分为两种
		- npn & pnp
			![Pasted_image_20240116010851.png](https://a1.boltp.com/2025/03/17/67d7faf437f24.png)
			简要示意图的箭头代表PN结的方向（P指向N）
	- Mode of operations
		观察我们想要得到的电流输出电流Ic分类
		![Pasted_image_20240116011821.png](https://a1.boltp.com/2025/03/17/67d7fb072d329.png)
		- 两结都零偏或反偏（cutoff mode）
			电路中几乎没有任何电流
		- 发射结正偏，接受结反偏（active mode）
			- amplifier
		- 两结都正偏（saturation mode）
		![Pasted_image_20240116013115.png](https://a1.boltp.com/2025/03/17/67d7fb19ec4ae.png)
		![Pasted_image_20240116013256.png](https://a1.boltp.com/2025/03/17/67d7fb31b6f57.png)
- MOSFET(Metal-Oxide-Semiconductor Field-Effect Transistor)
	use voltage on gate（可以把gate看作一个capacitor） 来控制Source和Drain间(我们把两者之间称为channel, 本质上是控制resistance of channel)电流的导通
	- 根据FET的工作原理，我们把他分成几类
		- n-channel & p-channel
			- n-channel为NPN型，目的是利用gate把electons吸引到两个N之间使之导通
			- p-channel为PNP型，目的是利用gate把holes吸引到两个P之间使之导通
			![Pasted_image_20240116142940.png](https://a1.boltp.com/2025/03/17/67d7fb439d330.png)
			箭头指向为导通时电子移动方向
		- enhancement-mode & depletion-mode
			- enhancement-mode为chennel正常情况下关闭，通过加电压来使channel打开
			- depletion-mode为channel正常情况下打开，通过加电压来使channel关闭
	- 工作原理
		- MOS capacitor
		![Pasted_image_20240116143753.png](https://a1.boltp.com/2025/03/17/67d7fb536791b.png)
		改变metal的电压可以调制电阻，Oxide基本上阻断了电子直接被metal吸走，只会让电子远离channel取或者聚集在channel区域以实现channel的导通
		- 正常情况下PNjunction产生的built-in barrier阻断了沟道的导通
- Amplifier
	- amount of amplifier
		- ![Pasted_image_20240116145420.png](https://a1.boltp.com/2025/03/17/67d7fb6833113.png)
		- gain 常用decibels(dB)计量，我们把一个数以10为底的对数值称为他的bel值bel(B)，dB代表十分之一B. 由于对数以1为界取正负，故dB值如果为正，说明实现了gain，如果为负，则说明实现了loss
	- amplifier power supply
		- 毫无疑问amplifier的工作也需要能量,而且一部分能量也会以热能的形式耗散，我们把额外需要的能量称为DC sources supply，有能量耗散自然也就存在能量效率，因此我们定义
		- $$Amplifier\ efficiency=\frac{P_{out}}{P_{in}}$$
		![Pasted_image_20240116172256.png](https://a1.boltp.com/2025/03/17/67d7fb834a4c6.png)
	- ideal amplifier
		好的放大器是啥样的呢
		- have same gain over time or over space(input signal, frequency, temperature, etc)
		- not introduce noise
	- Operational Amplifier(Op Amp)
- signal operating and processing
	- signal generation
		- DC (direct current) to AC(alternating current)
	- signal waveforms
		- sine wave
		- impulse
		- step
		![Pasted_image_20240116174239.png](https://a1.boltp.com/2025/03/17/67d7fb93b93a4.png)
		![Pasted_image_20240116174258.png](https://a1.boltp.com/2025/03/17/67d7fbb1a35de.png)
	- Filter
	- A/D converter & D/A converter
		![Pasted_image_20240116174728.png](https://a1.boltp.com/2025/03/17/67d7fbc7195ba.png)
		- sampling
			![Pasted_image_20240116174938.png](https://a1.boltp.com/2025/03/17/67d7fbde2a481.png)
		- quantize
			以多少v为一个阶梯代表一个bit呢？
			n bit 能代表$2^n$ 个binary level
			![Pasted_image_20240116175258.png](https://a1.boltp.com/2025/03/17/67d7fbf501b99.png)
			![Pasted_image_20240116175333.png](https://a1.boltp.com/2025/03/17/67d7fc0cb03f7.png)
		![Pasted_image_20240116181043.png](https://a1.boltp.com/2025/03/17/67d7fc34ca415.png)
	- communication system
		![Pasted_image_20240116180256.png](https://a1.boltp.com/2025/03/17/67d7fc1f5c4ed.png)
	- basic signal operations
		- addition
		- subtraction
		- shift 
		- scaling
- Memory
	- categories of memory
		![Pasted_image_20240116181258.png](https://a1.boltp.com/2025/03/17/67d7fc48d8a5f.png)
		![Pasted_image_20240116181414.png](https://a1.boltp.com/2025/03/17/67d7fc5b10e8e.png)
	- RAM
		- SRAM
		- DRAM
		![Pasted_image_20240116182322.png](https://a1.boltp.com/2025/03/17/67d7fcaea7868.png)
	- ROM
	- summary
		![Pasted_image_20240116182241.png](https://a1.boltp.com/2025/03/17/67d7fc97a7fbd.png)
- [ ] mode of operations of BJT
- [ ] MOSFET
- [ ] op amp
- [ ] filter
- [ ] D/A converter