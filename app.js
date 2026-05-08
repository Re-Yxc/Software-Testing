// 面试题数据结构
const interviewData = [
    {
        category: "一、简介",
        items: [
            { title: "1-1-文档说明", file: "docs/1-1-文档目的.md" },
        ]
    },
    {
        category: "二、职业规划",
        items: [
            { title: "2-1-简单的自我介绍下", file: "docs/2-1-简单的自我介绍下.md" },
            { title: "2-2-为什么离职", file: "docs/2-2-为什么离职.md" },
            { title: "2-3-加班的看法", file: "docs/2-3-加班的看法.md" },
            { title: "2-4-你还有什么问题要问", file: "docs/2-4-你还有什么问题要问-.md" },
            { title: "2-5-你的职业发展规划和职业目标", file: "docs/2-5-你的职业发展规划和职业目标.md" },
            { title: "2-6-你最近测试的论坛和网站是什么", file: "docs/2-6-你最近测试的论坛和网站是什么-.md" },
            { title: "2-7-对于一个新的工具你有什么看法", file: "docs/2-7-对于一个新的工具你有什么看法.md" },
            { title: "2-8-你做了3年测试收获，你的测试心得", file: "docs/2-8-你做了3年测试收获，你的测试心得.md" },
            { title: "2-9-怎么转行的，毕业之后一直从事软件测试吗", file: "docs/2-9-怎么转行的，毕业之后一直从事软件测试吗.md" },
            { title: "2-10-以前在哪里上班，公司地址，测试多少人，开发多少人", file: "docs/2-10-以前在哪里上班，公司地址，测试多少人，开发多少人.md" },
            { title: "2-11-你的期望薪资是多少", file: "docs/2-11-你的期望薪资是多少-.md" },
            { title: "2-12-多久能入职", file: "docs/2-12-多久能入职-.md" },
            { title: "2-13-是怎么考虑做软件测试呢", file: "docs/2-13-是怎么考虑做软件测试呢-.md" },
            { title: "2-14-是否有考虑往开发方面测试", file: "docs/2-14-是否有考虑往开发方面测试-.md" },
            { title: "2-15-计算机专业课程有哪些", file: "docs/2-15-计算机专业课程有哪些-.md" },
            { title: "2-16-说一下上一个公司背景", file: "docs/2-16-说一下上一个公司背景-.md" },
            { title: "2-17-超过26岁女孩子，目前有没有打算结婚", file: "docs/2-17-超过26岁女孩子，目前有没有打算结婚.md" }
        ]
    },
    {
        category: "三、测试理论",
        items: [
            { title: "3-1-你们原来项目的测试流程是怎么样的", file: "docs/3-1-你们原来项目的测试流程是怎么样的-.md" },
            { title: "3-2-如果需求不明确的话你怎么办", file: "docs/3-2-如果需求不明确的话你怎么办-.md" },
            { title: "3-3-有哪些需要评审，哪些人在", file: "docs/3-3-有哪些需要评审，哪些人在.md" },
            { title: "3-4-有没有写过测试计划，具体包括哪些内容", file: "docs/3-4-有没有写过测试计划，具体包括哪些内容-.md" },
            { title: "3-5-用例包含哪些部分，哪些用例设计方法，你一般常用哪些方法", file: "docs/3-5-用例包含哪些部分，哪些用例设计方法，你一般常用哪些方法-.md" },
            { title: "3-6-TestLink工具使用", file: "docs/3-6-TestLink工具使用-.md" },
            { title: "3-7-如何提交一个好的BUG", file: "docs/3-7-如何提交一个好的BUG.md" },
            { title: "3-8-提bug需要注意哪些问题", file: "docs/3-8-提bug需要注意哪些问题-.md" },
            { title: "3-9-bug怎么管理的，bug的生命周期或者是bug的状态", file: "docs/3-9--bug怎么管理的，bug的生命周期或者是bug的状态.md" },
            { title: "3-10-提交bug包含哪些内容", file: "docs/3-10-提交bug包含哪些内容.md" },
            { title: "3-11-你提交的bug，开发不认可怎么办", file: "docs/3-11-你提交的bug，开发不认可怎么办-.md" },
            { title: "3-12-对应无法重现bug，应该怎么处理", file: "docs/3-12-对应无法重现bug，应该怎么处理-.md" },
            { title: "3-13-界面中的乱码可以是哪里导致的", file: "docs/3-13-界面中的乱码可以是哪里导致的-.md" },
            { title: "3-14-bug的级别有哪些，级别如何判断", file: "docs/3-14-bug的级别有哪些，级别如何判断.md" },
            { title: "3-15-测试中，如何判断是前端的bug还是后端的bug呢", file: "docs/3-15-测试中，如何判断是前端的bug还是后端的bug呢-.md" },
            { title: "3-16-项目上线后发现bug，测试人员应该怎么办", file: "docs/3-16-项目上线后发现bug，测试人员应该怎么办.md" },
            { title: "3-17-如何保证质量", file: "docs/3-17-如何保证质量.md" },
            { title: "3-18-产品是怎么上线的", file: "docs/3-18-产品是怎么上线的-.md" },
            { title: "3-19-你测试数据是从哪里获得-怎么获得的，假如不告诉你，你怎么处理", file: "docs/3-19-你测试数据是从哪里获得-怎么获得的，假如不告诉你，你怎么处理-.md" },
            { title: "3-20-如何测试万分之一概率问题", file: "docs/3-20-如何测试万分之一概率问题.md" },
            { title: "3-21-为什么要写测试用例", file: "docs/3-21-为什么要写测试用例-.md" },
            { title: "3-22-那你们测试用例是怎么编写的", file: "docs/3-22-那你们测试用例是怎么编写的.md" },
            { title: "3-23-有没有写过测试报告，具体包括哪些内容", file: "docs/3-23-有没有写过测试报告，具体包括哪些内容-.md" },
            { title: "3-24-测试报告中测试的结论是什么", file: "docs/3-24-测试报告中测试的结论是什么-.md" },
            { title: "3-25-如何写好一个测试用例", file: "docs/3-25-如何写好一个测试用例.md" },
            { title: "3-26-什么是冒烟测试-在什么时候进行冒烟测试", file: "docs/3-26-什么是冒烟测试--在什么时候进行冒烟测试-.md" },
            { title: "3-27-回归测试策略", file: "docs/3-27-回归测试策略.md" },
            { title: "3-28-和开发沟通。是怎么沟通的", file: "docs/3-28-和开发沟通。是怎么沟通的.md" },
            { title: "3-29-测试中有哪些风险", file: "docs/3-29-测试中有哪些风险.md" },
            { title: "3-30-怎么保证测试质量或者你怎么保证你100-覆盖了需求", file: "docs/3-30-怎么保证测试质量或者你怎么保证你100-覆盖了需求.md" },
            { title: "3-31-一个需求，7天要上线，你怎么做？", file: "docs/3-31-一个需求，7天要上线，你怎么做？.md" },
            { title: "3-32-产品上线评判的标准", file: "docs/3-32-产品上线评判的标准-.md" },
            { title: "3-33-测试过程中，发现很多用例重复的，有的人认为没必要再测，你怎么看", file: "docs/3-33-测试过程中，发现很多用例重复的，有的人认为没必要再测，你怎么看-.md" },
            { title: "3-34上线后有没有另外的测试用例在生产环境里测试", file: "docs/3-34上线后有没有另外的测试用例在生产环境里测试.md" },
            { title: "3-35-什么是多分支开发和单分支开发", file: "docs/3-35-什么是多分支开发和单分支开发-.md" },
            { title: "3-36-兼容性测试你们是怎么测的-app与web", file: "docs/3-36-兼容性测试你们是怎么测的--app与web.md" },
            { title: "3-37-功能测试重复测试比较高，怎么看待这个问题", file: "docs/3-37-功能测试重复测试比较高，怎么看待这个问题-.md" },
            { title: "3-38-项目同时发布，你怎么处理", file: "docs/3-38-项目同时发布，你怎么处理-.md" },
            { title: "3-39-你们开发转测试怎么转的", file: "docs/3-39-你们开发转测试怎么转的.md" },
            { title: "3-40-你们的开发语言是什么？", file: "docs/3-40-你们的开发语言是什么？.md" }
        ]
    },
    {
        category: "四、项目",
        items: [
            { title: "4-1-简单介绍下最近做过的项目", file: "docs/4-1-简单介绍下最近做过的项目.md" },
            { title: "4-2-拿一个你所负责的模块，讲下具体怎么测的", file: "docs/4-2-拿一个你所负责的模块，讲下具体怎么测的-.md" },
            { title: "4-3-你在这个项目里面主要做了些什么工作？", file: "docs/4-3-你在这个项目里面主要做了些什么工作？.md" },
            { title: "4-4-你们项目组有多少人、开发多少个、测试多少个", file: "docs/4-4-你们项目组有多少人、开发多少个、测试多少个-.md" },
            { title: "4-5-测试人员怎么分工的", file: "docs/4-5-测试人员怎么分工的-.md" },
            { title: "4-6-项目的送代周期-多久一选代-一个版本你们发现多少bug", file: "docs/4-6-项目的送代周期--多久一选代--一个版本你们发现多少bug.md" },
            { title: "4-7-你们整个项目写了多少用例，你负责的模块大概写了多少用例", file: "docs/4-7-你们整个项目写了多少用例，你负责的模块大概写了多少用例-.md" },
            { title: "4-8-最近的版本写了多少用例", file: "docs/4-8-最近的版本写了多少用例-.md" },
            { title: "4-9-你的需求分析一般几天，用例大概写了多长时间-执行了多长时间", file: "docs/4-9-你的需求分析一般几天，用例大概写了多长时间-执行了多长时间-.md" },
            { title: "4-10-在uat测试的时候，突然客户临时要大量的数据", file: "docs/4-10-在uat测试的时候，突然客户临时要大量的数据.md" },
            { title: "4-11-发现哪些映像比较深刻bug-经典bug", file: "docs/4-11-发现哪些映像比较深刻bug-经典bug-.md" },
            { title: "4-12-每个阶段测试开发在干嘛（比如你写用例的时候开发在干嘛？）", file: "docs/4-12-每个阶段测试开发在干嘛（比如你写用例的时候开发在干嘛？）.md" },
            { title: "4-13-你们公司是否敏捷开发", file: "docs/4-13-你们公司是否敏捷开发.md" },
            { title: "4-14-你这个项目做了多久-你这个项目现在的用户里有多少-活跃量多少", file: "docs/4-14-你这个项目做了多久--你这个项目现在的用户里有多少--活跃量多少-.md" }
        ]
    },
    {
        category: "五、测试思维",
        items: [
            { title: "5-1-打电话功能怎么去测？", file: "docs/5-1-打电话功能怎么去测？.md" },
            { title: "5-2-给你一个杯子怎么测？", file: "docs/5-2-给你一个杯子怎么测？.md" },
            { title: "5-3-图像上传功能的测试点", file: "docs/5-3-图像上传功能的测试点.md" },
            { title: "5-4-搜索框的测试", file: "docs/5-4-搜索框的测试.md" },
            { title: "5-5-给你一个电梯，你怎么测", file: "docs/5-5-给你一个电梯，你怎么测.md" },
            { title: "5-6-更换头像的测试点（站在app的角度来分析）", file: "docs/5-6-更换头像的测试点（站在app的角度来分析）.md" },
            { title: "5-7-qq登陆界面怎么测试，分析", file: "docs/5-7--qq登陆界面怎么测试，分析.md" },
            { title: "5-8-微信点赞", file: "docs/5-8-微信点赞.md" },
            { title: "5-9-微信发红包测试点", file: "docs/5-9-微信发红包测试点.md" },
            { title: "5-10-微信聊天功能测试用例", file: "docs/5-10-微信聊天功能测试用例.md" },
            { title: "5-11-给你一个界面怎么测", file: "docs/5-11-给你一个界面怎么测.md" },
            { title: "5-12-你说原来充值功能，你是怎么测试的", file: "docs/5-12-你说原来充值功能，你是怎么测试的-.md" },
            { title: "5-13-电商的库存逻辑怎么测。", file: "docs/5-13-电商的库存逻辑怎么测。.md" }
        ]
    },
    {
        category: "六、Linux",
        items: [
            { title: "6-1-Linux系统你是怎么用的", file: "docs/6-1-Linux系统你是怎么用的-.md" },
            { title: "6-2-Linux是什么工具连接的，-Linux版本是多少", file: "docs/6-2-Linux是什么工具连接的，-Linux版本是多少.md" },
            { title: "6-3-日志具体是怎么看的", file: "docs/6-3-日志具体是怎么看的.md" },
            { title: "6-4-监控资源命令用到哪些", file: "docs/6-4-监控资源命令用到哪些.md" },
            { title: "6-5-nmon工具是如何使用的", file: "docs/6-5-nmon工具是如何使用的.md" },
            { title: "6-6-测试环境是如何搭建的(弱项)", file: "docs/6-6-测试环境是如何搭建的(弱项).md" },
            { title: "6-7-linux常见命令有哪些，说出10条左右", file: "docs/6-7-linux常见命令有哪些，说出10条左右.md" },
            { title: "6-8-如何查看端口是否被占用", file: "docs/6-8-如何查看端口是否被占用.md" },
            { title: "6-9-data目录下找到所有txt的文件的命令", file: "docs/6-9-data目录下找到所有txt的文件的命令.md" },
            { title: "6-10-怎么把lnux服务器的文件拷贝到另外一台-linux服务器", file: "docs/6-10-怎么把lnux服务器的文件拷贝到另外一台-linux服务器.md" }
        ]
    },
    {
        category: "七、数据库",
        items: [
            { title: "7-1-你们数据库怎么用", file: "docs/7-1-你们数据库怎么用.md" },
            { title: "7-2-存储过程是怎么编写的", file: "docs/7-2-存储过程是怎么编写的.md" },
            { title: "7-3-常见的关系型数据库有哪些", file: "docs/7-3-常见的关系型数据库有哪些.md" },
            { title: "7-4-你们用的什么数据库连接工具", file: "docs/7-4-你们用的什么数据库连接工具.md" },
            { title: "7-5-左连接与右连接有什么区别", file: "docs/7-5-左连接与右连接有什么区别.md" },
            { title: "7-6-索引有哪些，如何建立索引，素引的优缺点", file: "docs/7-6-索引有哪些，如何建立索引，素引的优缺点.md" },
            { title: "7-7-having是干嘛的", file: "docs/7-7--having是干嘛的-.md" },
            { title: "7-8-where与-having的区别", file: "docs/7-8--where与-having的区别-.md" },
            { title: "7-9-查询数据库的前100行数据，你sq怎么写", file: "docs/7-9-查询数据库的前100行数据，你sq怎么写.md" },
            { title: "7-10-如何进行多表查询", file: "docs/7-10-如何进行多表查询.md" },
            { title: "7-11-in与-exist的区别", file: "docs/7-11-in与-exist的区别.md" },
            { title: "7-12-数据库测试有没有发现什么问题", file: "docs/7-12-数据库测试有没有发现什么问题.md" }
        ]
    },
    {
        category: "八、抓包与网络协议",
        items: [
            { title: "8-1-抓包工具怎么用", file: "docs/8-1-抓包工具怎么用.md" },
            { title: "8-2-如何抓取https的包", file: "docs/8-2--如何抓取https的包.md" },
            { title: "8-3-如何抓取手机的包", file: "docs/8-3-如何抓取手机的包.md" },
            { title: "8-4-网络协议了解多少", file: "docs/8-4-网络协议了解多少-.md" },
            { title: "8-5-请求方式有哪些", file: "docs/8-5-请求方式有哪些-.md" },
            { title: "8-6-get跟post请求的区别", file: "docs/8-6--get跟post请求的区别.md" },
            { title: "8-7-http跟https的区别", file: "docs/8-7--http跟https的区别.md" },
            { title: "8-8-为什么要使用cookie和session：http是无状态协议", file: "docs/8-8--为什么要使用cookie和session：http是无状态协议.md" },
            { title: "8-9-cookie跟-session的区别", file: "docs/8-9--cookie跟-session的区别.md" },
            { title: "8-10-OSI七层网络模型", file: "docs/8-10--OSI七层网络模型.md" },
            { title: "8-11-TCP模型", file: "docs/8-11--TCP模型.md" },
            { title: "8-12-TCP和UDP的区别", file: "docs/8-12--TCP和UDP的区别-.md" },
            { title: "8-13-tcp的三次握手是怎么实现的", file: "docs/8-13-tcp的三次握手是怎么实现的-.md" },
            { title: "8-14-http协议包含哪些内容", file: "docs/8-14-http协议包含哪些内容.md" },
            { title: "8-15-http状态码有哪些", file: "docs/8-15-http状态码有哪些.md" },
            { title: "8-16-post申请方式，用get会报什么错误。", file: "docs/8-16-post申请方式，用get会报什么错误。.md" },
            { title: "8-17-http协议提交请求头内容", file: "docs/8-17-http协议提交请求头内容.md" }
        ]
    },
    {
        category: "九、接口测试",
        items: [
            { title: "9-1-接口测试怎么测", file: "docs/9-1-接口测试怎么测.md" },
            { title: "9-2-两个接口有关联，-jmeter具体怎么做", file: "docs/9-2--两个接口有关联，-jmeter具体怎么做.md" },
            { title: "9-3-接口测试主要目的是什么", file: "docs/9-3-接口测试主要目的是什么-.md" },
            { title: "9-4-接口测试的流程", file: "docs/9-4--接口测试的流程.md" },
            { title: "9-5-接口测试和平常的Ul测试有什么区别", file: "docs/9-5--接口测试和平常的Ul测试有什么区别-.md" },
            { title: "9-6-给你一个新的接口，你怎么去设计用例", file: "docs/9-6--给你一个新的接口，你怎么去设计用例-.md" },
            { title: "9-7-接口文档主要包含哪些内容", file: "docs/9-7--接口文档主要包含哪些内容-.md" },
            { title: "9-8-你们什么时候测试接口", file: "docs/9-8--你们什么时候测试接口.md" },
            { title: "9-9-你怎么去检查，分析", file: "docs/9-9--你怎么去检查，分析.md" },
            { title: "9-10-什么是api接口测试", file: "docs/9-10--什么是api接口测试.md" },
            { title: "9-11-什么情况下开展接口测试", file: "docs/9-11--什么情况下开展接口测试-.md" },
            { title: "9-12-依赖于第三方的接口如何测试", file: "docs/9-12--依赖于第三方的接口如何测试.md" },
            { title: "9-13-你们接口怎么鉴权的", file: "docs/9-13--你们接口怎么鉴权的-.md" },
            { title: "9-14-接口传输格式有哪些", file: "docs/9-14--接口传输格式有哪些.md" },
            { title: "9-15-cookie、session、token的区别", file: "docs/9-15--cookie、session、token的区别.md" },
            { title: "9-16-接口测试的工具有哪些", file: "docs/9-16--接口测试的工具有哪些-.md" },
            { title: "9-17-jmeter环境搭建", file: "docs/9-17-jmeter环境搭建.md" },
            { title: "9-18-接口工具-jmeter用到哪些组件，具体作用", file: "docs/9-18-接口工具-jmeter用到哪些组件，具体作用.md" },
            { title: "9-19-jmeter原理是什么", file: "docs/9-19-jmeter原理是什么.md" },
            { title: "9-20-上传文件的接口用-JMeter怎么做", file: "docs/9-20-上传文件的接口用-JMeter怎么做.md" },
            { title: "9-21-对于POST请求，要求传递Json格式数据，-JMeter怎么做", file: "docs/9-21--对于POST请求，要求传递Json格式数据，-JMeter怎么做.md" },
            { title: "9-22-对于需要加密的请求参数，-JMeter如何处理", file: "docs/9-22--对于需要加密的请求参数，-JMeter如何处理-.md" },
            { title: "9-23-如果接口返回的数据做了加密处理的，如何进行断言", file: "docs/9-23--如果接口返回的数据做了加密处理的，如何进行断言-.md" },
            { title: "9-24-下一个接口用到上一个接口的数据，但返回的数据加密了，如何提取", file: "docs/9-24-下一个接口用到上一个接口的数据，但返回的数据加密了，如何提取-.md" },
            { title: "9-25-jmeter如何去做get请求接口", file: "docs/9-25-jmeter如何去做get请求接口.md" },
            { title: "9-26-meter如何做json数据格式的接口", file: "docs/9-26-meter如何做json数据格式的接口.md" },
            { title: "9-27-jmeter中-cookies如何添加", file: "docs/9-27-jmeter中-cookies如何添加.md" },
            { title: "9-28-jmeter中如何添加-header信息", file: "docs/9-28-jmeter中如何添加-header信息.md" },
            { title: "9-29-jmeter中-webserver中soap协议xml格式数据如何测试", file: "docs/9-29-jmeter中-webserver中soap协议xml格式数据如何测试.md" },
            { title: "9-30-jmeter-中如何去连接数据库", file: "docs/9-30-jmeter-中如何去连接数据库.md" },
            { title: "9-31-jmeter中https证书如何处理", file: "docs/9-31-jmeter中https证书如何处理.md" },
            { title: "9-32-http如何进行代理录制接口", file: "docs/9-32-http如何进行代理录制接口.md" },
            { title: "9-33-jmeter如何做post请求格式接口", file: "docs/9-33-jmeter如何做post请求格式接口.md" },
            { title: "9-34-如何搭建-python+-requests接口测试环境", file: "docs/9-34--如何搭建-python+-requests接口测试环境.md" },
            { title: "9-35-requests如果做get请求，数据保存格式哪二种", file: "docs/9-35-requests如果做get请求，数据保存格式哪二种.md" },
            { title: "9-36-requests如何做post请求接口", file: "docs/9-36-requests如何做post请求接口.md" },
            { title: "9-37-requests上传文件接口如何测试", file: "docs/9-37--requests上传文件接口如何测试.md" },
            { title: "9-38-有没有做过https接口，具体怎么做", file: "docs/9-38-有没有做过https接口，具体怎么做.md" },
            { title: "9-39-requests中如何测试json数据的接口", file: "docs/9-39--requests中如何测试json数据的接口.md" },
            { title: "9-40-requests中如何添加-cookies", file: "docs/9-40--requests中如何添加-cookies.md" },
            { title: "9-41-requests中如何添加-headers信息", file: "docs/9-41--requests中如何添加-headers信息.md" },
            { title: "9-42-requests中https证书如何处理", file: "docs/9-42--requests中https证书如何处理.md" },
            { title: "9-43-requests中sign签名与-token如何处理", file: "docs/9-43--requests中sign签名与-token如何处理.md" },
            { title: "9-44-request框架有哪些方法", file: "docs/9-44-request框架有哪些方法-.md" }
        ]
    },
    {
        category: "十、接口自动化",
        items: [
            { title: "10-1-接口自动化怎么测试", file: "docs/10-1-接口自动化怎么测试.md" },
            { title: "10-2-为什么做接口自动化", file: "docs/10-2-为什么做接口自动化-.md" },
            { title: "10-3-假如公司想要做自动化，让你去做，你会从那些方面考虑入手", file: "docs/10-3-假如公司想要做自动化，让你去做，你会从那些方面考虑入手-.md" },
            { title: "10-4-你写了多少接口自动化用例", file: "docs/10-4-你写了多少接口自动化用例.md" },
            { title: "10-5-比如说你接口的请求参数需要加密处理的，你们用的是什么加密方式，你加密怎么处理的", file: "docs/10-5-比如说你接口的请求参数需要加密处理的，你们用的是什么加密方式，你加密怎么处理的-.md" },
            { title: "10-6-你查询出来返回结果是密文，密文你怎么测试", file: "docs/10-6-你查询出来返回结果是密文，密文你怎么测试.md" },
            { title: "10-7-http如何进行代理录制接口", file: "docs/10-7-http如何进行代理录制接口.md" },
            { title: "10-8-jmeter如何进行参数化，参数化类型包含哪些", file: "docs/10-8--jmeter如何进行参数化，参数化类型包含哪些.md" },
            { title: "10-9-jmeter中对于json数据如何提取信息", file: "docs/10-9--jmeter中对于json数据如何提取信息.md" },
            { title: "10-10-jmeter中如何跨线程组传输参数", file: "docs/10-10--jmeter中如何跨线程组传输参数.md" },
            { title: "10-11-jmeter如何进行断言", file: "docs/10-11-jmeter如何进行断言.md" },
            { title: "10-12-jmeter如间在cmd命令下运行", file: "docs/10-12-jmeter如间在cmd命令下运行.md" },
            { title: "10-13-jmeter运行完成后如何去自动发送邮件", file: "docs/10-13--jmeter运行完成后如何去自动发送邮件-.md" },
            { title: "10-14-pytest如何做断言", file: "docs/10-14--pytest如何做断言-.md" },
            { title: "10-15-patent中如何去调取其他用例中返回的参数", file: "docs/10-15--patent中如何去调取其他用例中返回的参数-.md" },
            { title: "10-16-你们做接口自动化，用例数据是怎么组织，管理的", file: "docs/10-16-你们做接口自动化，用例数据是怎么组织，管理的-.md" },
            { title: "10-17-requests中如何进行动态关联", file: "docs/10-17--requests中如何进行动态关联.md" },
            { title: "10-18-你们-python接口自动化怎么去处理-cookie，-session的", file: "docs/10-18--你们-python接口自动化怎么去处理-cookie，-session的-.md" }
        ]
    },
    {
        category: "十一、UI自动化",
        items: [
            { title: "11-1-ui自动化怎么测试", file: "docs/11-1-ui自动化怎么测试.md" },
            { title: "11-2-什么是自动化测试", file: "docs/11-2-什么是自动化测试-.md" },
            { title: "11-3-什么样的项目合适做自动化(至少三个)", file: "docs/11-3-什么样的项目合适做自动化(至少三个).md" },
            { title: "11-4-自动化测试流程是什么", file: "docs/11-4-自动化测试流程是什么-.md" },
            { title: "11-5-自动化实现的比例，1-2年。", file: "docs/11-5-自动化实现的比例，1-2年。.md" },
            { title: "11-6-自动化测试用例的来源", file: "docs/11-6-自动化测试用例的来源.md" },
            { title: "11-7-自动化测试的优点与缺点", file: "docs/11-7-自动化测试的优点与缺点.md" },
            { title: "11-8-你们自动化覆盖率有多少", file: "docs/11-8-你们自动化覆盖率有多少-.md" },
            { title: "11-9-自动化测试环境的搭建是怎样的", file: "docs/11-9-自动化测试环境的搭建是怎样的-.md" },
            { title: "11-10-seleniun的原理是什么", file: "docs/11-10--seleniun的原理是什么-.md" },
            { title: "11-11-Selenium2与-Selenium1的区别是什么", file: "docs/11-11--Selenium2与-Selenium1的区别是什么-.md" },
            { title: "11-12-seleniun库中用过哪些函数", file: "docs/11-12--seleniun库中用过哪些函数-.md" },
            { title: "11-13-定位元素的8个方法是什么", file: "docs/11-13-定位元素的8个方法是什么-.md" },
            { title: "11-14-js定位的5个方法", file: "docs/11-14-js定位的5个方法.md" },
            { title: "11-15-jQuery定位的方法", file: "docs/11-15-jQuery定位的方法.md" },
            { title: "11-16-css定位的方法", file: "docs/11-16-css定位的方法-.md" },
            { title: "11-17-xpath定位的方法-xpath怎么写", file: "docs/11-17--xpath定位的方法--xpath怎么写-.md" },
            { title: "11-18-如何去定位下拉框", file: "docs/11-18-如何去定位下拉框.md" },
            { title: "11-19-如何去定位内嵌界面", file: "docs/11-19-如何去定位内嵌界面.md" },
            { title: "11-20-如何在不同的网页之间切换", file: "docs/11-20-如何在不同的网页之间切换.md" },
            { title: "11-21-如何去定位滚动条-滚动条怎么处理", file: "docs/11-21-如何去定位滚动条-滚动条怎么处理-.md" },
            { title: "11-22如何去模拟键盘与鼠标的操作", file: "docs/11-22如何去模拟键盘与鼠标的操作-.md" },
            { title: "11-23、如何去处理上传-Windows文件", file: "docs/11-23、如何去处理上传-Windows文件-.md" },
            { title: "11-24-如何去定位时间控件", file: "docs/11-24-如何去定位时间控件.md" },
            { title: "11-25-弹出框的操作", file: "docs/11-25-弹出框的操作-.md" },
            { title: "11-26-等待时间有哪三种，区别是什么", file: "docs/11-26-等待时间有哪三种，区别是什么-.md" },
            { title: "11-27-有没有修改过页面元素的属性，具体怎么修改", file: "docs/11-27--有没有修改过页面元素的属性，具体怎么修改-.md" },
            { title: "11-28-定位不到元素，你碰到过哪些-怎么解决的", file: "docs/11-28-定位不到元素，你碰到过哪些-怎么解决的-.md" },
            { title: "11-29-元素定位，有时候定位得到，有时候定位不到，可能是什么原因，你会怎么处理", file: "docs/11-29-元素定位，有时候定位得到，有时候定位不到，可能是什么原因，你会怎么处理-.md" },
            { title: "11-30-对于不可见-隐藏的元素，你如何定位，如何处理", file: "docs/11-30-对于不可见-隐藏的元素，你如何定位，如何处理-.md" },
            { title: "11-31-如果元素经常变动你怎么做", file: "docs/11-31-如果元素经常变动你怎么做.md" },
            { title: "11-32-自动化如何破解验证码", file: "docs/11-32-自动化如何破解验证码.md" },
            { title: "11-33-数据驱动有没有了解过，具体怎么做的", file: "docs/11-33-数据驱动有没有了解过，具体怎么做的-.md" },
            { title: "11-34-参数化的类型有哪些-自动化脚本如何实现数据的参数化", file: "docs/11-34-参数化的类型有哪些-自动化脚本如何实现数据的参数化-.md" },
            { title: "11-35-随机数如何操作？", file: "docs/11-35-随机数如何操作？.md" },
            { title: "11-36-自动化中如何去操作excel表格", file: "docs/11-36-自动化中如何去操作excel表格-.md" },
            { title: "11-37-如何去读取表格中一行，一列数据，具体数据", file: "docs/11-37-如何去读取表格中一行，一列数据，具体数据.md" },
            { title: "11-38-如何读取表格中总的列数跟行数", file: "docs/11-38-如何读取表格中总的列数跟行数.md" },
            { title: "11-39-自动化中如何去操作数据库", file: "docs/11-39-自动化中如何去操作数据库.md" },
            { title: "11-40-如何获取数据库返回的所有，一行，前5行", file: "docs/11-40-如何获取数据库返回的所有，一行，前5行.md" },
            { title: "11-41-数据库返回的数据格式是什么类型的格式", file: "docs/11-41-数据库返回的数据格式是什么类型的格式.md" },
            { title: "11-42-ui自动化你是怎么做断言的", file: "docs/11-42-ui自动化你是怎么做断言的-.md" },
            { title: "11-43-断言有哪几种(三种)，常见-assert断言", file: "docs/11-43-断言有哪几种(三种)，常见-assert断言.md" },
            { title: "11-44-assert-般断言哪些", file: "docs/11-44-assert-般断言哪些.md" },
            { title: "11-45-断言的目的是什么", file: "docs/11-45-断言的目的是什么-.md" },
            { title: "11-46-模块封装哪些，封装的目的是什么-有没有自己封装过一些函数-封装过哪些函数", file: "docs/11-46-模块封装哪些，封装的目的是什么-有没有自己封装过一些函数-封装过哪些函数-.md" },
            { title: "11-47-闭环有哪些，闭环的目是什么", file: "docs/11-47-闭环有哪些，闭环的目是什么.md" },
            { title: "11-48-POM模型如何划分模块", file: "docs/11-48-POM模型如何划分模块.md" },
            { title: "11-49-划分模块的好处有哪些", file: "docs/11-49-划分模块的好处有哪些.md" },
            { title: "11-50-自动发送邮件里面包含哪些内容", file: "docs/11-50-自动发送邮件里面包含哪些内容.md" },
            { title: "11-51-你们有没有做过自动化工程维护工作。", file: "docs/11-51-你们有没有做过自动化工程维护工作。.md" },
            { title: "11-52-对于生成的自动化测试报告如何分析", file: "docs/11-52-对于生成的自动化测试报告如何分析-.md" }
        ]
    },
    {
        category: "十二、Unittest框架",
        items: [
            { title: "12-1-你们自动化用例是怎么管理的", file: "docs/12-1-你们自动化用例是怎么管理的-.md" },
            { title: "12-2-Web-UI自动化都用到过哪些库", file: "docs/12-2-Web-UI自动化都用到过哪些库-.md" },
            { title: "12-3-Unittest框架的原理", file: "docs/12-3-Unittest框架的原理-.md" },
            { title: "12-4-Unittest框架有哪些组件", file: "docs/12-4-Unittest框架有哪些组件-.md" },
            { title: "12-5-Unittest框架如何使用", file: "docs/12-5--Unittest框架如何使用-.md" },
            { title: "12-6-如何生成自动化测试报告", file: "docs/12-6-如何生成自动化测试报告.md" }
        ]
    },
    {
        category: "十三、pytest框架",
        items: [
            { title: "13-1-自动化测试使用的那些库", file: "docs/13-1-自动化测试使用的那些库.md" },
            { title: "13-2-pytest框架如何使用", file: "docs/13-2--pytest框架如何使用.md" },
            { title: "13-3-pytest框架如何去生成测试报告", file: "docs/13-3-pytest框架如何去生成测试报告.md" },
            { title: "13-4-bytes如何去运行多个文件或者整个目录", file: "docs/13-4-bytes如何去运行多个文件或者整个目录.md" },
            { title: "13-5-pytest框架如何去运行上次失败的测试用例", file: "docs/13-5-pytest框架如何去运行上次失败的测试用例.md" },
            { title: "13-6-运行完成后，如何去自动发送邮件", file: "docs/13-6-运行完成后，如何去自动发送邮件.md" },
            { title: "13-7-fixture装饰器的作用与默认值", file: "docs/13-7-fixture装饰器的作用与默认值.md" },
            { title: "13-8-yield的作用是什么", file: "docs/13-8-yield的作用是什么.md" },
            { title: "13-9-pytest运行用例，用例命名规则有哪些", file: "docs/13-9--pytest运行用例，用例命名规则有哪些-.md" },
            { title: "13-10-allure报告生成", file: "docs/13-10-allure报告生成.md" }
        ]
    },
    {
        category: "十四、性能测试",
        items: [
            { title: "14-1-性能测试怎么测试", file: "docs/14-1-性能测试怎么测试.md" },
            { title: "14-2-性能测试流程是怎么样的", file: "docs/14-2-性能测试流程是怎么样的-.md" },
            { title: "14-3-你们性能观察哪些指标，大概指标范围是怎么样的。", file: "docs/14-3-你们性能观察哪些指标，大概指标范围是怎么样的。.md" },
            { title: "14-4-这个测试的环境配置，如转速度", file: "docs/14-4-这个测试的环境配置，如转速度.md" },
            { title: "14-5-性能测试计划有哪些内容", file: "docs/14-5-性能测试计划有哪些内容.md" },
            { title: "14-6-有没有写过性能测试报告，具体包括哪些内容", file: "docs/14-6-有没有写过性能测试报告，具体包括哪些内容.md" },
            { title: "14-7-什么是内存泄漏，什么是内存溢出？", file: "docs/14-7-什么是内存泄漏，什么是内存溢出？.md" },
            { title: "14-8-吞吐量，吞吐率", file: "docs/14-8-吞吐量，吞吐率.md" },
            { title: "14-9-吞吐量与吞吐率跟负载有什么关系", file: "docs/14-9-吞吐量与吞吐率跟负载有什么关系-.md" },
            { title: "14-10-当你服务器满了之后，你们吞吐量和响应时间怎么变化的", file: "docs/14-10-当你服务器满了之后，你们吞吐量和响应时间怎么变化的.md" },
            { title: "14-11-你们的TPS的指标是什么估算的", file: "docs/14-11-你们的TPS的指标是什么估算的-.md" },
            { title: "14-13-每人说一个项目接口，你设置多少并发", file: "docs/14-13-每人说一个项目接口，你设置多少并发.md" },
            { title: "14-14-你们吞吐量是多少，响应时间是多少，你设置了多少井发", file: "docs/14-14-你们吞吐量是多少，响应时间是多少，你设置了多少井发-.md" },
            { title: "14-15-做井发你们一般cpu和内存是多少", file: "docs/14-15-做井发你们一般cpu和内存是多少.md" },
            { title: "14-16-有没有做过稳定性测试", file: "docs/14-16-有没有做过稳定性测试.md" },
            { title: "14-17-5000个人抢购，只能50个人能抢到，你怎么设计并发数的", file: "docs/14-17--5000个人抢购，只能50个人能抢到，你怎么设计并发数的.md" },
            { title: "14-18-微信群里面发送红包，5000个人群，只能3000个人能抢到，你怎么设计并发数的峰值", file: "docs/14-18-微信群里面发送红包，5000个人群，只能3000个人能抢到，你怎么设计并发数的峰值.md" },
            { title: "14-19-20并发40次循环怎么做？", file: "docs/14-19-20并发40次循环怎么做？.md" },
            { title: "14-20-我想从200慢慢加载到300，到400怎么做", file: "docs/14-20-我想从200慢慢加载到300，到400怎么做.md" },
            { title: "14-21-需要插入500条数据，你怎么插入", file: "docs/14-21-需要插入500条数据，你怎么插入.md" },
            { title: "14-22-响应超时，你是怎么定位的", file: "docs/14-22-响应超时，你是怎么定位的.md" },
            { title: "14-23-压测返回数据报错，你怎么去定位的", file: "docs/14-23-压测返回数据报错，你怎么去定位的.md" },
            { title: "14-24-你理解的性能调优是什么", file: "docs/14-24-你理解的性能调优是什么-.md" },
            { title: "14-25-如果要做万并发，你怎么做", file: "docs/14-25-如果要做万并发，你怎么做.md" },
            { title: "14-26-如果用户并发要慢慢加载，你怎么设置的", file: "docs/14-26-如果用户并发要慢慢加载，你怎么设置的.md" },
            { title: "14-27-并发用户数跟响应时间与吞吐的关系", file: "docs/14-27-并发用户数跟响应时间与吞吐的关系.md" }
        ]
    },
    {
        category: "十五、App测试",
        items: [
            { title: "15-1-app测试你具体怎么做的", file: "docs/15-1-app测试你具体怎么做的-.md" },
            { title: "15-2-Web测试与app测试区别", file: "docs/15-2-Web测试与app测试区别-.md" },
            { title: "15-3-常用的adb的命令", file: "docs/15-3-常用的adb的命令-.md" },
            { title: "15-4-adb的作用的", file: "docs/15-4-adb的作用的-.md" },
            { title: "15-5-App兼容性测试怎么做的", file: "docs/15-5-App兼容性测试怎么做的-.md" },
            { title: "15-6-App稳定怎么做的-Monkey怎么用(App稳定测试)", file: "docs/15-6-App稳定怎么做的--Monkey怎么用(App稳定测试)-.md" },
            { title: "15-7-App弱网测试怎么做的", file: "docs/15-7-App弱网测试怎么做的--.md" },
            { title: "15-8-App的性能测试", file: "docs/15-8-App的性能测试.md" },
            { title: "15-9-对于内存具体怎么测呢", file: "docs/15-9-对于内存具体怎么测呢-.md" },
            { title: "15-10-对于CPU具体怎么测呢", file: "docs/15-10-对于CPU具体怎么测呢-.md" },
            { title: "15-11-对于流量具体怎么测", file: "docs/15-11-对于流量具体怎么测-.md" },
            { title: "15-12-对于FPS具体怎么测", file: "docs/15-12-对于FPS具体怎么测-.md" },
            { title: "15-15-App交互性怎么做的", file: "docs/15-15-App交互性怎么做的-.md" },
            { title: "15-16-App的安装，卸载，更新测试具体从哪些方面考虑", file: "docs/15-16-App的安装，卸载，更新测试具体从哪些方面考虑-.md" },
            { title: "15-17-H5界面怎么测试", file: "docs/15-17-H5界面怎么测试.md" },
            { title: "15-18-你们之前是用什么手机什么版本做兼容性测试的", file: "docs/15-18-你们之前是用什么手机什么版本做兼容性测试的-.md" },
            { title: "15-19-Android跟ios测试有什么区别", file: "docs/15-19-Android跟ios测试有什么区别-.md" },
            { title: "15-20-小程序怎么测试", file: "docs/15-20-小程序怎么测试.md" },
            { title: "15-21-公众号，小程序比app更火，你怎么看", file: "docs/15-21-公众号，小程序比app更火，你怎么看.md" },
            { title: "15-22-微信开发者工具如何使用", file: "docs/15-22-微信开发者工具如何使用.md" }
        ]
    },
    {
        category: "十六、安全测试",
        items: [
            { title: "16-1-安全测试怎么测试", file: "docs/16-1-安全测试怎么测试.md" },
            { title: "16-2-appscan的原理是什么", file: "docs/16-2-appscan的原理是什么.md" }
        ]
    },
    {
        category: "十七、Python",
        items: [
            { title: "17-1-一个变量没有定义报什么错误", file: "docs/17-1-一个变量没有定义报什么错误.md" },
            { title: "17-2-列表与元组的区别", file: "docs/17-2-列表与元组的区别.md" },
            { title: "17-3-python序列有哪些", file: "docs/17-3-python序列有哪些-.md" },
            { title: "17-4-Python区分大小写吗", file: "docs/17-4-Python区分大小写吗-.md" },
            { title: "17-5-如何获取字典中的所有键", file: "docs/17-5-如何获取字典中的所有键-.md" },
            { title: "17-6-列表和字典有什么区别", file: "docs/17-6-列表和字典有什么区别-.md" },
            { title: "17-7-截取字符串里面部分字符怎么做", file: "docs/17-7--截取字符串里面部分字符怎么做-.md" },
            { title: "17-8-如何遍历列表，字典", file: "docs/17-8-如何遍历列表，字典-.md" },
            { title: "17-9-列出5个-python标准库", file: "docs/17-9-列出5个-python标准库-.md" },
            { title: "17-10-字典如何删除键和合并两个字典", file: "docs/17-10-字典如何删除键和合并两个字典-.md" },
            { title: "17-11-python实现列表去重的方法", file: "docs/17-11-python实现列表去重的方法-.md" },
            { title: "17-12-python内建数据类型有哪些", file: "docs/17-12-python内建数据类型有哪些-.md" },
            { title: "17-13-列出-python中可变数据类型和不可变数据类型，并简述原理", file: "docs/17-13-列出-python中可变数据类型和不可变数据类型，并简述原理-.md" },
            { title: "17-14-如何将字符串转换为小写", file: "docs/17-14-如何将字符串转换为小写-.md" },
            { title: "17-15-现场出了一个100-10000之间，打印出各位数字相加能被15整除的整数，每行打印十个", file: "docs/17-15-现场出了一个100-10000之间，打印出各位数字相加能被15整除的整数，每行打印十个.md" },
            { title: "17-16-然后现场出了一个-Python题目1689年到2019年打印出所有的闰年", file: "docs/17-16-然后现场出了一个-Python题目1689年到2019年打印出所有的闰年.md" },
            { title: "17-17-打印九九乘法表", file: "docs/17-17-打印九九乘法表.md" },
            { title: "17-18-冒泡排序", file: "docs/17-18--冒泡排序.md" },
            { title: "17-19写一个程序进行货币间币值转换函数", file: "docs/17-19写一个程序进行货币间币值转换函数.md" },
            { title: "17-20-回文数", file: "docs/17-20-回文数.md" },
            { title: "17-21-python中生成随机整数、随机小数、0-1之间小数方法", file: "docs/17-21-python中生成随机整数、随机小数、0-1之间小数方法.md" },
            { title: "17-22-fixture装饰器的作用与默认值", file: "docs/17-22-fixture装饰器的作用与默认值.md" },
            { title: "17-23-如何进行异常处理", file: "docs/17-23-如何进行异常处理.md" },
            { title: "17-24-类的继承与多态意思", file: "docs/17-24-类的继承与多态意思.md" },
            { title: "17-25-json与字典的区别", file: "docs/17-25-json与字典的区别-.md" },
            { title: "17-26-如何获取字典中的所有键", file: "docs/17-26-如何获取字典中的所有键-.md" }
        ]
    },
    {
        category: "十八、白盒测试",
        items: [
            { title: "18-1-白盒测试怎么测", file: "docs/18-1-白盒测试怎么测.md" }
        ]
    },
    {
        category: "十九、Jenkins",
        items: [
            { title: "19-1-jenkins-+-ant-+-jmeter-+-svn接口自动化测试", file: "docs/19-1--jenkins-+-ant-+-jmeter-+-svn接口自动化测试-.md" },
            { title: "19-2-jenkins如何使用", file: "docs/19-2-jenkins如何使用-.md" }
        ]
    }
];

