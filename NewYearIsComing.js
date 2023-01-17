var i;
var inputs = document.getElementsByClassName("input-div");
function change_style() {
    if (document.getElementById("switch").innerText == "亮") {
        document.getElementById("style").href = "./black.css";
        document.getElementById("switch").innerText = "暗";
    } else {
        document.getElementById("style").href = "./white.css";
        document.getElementById("switch").innerText = "亮";
    }
}
function generate() {
    let content = "快过年了，不要再讨论什么{0}了。你带你{1}回到家并不能给你带来任何实质性作用，朋友们兜里掏出一大把钱吃喝玩乐，你默默{2}。亲戚朋友吃饭问你收获了什么，你说{3}，亲戚们懵逼了，你还在心里默默嘲笑他们，笑他们{4}。你父母的同事都在说自己的子女一年的收获，儿子买了个房，女儿买了个车，姑娘升职加薪了，你的父母默默无言，说我的{5}。";
    for (i = 0; i < inputs.length; i++) {
        content = content.replace("{"+ i + "}", inputs[i].innerHTML);
    }
    document.getElementById("content").innerText = content;
    // document.getElementById("content").select();
}
document.getElementById("change_style").addEventListener("click", change_style);
document.getElementById("generate_btn").addEventListener("click", generate);
// document.getElementById("content").addEventListener("focus", document.getElementById("content").select);

