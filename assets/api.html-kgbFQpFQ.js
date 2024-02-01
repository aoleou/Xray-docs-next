import{_ as r,r as o,o as c,c as l,a,b as n,d as s,w as i,e as p}from"./app-kDZ-w46R.js";const u={},d=a("h1",{id:"api-interface",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#api-interface"},[a("span",null,"API Interface")])],-1),v={href:"https://grpc.io/",target:"_blank",rel:"noopener noreferrer"},h=p(`<p>Please refer to the <a href="#related-configuration">related configuration</a> in this section.</p><div class="custom-container warning"><p class="custom-container-title">Warning</p><p>Most users do not need to use this API. Novices can ignore this item directly.</p></div><h2 id="apiobject" tabindex="-1"><a class="header-anchor" href="#apiobject"><span>ApiObject</span></a></h2><p><code>ApiObject</code> corresponds to the <code>api</code> item in the configuration file.</p><div class="language-json line-numbers-mode" data-ext="json" data-title="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;api&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;tag&quot;</span><span class="token operator">:</span> <span class="token string">&quot;api&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;services&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;HandlerService&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;LoggerService&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;StatsService&quot;</span><span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><code>tag</code>: string</p></blockquote><p>Outbound proxy identifier.</p><blockquote><p><code>services</code>: [string]</p></blockquote><p>List of enabled APIs, optional values can be found in <a href="#supported-api-list">Supported API List</a>.</p><h2 id="related-configuration" tabindex="-1"><a class="header-anchor" href="#related-configuration"><span>Related Configuration</span></a></h2><p>An api inbound can be added to the inbounds configuration.</p><div class="language-json line-numbers-mode" data-ext="json" data-title="json"><pre class="language-json"><code><span class="token property">&quot;inbounds&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    <span class="token property">&quot;listen&quot;</span><span class="token operator">:</span> <span class="token string">&quot;127.0.0.1&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;port&quot;</span><span class="token operator">:</span> <span class="token number">10085</span><span class="token punctuation">,</span>
    <span class="token property">&quot;protocol&quot;</span><span class="token operator">:</span> <span class="token string">&quot;dokodemo-door&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;settings&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;address&quot;</span><span class="token operator">:</span> <span class="token string">&quot;127.0.0.1&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;tag&quot;</span><span class="token operator">:</span> <span class="token string">&quot;api&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Add routing rules for the api inbound in the routing configuration.</p><div class="language-json line-numbers-mode" data-ext="json" data-title="json"><pre class="language-json"><code><span class="token property">&quot;routing&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token property">&quot;rules&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;inboundTag&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token string">&quot;api&quot;</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token property">&quot;outboundTag&quot;</span><span class="token operator">:</span> <span class="token string">&quot;api&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;field&quot;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="supported-api-list" tabindex="-1"><a class="header-anchor" href="#supported-api-list"><span>Supported API List</span></a></h2><h3 id="handlerservice" tabindex="-1"><a class="header-anchor" href="#handlerservice"><span>HandlerService</span></a></h3><p>APIs that modify the inbound and outbound proxies, with the following available functions:</p><ul><li>Add a new inbound proxy;</li><li>Add a new outbound proxy;</li><li>Delete an existing inbound proxy;</li><li>Delete an existing outbound proxy;</li><li>Add a user to an inbound proxy (VMess, VLESS, Trojan, and Shadowsocks(v1.3.0+) only);</li><li>Delete a user from an inbound proxy (VMess, VLESS, Trojan, and Shadowsocks(v1.3.0+) only);</li></ul><h3 id="loggerservice" tabindex="-1"><a class="header-anchor" href="#loggerservice"><span>LoggerService</span></a></h3><p>Supports restarting the built-in logger, which can be used in conjunction with logrotate to perform operations on log files.</p><h3 id="statsservice" tabindex="-1"><a class="header-anchor" href="#statsservice"><span>StatsService</span></a></h3>`,21),b=p(`<h3 id="reflectionservice" tabindex="-1"><a class="header-anchor" href="#reflectionservice"><span>ReflectionService</span></a></h3><p>Supports gRPC clients to obtain the list of APIs from the server.</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ grpcurl <span class="token parameter variable">-plaintext</span> localhost:10085 list
grpc.reflection.v1alpha.ServerReflection
v2ray.core.app.proxyman.command.HandlerService
v2ray.core.app.stats.command.StatsService
xray.app.proxyman.command.HandlerService
xray.app.stats.command.StatsService
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="api-calling-example" tabindex="-1"><a class="header-anchor" href="#api-calling-example"><span>API Calling Example</span></a></h2>`,4),m={href:"https://github.com/XTLS/Xray-API-documents",target:"_blank",rel:"noopener noreferrer"};function g(k,f){const e=o("ExternalLinkIcon"),t=o("RouterLink");return c(),l("div",null,[d,a("p",null,[n("API interface configuration provides a set of APIs based on "),a("a",v,[n("gRPC"),s(e)]),n(" for remote invocation.")]),a("p",null,[n("The interface can be enabled through the api configuration module. When the api configuration is enabled, Xray will create an outbound proxy automatically. All incoming API connections need to be manually routed to this outbound proxy through "),s(t,{to:"/en/config/routing.html"},{default:i(()=>[n("routing rule configuration")]),_:1}),n(".")]),h,a("p",null,[n("Built-in data statistics service, see "),s(t,{to:"/en/config/stats.html"},{default:i(()=>[n("Statistics Information")]),_:1}),n(" for details.")]),b,a("p",null,[a("a",m,[n("Xray-API-documents"),s(e)]),n(" @crossfw")])])}const x=r(u,[["render",g],["__file","api.html.vue"]]);export{x as default};
