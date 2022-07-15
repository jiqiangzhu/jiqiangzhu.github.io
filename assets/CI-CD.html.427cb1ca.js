import{_ as e}from"./plugin-vue_export-helper.21dcd24c.js";import{o as i,c as n,e as s}from"./app.f44b82ad.js";const d={},l=s(`<h1 id="ci-cd\u6301\u7EED\u96C6\u6210-\u6301\u7EED\u4EA4\u4ED8" tabindex="-1"><a class="header-anchor" href="#ci-cd\u6301\u7EED\u96C6\u6210-\u6301\u7EED\u4EA4\u4ED8" aria-hidden="true">#</a> CI CD\u6301\u7EED\u96C6\u6210\uFF0C\u6301\u7EED\u4EA4\u4ED8</h1><p><code>Continuous Integration (CI) / Continuous Delivery (CD) </code></p><h2 id="github-action" tabindex="-1"><a class="header-anchor" href="#github-action" aria-hidden="true">#</a> Github Action</h2><p>yml\u6587\u4EF6\u914D\u7F6E</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code>name: docs

on:
  # \u6BCF\u5F53 push \u5230 main \u5206\u652F\u65F6\u89E6\u53D1\u90E8\u7F72
  push:
    branches: [master]
  # \u624B\u52A8\u89E6\u53D1\u90E8\u7F72
  workflow_dispatch:

jobs:
  docs:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v2
        with:
          # \u201C\u6700\u8FD1\u66F4\u65B0\u65F6\u95F4\u201D \u7B49 git \u65E5\u5FD7\u76F8\u5173\u4FE1\u606F\uFF0C\u9700\u8981\u62C9\u53D6\u5168\u90E8\u63D0\u4EA4\u8BB0\u5F55
          fetch-depth: 0

      - name: Setup Node.js
        uses: actions/setup-node@v1
        with:
          # \u9009\u62E9\u8981\u4F7F\u7528\u7684 node \u7248\u672C
          node-version: &#39;14&#39;

      # \u7F13\u5B58 node_modules
      - name: Cache dependencies
        uses: actions/cache@v2
        id: yarn-cache
        with:
          path: |
            **/node_modules
          key: \${{ runner.os }}-yarn-\${{ hashFiles(&#39;**/yarn.lock&#39;) }}
          restore-keys: |
            \${{ runner.os }}-yarn-

      # \u5982\u679C\u7F13\u5B58\u6CA1\u6709\u547D\u4E2D\uFF0C\u5B89\u88C5\u4F9D\u8D56
      - name: Install dependencies
        if: steps.yarn-cache.outputs.cache-hit != &#39;true&#39;
        run: yarn --frozen-lockfile

      # \u8FD0\u884C\u6784\u5EFA\u811A\u672C
      - name: Build VuePress site
        run: yarn docs:build

      # \u67E5\u770B workflow \u7684\u6587\u6863\u6765\u83B7\u53D6\u66F4\u591A\u4FE1\u606F
      # @see https://github.com/crazy-max/ghaction-github-pages
      - name: Deploy to GitHub Pages
        uses: crazy-max/ghaction-github-pages@v2
        with:
          # \u90E8\u7F72\u5230 gh-pages \u5206\u652F
          target_branch: gh-pages
          # \u90E8\u7F72\u76EE\u5F55\u4E3A VuePress \u7684\u9ED8\u8BA4\u8F93\u51FA\u76EE\u5F55
          build_dir: docs/.vuepress/dist
        env:
          # @see https://docs.github.com/cn/actions/reference/authentication-in-a-workflow#about-the-github_token-secret
          GITHUB_TOKEN: \${{ secrets.ACCESS_TOKEN }}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="git-hooks" tabindex="-1"><a class="header-anchor" href="#git-hooks" aria-hidden="true">#</a> git hooks</h2><h3 id="post-receive" tabindex="-1"><a class="header-anchor" href="#post-receive" aria-hidden="true">#</a> post-receive</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>#!/bin/bash

echo &#39;server: received code push...&#39;

cd /home/CloudMusic

echo &#39;server: checkout latest code from git...&#39;

git --git-dir=/opt/CloudMusic.git --work-tree=/home/CloudMusic checkout -f master

echo &#39;server: running npm install...&#39;


echo &#39;server: buildding...&#39; \\
&amp;&amp; npm run prod \\
&amp;&amp; echo &#39;server: done...&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u65E5\u5FD7\u57CB\u70B9\u662F\u600E\u4E48\u505A\u7684\uFF1F</p><ul><li>sdk</li><li>XmlHttpReuqest</li></ul>`,10),a=[l];function r(v,c){return i(),n("div",null,a)}var t=e(d,[["render",r],["__file","CI-CD.html.vue"]]);export{t as default};
