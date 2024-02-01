import{_ as r,r as s,o as d,c as i,a as n,b as a,d as o,w as c,e as t}from"./app-kDZ-w46R.js";const u={},b=t(`<h1 id="fallback-回落" tabindex="-1"><a class="header-anchor" href="#fallback-回落"><span>Fallback 回落</span></a></h1><blockquote><p><strong>Fallback 是 Xray 的最强大功能之一, 可有效防止主动探测, 自由配置常用端口多服务共享</strong></p></blockquote><p>fallback 为 Xray 提供了高强度的防主动探测性, 并且具有独创的首包回落机制.</p><p>fallback 也可以将不同类型的流量根据 path 进行分流, 从而实现一个端口, 多种服务共享.</p><p>目前您可以在使用 VLESS 或者 trojan 协议时, 通过配置 fallbacks 来使用回落这一特性, 并且创造出非常丰富的组合玩法.</p><h2 id="fallbacks-配置" tabindex="-1"><a class="header-anchor" href="#fallbacks-配置"><span>fallbacks 配置</span></a></h2><div class="language-json line-numbers-mode" data-ext="json" data-title="json"><pre class="language-json"><code>  <span class="token property">&quot;fallbacks&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;dest&quot;</span><span class="token operator">:</span> <span class="token number">80</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><code>fallbacks</code>: [ <a href="#fallbackobject">FallbackObject</a> ]</p></blockquote><p>一个数组，包含一系列强大的回落分流配置。</p><h3 id="fallbackobject" tabindex="-1"><a class="header-anchor" href="#fallbackobject"><span>FallbackObject</span></a></h3><div class="language-json line-numbers-mode" data-ext="json" data-title="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;alpn&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;path&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;dest&quot;</span><span class="token operator">:</span> <span class="token number">80</span><span class="token punctuation">,</span>
  <span class="token property">&quot;xver&quot;</span><span class="token operator">:</span> <span class="token number">0</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong><code>fallbacks</code> 是一个数组，这里是其中一个子元素的配置说明。</strong></p><p><code>fallbacks</code> 项是可选的，只能用于 TCP+TLS 传输组合</p>`,13),k=n("code",null,'"alpn":["http/1.1"]',-1),h=t("<p>通常，你需要先设置一组 <code>alpn</code> 和 <code>path</code> 均省略或为空的默认回落，然后再按需配置其它分流。</p><p>VLESS 会把 TLS 解密后首包长度 &lt; 18 或协议版本无效、身份认证失败的流量转发到 <code>dest</code> 指定的地址。</p><p>其它传输组合必须删掉 <code>fallbacks</code> 项或所有子元素，此时也不会开启 Fallback，VLESS 会等待读够所需长度，协议版本无效或身份认证失败时，将直接断开连接。</p><blockquote><p><code>name</code>: string</p></blockquote><p>尝试匹配 TLS SNI(Server Name Indication)，空为任意，默认为 &quot;&quot;</p><blockquote><p><code>alpn</code>: string</p></blockquote><p>尝试匹配 TLS ALPN 协商结果，空为任意，默认为 &quot;&quot;</p>",7),_=n("code",null,"realAlpn =",-1),m=n("code",null,'"h2"',-1),f=n("code",null,'"alpn":["h2","http/1.1"]',-1),v=t('<div class="custom-container tip"><p class="custom-container-title">提示</p><p>Fallback 内设置的 <code>alpn</code> 是匹配实际协商出的 ALPN，而 Inbound TLS 设置的 <code>alpn</code> 是握手时可选的 ALPN 列表，两者含义不同。</p></div><blockquote><p><code>path</code>: string</p></blockquote><p>尝试匹配首包 HTTP PATH，空为任意，默认为空，非空则必须以 <code>/</code> 开头，不支持 h2c。</p><p>智能：有需要时，VLESS 才会尝试看一眼 PATH（不超过 55 个字节；最快算法，并不完整解析 HTTP），若成功，输出 INFO 日志 <code>realPath =</code>。 用途：分流其它 inbound 的 WebSocket 流量或 HTTP 伪装流量，没有多余处理、纯粹转发流量，理论性能比 Nginx 更强。</p><p>注意：<strong>fallbacks 所在入站本身必须是 TCP+TLS</strong>，这是分流至其它 WS 入站用的，被分流的入站则无需配置 TLS。</p><blockquote><p><code>dest</code>: string | number</p></blockquote><p>决定 TLS 解密后 TCP 流量的去向，目前支持两类地址：（该项必填，否则无法启动）</p>',7),g=n("li",null,[a("TCP，格式为 "),n("code",null,'"addr:port"'),a("，其中 addr 支持 IPv4、域名、IPv6，若填写域名，也将直接发起 TCP 连接（而不走内置的 DNS）。")],-1),q=n("code",null,'"/dev/shm/domain.socket"',-1),x=n("code",null,"@",-1),T={href:"https://www.man7.org/linux/man-pages/man7/unix.7.html",target:"_blank",rel:"noopener noreferrer"},S=n("code",null,"@@",-1),P=n("p",null,[a("若只填 port，数字或字符串均可，形如 "),n("code",null,"80"),a("、"),n("code",null,'"80"'),a("，通常指向一个明文 http 服务（addr 会被补为 "),n("code",null,'"127.0.0.1"'),a("）。")],-1),L=n("blockquote",null,[n("p",null,[n("code",null,"xver"),a(": number")])],-1),j={href:"https://www.haproxy.org/download/2.2/doc/proxy-protocol.txt",target:"_blank",rel:"noopener noreferrer"},y=n("p",null,"目前填 1 或 2，功能完全相同，只是结构不同，且前者可打印，后者为二进制。Xray 的 TCP 和 WS 入站均已支持接收 PROXY protocol。",-1),N={class:"custom-container warning"},I=n("p",{class:"custom-container-title"},"注意",-1),w={href:"https://docs.nginx.com/nginx/admin-guide/load-balancer/using-proxy-protocol/#configuring-nginx-to-accept-the-proxy-protocol",target:"_blank",rel:"noopener noreferrer"},F=n("h3",{id:"补充说明",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#补充说明"},[n("span",null,"补充说明")])],-1),C=n("ul",null,[n("li",null,"将匹配到最精确的子元素，与子元素的排列顺序无关。若配置了几个 alpn 和 path 均相同的子元素，则会以最后的为准。"),n("li",null,"回落分流均是解密后 TCP 层的转发，而不是 HTTP 层，只在必要时检查首包 PATH。"),n("li",null,[a("您可以查看更多的关于 Fallbacks 的使用技巧和心得 "),n("ul",null,[n("li",null,[n("a",{href:"../../document/level-1/fallbacks-lv1"},"Fallbacks 功能简析")])])])],-1),V={id:"fallbacks-设计理论",tabindex:"-1"},A={class:"header-anchor",href:"#fallbacks-设计理论"};function E(H,O){const l=s("RouterLink"),e=s("ExternalLinkIcon"),p=s("Badge");return d(),i("div",null,[b,n("ul",null,[n("li",null,[a("该项有子元素时，"),o(l,{to:"/config/transport.html#tlsobject"},{default:c(()=>[a("Inbound TLS")]),_:1}),a(" 需设置 "),k,a("。**")])]),h,n("p",null,[a("有需要时，VLESS 才会尝试读取 TLS ALPN 协商结果，若成功，输出 info "),_,a(" 到日志。 用途：解决了 Nginx 的 h2c 服务不能同时兼容 http/1.1 的问题，Nginx 需要写两行 listen，分别用于 1.1 和 h2c。 注意：fallbacks alpn 存在 "),m,a(" 时，"),o(l,{to:"/config/transport.html#tlsobject"},{default:c(()=>[a("Inbound TLS")]),_:1}),a(" 需设置 "),f,a("，以支持 h2 访问。")]),v,n("ol",null,[g,n("li",null,[a("Unix domain socket，格式为绝对路径，形如 "),q,a("，可在开头加 "),x,a(" 代表 "),n("a",T,[a("abstract"),o(e)]),a("，"),S,a(" 则代表带 padding 的 abstract。")])]),P,L,n("p",null,[a("发送 "),n("a",j,[a("PROXY protocol"),o(e)]),a("，专用于传递请求的真实来源 IP 和端口，填版本 1 或 2，默认为 0，即不发送。若有需要建议填 1。")]),y,n("div",N,[I,n("p",null,[a("若你正在 "),n("a",w,[a("配置 Nginx 接收 PROXY protocol"),o(e)]),a("，除了设置 proxy_protocol 外，还需设置 set_real_ip_from，否则可能会出问题。")])]),F,C,n("h2",V,[n("a",A,[n("span",null,[a("Fallbacks 设计理论 "),o(p,{text:"WIP",type:"warning"})])])])])}const B=r(u,[["render",E],["__file","fallback.html.vue"]]);export{B as default};
