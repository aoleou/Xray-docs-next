import{_ as n,r as s,o as a,c as i,a as e,b as t,d as r,e as l}from"./app-kDZ-w46R.js";const d="/Xray-docs-next/assets/ch03-img01-putty-download-gVwywNaM.png",c="/Xray-docs-next/assets/ch03-img02-putty-settings-9F25dGfD.png",h="/Xray-docs-next/assets/ch03-img03-putty-keepalive-dggTHgup.png",u="/Xray-docs-next/assets/ch03-img04-ssh-login-8MrxOwy-.png",p="/Xray-docs-next/assets/ch03-img05-ssh-login-success-bpTQqXTk.png",m="/Xray-docs-next/assets/ch03-img06-apt-upgrade-full-PsNwQRq8.gif",g={},f=e("h1",{id:"chapter-3-remote-login",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#chapter-3-remote-login"},[e("span",null,"[Chapter 3] Remote Login")])],-1),y=e("h2",{id:"_3-1-remote-login-to-vps-putty",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_3-1-remote-login-to-vps-putty"},[e("span",null,"3.1 Remote Login to VPS (PuTTY)")])],-1),w=e("p",null,"First of all, considering that the user base of Windows is the largest among the zero-based population, this article uses Windows as an example for demonstration.",-1),v=e("p",null,"Secondly, although PowerShell and WSL after Windows 10 can also achieve a good SSH operation experience, not all versions of Windows have the latest components. Therefore, this article uses the classic PuTTY as an example to provide a detailed explanation of SSH remote login operation. (If you use other tools, the operations after the SSH login are the same.)",-1),b=e("p",null,"Follow me step by step and let's start the operation.",-1),x={href:"https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html",target:"_blank",rel:"noopener noreferrer"},_=l('<p><img src="'+d+'" alt="Download PuTTY"></p><ol start="2"><li>After installation and running, you will see the main interface of PuTTY. Now please take out your notebook from the previous chapter where you wrote down the <strong>IP address (VPS IP)</strong> and <strong>port (VPS PORT)</strong> of your VPS in the corresponding positions of the following figure. In order to save time and avoid repeatedly entering these details in the future, we can save the session (Saved Sessions), and simply load it in the future with one click.</li></ol><p><img src="'+c+'" alt="PuTTY Settings"></p><ol start="3"><li>I suggest setting <code>keepalive</code> to <code>60</code> seconds in the <code>Connection</code> to prevent SSH from automatically disconnecting after a period of inactivity. Be sure to save the settings again.</li></ol><p><img src="'+h+'" alt="Prevent frequent disconnection"></p><div class="custom-container warning"><p class="custom-container-title">Attention</p><p>Any update to the PuTTY configuration needs to be manually saved to the session again. Otherwise, it will be lost after closing.</p></div><ol start="4"><li>Click on Open to enter the SSH connection window, then enter the username and password corresponding to the following figure to establish a connection with your VPS remote host. (This article assumes that the default username is <code>root</code>. Also, when entering a password in the Linux system, there will be no prompt like <code>******</code>, which can avoid password length leakage. It&#39;s not that your keyboard is broken!)</li></ol><p><img src="'+u+'" alt="SSH Remote Login"></p><h2 id="_3-2-successfully-logging-in-ssh-introduction-to-command-line-interface" tabindex="-1"><a class="header-anchor" href="#_3-2-successfully-logging-in-ssh-introduction-to-command-line-interface"><span>3.2 Successfully Logging in SSH! Introduction to Command Line Interface!</span></a></h2><ol><li>If you have filled in your information correctly, you will see a similar interface as the picture below, indicating that you have successfully logged in:</li></ol><p><img src="'+p+`" alt="Logging in to VPS for the first time"></p><p>This interface is equivalent to the &quot;desktop&quot; of a remote server, but it does not have familiar icons and a mouse, nor does it have colorful graphics. Instead, all you see is simple text. This is the &quot;<strong>Command Line Interface</strong>&quot; - shortened as <code>CLI</code>.</p><p>All the following operations require you to act like a hacker in a movie and complete them in this command-line interface. Maybe you will feel unfamiliar, but please believe me, using the command-line interface is neither scary nor mysterious. In the end, it just turns your familiar mouse operations into textual commands, <strong>you say it, it does it</strong>.</p><ol start="2"><li><p>Now, you can observe and familiarize yourself with the command line environment a little bit. This interface has actually provided you with some useful information, such as the system kernel version (e.g. <code>4.19.37-5</code> in the picture), last login time and IP address. Of course, depending on the VPS, the interface you see may be slightly different.</p></li><li><p>Please pay attention to the line at the bottom of the command line, to the left of the flashing cursor, there is a string of characters. The one shown in the figure is <code>root@vps-server:~#</code>. How to understand this string? It&#39;s very simple:</p></li></ol><ul><li>The current user is <code>root</code></li><li>The server where <code>root</code> is located is <code>vps-server</code></li><li>The current directory where <code>root</code> is located is <code>~</code></li><li>After <code>#</code> is the place where you can input commands.</li></ul><p>The first two are pretty straightforward, no need to explain further. The third one is about the folder system in Linux. You don&#39;t need to go too deep into it for now. Just know that &quot;<code>~</code>&quot; represents <strong>the home directory of the current user</strong>. As for the fourth one, the prompt symbol &quot;<code>#</code>&quot;, you don&#39;t need to worry about it either. Just know that in future articles, there will be some commands that you need to input, and they will be preceded by &quot;<code>#</code>&quot; or &quot;<code>$</code>&quot; to indicate <strong>where you should input the command</strong>. (So when you copy the command, <strong>just copy the content after the prompt symbol</strong> and don&#39;t copy the prompt symbol itself.)</p><h2 id="_3-3-updating-software-on-linux-for-the-first-time" tabindex="-1"><a class="header-anchor" href="#_3-3-updating-software-on-linux-for-the-first-time"><span>3.3 Updating software on Linux for the first time!</span></a></h2><ol><li><p>Just like your phone, whether it&#39;s Android or iPhone, in order to keep your apps up-to-date (to get security patches and new features), you will occasionally receive update notifications from the app store, telling you how many apps need to be updated. Linux systems also have a similar update mechanism that works logically. So as long as you know how to update phone apps, you can learn how to update Linux software!</p></li><li><p>In Linux, each application is called a &quot;package&quot;. The program that manages the applications is naturally called a &quot;package manager&quot;. You can use it to install, update, and uninstall various software, and even update the Linux system itself. Package managers in Linux are very powerful, but we won&#39;t go into details here. For now, you only need to know that the package manager for the Debian system is called <code>apt</code>. Next, we will first use <code>apt</code> to do a comprehensive update of the software to familiarize you with its basic operations.</p></li><li><p>Tiny White Linux Basic Commands:</p></li></ol><table><thead><tr><th style="text-align:center;">Number</th><th style="text-align:center;">Command Name</th><th style="text-align:center;">Command Description</th></tr></thead><tbody><tr><td style="text-align:center;"><code>cmd-01</code></td><td style="text-align:center;"><code>apt update</code></td><td style="text-align:center;">Query software updates</td></tr><tr><td style="text-align:center;"><code>cmd-02</code></td><td style="text-align:center;"><code>apt upgrade</code></td><td style="text-align:center;">Perform software updates</td></tr></tbody></table><ol start="4"><li>Now, please enter the first command to get update information.</li></ol><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">apt</span> update
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>This is a command used in a Linux terminal to update the package list from the repositories configured on the system.</p><ol start="5"><li>Then enter the second command, and when asked if you want to continue installing <code>(Y/n)</code>, type <code>y</code> and press enter to confirm and start the installation.</li></ol><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">apt</span> upgrade
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>This is a command in the shell terminal to upgrade the installed packages on a Debian or Ubuntu Linux system.</p><ol start="6"><li>The complete demonstration of the process is as follows:</li></ol><p><img src="`+m+'" alt="Demonstration of the software update process for the first time"></p><h2 id="_3-4-your-progress" tabindex="-1"><a class="header-anchor" href="#_3-4-your-progress"><span>3.4 Your Progress</span></a></h2><p><strong>Congratulations on taking another solid step!</strong> Now, you can log in to your remote server via SSH! After logging in, besides upgrading the software, what else should you do? Please enter the next chapter to find out!</p><blockquote><p>⬛⬛⬛⬜⬜⬜⬜⬜ 37.5%</p></blockquote>',30);function k(T,S){const o=s("ExternalLinkIcon");return a(),i("div",null,[f,y,w,v,b,e("ol",null,[e("li",null,[t("Go to the "),e("a",x,[t("official website"),r(o)]),t(" of PuTTY and download the version that suits your operating system (this article uses the 64-bit version as an example).")])]),_])}const q=n(g,[["render",k],["__file","ch03-ssh.html.vue"]]);export{q as default};
