import{_ as e}from"./plugin-vue_export-helper.21dcd24c.js";import{o as i,c as s,e as n}from"./app.f44b82ad.js";const a={},l=n(`<h1 id="javascript\u95ED\u5305" tabindex="-1"><a class="header-anchor" href="#javascript\u95ED\u5305" aria-hidden="true">#</a> Javascript\u95ED\u5305</h1><p>\u6240\u8C13\u95ED\u5305\u5C31\u662F\u5916\u90E8\u51FD\u6570\u6267\u884C\u8FD4\u56DE\u4E00\u4E2A\u51FD\u6570\uFF0C\u8FD4\u56DE\u7684\u8FD9\u4E2A\u51FD\u6570\u7528\u5230\u4E86\u79C1\u6709\u53D8\u91CF\uFF0C\u8FD9\u65F6\u5185\u90E8\u53D8\u91CF\u4E0E\u5916\u90E8\u6709\u5173\u8054\u5C31\u4E0D\u4F1A\u88AB\u5783\u573E\u56DE\u6536\uFF0C<strong>\u95ED\u5305\u662F\u5C06\u51FD\u6570\u5185\u90E8\u4E0E\u51FD\u6570\u5916\u90E8\u8FDE\u63A5\u8D77\u6765\u7684\u6865\u6881</strong></p><p>\u4F18\u70B9\uFF1A</p><blockquote><p>\u51FD\u6570\u53D8\u91CF\u79C1\u6709\u5316\uFF0C\u907F\u514D\u6C61\u67D3\u5168\u5C40\u53D8\u91CF</p><p>\u4ECE\u5916\u90E8\u8BFB\u53D6\u5C40\u90E8\u53D8\u91CF</p></blockquote><p>\u7F3A\u70B9\uFF1A</p><blockquote><p>\u957F\u671F\u5360\u7528\u5185\u5B58\u7A7A\u95F4\u4E0D\u91CA\u653E\uFF0C\u5BB9\u6613\u9020\u6210\u5185\u5B58\u6CC4\u6F0F</p></blockquote><p>\u7ECF\u5178\u9762\u8BD5\u9898</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>for(var i = 0; i &lt; 5; i++) {
  setTimeout(()=&gt;{ 
    console.log(i);
  })
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4F1A\u8F93\u51FA5\u4E2A5</p><p>\u540C\u6B65\u4EE3\u7801\u4F18\u5148\u6267\u884C\uFF0CsetTimeout\u5C5E\u4E8E\u5F02\u6B65\u4EFB\u52A1\uFF0C\u5B8F\u4EFB\u52A1\u961F\u5217</p><p>\u540C\u6B65\u4EE3\u7801\u6267\u884C\u5B8C\u6BD5\u4E4B\u540E\uFF0C\u624D\u5F00\u59CB\u6267\u884CsetTimeout\u5185\u7684\u51FD\u6570\uFF0C\u8FD9\u65F6i\u65E9\u5DF2\u53D8\u62105</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>for(var i = 0; i &lt; 5; i++) {
  (function(i){
    setTimeout(()=&gt;{
      console.log(i);
    })
  })(i)
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,12),r=[l];function c(d,t){return i(),s("div",null,r)}var u=e(a,[["render",c],["__file","closure.html.vue"]]);export{u as default};
