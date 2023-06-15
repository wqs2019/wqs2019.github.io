(window.webpackJsonp=window.webpackJsonp||[]).push([[102],{418:function(s,t,a){"use strict";a.r(t);var n=a(3),r=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("blockquote",[t("p",[s._v("好久没有更新推文了，这段时间也是在做一个小项目，一开始想的是人脸识别并上传视频到七牛云的，但是后来想想好像不用这个功能，但是我实现后才知道。所以就写一下上传的功能吧。")])]),s._v(" "),t("p",[t("img",{attrs:{src:"/common/1.gif",alt:""}})]),s._v(" "),t("h2",{attrs:{id:"_01-前言"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_01-前言"}},[s._v("#")]),s._v(" 01 前言")]),s._v(" "),t("p",[s._v("大家都知道七牛云就是一个线上的云存储空间，可以上传一些图片、视频等多媒体资源，对于小型项目来说是很方便的。但是好像他的存储空间1个月就会过期，你的资源可能访问不了（充钱）。")]),s._v(" "),t("p",[s._v("偶然接触这个功能是因为在做小程序的过程中，录制的视频不能转码成base64格式的（真机调试模式），开发者工具调试是正常的，真机调试就会不正常。")]),s._v(" "),t("p",[s._v("我发现在工具调试下生成的是以http开头的文件，真机的时候就会生成wxfile的文件，一度怀疑是这个问题导致我不能转base64，后来多方求证之后发现，"),t("code",[s._v("根本不用关心什么开头")]),s._v("，预览是正常的。")]),s._v(" "),t("p",[t("strong",[s._v("这个问题仅存在真机调试的模式下面【谨记】")])]),s._v(" "),t("h2",{attrs:{id:"准备工作"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#准备工作"}},[s._v("#")]),s._v(" 准备工作")]),s._v(" "),t("p",[s._v("首先我们要先去七牛云注册一个开发者账号，相信大家都会。")]),s._v(" "),t("p",[s._v("接下来我们就可以上传我们的文件了。但是官方写的太难懂了，以至于我连文档都看得不太清楚。经过自己的一番折磨着没有搞清楚这个uptoken是怎么获取的，不像其他的三方工具一样简便，直接是他们生成的。")]),s._v(" "),t("p",[s._v("没办法，我找了几篇文章讲关于上传凭证的生成方式也没有搞明白。后来我就在一个github里边找到了小程序的SDK，但是也有不少的问题。")]),s._v(" "),t("h3",{attrs:{id:"找对文档"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#找对文档"}},[s._v("#")]),s._v(" 找对文档")]),s._v(" "),t("p",[s._v("我觉得这个文档隐藏的还是很不错的，找了半天没有找到。")]),s._v(" "),t("p",[t("a",{attrs:{href:"https://developer.qiniu.com/sdk#community-sdk",target:"_blank",rel:"noopener noreferrer"}},[s._v("小程序SDK"),t("OutboundLink")],1)]),s._v(" "),t("p",[s._v("拿到小程序的SDK之后我们就可以在用的地方进行JS文件的引入，在上面的链接里面，找到Qiniu-wxapp-SDK之后点击安装，文件就会下载到我们的本地。")]),s._v(" "),t("p",[s._v("在我们的小程序页面，你要使用的这个页面进行进入即可。")]),s._v(" "),t("div",{staticClass:"language-javascript line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" qiniuUploader "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("require")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"../../qiniuUploader.js"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h3",{attrs:{id:"项目配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#项目配置"}},[s._v("#")]),s._v(" 项目配置")]),s._v(" "),t("p",[s._v("如果是一开始弄的时候，我相信很多人都会来到Qiniu-wxapp-SDK的"),t("a",{attrs:{href:"https://github.com/gpake/qiniu-wxapp-sdk/blob/master/README.md",target:"_blank",rel:"noopener noreferrer"}},[s._v("github文档"),t("OutboundLink")],1),s._v("那里寻找，但是那里也没有找到关于凭证的生成方式。")]),s._v(" "),t("p",[s._v("后来我在获取凭证的详情页面找到了，但是这个凭证为了安全是由后端返回的，前端只需要调用api/uptoken的形式就可以获取。所以，唯一的办法就是我们需要把这个获取凭证的接口放上服务器，让公网是可以访问的。")]),s._v(" "),t("p",[t("a",{attrs:{href:"https://developer.qiniu.com/kodo/sdk/1283/javascript",target:"_blank",rel:"noopener noreferrer"}},[s._v("运行实例"),t("OutboundLink")],1)]),s._v(" "),t("p",[s._v("在上面这个运行实例下载之后，其实我们唯一要用到的就是server.js文件和一个配置文件config.json文件。")]),s._v(" "),t("p",[t("code",[s._v("server.js")])]),s._v(" "),t("div",{staticClass:"language-javascript line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" qiniu "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("require")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"qiniu"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" express "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("require")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"express"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" path "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("require")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"path"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" app "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("express")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\napp"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("use")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("express"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("static")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("__dirname "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" multiparty "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("require")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"multiparty"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" fs"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("require")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'fs'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" config"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("JSON")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("parse")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("fs"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("readFileSync")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("path"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("resolve")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("__dirname"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"config.json"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("...")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("...")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br")])]),t("p",[s._v("看一下这个文件的关键代码，里面用到了express、qiniu、multiparty这三个依赖，那么这样一来就很简单了，初始化一个package.json文件安装依赖即可。")]),s._v(" "),t("p",[t("code",[s._v("config.json")])]),s._v(" "),t("div",{staticClass:"language-json line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-json"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"AccessKey"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"你的AccessKey"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("  \n    "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"SecretKey"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"你的SecretKey"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"Bucket"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"空间名称"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"Port"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("9000")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"UptokenUrl"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"uptoken"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"Domain"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"你的域名"')]),s._v(" \n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br")])]),t("p",[s._v("文件很简单，就是做一些你的七牛云空间的信息配置，为了能够上传资源到你指定的空间。")]),s._v(" "),t("p",[t("code",[s._v("AccessKey/SecretKey")]),s._v("：在你的个人中心里面，进去密钥管理就可以看到了，但是不要泄露出去就好。把这两个信息填写到config.json里面去。")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://imgkr.cn-bj.ufileos.com/7f413b1e-d886-4a7a-a534-9bd5f33c9def.png",alt:"AccessKey/SecretKey"}})]),s._v(" "),t("p",[t("code",[s._v("Bucket")]),s._v(":就是你创建的空间名称，可以在对象存储的空间管理进行新建空间，这个名字就是Bucket。")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://imgkr.cn-bj.ufileos.com/36493a11-67a3-4d56-a5cb-9b648fd0e894.png",alt:"domain"}})]),s._v(" "),t("p",[s._v("domain:你的临时测试域名")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://imgkr.cn-bj.ufileos.com/9ea2b6c5-3a3b-4e31-899c-8ce4eab0f04a.png",alt:""}})]),s._v(" "),t("h3",{attrs:{id:"获取uptoken"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#获取uptoken"}},[s._v("#")]),s._v(" 获取uptoken")]),s._v(" "),t("p",[s._v("明确了uptoken是由后端生成的之后，我们就把上面的server.js文件部署上去。这个文件其实就是接口文件，用于提供uptoken。")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://imgkr.cn-bj.ufileos.com/0ab4275a-3132-44ae-b7db-b2226231fe5c.png",alt:"目录"}})]),s._v(" "),t("p",[s._v("上传服务器之后记得安装依赖，然后用pm2进行启动。这样你就可以在关闭服务器终端的时候还可以正常访问接口。用node启动你关闭终端就没用了。")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://imgkr.cn-bj.ufileos.com/6cebef6d-1622-484e-8286-3d3620114694.png",alt:"看一下是否启动成功"}})]),s._v(" "),t("p",[s._v("接下来我们就开始我们的uptoken获取吧，在浏览器输入你的服务器IP：端口/api/uptoken")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://imgkr.cn-bj.ufileos.com/e762636e-c628-4caa-ae0f-d67507a5b625.png",alt:"获取成功"}})]),s._v(" "),t("h2",{attrs:{id:"上传文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#上传文件"}},[s._v("#")]),s._v(" 上传文件")]),s._v(" "),t("p",[s._v("接下来就是视频上传的时候，在小程序onload的时候就初始化函数。")]),s._v(" "),t("div",{staticClass:"language-javascript line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" qiniuUploader "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("require")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"../../qiniuUploader.js"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//记得引入")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("initQiniu")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" options "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("region")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'NCN'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 华北区(看你空间的地区)")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("uptokenURL")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'https://yourserver.com/api/uptoken'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//上面的获取uptoken链接")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("uploadURL")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'https://up-z2.qbox.me'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//上传的地址")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("domain")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'测试域名/'")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  qiniuUploader"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("init")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("options"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br")])]),t("p",[s._v("关于uploadURL的地址：其实运行实例的文件（demo01）是没有这一项的配置的，但是我运行就会说uploadURL没有配置，那我只好写上去了。")]),s._v(" "),t("div",{staticClass:"language-javascript line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("case")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'ECN'")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" uploadURL "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'https://up.qbox.me'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("break")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("case")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'NCN'")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" uploadURL "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'https://up-z1.qbox.me'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("break")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("case")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'SCN'")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" uploadURL "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'https://up-z2.qbox.me'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("break")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("case")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'NA'")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" uploadURL "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'https://up-na0.qbox.me'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("break")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("p",[s._v("看自己的地区来写。")]),s._v(" "),t("hr"),s._v(" "),t("p",[s._v("最后就是上传了。")]),s._v(" "),t("div",{staticClass:"language-javascript line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 交给七牛上传")]),s._v("\nqiniuUploader"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("upload")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("filePath"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("res")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  console"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("res"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//它会返回一个在线地址，打开浏览器就可以访问你的视频、音频/图片")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("error")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  console"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("error")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'error: '")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("JSON")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("stringify")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("error"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])]),t("p",[s._v("这里的filePath就是你录制视频、音频/图片的地址，如果是手机的话是wxfile开头，电脑调试就是http开头，不过没关系，都可以上传到七牛云。")]),s._v(" "),t("h2",{attrs:{id:"小结"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#小结"}},[s._v("#")]),s._v(" 小结")]),s._v(" "),t("p",[s._v("经过一番的折腾，其实一开始我们的思路应该是比较多的，网上的文章也是很多。但是不幸的是都没有解决我的问题。")]),s._v(" "),t("p",[s._v("在这里我就想说一句话，假如你在开发微信小程序，"),t("code",[s._v("任何时候你都要以你预览的时候为准")]),s._v("。因为很多时候不是你的项目代码写得有问题，而是开发者工具的问题，一个是电脑的路径一个是手机的路径，它们是不一样的。")]),s._v(" "),t("p",[s._v("在我真机调试的时候，怎么也不能执行wx.getFileSystemManager()里面的函数。在真机调试的时候页面右方一直报警告和错误，然后自动恢复调试然后又错误，它确实也不是报错信息。")]),s._v(" "),t("p",[t("img",{attrs:{src:"/common/2.gif",alt:""}})])])}),[],!1,null,null,null);t.default=r.exports}}]);