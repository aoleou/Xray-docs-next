import{_ as l,r as i,o as r,c as u,a as e,b as o,d as t,w as c,e as n}from"./app-kDZ-w46R.js";const d={},p=e("h1",{id:"routing",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#routing"},[e("span",null,"Routing")])],-1),h=e("p",null,"The routing module can send inbound data through different outbound connections according to different rules to achieve on-demand proxying.",-1),m=e("p",null,"A common use case is to split domestic and foreign traffic. Xray can use its internal mechanisms to determine the traffic from different regions and then send them to different outbound proxies.",-1),q={href:"https://xtls.github.io/document/level-1/routing-lv1-part1.html",target:"_blank",rel:"noopener noreferrer"},f=n(`<h2 id="routingobject" tabindex="-1"><a class="header-anchor" href="#routingobject"><span>RoutingObject</span></a></h2><p><code>RoutingObject</code> corresponds to the <code>routing</code> item in the configuration file.</p><div class="language-json line-numbers-mode" data-ext="json" data-title="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;routing&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;domainStrategy&quot;</span><span class="token operator">:</span> <span class="token string">&quot;AsIs&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;domainMatcher&quot;</span><span class="token operator">:</span> <span class="token string">&quot;hybrid&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;rules&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;balancers&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><code>domainStrategy</code>: &quot;AsIs&quot; | &quot;IPIfNonMatch&quot; | &quot;IPOnDemand&quot;</p></blockquote><p>The domain name resolution strategy, which uses different strategies based on different settings.</p><ul><li><p><code>&quot;AsIs&quot;</code>: Use only the domain name for routing selection. Default value.</p></li><li><p><code>&quot;IPIfNonMatch&quot;</code>: If the domain name does not match any rule, resolve the domain name into an IP address (A record or AAAA record) and match it again;</p><ul><li>When a domain name has multiple A records, it will try to match all A records until one of them matches a rule;</li><li>The resolved IP only works for routing selection, and the original domain name is still used in the forwarded packets;</li></ul></li><li><p><code>&quot;IPOnDemand&quot;</code>: If any IP-based rules are encountered during matching, immediately resolve the domain name into an IP address for matching;</p></li></ul><blockquote><p><code>domainMatcher</code>: &quot;hybrid&quot; | &quot;linear&quot;</p></blockquote><p>The domain name matching algorithm, which uses different algorithms based on different settings. This option affects all <code>RuleObject</code> that do not have a separately specified matching algorithm.</p><ul><li><code>&quot;hybrid&quot;</code>: Use the new domain name matching algorithm, which is faster and takes up less space. Default value.</li><li><code>&quot;linear&quot;</code>: Use the original domain name matching algorithm.</li></ul><blockquote><p><code>rules</code>: [<a href="#ruleobject">RuleObject</a>]</p></blockquote><p>An array corresponding to a list of rules.</p><p>For each connection, the routing will judge these rules from top to bottom in order. When it encounters the first effective rule, it will forward the connection to the <code>outboundTag</code> or <code>balancerTag</code> specified by the rule.</p><div class="custom-container tip"><p class="custom-container-title">Tip</p><p>When no rules match, the traffic is sent out by the first outbound by default.</p></div><blockquote><p><code>balancers</code>: [ <a href="#balancerobject">BalancerObject</a> ]</p></blockquote><p>An array corresponding to a list of load balancers.</p><p>When a rule points to a load balancer, Xray selects an outbound through this load balancer, and then it forwards the traffic through it.</p><h3 id="ruleobject" tabindex="-1"><a class="header-anchor" href="#ruleobject"><span>RuleObject</span></a></h3><div class="language-json line-numbers-mode" data-ext="json" data-title="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;domainMatcher&quot;</span><span class="token operator">:</span> <span class="token string">&quot;hybrid&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;field&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;domain&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;baidu.com&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;qq.com&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;geosite:cn&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;ip&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;0.0.0.0/8&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;10.0.0.0/8&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;fc00::/7&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;fe80::/10&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;geoip:cn&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;port&quot;</span><span class="token operator">:</span> <span class="token string">&quot;53,443,1000-2000&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;sourcePort&quot;</span><span class="token operator">:</span> <span class="token string">&quot;53,443,1000-2000&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;network&quot;</span><span class="token operator">:</span> <span class="token string">&quot;tcp&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;source&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;10.0.0.1&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;user&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;love@xray.com&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;inboundTag&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;tag-vmess&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;protocol&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;http&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;tls&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;bittorrent&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;attrs&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token property">&quot;:method&quot;</span><span class="token operator">:</span> <span class="token string">&quot;GET&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;outboundTag&quot;</span><span class="token operator">:</span> <span class="token string">&quot;direct&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;balancerTag&quot;</span><span class="token operator">:</span> <span class="token string">&quot;balancer&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container danger"><p class="custom-container-title">Danger</p><p>When multiple attributes are specified at the same time, these attributes need to be satisfied <strong>simultaneously</strong> in order for the current rule to take effect.</p></div><blockquote><p><code>domainMatcher</code>: &quot;hybrid&quot; | &quot;linear&quot;</p></blockquote><p>The domain matching algorithm used varies depending on the settings. The option here takes priority over the <code>domainMatcher</code> configured in <code>RoutingObject</code>.</p><ul><li><code>&quot;hybrid&quot;</code>: uses a new domain matching algorithm that is faster and takes up less space. This is the default value.</li><li><code>&quot;linear&quot;</code>: uses the original domain matching algorithm.</li></ul><blockquote><p><code>type</code>: &quot;field&quot;</p></blockquote><p>Currently, only the option <code>&quot;field&quot;</code> is supported.</p><blockquote><p><code>domain</code>: [string]</p></blockquote><p>An array where each item is a domain match. There are several forms:</p>`,26),g=n('<li>Plain string: If this string matches any part of the target domain, the rule takes effect. For example, &quot;sina.com&quot; can match &quot;sina.com&quot;, &quot;sina.com.cn&quot;, and &quot;www.sina.com&quot;, but not &quot;sina.cn&quot;.</li><li>Regular expression: Starts with <code>&quot;regexp:&quot;</code> followed by a regular expression. When this regular expression matches the target domain, the rule takes effect. For example, &quot;regexp:\\\\.goo.*\\\\.com$&quot; matches &quot;www.google.com&quot; or &quot;fonts.googleapis.com&quot;, but not &quot;google.com&quot;.</li><li>Subdomain (recommended): Starts with <code>&quot;domain:&quot;</code> followed by a domain. When this domain is the target domain or a subdomain of the target domain, the rule takes effect. For example, &quot;domain:xray.com&quot; matches &quot;www.xray.com&quot; and &quot;xray.com&quot;, but not &quot;wxray.com&quot;.</li><li>Exact match: Starts with <code>&quot;full:&quot;</code> followed by a domain. When this domain is an exact match for the target domain, the rule takes effect. For example, &quot;full:xray.com&quot; matches &quot;xray.com&quot; but not &quot;www.xray.com&quot;.</li><li>Predefined domain list: Starts with <code>&quot;geosite:&quot;</code> followed by a name such as <code>geosite:google</code> or <code>geosite:cn</code>. The names and domain lists are listed in <a href="#predefined-domain-list">Predefined Domain List</a>.</li>',5),b=e("code",null,'"ext:file:tag"',-1),k=e("code",null,"geosite.dat",-1),v=e("div",{class:"custom-container tip"},[e("p",{class:"custom-container-title"},"Tip"),e("p",null,[e("code",null,'"ext:geoip.dat:cn"'),o(" is equivalent to "),e("code",null,'"geoip:cn"')])],-1),y=e("p",null,[e("code",null,"ip"),o(": [string]")],-1),w=e("p",null,"An array where each item represents an IP range. This rule will take effect when the target IP matches any of the IP ranges in the array. There are several types of IP ranges:",-1),_=e("li",null,[e("p",null,[o("IP: In the format of "),e("code",null,'"127.0.0.1"'),o(".")])],-1),T={href:"https://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing",target:"_blank",rel:"noopener noreferrer"},x=e("code",null,'"10.0.0.0/8"',-1),I=n("<li><p>Predefined IP lists: These lists are included in every Xray installation package under the file name <code>geoip.dat</code>. They can be used in the format of <code>&quot;geoip:cn&quot;</code>, where <code>cn</code> is a two-letter country code. The prefix <code>geoip:</code>(all lowercase) must be used, and nearly all countries that have internet access are supported.</p><ul><li>Special value: <code>&quot;geoip:private&quot;</code>, which includes all private addresses, such as <code>127.0.0.1</code>.</li></ul></li>",1),j=e("code",null,'"ext:file:tag"',-1),P=e("code",null,"file",-1),C=e("code",null,"tag",-1),A=e("code",null,"ext:",-1),D=e("code",null,"geoip.dat",-1),R=n(`<blockquote><p><code>port</code>: number | string</p></blockquote><p>The target port range, which can take on three forms:</p><ul><li><code>&quot;a-b&quot;</code>: <code>a</code> and <code>b</code> are both positive integers less than 65536. This range is a closed interval, and this rule will take effect when the target port falls within this range.</li><li><code>a</code>: <code>a</code> is a positive integer less than 65536. This rule will take effect when the target port is <code>a</code>.</li><li>A mixture of the above two forms, separated by commas &quot;,&quot;. For example: <code>&quot;53,443,1000-2000&quot;</code>.</li></ul><blockquote><p><code>sourcePort</code>: number | string</p></blockquote><p>The source port, which can take on three forms:</p><ul><li><code>&quot;a-b&quot;</code>: <code>a</code> and <code>b</code> are both positive integers less than 65536. This range is a closed interval, and this rule will take effect when the source port falls within this range.</li><li><code>a</code>: <code>a</code> is a positive integer less than 65536. This rule will take effect when the source port is <code>a</code>.</li><li>A mixture of the above two forms, separated by commas &quot;,&quot;. For example: <code>&quot;53,443,1000-2000&quot;</code>.</li></ul><blockquote><p><code>network</code>: &quot;tcp&quot; | &quot;udp&quot; | &quot;tcp,udp&quot;</p></blockquote><p>This can be &quot;tcp&quot;, &quot;udp&quot;, or &quot;tcp,udp&quot;. This rule will take effect when the connection method is the specified one.</p><blockquote><p><code>source</code>: [string]</p></blockquote><p>An array where each item represents an IP range in the format of IP, CIDR, GeoIP, or loading IP from a file. This rule will take effect when the source IP matches any of the IP ranges in the array.</p><blockquote><p><code>user</code>: [string]</p></blockquote><p>An array where each item represents an email address. This rule will take effect when the source user matches any of the email addresses in the array.</p><blockquote><p><code>inboundTag</code>: [string]</p></blockquote><p>An array where each item represents an identifier. This rule will take effect when the inbound protocol matches any of the identifiers in the array.</p><blockquote><p><code>protocol</code>: [ &quot;http&quot; | &quot;tls&quot; | &quot;bittorrent&quot; ]</p></blockquote><p>An array where each item represents a protocol. This rule will take effect when the protocol of the current connection matches any of the protocols in the array.</p><div class="custom-container tip"><p class="custom-container-title">Tip</p><p>The <code>sniffing</code> option in the inbound proxy must be enabled to detect the protocol type used by the connection.</p></div><p><code>attrs</code>: object</p><p>A json object with string keys and values, used to detect the HTTP headers of the traffic. It matches when all specified keys exist in the header and corresponding values are a substring of the header value. The key is case in-sensitive. You can use regex to match with value.</p><p>Currently, only the inbound HTTP proxy sets this attribute.</p><p>Examples:</p><ul><li>Detect HTTP GET：<code>{&quot;:method&quot;: &quot;GET&quot;}</code></li><li>Detect HTTP Path：<code>{&quot;:path&quot;: &quot;/test&quot;}&quot;</code></li><li>Detect Content Type：<code>{&quot;accept&quot;: &quot;text/html&quot;}&quot;</code></li></ul><blockquote><p><code>outboundTag</code>: string</p></blockquote><p>Corresponds to the identifier of an outbound.</p><blockquote><p><code>balancerTag</code>: string</p></blockquote><p>Corresponds to the identifier of a balancer.</p><div class="custom-container tip"><p class="custom-container-title">Tip</p><p><code>balancerTag</code> and <code>outboundTag</code> are mutually exclusive. When both are specified, <code>outboundTag</code> takes effect.</p></div><h3 id="balancerobject" tabindex="-1"><a class="header-anchor" href="#balancerobject"><span>BalancerObject</span></a></h3><p>Load balancer configuration. When a load balancer is in effect, it selects the most appropriate outbound from the specified outbound according to the configuration and forwards traffic.</p><div class="language-json line-numbers-mode" data-ext="json" data-title="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;tag&quot;</span><span class="token operator">:</span> <span class="token string">&quot;balancer&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;selector&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><code>tag</code>: string</p></blockquote><p>The identifier of this load balancer, used to match <code>balancerTag</code> in <code>RuleObject</code>.</p><blockquote><p><code>selector</code>: [ string ]</p></blockquote><p>An array of strings, each of which will be used to match the prefix of the outbound identifier. For example, in the following outbound identifiers: <code>[ &quot;a&quot;, &quot;ab&quot;, &quot;c&quot;, &quot;ba&quot; ]</code>, <code>&quot;selector&quot;: [&quot;a&quot;]</code> will match <code>[ &quot;a&quot;, &quot;ab&quot; ]</code>.</p><p>If multiple outbounds are matched, the load balancer currently selects one randomly as the final outbound.</p><h3 id="predefined-domain-lists" tabindex="-1"><a class="header-anchor" href="#predefined-domain-lists"><span>Predefined Domain Lists</span></a></h3><p>This list is included in every Xray installation package, and the file name is <code>geosite.dat</code>. This file contains some common domain names, which can be used as <code>geosite:filename</code> to perform routing or DNS filtering for domain names that match those in the file.</p><p>Common domain lists include:</p><ul><li><code>category-ads</code>: Contains common advertising domain names.</li><li><code>category-ads-all</code>: Contains common advertising domain names and advertising provider domain names.</li><li><code>cn</code>: Equivalent to the combination of <code>geolocation-cn</code> and <code>tld-cn</code>.</li><li><code>apple</code>: Contains most of the domain names under Apple.</li><li><code>google</code>: Contains most of the domain names under Google.</li><li><code>microsoft</code>: Contains most of the domain names under Microsoft.</li><li><code>facebook</code>: Contains most of the domain names under Facebook.</li><li><code>twitter</code>: Contains most of the domain names under Twitter.</li><li><code>telegram</code>: Contains most of the domain names under Telegram.</li><li><code>geolocation-cn</code>: Contains common domain names of mainland Chinese websites.</li><li><code>geolocation-!cn</code>: Contains common domain names of non-mainland Chinese websites, as well as <code>tld-!cn</code>.</li><li><code>tld-cn</code>: Contains top-level domain names managed by CNNIC for mainland China, such as domain names ending in <code>.cn</code> and <code>.中国</code>.</li><li><code>tld-!cn</code>: Contains top-level domain names used outside mainland China, such as domain names ending in <code>.hk</code> (Hong Kong), <code>.tw</code> (Taiwan), <code>.jp</code> (Japan), <code>.sg</code> (Singapore), <code>.us</code> (United States), and <code>.ca</code> (Canada).</li></ul>`,39),F={href:"https://github.com/v2fly/domain-list-community",target:"_blank",rel:"noopener noreferrer"};function S(O,W){const a=i("ExternalLinkIcon"),s=i("RouterLink");return r(),u("div",null,[p,h,m,e("p",null,[o("For a more detailed analysis of the routing function, please refer to "),e("a",q,[o("Routing Function Analysis"),t(a)]),o(".")]),f,e("ul",null,[g,e("li",null,[o("Load domains from a file: Formatted as "),b,o(", where the file is stored in the "),t(s,{to:"/en/config/features/env.html#resource-file-path"},{default:c(()=>[o("resource directory")]),_:1}),o(" and has the same format as "),k,o(". The tag must exist in the file.")])]),v,y,w,e("ul",null,[_,e("li",null,[e("p",null,[e("a",T,[o("CIDR"),t(a)]),o(": In the format of "),x,o(".")])]),I,e("li",null,[e("p",null,[o("Loading IP from a file: In the format of "),j,o(", where "),P,o(" is the file name and "),C,o(" is a label that must exist in the file. The prefix "),A,o(" (all lowercase) must be used, and the file should be located in the "),t(s,{to:"/en/config/features/env.html#resource-file-path"},{default:c(()=>[o("resource directory")]),_:1}),o(" with the same format as "),D,o(".")])])]),R,e("p",null,[o("You can also find the complete list of domain names here: "),e("a",F,[o("Domain list community"),t(a)]),o(".")])])}const L=l(d,[["render",S],["__file","routing.html.vue"]]);export{L as default};
