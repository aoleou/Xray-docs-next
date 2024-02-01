import{_ as i,r as p,o as l,c as u,a as s,b as n,d as a,w as e,e as o}from"./app-kDZ-w46R.js";const d={},r=s("h1",{id:"路由-routing-功能简析-下",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#路由-routing-功能简析-下"},[s("span",null,"路由 (routing) 功能简析（下）")])],-1),k=s("p",null,[n("欢迎继续学习 "),s("code",null,"Xray"),n(" 的【路由】功能！")],-1),v=s("code",null,"geosite.dat",-1),m=o('<p>如前面所说，域名分流仅仅是【路由】功能的牛刀小试而已。下面就让我们来看看除了域名之外，还什么可以用做分流依据的东西吧！</p><h2 id="_5-攻城略池-多种路由匹配条件" tabindex="-1"><a class="header-anchor" href="#_5-攻城略池-多种路由匹配条件"><span>5. 攻城略池 - 多种路由匹配条件</span></a></h2><blockquote><p><code>[域名], [IP], [协议], etc.</code></p></blockquote><p>基于域名的分流，已经可以让我们对网络流量进行基本合理的分流。为什么说【基本合理】呢？</p><p>因为【三分天下】虽然是正确的战略方向，但如果只用【域名】来实现这个战略，其实漏洞百出，比如：</p><ol><li>我读了《小小白白话文》后，给 VPS 新申请了一个 <code>proxy.yourdomain.com</code> 的域名, 我希望它无论如何都代理，<code>geosite.dat</code> 里面有吗？</li><li>如果我还有个 <code>direct.yourdomain.com</code> 的域名，我希望它无论如何都直连， <code>geosite.dat</code> 里面有吗？</li><li>本机 <code>127.0.0.1</code> 的内部流量，是否正确直连了？（比如 <code>docker</code> 等）</li><li>路由器、本地局域网 <code>192.168.*.*</code> 的流量，是否正确直连了？（比如路由器、群晖等）</li><li>我的国内 DNS 查询（如 <code>223.5.5.5</code>）是否正确直连了？</li><li>我的国外 DNS 查询（如 <code>1.1.1.1</code>）是否正确代理了？</li><li>其他类似国内公共 DNS 一样没有域名、只有 IP 地址的国内网站，是否正确直连了？</li><li>其他类似国外公共 DNS 一样没有域名、只有 IP 地址的国外网站，是否正确代理了？</li><li>BT 下载的流量，虽然来源是国外，但如果通过 VPS 下载很可能导致违规使用被封，这该如何强制直连？</li><li>......</li></ol><p>我之所以说只用【域名分流】会漏洞百出，是因为 <code>geosite.dat</code> 文件内只包含了一部分常用的域名。换言之，仅仅依赖它，则会：</p><ul><li>无法匹配文件里没有的新域名</li><li>无法匹配基于 IP 地址的规则</li><li>无法匹配基于网络协议的规则</li></ul><div class="custom-container warning"><p class="custom-container-title">啰嗦君</p><p>那我们来复习一下，当上面这些情况无法匹配时，会发生什么？对了，会触发隐藏路由规则，即【<strong>转发给第一个出站</strong> 】。这其实就是说：</p><ul><li>当你的第一个出站是 <code>[direct-out]</code> 时：<strong>需要直连的都正确了，但需要代理的则都错误</strong></li><li>当你的第一个出站是 <code>[proxy-out-vless]</code> 时：<strong>需要代理的都正确了，但需要直连的则都错误</strong></li></ul></div><p>所以，我们需要一个办法，让我们鱼与熊掌兼得。这样的办法是否存在呢？<strong>当然存在！</strong> 我们需要的只是【域名】之外更多的【<strong>分流判断依据</strong>】而已。</p><h3 id="_5-1-基于指定域名分流-domain-full-等" tabindex="-1"><a class="header-anchor" href="#_5-1-基于指定域名分流-domain-full-等"><span>5.1 基于指定域名分流：<code>[domain], [full]</code> 等</span></a></h3>',11),q=o("<li>如果需要匹配某个子域名，如 <code>a-name.yourdomain.com</code>，我们使用 <code>full: &quot;a-name.yourdomain.com&quot;</code></li><li>前面的 <code>问题1</code> 和 <code>问题2</code>，就可以通过给 <code>proxy.yourdomain.com</code> 指定 <code>[proxy-out-vless]</code> 出站，给 <code>direct.yourdomain.com</code> 指定 <code>[direct-out]</code> 出站来解决</li><li>如果需要匹配 <code>yourdomain.com</code> 的所有子域名，我们使用 <code>domain: &quot;yourdomain.com&quot;</code> 实现</li><li>上述两个可以成为两个独立的路由规则，达到某些子域名直连，其他子域名代理的配置</li>",4),b=s("code",null,"[domain]",-1),g=o(`<p>上述配置如下：</p><div class="language-json line-numbers-mode" data-ext="json" data-title="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;routing&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;domainStrategy&quot;</span><span class="token operator">:</span> <span class="token string">&quot;AsIs&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;rules&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token comment">// 指定子域名直连</span>
      <span class="token punctuation">{</span>
        <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;field&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;domain&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;full:direct.yourdomain.com&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token property">&quot;outboundTag&quot;</span><span class="token operator">:</span> <span class="token string">&quot;direct-out&quot;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token comment">// 指定子域名转发VPS</span>
      <span class="token punctuation">{</span>
        <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;field&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;domain&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;full:proxy.yourdomain.com&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token property">&quot;outboundTag&quot;</span><span class="token operator">:</span> <span class="token string">&quot;proxy-out-vless&quot;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token comment">// 指定泛域名转发VPS</span>
      <span class="token punctuation">{</span>
        <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;field&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;domain&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;yourdomain.com&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token property">&quot;outboundTag&quot;</span><span class="token operator">:</span> <span class="token string">&quot;proxy-out-vless&quot;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-2-基于-ip-文件分流-geoip-dat" tabindex="-1"><a class="header-anchor" href="#_5-2-基于-ip-文件分流-geoip-dat"><span>5.2 基于 IP 文件分流：<code>geoip.dat</code></span></a></h3><p>与 <code>geosite.dat</code> 规则文件十分类似的，我们还有 <code>geoip.dat</code> 这个规则文件，它致力于为用户提供成熟完善的【IP 分类表】。让用户可以简单的通过 <code>geoip:xxx</code> 这种格式方便的调用任何子类，定制符合自身需求的路由规则 。</p><ol><li>解决前面的 <code>[问题3], [问题4]</code>，我们使用 <code>geoip:private</code> 类别来指定 <code>[direct-out]</code></li><li>解决前面的 <code>[问题7]</code>，我们使用 <code>geoip:cn</code> 类别来指定 <code>[direct-out]</code></li><li>解决前面的 <code>[问题8]</code>，由于 <code>geoip</code> 中没有【非中国 IP】这个分类（因为这等于要收集全世界的 IP 段），所以我们用隐藏规则代替，也就是将 <code>[proxy-out-vless]</code> 放在第一个出站</li></ol><p>上述配置如下：</p><div class="language-json line-numbers-mode" data-ext="json" data-title="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;routing&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;domainStrategy&quot;</span><span class="token operator">:</span> <span class="token string">&quot;AsIs&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;rules&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token comment">// 本机内部地址、局域网地址直连</span>
      <span class="token punctuation">{</span>
        <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;field&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;ip&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;geoip:private&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token property">&quot;outboundTag&quot;</span><span class="token operator">:</span> <span class="token string">&quot;direct-out&quot;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token comment">// 国内IP集直连</span>
      <span class="token punctuation">{</span>
        <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;field&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;ip&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;geoip:cn&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token property">&quot;outboundTag&quot;</span><span class="token operator">:</span> <span class="token string">&quot;direct-out&quot;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-3-基于指定-ip-地址分流" tabindex="-1"><a class="header-anchor" href="#_5-3-基于指定-ip-地址分流"><span>5.3 基于指定 IP 地址分流</span></a></h3><p>与 <code>geosite.dat</code> 规则文件十分类似的，我们还有 <code>geoip.dat</code> 这个规则文件，它是供【路由功能】驱使的<strong>第二个神兵利器</strong>，它致力于为用户提供成熟完善的【IP 分类表】。让用户可以简单的通过 <code>geoip:xxx</code> 这种格式方便的调用任何子类，定制符合自身需求的路由规则 。</p><ol><li>解决前面的 <code>[问题5]</code>，我们使用 <code>ip: &quot;223.5.5.5&quot;</code> 来指定 <code>[direct-out]</code></li><li>解决前面的 <code>[问题6]</code>，我们使用 <code>ip: &quot;1.1.1.1&quot;</code> 来指定 <code>[proxy-out-vless]</code></li></ol><p>上述配置如下：</p><div class="language-json line-numbers-mode" data-ext="json" data-title="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;routing&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;domainStrategy&quot;</span><span class="token operator">:</span> <span class="token string">&quot;AsIs&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;rules&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token comment">// 指定IP地址直连</span>
      <span class="token punctuation">{</span>
        <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;field&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;ip&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;223.5.5.5&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token property">&quot;outboundTag&quot;</span><span class="token operator">:</span> <span class="token string">&quot;direct-out&quot;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token comment">// 指定IP地址转发VPS</span>
      <span class="token punctuation">{</span>
        <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;field&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;ip&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;1.1.1.1&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token property">&quot;outboundTag&quot;</span><span class="token operator">:</span> <span class="token string">&quot;proxy-out-vless&quot;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-4-基于协议类型分流-protocol-等" tabindex="-1"><a class="header-anchor" href="#_5-4-基于协议类型分流-protocol-等"><span>5.4 基于协议类型分流：<code>[protocol]</code> 等</span></a></h3><ol><li>解决前面的 <code>[问题9]</code>，我们使用 <code>&quot;protocol&quot;: [&quot;bittorrent&quot;]</code> 类别来指定 <code>[direct-out]</code></li></ol><div class="custom-container tip"><p class="custom-container-title">提示</p><p>你需要打开入站代理中的 <code>sniffing</code> 才能使用此种方式分流。</p></div><div class="language-json line-numbers-mode" data-ext="json" data-title="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;routing&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;domainStrategy&quot;</span><span class="token operator">:</span> <span class="token string">&quot;AsIs&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;rules&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token comment">// 指定 BT 协议直连</span>
      <span class="token punctuation">{</span>
        <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;field&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;protocol&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;bittorrent&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token property">&quot;outboundTag&quot;</span><span class="token operator">:</span> <span class="token string">&quot;direct-out&quot;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-5-基于更多条件的分流" tabindex="-1"><a class="header-anchor" href="#_5-5-基于更多条件的分流"><span>5.5 基于更多条件的分流</span></a></h3><p>到目前位置，我们仍然只讲了【路由功能】分流能力的冰山一角！因为它还支持很多其他的判断条件！我在此简单罗列如下：</p><p>本文已经讲过的：</p><ul><li><code>inboundTag</code></li><li><code>domain</code></li><li><code>ip</code></li><li><code>protocol</code></li></ul><p>本文尚未讲到的：</p><ul><li><code>port</code></li><li><code>sourcePort</code></li><li><code>network</code></li><li><code>source</code></li><li><code>user</code></li><li><code>attrs</code></li></ul>`,22),y=s("code",null,"level-1",-1),h=o(`<h2 id="_6-霸业初定-路由规则整体回顾" tabindex="-1"><a class="header-anchor" href="#_6-霸业初定-路由规则整体回顾"><span>6. “霸业初定”：路由规则整体回顾</span></a></h2><p>到现在为止，我们已经累积出了一套战略雄伟、战术精准的路由规则，为了避免混乱，现在就对它进行一次完整的整理和回顾。</p><div class="custom-container warning"><p class="custom-container-title">注意</p><p>路由生效的顺序是：【从上往下，依次判断】，所以我一般推荐的规则顺序是：</p><p><code>[1-block] --&gt; [2-direct] --&gt; [3-proxy] --&gt; [4-first-outbound]</code></p></div><div class="language-json line-numbers-mode" data-ext="json" data-title="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;routing&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;domainStrategy&quot;</span><span class="token operator">:</span> <span class="token string">&quot;AsIs&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;rules&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token comment">// [1-block 广告流量屏蔽]</span>
      <span class="token comment">// 1.1  广告域名集屏蔽</span>
      <span class="token punctuation">{</span>
        <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;field&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;domain&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;geosite:category-ads-all&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token property">&quot;outboundTag&quot;</span><span class="token operator">:</span> <span class="token string">&quot;block&quot;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token comment">// [2-direct 国内流量直连]</span>
      <span class="token comment">// 2.1 国内域名集、指定子域名直连</span>
      <span class="token punctuation">{</span>
        <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;field&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;domain&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;geosite:cn&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;full:direct.yourdomain.com&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token property">&quot;outboundTag&quot;</span><span class="token operator">:</span> <span class="token string">&quot;direct-out&quot;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token comment">// 2.2 本机内部地址+局域网、国内IP、指定IP直连</span>
      <span class="token punctuation">{</span>
        <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;field&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;ip&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;geoip:private&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;geoip:cn&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;223.5.5.5&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token property">&quot;outboundTag&quot;</span><span class="token operator">:</span> <span class="token string">&quot;direct-out&quot;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token comment">// 2.3 BT协议流量直连</span>
      <span class="token punctuation">{</span>
        <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;field&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;protocol&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;bittorrent&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token property">&quot;outboundTag&quot;</span><span class="token operator">:</span> <span class="token string">&quot;direct-out&quot;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token comment">// [3-proxy 国外流量转发VPS]</span>
      <span class="token comment">// 3.1 国外域名集、指定子域名、指定泛域名转发VPS</span>
      <span class="token punctuation">{</span>
        <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;field&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;domain&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token string">&quot;geosite:geolocation-!cn&quot;</span><span class="token punctuation">,</span>
          <span class="token string">&quot;full:proxy.yourdomain.com&quot;</span><span class="token punctuation">,</span>
          <span class="token string">&quot;yourdomain.com&quot;</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token property">&quot;outboundTag&quot;</span><span class="token operator">:</span> <span class="token string">&quot;proxy-out-vless&quot;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token comment">// 3.2 指定IP转发VPS</span>
      <span class="token punctuation">{</span>
        <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;field&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;ip&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;1.1.1.1&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token property">&quot;outboundTag&quot;</span><span class="token operator">:</span> <span class="token string">&quot;proxy-out-vless&quot;</span>
      <span class="token punctuation">}</span>
      <span class="token comment">// [4-default-routing 第一条出站]</span>
      <span class="token comment">// 没有匹配到任何规则的流量，默认使用第一条出站处理</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>此时，路由规则其实变成了：</p>`,5),_=o(`<p>至于第一条出站是 <code>[direct-out]</code> 还是 <code>[proxy-out-vless]</code>，这就全看你的需求了。</p><h2 id="_7-路由配置常见错误" tabindex="-1"><a class="header-anchor" href="#_7-路由配置常见错误"><span>7. 路由配置常见错误</span></a></h2><p>请大家注意看，我上面每一条路由规则，都是一个独立的匹配依据，只有这样才能确保生效。而新人在自定义路由规则时常犯的一个错误就是：<strong>在一条规则内同时匹配了多种不同的匹配依据，造成匹配无效。</strong></p><p>比如，他希望实现的配置是：</p><ol><li>自己的 <code>direct.yourdomain.com</code> 直连</li><li>国内 DNS 查询（如 <code>223.5.5.5</code>）直连</li></ol><h3 id="_7-1-错误示范" tabindex="-1"><a class="header-anchor" href="#_7-1-错误示范"><span>7.1 错误示范</span></a></h3><p>为了实现上面的目标，他写出了以下路由规则：</p><div class="language-json line-numbers-mode" data-ext="json" data-title="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;routing&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;domainStrategy&quot;</span><span class="token operator">:</span> <span class="token string">&quot;AsIs&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;rules&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;field&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;ip&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;223.5.5.5&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token property">&quot;domain&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;full:direct.yourdomain.com&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token property">&quot;outboundTag&quot;</span><span class="token operator">:</span> <span class="token string">&quot;direct-out&quot;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>你能看出这里面的错误吗？乍一看，似乎是对的？</p><div class="custom-container warning"><p class="custom-container-title">注意</p><p><strong>同一个规则之内，各个依据需要同时成立，才会匹配成功</strong>，逻辑关系是 <code>和</code>，而不是 <code>或</code>。</p></div><p>换言之，这条规则的意思是：【当你访问的 <code>目标 = direct.yourdomain.com</code>, <strong>并且</strong> 同时还满足 <code>目标 = 223.5.5.5</code> 时，<code>Xray</code> 才会将流量转发给 <code>[direct-out]</code> 直连出站】</p><p>很显然，一个目标不可能同时等于两个不同的值，所以这不但是一个永远不可能实现的无效规则，更与原本的目标风马牛不相及。</p><h3 id="_7-2-正确示范" tabindex="-1"><a class="header-anchor" href="#_7-2-正确示范"><span>7.2 正确示范</span></a></h3><p>正确示范，自然就是将不同的匹配依据独立出来：</p><div class="language-json line-numbers-mode" data-ext="json" data-title="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;routing&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;domainStrategy&quot;</span><span class="token operator">:</span> <span class="token string">&quot;AsIs&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;rules&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;field&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;ip&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;223.5.5.5&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token property">&quot;outboundTag&quot;</span><span class="token operator">:</span> <span class="token string">&quot;direct-out&quot;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;field&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;domain&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;full:direct.yourdomain.com&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token property">&quot;outboundTag&quot;</span><span class="token operator">:</span> <span class="token string">&quot;direct-out&quot;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>其实，第 6 点已经是我整理过的规则了，原则就是【相同的匹配依据可以合并，不同的匹配依据保持独立】。</p><h2 id="_8-明修栈道、暗渡陈仓" tabindex="-1"><a class="header-anchor" href="#_8-明修栈道、暗渡陈仓"><span>8. 明修栈道、暗渡陈仓</span></a></h2><blockquote><p><code>[domain]</code> 转化 <code>[ip]</code> 的密道：<code>domainStrategy</code></p></blockquote><p>我们在 5.4 中提交了多种流量判断的【依据】，其中一种是域名 <code>[domain]</code>、一种是 <code>[IP]</code>。</p><p>如果你初步了解过 DNS 的运作过程，就会知道，我们对一个域名 <code>[domain]</code> 发起访问请求时，其实需要先向 <code>DNS</code> 发起请求来解析域名 <code>[domain]</code> 对应的 <code>[IP]</code>，在得到 <code>[IP]</code> 后再向它发起实际请求。</p><p>所以，面对入站的一次域名请求，<code>Xray</code> 其实有两次机会去判断它的类型。那么，究竟是否要用这两次机会呢？这就是由 <code>domainStrategy</code> 这个配置来决定的。它有三个选项：</p><ul><li><code>AsIs</code></li><li><code>IPIfNonMatch</code></li><li><code>IPOnDemand</code></li></ul><p>按么我们逐个来解释一下：</p><h3 id="_8-1-域名策略-asis" tabindex="-1"><a class="header-anchor" href="#_8-1-域名策略-asis"><span>8.1 域名策略: <code>&quot;AsIs&quot;</code></span></a></h3><p>就是 &quot;As Domain Is&quot;，也就是说 【域名什么样，就什么样，不多折腾】。</p><p>简单粗暴理解就是说【仅用 <code>[domain]</code> 来匹配】。</p><div class="custom-container tip"><p class="custom-container-title">提示</p><p><code>AsIs</code> 的实际意义为 【如原先所示，不加修改】，🍉 老师这里描述的不是很恰当。</p></div><p>这个方式的处理都在 <code>Xray</code> 内部完成，没有与外界的数据往来，所以速度最快。它的兜底策略也很清晰：即前面所说的、无法匹配的域名自动转入第一条出站处理。所以，对于常规使用路由功能这最推荐的策略。</p><h3 id="_8-2-域名策略-ipifnonmatch" tabindex="-1"><a class="header-anchor" href="#_8-2-域名策略-ipifnonmatch"><span>8.2 域名策略: <code>&quot;IPIfNonMatch&quot;</code></span></a></h3><p>就是 &quot;lookup IP if (there&#39;s) no matching rule&quot;，也就是说【如果其他所有规则都匹配不上，那就转化成 <code>IP</code> 去匹配 <code>IP</code> 规则】。</p><p>简单粗暴理解就是说【先把访问目标和其他所有类型规则匹配，如果匹配不上，那就通过 <code>DNS</code> 查询转化成 <code>IP</code>，再从头和所有规则匹配一次】。</p><p>该策略下没有命中任何规则的这一部分域名，会需要再经历 <code>DNS</code> 查询过程、以及第二轮规则匹配的过程，其耗时会多于 <code>AsIs</code> 策略，所以并不是首选推荐的策略。</p><h3 id="_8-3-域名策略-ipondemand" tabindex="-1"><a class="header-anchor" href="#_8-3-域名策略-ipondemand"><span>8.3 域名策略: <code>&quot;IPOnDemand&quot;</code></span></a></h3><p>这里其实说 <code>Demand IP</code> 更准确些，也就是说【当匹配时碰到任何基于 IP 的规则，将域名立即解析为 IP 进行匹配】。</p><p>简单粗暴理解就是说【只要路由规则中有 <code>IP</code> 类规则，那么所有基于域名 <code>[domain]</code> 的请求都要解析成 <code>[IP]</code> 然后去匹配 <code>[IP]</code> 类规则】。</p><p>它要对所有首次域名访问进行 <code>DNS</code> 解析，所以首次查询比较耗时。虽然由于 <code>Xray</code> 中 <code>DNS</code> 缓存机制的存在，后续对相同域名的访问速度会重回巅峰，但总体来说也不是首选推荐的策略。</p><div class="custom-container warning"><p class="custom-container-title">啰嗦君</p><p><code>domainStrategy</code> 仅对域名生效，不要搞混了哦~</p></div><h2 id="_9-思考题" tabindex="-1"><a class="header-anchor" href="#_9-思考题"><span>9. 思考题</span></a></h2><p>迄今为止，我们都是在【单入站】和【单出站】的基础上，讲解【路由】内部的各种配置逻辑。</p><p>但是，如你所知，<code>Xray</code> 本身是支持多端口，多协议的。那么，如果我问你：</p><ol><li>我希望 <code>VLESS</code> 协议将我日常的网页浏览和 APP 流量转发给美国的大流量服务器</li><li>我希望 <code>trojan</code> 协议将我的所有 Netflix 流量转发给日本的服务器解锁各种二次元</li><li>我希望 <code>shadowsocks</code> 协议将我所有的游戏流量转发给香港的服务器达到最低的延迟</li><li>我希望有一个独立的端口，能够把 <code>telegram</code> 的流量全都转发给 VPS</li><li>我希望有一个独立的端口，能够把 <code>bittorrent</code> 下载流量全都转发给欧洲大盘鸡</li><li>我希望......</li></ol><p>这些想法，是否能通过【路由】功能配置实现呢？</p><p>答案当然是 <strong>【完全可以】</strong> 啦！ 但是这些对于 <code>level-1</code> 来说已经超纲了，就留给各位自由的探索吧！</p><h2 id="_10-结语" tabindex="-1"><a class="header-anchor" href="#_10-结语"><span>10. 结语</span></a></h2><p>至此，<code>Xray</code> 的【路由】功能就介绍完了。希望本文能够对你理解 <code>Xray</code> 的灵活有所帮助。</p><h2 id="_11-尾注" tabindex="-1"><a class="header-anchor" href="#_11-尾注"><span>11. 尾注</span></a></h2>`,46),f=s("li",null,"🍉🍉🍉🍉🍉 😄",-1);function A(E,B){const t=p("RouterLink"),c=p("Mermaid");return l(),u("div",null,[r,k,s("p",null,[n("在 "),a(t,{to:"/document/level-1/routing-lv1-part1.html"},{default:e(()=>[n("《路由 (routing) 功能简析（上）》")]),_:1}),n(" 中，我们已经对【路由】功能的工作逻辑有了清晰的理解，也基于 "),v,n(" 文件做了简单的域名分流配置。")]),m,s("ol",null,[q,s("li",null,[n("另外，"),b,n(" 还支持正则表达式等匹配方式。详情请参考 "),a(t,{to:"/config/base/routing/"},{default:e(()=>[n("《基础配置模块 - 路由》文档")]),_:1})])]),g,s("p",null,[n("但这些内容实在是过多，全部展开就远远不是 "),y,n(" 的内容了，所以，需要这些复杂条件的朋友，请仔细阅读 "),a(t,{to:"/config/base/routing/"},{default:e(()=>[n("《基础配置模块 - 路由》文档")]),_:1}),n(" 自学哦！有问题就去 TG 群里面问问吧！")]),h,a(c,{id:"mermaid-304",code:"%20%20%20%20graph%20LR;%0A%0A%20%20%20%20S(APP%E6%95%B0%E6%8D%AE)%20.-%3E%20I%5B%E5%85%A5%E7%AB%99%5D%0A%0A%20%20%20%20subgraph%20Xray%0A%20%20%20%20I%20--%3E%20R%5B%E8%B7%AF%E7%94%B1%5D%20--%20%22geosite:category-ads-all%22%20--%3E%20O1%5Bblock%5D%0A%0A%20%20%20%20R%5B%E8%B7%AF%E7%94%B1%5D%20--%20%22geosite:cn%22%20--%3E%20O2%5Bdirect%5D%0A%20%20%20%20R%5B%E8%B7%AF%E7%94%B1%5D%20--%20%22direct.yourdomain.com%22%20--%3E%20O2%5Bdirect%5D%0A%20%20%20%20R%5B%E8%B7%AF%E7%94%B1%5D%20--%20%22geoip:private%22%20--%3E%20O2%5Bdirect%5D%0A%20%20%20%20R%5B%E8%B7%AF%E7%94%B1%5D%20--%20%22geoip:cn%22%20--%3E%20O2%5Bdirect%5D%0A%20%20%20%20R%5B%E8%B7%AF%E7%94%B1%5D%20--%20%22ip:223.5.5.5%22%20--%3E%20O2%5Bdirect%5D%0A%20%20%20%20R%5B%E8%B7%AF%E7%94%B1%5D%20--%20%22protocol:bittorrent%22%20--%3E%20O2%5Bdirect%5D%0A%0A%20%20%20%20R%5B%E8%B7%AF%E7%94%B1%5D%20--%20%22geosite:geolocation-!cn%22%20--%3E%20O3%5Bproxy%5D%0A%20%20%20%20R%5B%E8%B7%AF%E7%94%B1%5D%20--%20%22proxy.yourdomain.com%22%20--%3E%20O3%5Bproxy%5D%0A%20%20%20%20R%5B%E8%B7%AF%E7%94%B1%5D%20--%20%22*.yourdomain.com%22%20--%3E%20O3%5Bproxy%5D%0A%20%20%20%20R%5B%E8%B7%AF%E7%94%B1%5D%20--%20%22ip:1.1.1.1%22%20--%3E%20O3%5Bproxy%5D%0A%0A%20%20%20%20R%5B%E8%B7%AF%E7%94%B1%5D%20-.%20%22%E6%B2%A1%E6%9C%89%E5%91%BD%E4%B8%AD%E8%A7%84%E5%88%99%E7%9A%84%E6%B5%81%E9%87%8F%22%20.-%3E%20O4%5B%E7%AC%AC%E4%B8%80%E6%9D%A1%E5%87%BA%E7%AB%99%5D%0A%0A%20%20%20%20end%0A%0A%20%20%20%20O2%20.-%3E%20D(%E5%9B%BD%E5%86%85%E6%9C%8D%E5%8A%A1%E5%99%A8)%0A%20%20%20%20O3%20.-%3E%20V(VPS)%0A%0A%20%20%20%20O1:::redclass%0A%20%20%20%20V:::greyclass%0A%20%20%20%20S:::greyclass%0A%20%20%20%20R:::routingclass%0A%20%20%20%20classDef%20redclass%20fill:#FF0000%0A%20%20%20%20classDef%20greyclass%20fill:#C0C0C0%0A%20%20%20%20classDef%20routingclass%20fill:#FFFFDE,stroke:#000000%0A%0A"}),_,s("ul",null,[s("li",null,[n("现在你可以重新阅读一遍 "),a(t,{to:"/config/routing.html"},{default:e(()=>[n("路由")]),_:1}),n("，看看是否有更加深刻的理解。")]),f])])}const D=i(d,[["render",A],["__file","routing-lv1-part2.html.vue"]]);export{D as default};
