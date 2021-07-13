(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{472:function(e,t,s){"use strict";s.r(t);var a=s(4),r=Object(a.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h2",{attrs:{id:"一-配置电脑环境"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#一-配置电脑环境"}},[e._v("#")]),e._v(" 一.配置电脑环境")]),e._v(" "),s("h3",{attrs:{id:"_1-安装node-js"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-安装node-js"}},[e._v("#")]),e._v(" 1.安装"),s("a",{attrs:{href:"http://nodejs.cn/",target:"_blank",rel:"noopener noreferrer"}},[e._v("node.js"),s("OutboundLink")],1)]),e._v(" "),s("ul",[s("li",[e._v("检查node.js是否安装成功")])]),e._v(" "),s("p",[s("img",{attrs:{src:"http://upload-images.jianshu.io/upload_images/5011280-8a0afbf94891f749.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240",alt:"打开cmd输入node出现这个就成功了"}})]),e._v(" "),s("ul",[s("li",[e._v("编辑器（个人推荐用"),s("code",[e._v("IDEA")]),e._v("或者"),s("code",[e._v("WebStorm")]),e._v("，"),s("a",{attrs:{href:"https://www.jetbrains.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("下载地址"),s("OutboundLink")],1),e._v("）")])]),e._v(" "),s("h3",{attrs:{id:"_2-安装cnpm-目的是为了下载依赖包更快"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-安装cnpm-目的是为了下载依赖包更快"}},[e._v("#")]),e._v(" 2.安装cnpm（目的是为了下载依赖包更快）")]),e._v(" "),s("p",[e._v("由于我们需要使用node.js中的npm包管理工具，但是由于下载依赖包时很慢，所以使用淘宝镜像cnpm。在命令行中输入：")]),e._v(" "),s("div",{staticClass:"language-shell script line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[e._v("npm")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v(" -g cnpm --registry"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("https://registry.npm.taobao.org\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("h3",{attrs:{id:"_3-安装全局vue-cli-vue的脚手架工具"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-安装全局vue-cli-vue的脚手架工具"}},[e._v("#")]),e._v(" 3.安装全局vue-cli（vue的脚手架工具）")]),e._v(" "),s("p",[e._v("在命令行中输入：")]),e._v(" "),s("div",{staticClass:"language-shell script line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[e._v("npm")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v(" -g @vue/cli\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("h2",{attrs:{id:"二-使用vue-cli初始化项目"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#二-使用vue-cli初始化项目"}},[e._v("#")]),e._v(" 二.使用vue-cli初始化项目")]),e._v(" "),s("h3",{attrs:{id:"_1-创建一个基于-webpack-模板的新项目"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-创建一个基于-webpack-模板的新项目"}},[e._v("#")]),e._v(" 1. 创建一个基于 webpack 模板的新项目")]),e._v(" "),s("p",[e._v("新建一个空文件夹，")]),e._v(" "),s("p",[e._v("打开命令行，使用"),s("code",[e._v("cd")]),e._v("命令，到该文件夹，并输入：")]),e._v(" "),s("div",{staticClass:"language-shell script line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[e._v("vue init webpack my-project\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v("此时它会问几个问题：")]),e._v(" "),s("p",[s("img",{attrs:{src:"http://upload-images.jianshu.io/upload_images/5011280-0514885f27109cd4.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240",alt:"你的可能和图中有点不同"}})]),e._v(" "),s("p",[e._v("1.？Project name(my-project) ------项目名，回车即默认为my-project")]),e._v(" "),s("p",[e._v("2.？Project description (A Vue.js project)------ 项目的描述，默认为括号里的")]),e._v(" "),s("p",[e._v("3.? Author(........) ------ 作者，默认为括号里面的")]),e._v(" "),s("p",[e._v("4.？Install vue-router?(Y/n)------ 是否安装vue-router（此处输入Y，回车）")]),e._v(" "),s("p",[e._v("5.Use ESLint to lint your code? (Y/n)------ 是否使用ESLint语法检查?(这个比较蛋疼，这里还是不要这个，输入n，回车)")]),e._v(" "),s("p",[e._v("6.?Set up unit tests(Y/n) ------是否建立单元测试？（这个就无所谓啦，此处演示，选择不要）")]),e._v(" "),s("p",[e._v("7.?Setup e2e tests whith Nightwatch? (Y/n)------ (设置e2e测试，选择不要)")]),e._v(" "),s("p",[e._v("8.？Should we run 'npm install' for you after the project has been created?(recommended)\n>Yes, use NPM\nYes,use Yarn\nNo,I will handle that myself\n(选择第一个，回车)")]),e._v(" "),s("h3",{attrs:{id:"_2-让项目跑起来"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-让项目跑起来"}},[e._v("#")]),e._v(" 2.让项目跑起来")]),e._v(" "),s("p",[e._v("等待文件下载完成后，执行：")]),e._v(" "),s("div",{staticClass:"language-shell script line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("cd")]),e._v(" my-project\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v("再执行(下载依赖包)：")]),e._v(" "),s("div",{staticClass:"language-shell script line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[e._v("cnpm "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v("\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v("再执行：")]),e._v(" "),s("div",{staticClass:"language-shell script line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[e._v("npm")]),e._v(" run dev\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v("当出现如下提示，即启动成功")]),e._v(" "),s("p",[s("img",{attrs:{src:"http://upload-images.jianshu.io/upload_images/5011280-d6ab02eb6f0c8a80.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240",alt:"启动成功"}})]),e._v(" "),s("p",[e._v("打开浏览器访问"),s("a",{attrs:{href:"http://localhost:8080/#/",target:"_blank",rel:"noopener noreferrer"}},[e._v("localhost:8080"),s("OutboundLink")],1),e._v(", 看到如下，说明你的vue的HelloWorld项目已经启动成功了")]),e._v(" "),s("p",[s("img",{attrs:{src:"http://upload-images.jianshu.io/upload_images/5011280-169678286787c2bf.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240",alt:"image.png"}})]),e._v(" "),s("p",[e._v("（如有错误或者问题，请在评论区指出或提出，感谢！！）")]),e._v(" "),s("Vssue",{attrs:{title:e.$title}})],1)}),[],!1,null,null,null);t.default=r.exports}}]);