const THEME_STORAGE_KEY = 'interview-theme';

// DOM 元素
const sidebarNav = document.getElementById('sidebarNav');
const contentBody = document.getElementById('contentBody');
const breadcrumb = document.getElementById('breadcrumb');
const menuToggle = document.getElementById('menuToggle');
const sidebar = document.querySelector('.sidebar');
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const searchModal = document.getElementById('searchModal');
const searchResults = document.getElementById('searchResults');
const closeModal = document.getElementById('closeModal');
const totalQuestionsEl = document.getElementById('totalQuestions');
const totalCategoriesEl = document.getElementById('totalCategories');
const themeToggle = document.getElementById('themeToggle');

// 初始化
function init() {
    applySavedTheme();
    renderSidebar();
    updateStats();
    setupEventListeners();
}

function applySavedTheme() {
    const savedTheme = localStorage.getItem(THEME_STORAGE_KEY);
    const isDarkMode = savedTheme === 'dark';
    document.body.classList.toggle('dark-mode', isDarkMode);
    updateThemeToggleLabel(isDarkMode);
}

function updateThemeToggleLabel(isDarkMode) {
    if (!themeToggle) {
        return;
    }

    themeToggle.textContent = isDarkMode ? '☀️' : '🌙';
    themeToggle.setAttribute('aria-label', isDarkMode ? '切换浅色模式' : '切换暗黑模式');
}