// 示例来自网络，侵删
var example_data = {
    "--空--": ["", "", "", "", "", ""],
    "前端1": ["HTML、JS、CSS", "做的精美网页", "地打开VS Code写代码", "我学会了制作网页", "不会制作网页，不会用Dw", "儿子天天迷着个浏览器，房间乱七八糟，书也不翻几下"], // https://wrj2009.github.io/repo/kgnl/
    "前端2": ["webpack、vue源码、微前端之类的", "的破电脑", "的在家里摆弄你的破烂框架", "我做了个框架，把vue、react、angular优点都结合了一遍", "不懂你的轮子、不懂你的算法、不懂你的封装，也笑他们连个复杂点的密码都记不住", "儿子搞了个破电脑，开起来嗡嗡响，家里电表走得越来越快了"], // https://juejin.cn/pin/7187231641008341051
    "后端": ["Go、Python、Java之类的", "的破电脑", "的在家里摆弄你的破烂框架", "我做了个框架，把Spring、Django、Gin优点都结合了一遍", "不懂你的轮子、不懂你的算法、不懂你的封装，也笑他们连个复杂点的密码都记不住", "儿子搞了个破电脑，开起来嗡嗡响、家里电表走得越来越快了,你的父母还在想你什么时候能买套房子,什么时候能成个家。你却一天到晚想的是怎么封装一个牛逼的组件。你一天到晚看那个破文档，封装什么消息中间件，什么高速缓存、ORM框架，GitHub早就一堆。但是即使这样,你还是乐此不疲的写着自己的另一套。因为你会觉得这是你自己写的不一样，实际上毛用都没有。时间轮回，一年又一年，你还在想着新技术出来了，继续学习什么Serverless，什么容器化，什么边缘计算。而你身边的人在考虑啥时候买第二套房子，什么时候生二胎，你还在捣鼓你的破代码"], // https://juejin.cn/pin/7183958034828738619
    "潮梗": ["潮梗", "的潮梗", "躺在家里床上玩你的破梗", "😤🧐🍑🌪️⚡⚡🔪", "不懂你的梗，不懂你的网络上的潮流，也笑他们手机里的上网软件的内容都是老土的东西", "儿子成天上网冲浪，电脑开着声音越来越大，电表越转越快了"], // https://tieba.baidu.com/p/7647130454
    "薅羊毛": ["薅羊毛白嫖什么的", "的薅羊毛小东西", "的在家里喝着辛苦抢到的蒙牛牛奶", "我搞了七箱牛奶、饿了么小蓝盒、奇多水笔", "不懂你的蒙牛牛奶是开挂抓cookie抢的", "手机抓包cookie，可以自动薅羊毛、免费代挂，可以薅积分"], // https://www.51kanong.com/xyk-6810379-1.htm
    "Apex": ["Apex、碎片东部、一大山之类的", "的双锤骷髅海", "的在家里碎片东部白给", "嘎嘎乱杀kd3.0", "不懂你双锤骷髅海的含金量,不懂你练了多少枪，不懂你的身法，也笑他们连个蹬墙跳也不会", "单排上砖，一大山一套一套的，每天对着电脑屏幕上的徽章傻笑，人也越来越魔怔了，每天嘴里就几句：nm对面碎两个甲，队友呢队友呢扶一下啊"], // https://tieba.baidu.com/p/7711781471
    "电子商务": ["搜索、点击率、转化率之类的", "的破电脑", "的在家里摆弄你的破烂ali", "今年做了个爆款，参加了新贸节，采购节、年货节，做到了类目前十", "不懂你的轮子、不懂你的技术、不懂你的牛逼，也笑他们连个生意参谋都不知道怎么用", "儿子搞了个破电脑，开起来嗡嗡响、家里电表走得越来越快了,你的父母还在想你什么时候能买套房子,什么时候能成个家.你却一天到晚想的是怎么点击率超过竞店，怎么弯道超车。你一天到晚看那个破生意参谋，研究什么直通车。但是即使这样,你还是乐此不疲的写着自己的运营方案。其实网上一找一大堆，但是你会觉得这是你自己写的不一样，实际上毛用都没有。时间轮回，一年又一年，你还在想着明年怎么打造新的爆款出来了，继续学习什么电商新技术"], // https://zhuanlan.zhihu.com/p/451229492
    "肯德基疯狂星期四": ["肯德基、疯狂星期四、九块九之类的", "的吮指原味鸡", "的在家里一个人吃完20块黄金鸡块和8只葡式蛋挞", "我体验了腹胀、反酸、呕吐和孤独，跟每周四发疯狂星期四文案的网友面基，发现他只是口嗨从来没点过", "不上网，不懂玩梗，看不懂你的疯狂星期四文学创作功底，笑他们连肯德基新出的文和友香辣小龙虾嫩牛五方都不知道", "儿子又在朋友圈发了一条“今天是肯德基疯狂星期四，谁请我吃”，虽然依旧没有人请他吃。问他你会坚持发到什么时候，发到哪一天这个活动结束为止吗？他回答说就算将来肯德基倒闭了，他也不会忘记，自己曾经为一个星期四如此疯狂过"], // https://weibo.com/3782198531/MlXxbdppg
    "显卡": ["时序、体质、bdie", "的内存条", "的在家里摆弄你的内存条", "我把bdie在56x上干到4800C18了", "不懂你的超频设置，也笑他们还在用威刚万紫千红", "儿子又玩了一套分体水itx, 只换的内存就有十几条，其他什么也看不到"], // https://tieba.baidu.com/p/7642991292
    "投资": ["板块龙头、预期展望、技术买点之类的", "的破理论", "的在家里研究你的技术指标", "我今年抄到了CXO概念(BK2576)，70块上车九安医疗(SZ002432)，重仓抄底长春高新(SZ000661)、买的股票上了龙虎榜，卖飞的新冠药龙头涨上了天拍断腿", "不懂你的计算器、不懂你的技术、不懂你的牛逼，也笑他们连个K线图都不知道怎么看", "儿子进了个烂市场，每天都在割肉的路上、家里的钱越亏越多了,你的父母还在想你什么时候能买套房子,什么时候能成个家.你却一天到晚想的是怎么打板，怎么做个T。你一天到晚看那个蜡烛图，研究什么龙头战法。但是即使这样,你还是乐此不疲的写着自己的操作复盘，虽然显示器的颜色已经绿到不能再绿，但你依旧认为其他的人都特别肤浅，看不懂你的价值投机。时间轮回，一年又一年，你还在想着明年怎么追新的热点，继续学习什么短线操作，而你身边的人在考虑啥时候买第二套房子，什么时候生二胎，你还在捣鼓你的破股票。"], // https://xueqiu.com/5870745426/209789892
    "编程": ["SpringBoot、Feign源码、微服务之类的", "的破电脑", "的在家里摆弄你的破烂框架", "我做了个框架，把nacos、eureka、zookeeper、consul优点都结合了一遍", "不懂你的轮子、不懂你的算法、不懂你的封装，也笑他们连个复杂点的密码都记不住", "儿子搞了个破电脑,开起来嗡嗡响、家里电表走得越来越快了,你的父母还在想你什么时候能买套房子,什么时候能成个家.你却一天到晚想的是怎么封装一个牛逼的组件.或者是一个自己的低代码平台，即便网上一大堆开源的.但是即使这样,你依然坚信这是你做的,牛逼. 这是属于你自己的组件, 然而并没有什么暖用.你的领导一直在鞭策你,告诉你好好学习代码才不能落后. 让你多加班,你也很认同,你的信仰就是写好代码,钻研最牛逼的技术.时间轮回,一年又一年, 你还在想着新技术出来了,继续学习什么 laaS, 什么PaaS，什么SaaS.而你身边的人在考虑啥时候买第二套房子,什么时候生二胎, 你还在捣鼓你的破代码。"], // https://zhuanlan.zhihu.com/p/448936973
    "计算机图形学": ["C++，图形学，模板元之类的", "的C++语言的设计与演化", "的在家里瞪着两眼看GAMES、may佬和侯捷的视频", "我读完了RTR4和PBRT，系统的研究了基于物理的渲染和非真实感渲染，还用C++20重构了自己的渲染器", "不懂C++和计算机图形学，不懂光照方程，不懂RAII和CRTP，也笑他们连Shader是什么都不知道", "儿子买了一整套的Effective C++，上Stack Overflow痛骂了C++标准委员会，写了一堆狗屁不通报错几百几千行的模板元编程代码，还对着谷歌翻译啃Ray Tracing the Rest of Your Life，人也越来越魔怔了。"], // https://www.zhihu.com/pin/1470513891310993408
    "刷机": ["ADB、Fastboot、9008", "的Pixel", "的在家里摆弄你的破手机", "我给自己的手机编译了一个 lineage OS", "不懂你的 Android 14，不懂你的 GSI，也笑他们用的满是广告跟捆绑应用的国产系统", "儿子老是联系不上，都不知道在干什么，天天说是在救砖"], // https://www.coolapk.com/feed/42341258
    "软路由": ["网关、软路由、虚拟化、nas", "All in one", "的在家里摆弄你的破机柜", "你给自己的AIO搞了底层 ESXI虚拟化然后装了Openwrt跟Truenas还配了个windows", "不懂你的硬件直通，不懂你的电源管理，也笑他们用的电子垃圾的TP和开宽带送的的腾达", "儿子在家里搞了个黑盒子，都不知道干什么，开起来风扇吵死人，电表也转得飞起"], // https://www.coolapk.com/feed/42341190
    "AI": ["chatGPT，openAI，novelAI", "的openAI账号", "的在家里对着openAI的土豆服务器发呆", "我和chatGPT聊天，拿novelAI画画", "不懂AI，不懂画图，不懂你的openAI账号，笑他们连chatGPT都不知道", "儿子搞了个破画图服务器，开起来嗡嗡响，家里电表走得越来越快了"], // https://www.coolapk.com/feed/42135224
    "流量卡1": ["神卡", "的超千兆网速", "的在家里摆弄你的那几张流量卡", "我撸了好多张双不限5G手机卡", "不懂你的5G SA，不懂你的1ms延迟，也笑他们不明白 卡多撸话费就多的道理！更嘲笑他们手机网速不如你", "儿子自从撸了更多的流量卡，苦心钻研认真研究，水平也升级了。从刷流量改成撸话费啦，还真没少撸，把运营商都要撸垮了"], // https://www.txrjy.com/thread-1266253-1-1.html
    "流量卡2": ["套餐什么双不限，什么低资费", "的低资费双不限的套餐", "的在家里摆弄你的月租 0元的双不限", "我免费撸了个移动极速双不限", "不懂你的双不限，不懂你的低资费套餐，也笑他们每个月交50~几百的话费", "儿子吊活都没有干，吊钱都没有赚，成天在家蹲着撸了几张移动双不限，低资费0月租，运营商都要撸垮了。一天到晚聊着那张破手机卡，家里没人会在乎你的流量卡多牛逼，你只能跟不认识的陌生人吹吹牛，自己一个月工资2500，不想着好好挣钱，天天在撸卡，今天撸低资费的套餐，明天杠几G的流量包，后天有研究这个免流那个免流，然后又在群里发发流量装逼图，每天都是这样重复，班不上班，过年回到家，家里问你今年赚到了多少钱，你硬气的掏出了两个红米手机，里面装了四张手机卡，说：爸妈，你们看我这个月用了10t流量，看我牛逼吗"], // https://www.txrjy.com/archiver/tid-1266253.html
    "政治": ["后现代、精神分析、齐泽克之类的", "的拉康选集", "的在家里捏着手机看未明子视频", "我解构了现代性,还去中心化了", "不懂你的安那其,不懂你的后现代主义，不懂你的激进性，也笑他们连解构是什么意思都不知道", "买了一整套当代法国思想家译从，上豆瓣瞎骂了苏联的马克思主义，写了几篇狗屁不通的怪话文，还在网上炫耀自己不知道多少手的后结构主义哲学，人也越来越魔怔了"], // https://www.zhihu.com/question/506799934/answer/2290792445
    "***": ["牛子，药娘，击剑之类的", "的假牛子", "的在家里抽插你的屁眼子", "我体验了前高，和小药娘面基捅了屁眼子", "不懂绳艺，不懂扩张，不懂你的补佳乐和色谱龙，笑他们连BDSM都不知道", "儿子搞了个破炮机,开起来嗡嗡响，家里电表走得越来越快了,屁眼子也越来越大了"] // https://tieba.baidu.com/p/7647130454
}
var example_select = document.getElementById("example_select");
i = 0;
for (var keyword in example_data) {
    var option = document.createElement("option");
    option.setAttribute("value", keyword);
    option.innerText = keyword;
    example_select.add(option, i++);
}
function show_example() {
    let keyword = example_select.options[example_select.selectedIndex].value;
    for (i = 0; i < 6; i++) {
        inputs[i].innerText = example_data[keyword][i];
    }
}
example_select.addEventListener("change", show_example);
if ((new Date()).getHours() > 16) {
    change_style();
}
