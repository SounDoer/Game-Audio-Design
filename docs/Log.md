---
title: Log
---

……

希辰  
2025.1

***

原先 SounDoer 做的声音设计资讯分享已经停更许久，所有历史内容早已从网站上撤下，微信公众号也已彻底注销了。对我个人来说，这些内容的价值已经越来越少了；同时，作为一个有“洁癖”的内容创作者，我有点难以忍受这些我已经觉得不够好的东西还能被大家看到。  
但是，仍有朋友时不时地问起哪里还能看到这些内容，说其中有一些原创文章还是挺有价值的。既然如此，那我还是调整一下自己纠结的心态，让这些所谓的 Legacy 安静地留在这个小角落里，尚存一丝被发现的可能吧。  
共计 721 条篇目，以 html 的格式导出，内含所有文字、图片和来源链接。附上网盘下载链接：  
[Google Drive](https://drive.google.com/file/d/1ENbJGQXl7RATLkjtID-wZhOFrWzSD54E/view?usp=sharing)  

Xichen  
2020.11

***

网站停更至今已经快有三年了，确实是荒废了。停更之后拍起了 Vlog，挺好玩的，自己之前积累的摄影摄像后期制作什么的技能又都派上了用场，向着“成为大龄网红”的目标又前进了一点点。  
可能是虚妄的使命感作祟吧，这小网站还是放不下，总觉得自己要为国内的游戏音频行业献一份力。所以，2016年吹下的牛逼“憋一个大招”，要开始兑现了。  
《希辰的游戏音频设计文档》，写起来。

Xichen  
2020.2

***

因为个人经验与能力的不足和内心种种悬而未决的念头与顾虑，这份在两年前就起了念头的游戏音频设计文档一直被拖到了现在才正式开篇，可见这对我来说着实是一个不小的挑战。入行至今已快满五年，在积累了 Ubisoft Shanghai Studios 的项目经验和经历了 NExT Studios 从零开始参与全新项目的开发之后，我觉得终于等到了一个合适的时机来正式开始撰写这份文档，跟大家详细地聊一聊我对游戏音频设计的各种想法。

首先，容我来说一下写这份文档的四个初衷。  
第一点是主观的动机。从上大学开始，我就狂热地喜欢拍照，非常享受从按下快门、后期处理到最后呈现一张能给他人带来美感的作品的过程；工作之后，我做了一个专注声音设计的主题网站，在自我学习与沉淀的同时也给别人提供了便利的资讯渠道；两年前，我尝试拍起了 Vlog，想通过新的方式去更多地表达自己的想法。曾有朋友说我是“带有媒体属性的技术工作者”，这些我一直在做的事情，其实都是我强烈表达欲的体现。所以，这份文档就是一个新的表达出口。我希望能持续地输出有价值的内容，说得大一点，这可能就是我目前感悟到的人生终极意义：在这世上留下点东西，好让死后的自己“活”得更久一点。  
第二点是客观的促因。从我以“声音设计”这个标签在网上被大家熟知之后，一直有人来咨询各种有关游戏音频设计的大小问题，我都尽可能地做出了力所能及的回复。但是很多时候，这些问题往往是无法用简短的私信或邮件往来就能解答清楚的，甚至有些问题连我们自己这些一线从业者们都还没有想清楚。所以，我想通过这份文档来做一次疏理，比较系统地把我对游戏音频设计的认知阐述出来。  
第三点是自我的挑战。当下的互联网已经迅速步入了视频时代，个人表达的方式多种多样。综合比较下来，价值浓缩度最高的无疑还是文字。虽然文字这种形式与播客或者 Vlog 等媒介相比，确实没有那么大的吸引力，估计还会劝退不少人，但这或许并不是什么坏事——让真正想要深入了解游戏音频设计的朋友们的收益最大化，是这份文档最大的价值体现。如果只是为了博得更多的关注度，大家多去看看我的 Vlog 系列就可以了。  
第四点是长远的价值。针对国内的游戏开发行业，一直有一个老生常谈的话题，那就是为什么我们做不出 3A 大作。这个问题涉及到非常多的因素，其中肯定会被提到的一点就是所谓的“缺乏技术积累”。那又如何来做技术积累呢？就以游戏音频设计来说，我想通过梳理在实际项目中的思考、与前辈同行们的深入交流、系统性的总结沉淀的途径，来让那些原本只在工作室内部小范围分享的工作流程、开发方法和经验教训，能被行业内更多的人所了解、所讨论、所学习。整个行业的提升才是真正的“技术积累”，才有可能让我们尽早做出 3A 大作。

再来聊一聊我对这份文档的定义。  
首先，这是一份中文书写的文档，英语能力不足的朋友们请不用担心。虽然英语作为我的第一工作语言用来书写专业性文档可能更加合适，但正如上文提到的，我的首要目标受众是国内的朋友们，那就还是直接用中文吧。  
第二，这不是一份纯技术向的文档。为了说明和演示的目的，文档中一定会涉及到一些游戏开发与声音设计的专业工具，但这都不是为了介绍工具本身的使用。大家如果想要学习开发工具，烦请自行查阅官方文档，肯定比我说得要更加清楚明了。文档的主体将会是以我参与过的项目为例，展开多个板块来阐述我的工作流程和方法、经验总结与教训和一些值得更多思考的话题。我想象中的这份文档应该是：对想入行或是刚入行的新朋友们来说，这可能是一本由浅入深的小指南，让你了解一下游戏音频设计师是做什么和怎么做的；对已经在业内的同行朋友们来说，这可能是一本抛砖引玉的随笔集，希望你看过之后也能有所收获，激发出新的想法。如果真的引到了玉，期待你也能跟大家来聊一聊。  
第三，这是一份不断更新的在线文档。任何一本技术书，都会面临技术更新导致观点过时的情况，所以才会有经年不断的修订版。我觉得，游戏音频设计作为一门典型的艺术与技术相结合的学科，其中艺术方面的美学设计会随着大众审美的趋势和个人品味的提升而不断变化，而其中技术方面的实现逻辑则会随着开发工具和终端平台的更新而不断演进。所以，既然我已经有了个人网站，那就干脆做成一份在线文档，持续地与大家分享我在职业成长过程中的想法迭代和心路历程。  
最后，这是一份完全免费的文档。游戏音频设计在整个游戏开发行业中是一个相对小众的领域，从业人数决定了想要靠这个知识分享来发家致富是不太可能的，所以我就不打算折腾那些知识付费的事情了。当然，我也欢迎你的小额资助，请我喝一杯咖啡，或者帮我分摊一下网站服务器的费用。

最后，我要感谢身边各位优秀的前辈、同事和朋友们，是你们追求卓越的品质和耳濡目染的影响，让我不得不逼迫自己要赶上你们的步伐，抓紧时间去完成给自己定下的一个个目标。  
当然，还要特别感谢我的父母，你们完全的信任、充分的理解和无言的鼓励是我最坚实的后盾。以后我说要回家的时候，不要再用“家里没事你忙你的吧”的说辞来劝说我了，开车两小时的回家路途一点儿也不累，我就是想回来看看你们。

希辰  
2020.1.8

***

一直在思考做这个博客的意义是什么。  
对于自己：声音这个话题包含了太多的领域和方向，而我自己感兴趣的内容只是其中很小的一部分。看的多了，对内容质量的要求也越来越高，值得分享的内容就越来越少了。而且，真正在业内工作了之后也会发现，许多有价值的内容是不允许、不适合、也没必要公开展示和讨论的。  
对于受众：翻墙？英语？这些所谓的障碍其实根本就算不上什么问题。真正有意愿的人都可以通过各自的能力和方法找到自己想要的东西。因此，搬运资讯这个工作也就没什么实际的价值了，特别是许多容易博人眼球但几乎没有干货的内容——因为本来就没想着要做成什么大V公众号。  
那么，“学习、积累、沉淀、分享”的初衷就没意义了吗？当然不是。   我在想，到底什么样的内容才具有更长久深远的价值？嗯，还真有。  
所以，我要多花些时间去修炼自己的技能树了，然后准备憋一个大招。

Xichen  
2016.12

***

Hello everyone,  
It has been more than one year since I start SounDoer last year. I have read and watched many inspiring articles and videos, then translated and shared them in Chinese audio communities, which makes me getting a more comprehensive understanding of sound and audio. What’s more, I made acquaintance with many experienced experts who I have learned a lot from.  
The first two things I want to talk about, which are also the most important things I concern, are Thanks and Apologies. Thanks all the original authors for sharing their works, thoughts and experiences on Internet! Apologies for translating and reposting some contents without permission, especially videos. Because of The Great Firewall of China, YouTube, Vimeo and many other websites have been blocked. So I downloaded and reuploaded them to Chinese video platforms. For some reasons, I did not (having no time) or could not (having no reply) make contacts with all authors. In this case, I always make sure to add the original links and necessary informations into every posts. If you have any problem with your works which are posted on SounDoer, please contact me at anytime.  
In future, SounDoer will continually gather, learn and share more informations on sound design for films, games, multimedia, and anything interesting about sound. Personally, I will go deeper into two fields: one is sound effects design, in methods of recording, synthesis and other creative ways; another is interactive audio for multimedia, such as procedural audio and virtual reality audio. And one of my biggest goals, which is still the same as what I said last year, is organizing a China Sound Designer Conference one day.  
At last, thanks everyone and welcome to contact me. Really looking forward to your ideas!

Xichen  
2015.7

***

SounDoer 怎么来的？  
Do Sound（搞声音）的人就叫做 SounDoer 吧。我的初衷是把 SounDoer 作为自己在声音设计方面学习、积累、沉淀、分享的平台。  
SounDoer 关注什么？ 当然是声音设计（Sound Design）啦！声音设计是一个大概念，而 SounDoer（也是我个人今后想要深造的方向）主要关注的是影视（声音设计中相当成熟化的产业）、游戏（目前国内正在兴起，今后市场需求巨大）、交互媒体（比如虚拟现实、装置艺术等）等方面的声音设计内容。  
SounDoer 想做什么？ 除了编译和发布国内外声音设计相关资讯，SounDoer 之后会做一些其他方面的尝试：访谈，拜访国内外声音行业相关人士；线下聚会，地区性的分享交流讨论会；项目发起，一些周期不定范围不限的声音实验……  
希望若干年后，SounDoer 有能力组织一场 CSDC（China Sound Designer Conference）。

Xichen  
2014.7

***