function toggleTheme() {
    const isDarkMode = document.body.classList.toggle('dark-mode');
    localStorage.setItem(THEME_STORAGE_KEY, isDarkMode ? 'dark' : 'light');
    updateThemeToggleLabel(isDarkMode);
}

// 渲染侧边栏
function renderSidebar() {
    sidebarNav.innerHTML = interviewData.map((category, index) => `
        <div class="nav-category ${index === 0 ? 'expanded' : ''}" data-index="${index}">
            <div class="nav-category-header">
                <span>${category.category}</span>
                <span class="toggle-icon">▶</span>
            </div>
            <div class="nav-items">
                ${category.items.map((item) => `
                    <div class="nav-item" data-file="${item.file}" data-category="${category.category}">
                        ${item.title}
                    </div>
                `).join('')}
            </div>
        </div>
    `).join('');
}

// 更新统计信息
function updateStats() {
    const totalQuestions = interviewData.reduce((sum, cat) => sum + cat.items.length, 0);
    const totalCategories = interviewData.length;

    totalQuestionsEl.textContent = totalQuestions;
    totalCategoriesEl.textContent = totalCategories;
}

// 设置事件监听器
function setupEventListeners() {
    sidebarNav.addEventListener('click', (e) => {
        const header = e.target.closest('.nav-category-header');
        if (header) {
            const category = header.parentElement;
            category.classList.toggle('expanded');
        }

        const navItem = e.target.closest('.nav-item');
        if (navItem) {
            document.querySelectorAll('.nav-item').forEach(item => item.classList.remove('active'));
            navItem.classList.add('active');

            const file = navItem.dataset.file;
            const category = navItem.dataset.category;
            loadContent(file, category, navItem.textContent.trim());

            if (window.innerWidth <= 768) {
                sidebar.classList.remove('open');
            }
        }
    });

    menuToggle.addEventListener('click', () => {
        sidebar.classList.toggle('open');
    });

    themeToggle.addEventListener('click', toggleTheme);

    searchBtn.addEventListener('click', performSearch);
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            performSearch();
        }
    });

    closeModal.addEventListener('click', () => {
        searchModal.classList.remove('active');
    });

    searchModal.addEventListener('click', (e) => {
        if (e.target === searchModal) {
            searchModal.classList.remove('active');
        }
    });

    searchResults.addEventListener('click', (e) => {
        const resultItem = e.target.closest('.search-result-item');
        if (resultItem) {
            const file = resultItem.dataset.file;
            const category = resultItem.dataset.category;
            const title = resultItem.dataset.title;

            searchModal.classList.remove('active');
            loadContent(file, category, title);

            document.querySelectorAll('.nav-item').forEach(item => {
                item.classList.remove('active');
                if (item.dataset.file === file) {
                    item.classList.add('active');
                    item.closest('.nav-category').classList.add('expanded');
                }
            });
        }
    });
}

