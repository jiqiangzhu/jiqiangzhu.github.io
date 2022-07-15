import{_ as e}from"./plugin-vue_export-helper.21dcd24c.js";import{o as i,c as n,e as s}from"./app.f44b82ad.js";const d={},l=s(`<h1 id="express\u90E8\u7F72\u5230\u817E\u8BAF\u4E91\u670D\u52A1\u5668" tabindex="-1"><a class="header-anchor" href="#express\u90E8\u7F72\u5230\u817E\u8BAF\u4E91\u670D\u52A1\u5668" aria-hidden="true">#</a> Express\u90E8\u7F72\u5230\u817E\u8BAF\u4E91\u670D\u52A1\u5668</h1><ol><li>\u5C06\u672C\u5730\u7684<code>express</code>\u9879\u76EE\u4E0A\u4F20\u81F3<code>github</code>\uFF1B</li><li>\u4E91\u670D\u52A1\u5668\u4E0A\u5B89\u88C5<code>git</code>\uFF0C\u62C9\u53D6\u9879\u76EE\u81F3\u6307\u5B9A\u76EE\u5F55</li><li>\u5B89\u88C5<code>node</code>\uFF0C\u4E0E\u672C\u5730\u7684\u7248\u672C\u6700\u597D\u4FDD\u6301\u4E00\u81F4\uFF0C\u907F\u514D\u51FA\u73B0\u95EE\u9898</li><li>\u5B89\u88C5<code>nrm</code>\u7BA1\u7406\u955C\u50CF\u6E90</li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code># \u5168\u5C40\u5B89\u88C5nrm,\u4F7F\u7528nrm\u7BA1\u7406\u955C\u50CF
npm install -g nrm
# \u5217\u51FA\u6240\u6709\u955C\u50CF
nrm ls
  #npm ---------- https://registry.npmjs.org/
  #yarn --------- https://registry.yarnpkg.com/
  #tencent ------ https://mirrors.cloud.tencent.com/npm/
  #cnpm --------- https://r.cnpmjs.org/
  #taobao ------- https://registry.npmmirror.com/
  #npmMirror ---- https://skimdb.npmjs.com/registry/
nrm use taobao

# \u81EA\u5B9A\u4E49\u955C\u50CF
nrm add taobao1 https://registry.npm.taobao.org/
nrm use taobao1

# \u67E5\u770B\u5F53\u524Dnpm\u6240\u6709\u914D\u7F6E
npm config ls -l
# \u67E5\u770Bnpm\u5F53\u524D\u955C\u50CF
npm get registry
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="5"><li>\u8FDB\u5165\u9879\u76EE\u76EE\u5F55\uFF0C\u6267\u884C<code>npm install</code>\u5B89\u88C5\u4F9D\u8D56</li><li><code>node app.js</code>\u5C1D\u8BD5\u542F\u52A8\uFF0C\u65E0\u8BEF\u540E\u7EE7\u7EED\uFF0C\u6709\u9519\u8BEF\u8BF7\u6392\u67E5</li><li>\u4F7F\u7528\u5B9D\u5854\u9762\u677F\uFF0C\u50BB\u74DC\u5F0F\u64CD\u4F5C\uFF0C\u5B89\u88C5<code>pm2</code>\u7BA1\u7406\u5668\uFF0C<code>Nginx</code>\u53CD\u5411\u4EE3\u7406\uFF0C<code>PM2</code>\u6DFB\u52A0\u542F\u52A8\u9879\u76EE\uFF0C\u914D\u7F6E\u6620\u5C04\u6307\u5411\u4E00\u4E2A\u5DF2\u7ECF\u914D\u7F6E\u8FC7<code>DNS</code>\u89E3\u6790\u7684\u57DF\u540D\uFF08\u9700\u8981\u5728\u4E91\u670D\u52A1\u5668\u63A7\u5236\u53F0<code>DNSPod</code>\u4E2D\u8FDB\u884C\u914D\u7F6E\uFF09\uFF0C\u53EF\u4EE5\u{1F525}\u7533\u8BF7\u4E00\u4E2A\u514D\u8D39\u7684<code>SSL</code>\u8BC1\u4E66\uFF0C\u5230\u671F\u540E\u91CD\u65B0\u7533\u8BF7\uFF0C\u5C31\u53EF\u4EE5\u4F7F\u7528<code>HTTPS</code>\u8FDB\u884C\u5B89\u5168\u8BBF\u95EE\u4E86</li><li>\u6D4F\u89C8\u5668\u4E2D\u8F93\u5165\u6B65\u9AA47\u4E2D\u914D\u7F6E\u7684\u57DF\u540D\uFF0C<strong>\u4E0D\u9700\u8981\u8F93\u5165\u7AEF\u53E3</strong>\uFF0C\u5C31\u53EF\u4EE5\u8FDB\u884C\u6B63\u5E38\u8BBF\u95EE\u4E86</li></ol><h2 id="nginx" tabindex="-1"><a class="header-anchor" href="#nginx" aria-hidden="true">#</a> nginx\u2B50</h2><p>\u4E0D\u9700\u8981\u8F93\u5165\u7AEF\u53E3\u7684\u539F\u7406</p><ul><li><code>HTTP</code>\u9ED8\u8BA4<code>80</code>\u7AEF\u53E3\uFF0C<code>HTTPS</code>\u9ED8\u8BA4<code>443</code>\u7AEF\u53E3\uFF0C\u8FD9\u4E24\u4E2A\u7AEF\u53E3\u5728\u670D\u52A1\u5668\u7684\u9632\u706B\u5899\u4E2D\u662F\u9ED8\u8BA4\u653E\u5F00\u7684\uFF0C\u5373\u5982\u679C\u4F60\u60F3\u8BBF\u95EE\u670D\u52A1\u5668\u7684\u67D0\u4E2A\u7AEF\u53E3\uFF0C\u9700\u8981\u5728\u9632\u706B\u5899\u4E2D\u5C06\u5176\u653E\u5F00</li><li><code>Nginx</code>\u53CD\u5411\u4EE3\u7406\uFF0C\u76D1\u542C<code>80 443</code>\u7AEF\u53E3\uFF0C<code>server_name</code>\u5C31\u662F\u6D4F\u89C8\u5668\u4E2D\u8981\u8BBF\u95EE\u7684\u57DF\u540D\uFF0C\u5728<code>nginx</code>\u4E2D\u4F7F\u7528<code>include</code>\u5F15\u5165\u4E86\u8FD9\u91CC\u7684\u914D\u7F6E<code>include /www/server/panel/vhost/nginx/*.conf;</code></li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>server
{
    listen 80;
	listen 443 ssl http2;
    server_name qg-blog-api.blairq.top;
    index index.php index.html index.htm default.php default.htm default.html;
    root /home/qg-blog/Blog/blog-api;
    
    #SSL-START SSL\u76F8\u5173\u914D\u7F6E\uFF0C\u8BF7\u52FF\u5220\u9664\u6216\u4FEE\u6539\u4E0B\u4E00\u884C\u5E26\u6CE8\u91CA\u7684404\u89C4\u5219
    #error_page 404/404.html;
    ssl_certificate    /www/server/panel/vhost/cert/qg-blog-api.blairq.top/fullchain.pem;
    ssl_certificate_key    /www/server/panel/vhost/cert/qg-blog-api.blairq.top/privkey.pem;
    ssl_protocols TLSv1.1 TLSv1.2 TLSv1.3;
    ssl_ciphers EECDH+CHACHA20:EECDH+CHACHA20-draft:EECDH+AES128:RSA+AES128:EECDH+AES256:RSA+AES256:EECDH+3DES:RSA+3DES:!MD5;
    ssl_prefer_server_ciphers on;
    ssl_session_cache shared:SSL:10m;
    ssl_session_timeout 10m;
    add_header Strict-Transport-Security &quot;max-age=31536000&quot;;
    error_page 497  https://$host$request_uri;

    #SSL-END
    
    #ERROR-PAGE-START  \u9519\u8BEF\u9875\u914D\u7F6E\uFF0C\u53EF\u4EE5\u6CE8\u91CA\u3001\u5220\u9664\u6216\u4FEE\u6539
    #error_page 404 /404.html;
    #error_page 502 /502.html;
    #ERROR-PAGE-END
    
    #PHP-INFO-START  PHP\u5F15\u7528\u914D\u7F6E\uFF0C\u53EF\u4EE5\u6CE8\u91CA\u6216\u4FEE\u6539
    #\u6E05\u7406\u7F13\u5B58\u89C4\u5219

    location ~ /purge(/.*) {
        proxy_cache_purge cache_one $host$1$is_args$args;
        #access_log  /www/wwwlogs/qg-blog-api.blairq.top_purge_cache.log;
    }
	#\u5F15\u7528\u53CD\u5411\u4EE3\u7406\u89C4\u5219\uFF0C\u6CE8\u91CA\u540E\u914D\u7F6E\u7684\u53CD\u5411\u4EE3\u7406\u5C06\u65E0\u6548
	include /www/server/panel/vhost/nginx/proxy/qg-blog-api.blairq.top/*.conf;

	include enable-php-00.conf;
    #PHP-INFO-END
    
    #REWRITE-START URL\u91CD\u5199\u89C4\u5219\u5F15\u7528,\u4FEE\u6539\u540E\u5C06\u5BFC\u81F4\u9762\u677F\u8BBE\u7F6E\u7684\u4F2A\u9759\u6001\u89C4\u5219\u5931\u6548
    include /www/server/panel/vhost/rewrite/qg-blog-api.blairq.top.conf;
    #REWRITE-END
    
    #\u7981\u6B62\u8BBF\u95EE\u7684\u6587\u4EF6\u6216\u76EE\u5F55
    location ~ ^/(\\.user.ini|\\.htaccess|\\.git|\\.svn|\\.project|LICENSE|README.md)
    {
        return 404;
    }
    
    #\u4E00\u952E\u7533\u8BF7SSL\u8BC1\u4E66\u9A8C\u8BC1\u76EE\u5F55\u76F8\u5173\u8BBE\u7F6E
    location ~ \\.well-known{
        allow all;
    }
    
    access_log  /www/wwwlogs/qg-blog-api.blairq.top.log;
    error_log  /www/wwwlogs/qg-blog-api.blairq.top.error.log;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u5F15\u7528\u4EE3\u7406\u89C4\u5219<code>include /www/server/panel/vhost/nginx/proxy/qg-blog-api.blairq.top/*.conf;</code></li><li>\u53CD\u5411\u4EE3\u7406\u914D\u7F6E\uFF0C\u8FD9\u91CC\u6307\u5411\u672C\u5730\u9879\u76EE\u542F\u52A8\u6240\u6307\u5411\u7684\u7AEF\u53E3<code>3000</code>\uFF0C\u2B50\u5982\u679C\u6539\u52A8\u4E86\u6B64\u914D\u7F6E\u6587\u4EF6\uFF0C\u9700\u8981\u91CD\u542F<code>Nginx</code>\u624D\u80FD\u751F\u6548</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>#PROXY-START/
location  ~* \\.(gif|png|jpg|css|js|woff|woff2)$
{
    proxy_pass http://127.0.0.1:3000;
    proxy_set_header Host 127.0.0.1;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_set_header REMOTE-HOST $remote_addr;
    expires 12h;
}
location /
{
    proxy_pass http://127.0.0.1:3000;
    proxy_set_header Host 127.0.0.1;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_set_header REMOTE-HOST $remote_addr;
    
    add_header X-Cache $upstream_cache_status;
    
    #Set Nginx Cache
    
    	add_header Cache-Control no-cache;
}

#PROXY-END/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,10),r=[l];function a(c,v){return i(),n("div",null,r)}var t=e(d,[["render",a],["__file","express-deploy.html.vue"]]);export{t as default};
