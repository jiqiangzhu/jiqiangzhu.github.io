import{_ as t}from"./plugin-vue_export-helper.21dcd24c.js";import{o as e,c as i,e as n}from"./app.f44b82ad.js";const s={},d=n(`<h1 id="vue2\u57FA\u672C\u8BED\u6CD5" tabindex="-1"><a class="header-anchor" href="#vue2\u57FA\u672C\u8BED\u6CD5" aria-hidden="true">#</a> Vue2\u57FA\u672C\u8BED\u6CD5</h1><h2 id="\u5E38\u7528v\u6307\u4EE4" tabindex="-1"><a class="header-anchor" href="#\u5E38\u7528v\u6307\u4EE4" aria-hidden="true">#</a> \u5E38\u7528v\u6307\u4EE4</h2><ul><li><p>v-if</p><p>\u662F\u5426\u6E32\u67D3dom</p></li><li><p>v-show</p><p>display\u7684\u5C5E\u6027\u662F\u5426\u4E3Anone</p></li><li><p>v-model</p><p>\u8BED\u6CD5\u7CD6\uFF0C\u7ED1\u5B9A\u4E86input\u8F93\u5165\u6846\u7684input\u4E8B\u4EF6\uFF0C\u66F4\u65B0value</p></li><li><p>v-for</p><p>\u5FAA\u73AF\u53EF\u8FED\u4EE3\u5BF9\u8C61\u6570\u7EC4</p></li></ul><h2 id="style-class\u6837\u5F0F" tabindex="-1"><a class="header-anchor" href="#style-class\u6837\u5F0F" aria-hidden="true">#</a> style class\u6837\u5F0F</h2><h2 id="\u7EC4\u4EF6\u4F20\u503C" tabindex="-1"><a class="header-anchor" href="#\u7EC4\u4EF6\u4F20\u503C" aria-hidden="true">#</a> \u7EC4\u4EF6\u4F20\u503C</h2><p>\u7236\u4F20\u5B50</p><p>\u5B50\u4F20\u7236</p><p>provide/inject</p><p>props</p><p>emit</p><p>attrs</p><h4 id="nexttick" tabindex="-1"><a class="header-anchor" href="#nexttick" aria-hidden="true">#</a> nextTick</h4><h4 id="vue2\u4E2D\u5B58\u5728\u7684\u95EE\u9898" tabindex="-1"><a class="header-anchor" href="#vue2\u4E2D\u5B58\u5728\u7684\u95EE\u9898" aria-hidden="true">#</a> vue2\u4E2D\u5B58\u5728\u7684\u95EE\u9898</h4><ul><li>v-if\u548Cv-for\u987A\u5E8F</li><li>\u65E0\u6CD5\u76D1\u542C\u65B0\u589E\u5C5E\u6027\uFF0C\u65E0\u6CD5\u76D1\u542C\u6570\u7EC4\uFF08vue2\u91CD\u5199\u6570\u7EC4\u65B9\u6CD5\uFF09</li></ul><h2 id="\u751F\u547D\u5468\u671F" tabindex="-1"><a class="header-anchor" href="#\u751F\u547D\u5468\u671F" aria-hidden="true">#</a> \u751F\u547D\u5468\u671F</h2><blockquote><p>beforeCreate</p><p>created</p><p>beforeMounte</p><p>mounted</p><p>beforeUpdate</p><p>updated</p><p>beforeDestroy</p><p>destroyed</p></blockquote><p>vscode vue.json \u5FEB\u901F\u751F\u6210vue\u6A21\u677F</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code>{
	// Place your snippets for vue here. Each snippet is defined under a snippet name and has a prefix, body and 
	// description. The prefix is what is used to trigger the snippet and the body will be expanded and inserted. Possible variables are:
	// $1, $2 for tab stops, $0 for the final cursor position, and \${1:label}, \${2:another} for placeholders. Placeholders with the 
	// same ids are connected.
	// Example:
	// &quot;Print to console&quot;: {
	// 	&quot;prefix&quot;: &quot;log&quot;,
	// 	&quot;body&quot;: [
	// 		&quot;console.log(&#39;$1&#39;);&quot;,
	// 		&quot;$2&quot;
	// 	],
	// 	&quot;description&quot;: &quot;Log output to console&quot;
	// }
	&quot;Print to console&quot;: {
		&quot;prefix&quot;: &quot;vue&quot;, //\u6B64\u5904\u5173\u7CFB\u5230\u4F60\u7684\u5FEB\u6377\u5355\u8BCD
		&quot;body&quot;: [
			&quot;&lt;template&gt;&quot;,
			&quot;  &lt;div&gt;&lt;/div&gt;&quot;,
			&quot;&lt;/template&gt;&quot;,
			&quot;&quot;,
			&quot;&lt;script&gt;&quot;,
			&quot;export default {&quot;,
			&quot;  data () {&quot;,
			&quot;    return {&quot;,
			&quot;    }&quot;,
			&quot;  },&quot;,
			&quot;  components: {},&quot;,
			&quot;  computed: {},&quot;,
			&quot;  created () {},&quot;,
			&quot;  methods: {}&quot;,
			&quot;}&quot;,
			&quot;&quot;,
			&quot;&lt;/script&gt;&quot;,
			&quot;&lt;style lang=&#39;less&#39; scoped&gt;&quot;,
			&quot;&lt;/style&gt;&quot;,
			&quot;&quot;
		],
		&quot;description&quot;: &quot;Log output to console&quot;
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,18),o=[d];function l(a,u){return e(),i("div",null,o)}var c=t(s,[["render",l],["__file","vue-basic.html.vue"]]);export{c as default};
