(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{387:function(t,e,a){t.exports=a.p+"assets/img/ch05-img01-nginx-default-running.1318ec08.png"},460:function(t,e,a){"use strict";a.r(e);var n=a(26),i=Object(n.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"【第5章】网站建设篇"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#【第5章】网站建设篇"}},[t._v("#")]),t._v(" 【第5章】网站建设篇")]),t._v(" "),n("h2",{attrs:{id:"_5-1-为什么要做一个网站"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_5-1-为什么要做一个网站"}},[t._v("#")]),t._v(" 5.1 为什么要做一个网站？")]),t._v(" "),n("p",[t._v("新人也许会迷惑，为什么科学上网还要建一个网站？我不会编程啊，是不是特别麻烦？")]),t._v(" "),n("p",[t._v("先回答第一个问题，建网站的原因有：")]),t._v(" "),n("ol",[n("li",[t._v("申请合法的TLS证书（非常重要）")]),t._v(" "),n("li",[t._v("提供合理的回落，防止主动探测攻击，提高安全性")]),t._v(" "),n("li",[t._v("建设一个伪装站（如博客、私人网盘、多媒体网站、游戏网站等），直接访问时有合理的前台，使流量使用看上去更合理。")])]),t._v(" "),n("p",[t._v("再回答第二个问题：")]),t._v(" "),n("ol",[n("li",[t._v("本文作为演示，仅仅使用了一个最简单的【单文件html页面 + Nginx】来搭建，以此完成上面的目标，所以【非常简单】")]),t._v(" "),n("li",[t._v("这个网站完全可以不仅仅是伪装，而是真的做大做强，这个复杂性就完全取决于你了")]),t._v(" "),n("li",[t._v("对于“伪装”和“网站运营”这个目标，需要的就是各不相同、秀出真我，需要的同学可以自行搜索学习。这个内容已经完全偏离了科学上网，本文就不深入解析了。")])]),t._v(" "),n("h2",{attrs:{id:"_5-2-登录vps、安装运行nginx"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_5-2-登录vps、安装运行nginx"}},[t._v("#")]),t._v(" 5.2 登录VPS、安装运行Nginx")]),t._v(" "),n("ol",[n("li",[n("p",[t._v("这里用到的，都是之前已经详解过的命令，所以就不重复讲解了。看不懂的同学可以看看前面的章节哦。")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("$ sudo apt update && sudo apt install nginx\n")])])])]),t._v(" "),n("li",[n("p",[t._v("完成后，Nginx已经自动运行。此时打开Windows上的浏览器并输入 "),n("code",[t._v("http://100.200.300.400:80")]),t._v("，若看到下图的界面就说明Nginx已经正常在运行了。")]),t._v(" "),n("img",{attrs:{src:a(387),alt:"Nginx默认界面"}})])]),t._v(" "),n("h2",{attrs:{id:"_5-3-创建一个最简单的网页"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_5-3-创建一个最简单的网页"}},[t._v("#")]),t._v(" 5.3 创建一个最简单的网页")]),t._v(" "),n("ol",[n("li",[n("p",[t._v("小小白白Linux基础命令：")]),t._v(" "),n("table",[n("thead",[n("tr",[n("th",{staticStyle:{"text-align":"center"}},[t._v("编号")]),t._v(" "),n("th",{staticStyle:{"text-align":"center"}},[t._v("命令名称")]),t._v(" "),n("th",{staticStyle:{"text-align":"center"}},[t._v("命令说明")])])]),t._v(" "),n("tbody",[n("tr",[n("td",{staticStyle:{"text-align":"center"}},[n("code",[t._v("cmd-10")])]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[n("code",[t._v("mkdir")])]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("新建文件夹")])]),t._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"center"}},[n("code",[t._v("cmd-11")])]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[n("code",[t._v("systemctl reload")])]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("重新加载某个服务")])])])])]),t._v(" "),n("li",[n("p",[t._v("小小白白Linux基础配置文件：")]),t._v(" "),n("table",[n("thead",[n("tr",[n("th",{staticStyle:{"text-align":"center"}},[t._v("编号")]),t._v(" "),n("th",{staticStyle:{"text-align":"center"}},[t._v("配置文件位置")]),t._v(" "),n("th",{staticStyle:{"text-align":"center"}},[t._v("文件说明")])])]),t._v(" "),n("tbody",[n("tr",[n("td",{staticStyle:{"text-align":"center"}},[n("code",[t._v("conf-02")])]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[n("code",[t._v("/etc/nginx/nginx.conf")])]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("Nginx程序设置")])])])])]),t._v(" "),n("li",[n("p",[t._v("创建一个网站专用的文件夹"),n("code",[t._v("/home/vpsadmin/www/webpage/")]),t._v("并建立网页文件"),n("code",[t._v("index.html")])]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("$ mkdir -p ~/www/webpage/ && nano ~/www/webpage/index.html\n")])])])])]),t._v(" "),n("div",{staticClass:"custom-block warning"},[n("p",{staticClass:"custom-block-title"},[t._v("注意")]),t._v(" "),n("p",[t._v("如果你用的不是 "),n("code",[t._v("vpsadmin")]),t._v(" 这个用户名，请务必理解这条命令中 "),n("code",[t._v("“~”")]),t._v(" 符号的意义（这关系到【第5步】你要写的内容）：")]),t._v(" "),n("ul",[n("li",[t._v("如果是 【非 "),n("code",[t._v("root")]),t._v(" 用户】，"),n("code",[t._v("“~”")]),t._v(" 就等价于 "),n("code",[t._v("/home/用户名")])]),t._v(" "),n("li",[t._v("如果是 【 "),n("code",[t._v("root")]),t._v(" 用户】，"),n("code",[t._v("“~”")]),t._v(" 就等价于 "),n("code",[t._v("/root")])])])]),t._v(" "),n("ol",{attrs:{start:"4"}},[n("li",[n("p",[t._v("把下面的内容完整的复制进去，然后保存("),n("code",[t._v("ctrl+o")]),t._v(")退出("),n("code",[t._v("ctrl+x")]),t._v(")")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v('<html>\n    \x3c!-- Text between angle brackets is an HTML tag and is not displayed.\n        Most tags, such as the HTML and /HTML tags that surround the contents of\n        a page, come in pairs; some tags, like HR, for a horizontal rule, stand \n        alone. Comments, such as the text you\'re reading, are not displayed when\n        the Web page is shown. The information between the HEAD and /HEAD tags is \n        not displayed. The information between the BODY and /BODY tags is displayed.--\x3e\n    <head>\n        <title>Enter a title, displayed at the top of the window.</title>\n    </head>\n    \x3c!-- The information between the BODY and /BODY tags is displayed.--\x3e\n    <body>\n        <h1>Enter the main heading, usually the same as the title.</h1>\n        <p>Be <b>bold</b> in stating your key points. Put them in a list: </p>\n        <ul>\n            <li>The first item in your list</li>\n            <li>The second item; <i>italicize</i> key words</li>\n        </ul>\n        <p>Improve your image by including an image. </p>\n        <p><img src="https://i.imgur.com/SEBww.jpg" alt="A Great HTML Resource"></p>\n        <p>Add a link to your favorite <a href="https://www.dummies.com/">Web site</a>.\n            Break up your page with a horizontal rule or two. \n        </p>\n        <hr>\n        <p>Finally, link to <a href="page2.html">another page</a> in your own Web site.</p>\n        \x3c!-- And add a copyright notice.--\x3e\n        <p>&#169; Wiley Publishing, 2011</p>\n    </body>\n</html>\n')])])])]),t._v(" "),n("li",[n("p",[t._v("修改 "),n("code",[t._v("nginx.conf")]),t._v(" 并重启 "),n("code",[t._v("Nginx")]),t._v(" 服务，将"),n("code",[t._v("80")]),t._v("端口的http访问定位到刚才建立的 "),n("code",[t._v("html")]),t._v(" 页面上")]),t._v(" "),n("ol",[n("li",[n("p",[t._v("修改 "),n("code",[t._v("nginx.conf")]),t._v(" 。")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("$ sudo nano /etc/nginx/nginx.conf\n")])])])]),t._v(" "),n("li",[n("p",[t._v("将下面一段，添加在 "),n("code",[t._v("http{}")]),t._v(" 内，然后保存("),n("code",[t._v("ctrl+o")]),t._v(")退出("),n("code",[t._v("ctrl+x")]),t._v(")。（记得将域名替换为之前准备好的、包含二级域名的真实域名）")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("        server {\n                listen 80;\n                server_name 二级域名.你的域名.com;\n                root /home/vpsadmin/www/webpage;\n                index index.html;\n        }\n")])])])])])])]),t._v(" "),n("div",{staticClass:"custom-block warning"},[n("p",{staticClass:"custom-block-title"},[t._v("特别注意！")]),t._v(" "),n("p",[t._v("如我在【第3步】中的提示所说，请务必确保 "),n("code",[t._v("/home/vpsadmin/www/webpage")]),t._v(" 改成你的实际文件路径。")])]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[t._v('3. 让 `nginx` 重新载入配置使其生效\n    ```\n    $ sudo systemctl reload nginx\n    ```\n\n4. 完整的设置流程如下：\n\n    <img src="./ch05-img02-nginx-conf-full.gif"  alt="网页设置演示"/>\n\n5. 此时如果你访问 `http://二级域名.你的域名.com`，你看到这样的页面则说明成功：\n\n    <img src="./ch05-img03-nginx-http-running.png"  alt="http网页成功"/>\n')])])]),n("h2",{attrs:{id:"_5-4-常见错误的说明"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_5-4-常见错误的说明"}},[t._v("#")]),t._v(" 5.4 常见错误的说明")]),t._v(" "),n("p",[t._v("首先，如果你一路按照文章的说明来操作，并且足够细心，那肯定不会出错。所以，我并不打算修改本文的写法。")]),t._v(" "),n("p",[t._v("那为什么依然有很多同学卡在了这一步，网页怎么也打不开呢？基本上就是两个字："),n("strong",[t._v("粗心")]),t._v("。因为这里配置可能出现的问题只有两种，原因也只有两个。")]),t._v(" "),n("p",[t._v("一、两种问题：")]),t._v(" "),n("ul",[n("li",[n("code",[t._v("nginx.conf")]),t._v(" 里面的 "),n("code",[t._v("/home/vpsadmin/www/webpage")]),t._v(" 这一条，与你的实际文件路径不符，"),n("code",[t._v("nginx")]),t._v(" 找不到文件")]),t._v(" "),n("li",[t._v("路径正确，但 "),n("code",[t._v("nginx")]),t._v(" 无权读取")])]),t._v(" "),n("p",[t._v("二、两个原因：")]),t._v(" "),n("ul",[n("li",[t._v("使用了【非 "),n("code",[t._v("root")]),t._v(" 用户】，但仍然直接拷贝文中的命令不加修改。（这基本就等于抄答案时把同学的名字一起抄过去了）")]),t._v(" "),n("li",[t._v("坚持使用【 "),n("code",[t._v("root")]),t._v(" 用户】")])]),t._v(" "),n("p",[t._v("碰到错误的同学，就回过头仔细看一下【5.3】中【第3步】和【第5-2步】的说明吧。")]),t._v(" "),n("div",{staticClass:"custom-block warning"},[n("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),n("p",[t._v("本文前期已经用了大量篇幅说明了使用【非 "),n("code",[t._v("root")]),t._v(" 用户】对安全的重要性，全文也是基于此而写。所以，因使用【 "),n("code",[t._v("root")]),t._v(" 用户】而导致的问题并不在本文的设计范围里。")]),t._v(" "),n("p",[t._v("但我相信，坚持使用【 "),n("code",[t._v("root")]),t._v(" 用户】的同学应该是有主见、动手能力强、或者有一定 Linux 基础的同学。问题的症结我已经全部说明了，我相信你一定可以自行解决。")])]),t._v(" "),n("h2",{attrs:{id:"_5-5-你的进度"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_5-5-你的进度"}},[t._v("#")]),t._v(" 5.5 你的进度")]),t._v(" "),n("p",[t._v("至此，Xray的第一个基础设施【网页】已经就位，我们马上就进入第二个基础设施【证书】吧！")]),t._v(" "),n("blockquote",[n("p",[n("code",[t._v("⬛⬛⬛⬛⬛⬜⬜⬜ 62.5%")]),t._v(" :::")])])])}),[],!1,null,null,null);e.default=i.exports}}]);