// 加载内容
async function loadContent(file, category, title) {
    contentBody.innerHTML = '<div class="loading"><div class="spinner"></div></div>';
    breadcrumb.textContent = `${category} / ${title}`;

    try {
        const response = await fetch(file);
        if (!response.ok) {
            throw new Error('Failed to load content');
        }
        const markdown = await response.text();
        const html = marked.parse(markdown);

        contentBody.innerHTML = `<div class="markdown-content">${html}</div>`;

        document.querySelectorAll('pre code').forEach((block) => {
            hljs.highlightElement(block);
        });

        window.scrollTo(0, 0);
    } catch (error) {
        contentBody.innerHTML = `
            <div class="markdown-content">
                <h2>加载失败</h2>
                <p>无法加载该面试题内容，请稍后重试。</p>
                <p>错误信息：${error.message}</p>
            </div>
        `;
    }
}

// 搜索功能
function performSearch() {
    const query = searchInput.value.trim().toLowerCase();
    if (!query) {
        return;
    }

    const results = [];

    interviewData.forEach(category => {
        category.items.forEach(item => {
            if (item.title.toLowerCase().includes(query)) {
                results.push({
                    title: item.title,
                    category: category.category,
                    file: item.file
                });
            }
        });
    });

    displaySearchResults(results, query);
}

// 显示搜索结果
function displaySearchResults(results, query) {
    if (results.length === 0) {
        searchResults.innerHTML = `
            <div class="no-results">
                <p>未找到包含 "${query}" 的面试题</p>
            </div>
        `;
    } else {
        searchResults.innerHTML = results.map(result => `
            <div class="search-result-item" data-file="${result.file}" data-category="${result.category}" data-title="${result.title}">
                <div class="search-result-title">${highlightText(result.title, query)}</div>
                <div class="search-result-category">${result.category}</div>
            </div>
        `).join('');
    }

    searchModal.classList.add('active');
}

// 高亮搜索文本
function highlightText(text, query) {
    const escapedQuery = query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const regex = new RegExp(`(${escapedQuery})`, 'gi');
    return text.replace(regex, '<mark>$1</mark>');
}

// 启动应用
document.addEventListener('DOMContentLoaded', init);
