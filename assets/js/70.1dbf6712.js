(window.webpackJsonp=window.webpackJsonp||[]).push([[70],{386:function(_,v,t){"use strict";t.r(v);var a=t(3),s=Object(a.a)({},(function(){var _=this,v=_._self._c;return v("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[v("blockquote",[v("p",[_._v('"程序员的职责就是开发自认为完美的程序，我们自己写的程序是否要自己重新测试一遍呢？"')])]),_._v(" "),v("p",[v("img",{attrs:{src:"/common/1.gif",alt:""}})]),_._v(" "),v("h2",{attrs:{id:"_01-前言"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_01-前言"}},[_._v("#")]),_._v(" 01 前言")]),_._v(" "),v("p",[_._v("自己最近也在疯狂的输出代码，首先不是因为自己有多厉害，而是因为毕业设计的相关事情。我知道很多小伙伴都对自己写的代码很有信心，认为经过我手的代码肯定不会出错，肯定是测试坑的我。但是奈何自己没有测试小帮手，唯有身兼数职，一边开发一边测试。")]),_._v(" "),v("p",[_._v("抛开自己一个人负责的项目来说，很多大公司都会有自己的测试团队，他们会对代码进行完整的测试之后才会上线。但是很多人都会觉得我自己写的代码，有必要自己再测试一遍吗？而且不还有测试工程师吗？这里有一个很搞笑的问题，万一系统上线之后，出现问题该是谁来背锅？开发人员说都是测试的责任，没有测试出来错误；但是测试人员就说都是开发，代码写得不好。所以这里到底是谁的锅我们就有点难判断了。")]),_._v(" "),v("p",[_._v("所以为了避免这种事情发生，我们开发人员退一步，自己开发的代码先自己测试一遍，看功能是否正常，逻辑是否有问题，然后我们再交给测试，这样的愉快过程对大家都好。")]),_._v(" "),v("p",[v("img",{attrs:{src:"/think/2a8083/1.png",alt:""}})]),_._v(" "),v("h2",{attrs:{id:"_02-为什么要自己测试"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_02-为什么要自己测试"}},[_._v("#")]),_._v(" 02 为什么要自己测试")]),_._v(" "),v("p",[_._v("我们自己来测试自己的程序首先肯定是基于我们自己是对程序最熟悉的人员，别人不可能知道我们代码的每一个部分的内容。我们这里基于几个方面来说，第一是测试人员是否可靠，第二是第三方代码是否可靠，第三是产品迭代的质量保证。")]),_._v(" "),v("ul",[v("li",[_._v("测试人员")])]),_._v(" "),v("p",[_._v("这里的测试人员就是测试工程师，测试开发人员会把用户所有操作可能出现的情况都跑一边，这里能否保证测试的质量、能否找出bug就是测试用例是否完善。我们如果在leetcode上面刷题的话就知道，他都会有一个测试用例库在里面，只有你完全通过之后才算你的程序没有问题，一般我们着重考虑的就是边界情况和特殊情况。举一个简单的例子，也是我最近的做的一个修改初始密码的功能。大家可以想一下用户有哪几种操作？")]),_._v(" "),v("p",[_._v("为什么要这样说呢？因为我们写的程序一开始就要一套用户逻辑在里面，就相当于我们自己限定了一套流程，觉得用户理应是这么操作的。但是用户不是开发，他们有可能出现很多种操作情况，我们都要一一覆盖完全。比如用户可以不输密码，用户可以只输原始密码没有输入新密码就提交，或者旧密码错误你就不能让他改了，万一他不是本人操作呢？所以我们都每一种情况都是试一下，保证用户的操作不会超出自己的范围外。")]),_._v(" "),v("p",[_._v("测试是有一套工具的，测试人员是没有比我们更熟悉的程序的，所以第一个考虑的问题就是我们一定要对自己的程序负第一责任，这锅该背的时候还是得背。")]),_._v(" "),v("ul",[v("li",[_._v("第三方代码")])]),_._v(" "),v("p",[_._v("我们现在，就前端来说已经是偏向工程化的时代，页面已经不是单纯的html+css或者div+css开发模式这么简单了。我们熟知的npm包管理工具已经有几万个代码包，很多时候我们并不能判断这些代码库是否安全，直接npm install就完事了。但是这里一般来说也不是什么大问题，毕竟大家都在用这里面的代码和集成的方法，可是万一某个包被人参杂了一些不合法的程序怎么办呢？我们的项目一般都是依赖很多组件或者页面的，一旦出了问题那就是很严重的情况了。")]),_._v(" "),v("p",[_._v("假如大家为了安全起见可以去了解一下源代码，看一下是否其中藏着什么猫腻。但是我一般不会去看，因为看不懂。一般来说一些常用的包是没有问题的，有问题一早就反应出来了，而且我们用的一般都是常用的，比如vue，vue-router，vuex，element-ui等，常用的基本上都没有问题。")]),_._v(" "),v("p",[_._v("所以第二个方面就是检查一下第三方包是否靠谱（假如有能力），因为第三包出了问题，测试或者开发员人可能都难以准确定位问题出在哪，更难以解决了。")]),_._v(" "),v("ul",[v("li",[_._v("产品迭代")])]),_._v(" "),v("p",[_._v("第三个就是我们的产品迭代方面，可能有些项目还没有上线就凉了或者我开发出来的版本就不打算长期迭代了，这种情况我们就另说了。一般来说我们的产品都是长期迭代的，如何保证后续的开发顺利和产品的质量？首先肯定是我们的基础层面做的好，平台没有做好我们是很难向下发展的。代码是否向下兼容，接口升级有没有问题，这些我们都要保质保量。做到随时进行代码移植、随时小功能上线，随时合并项目等。")]),_._v(" "),v("p",[_._v("这些过程可能在早期来说比较耗费时间和精力，但是想想以后你项目出现问题找bug的时间根本不算什么，而且你的项目早期做的越好，以后的排查难度会降低很多，问题也可以非常快速的定位。")]),_._v(" "),v("p",[v("img",{attrs:{src:"/think/2a8083/2.png",alt:""}})]),_._v(" "),v("h2",{attrs:{id:"_03-自己如何做测试"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_03-自己如何做测试"}},[_._v("#")]),_._v(" 03 自己如何做测试")]),_._v(" "),v("p",[_._v("说了这么多，那我们到底该如何测试自己的代码呢？换句话来说我们测试应该要遵循什么样的原则呢？")]),_._v(" "),v("ul",[v("li",[_._v("单一职责")])]),_._v(" "),v("p",[_._v("我们测试某一个功能肯定是从最小的功能做起，测试是否有问题，就像函数一样，只做一件事情。一旦我们的代码比较多的时候，测试就难以进行了，可能因为功能之间相互引用，假如某环节出了问题你也不知道从哪里推测出来。")]),_._v(" "),v("p",[_._v("最近我也在写node相关的后台接口，我发现一个简单的数据库接口查询都是要分开很多个文件来写的，可以分为数据库配置文件以用来配置数据库的地址、端口、用户名密码等，还有一个文件用来接收sql语句写连接查询，还有一个文件用来写某一个接口的sql语句，还有用来写接口路由的，最后都集合到index.js当中开启服务。")]),_._v(" "),v("p",[_._v("整一个流程下来我们难免会有多个文件，但是我们把耦合性降到了最低。以后我们修改接口名称或者新增接口都是十分地方便，也容易排查错误。所以我们测试也要做到单一职责的则是，一次只做一个功能，如webpack中的loader一样。")]),_._v(" "),v("ul",[v("li",[_._v("用例完整")])]),_._v(" "),v("p",[_._v("按照正常的逻辑思维来说，我们的程序大部分情况下都不会有问题，一般出现问题的就是一些边缘情况，我们称之为特殊值或者边界情况。比如我们常见的数组下标越界都是这种情况，这种情况涉及的问题可大可小，堆栈溢出实际上是很严重的问题，不要小看这一个下标，可能会覆盖正常的数据或者读取非法数据。")]),_._v(" "),v("p",[_._v("所以我们一定要保证测试的用例在我们可控的范围之内，否则就会有问题，数据的完整性就是指数据不能多也不能少。通过不断地添加测试用例，将会不断覆盖代码的分支和不同的情况。")]),_._v(" "),v("p",[_._v("我觉得上面这两种原则已经可以涵盖大部分的情况了，剩下的情况我们可以考虑一些性能测试，压力测试等方面的内容。")]),_._v(" "),v("p",[v("img",{attrs:{src:"/think/2a8083/3.png",alt:""}})]),_._v(" "),v("h2",{attrs:{id:"_04-小结"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_04-小结"}},[_._v("#")]),_._v(" 04 小结")]),_._v(" "),v("p",[_._v("测试的意义就在于，用户消费产出的代码之前，开发者先消费它，给予其重要的质量保证。——《深入浅出Node.js》")]),_._v(" "),v("p",[_._v("今天我们聊了关于程序产出之后，我们是否应该进行先测试，答案相信大家已经有了。很多时候我与上线成功就只差一个测试，大家其实应该也要考虑开发环境与线上环境的问题，因为开发没有任何问题，部署之后却死活不行。因为线上环境很特殊，不仅考虑网络是否流畅，是否有阻塞的情况，线上代码资源文件的地址是否错误等，而且还要考虑线上环境代码走的分支也是不一样的。")]),_._v(" "),v("p",[_._v("举个简单的例子，我们在vue项目设置代理的时候一般都是在proxyTable下面进行设置，但是这里只是开发环境的情况，线上环境却是不走这里的，要想我们的接口生效我们可以去配置nginx进行反向代理，这又是另一种情况了。只是为了告诉大家，测试很重要，上线测试更重要。")]),_._v(" "),v("p",[v("img",{attrs:{src:"/common/2.gif",alt:""}})])])}),[],!1,null,null,null);v.default=s.exports}}]);