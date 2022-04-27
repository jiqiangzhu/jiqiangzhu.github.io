# 常见问题

`ipconfig /flushdns ` 刷新dns缓存（Windows）

### 国内访问Github速度慢的原因

Github的CDN域名遭到[DNS污染](https://baike.baidu.com/item/DNS%E6%B1%A1%E6%9F%93/8620359?fr=aladdin)，无法连接使用Github的加速分发服务器，所以国内访问速度较慢

可以修改hosts文件，将域名解析直接指向ip地址来绕过DNS的解析

```bash
# Github
140.82.112.4 github.com
185.199.108.153 assets-cdn.github.com
199.232.69.194 github.global.ssl.fastly.net
```

查询出域名当前对应的最优IP：<https://www.ipaddress.com/> 