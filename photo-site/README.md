# 摄影作品网站

一个按系列展示作品的静态网站，风格参考 alecsoth.com。不需要服务器和数据库，可以免费放在 GitHub Pages 上。

## 文件说明

```
index.html    网页入口（不用改，除了 <title> 里的名字）
content.js    全部文字和图片列表，平时只改这个
style.css     样式
app.js        显示逻辑（不用改）
images/       放照片，每个系列一个文件夹
```

## 1. 准备照片

- 每个系列建一个文件夹，例如 `images/series-one/`
- 文件命名 `01.jpg`、`02.jpg`……，顺序就是展示顺序
- 导出尺寸：长边 2000–2500 像素，JPG，质量 80% 左右，每张尽量在 300–600 KB
- 用 Lightroom 导出时可以直接设置这些参数，也可以去掉 GPS 位置信息

## 2. 修改内容

用任意文本编辑器（推荐 VS Code）打开 `content.js`：

- 改 `name`、`role`、`email`、`instagram`
- 网站菜单有三项：Photographs（所有系列）、About、Contact
- 在 `series` 里给每个系列填 `slug`（网址名，只用小写字母、数字和横线）、`title`、`year`、`statement` 和图片列表
- 想加一个系列，就复制一整段 `{ slug: ... }`，注意段与段之间用逗号隔开
- 每个系列的封面默认是第一张照片，想换就加一行 `cover: "images/系列名/05.jpg",`
- About 页面的文字同样在这里改

### 多语言

网站支持英语、中文、葡萄牙语、西班牙语，左侧菜单下方可以切换。每段文字写成：

```js
title: { en: "Harbour", zh: "港口", pt: "Porto", es: "Puerto" }
```

- 某种语言没填，会自动显示英文，所以可以先只写英文，之后再慢慢补
- 年份、展览名、机构名这类不需要翻译的，直接写成普通字符串 `"2024"`
- 访客第一次打开时，网站会按对方浏览器的语言自动选择；选过一次之后会记住
- 想减少语言，就改 `languages: ["en", "zh"]`；想增加语言（例如丹麦语），在 `app.js` 顶部的 `UI` 里加一组界面用词，再在 `languages` 里加上 `"da"`

图片路径写错时，网站会显示一个灰色方块并标出它在找的文件名，方便排查。

## 3. 本地预览

直接双击 `index.html` 就能在浏览器里打开。改完 `content.js` 后刷新页面即可看到效果。

## 4. 发布到 GitHub Pages（免费）

1. 注册 GitHub 账号
2. 新建一个仓库（Repository），名字可以叫 `你的用户名.github.io`，设为 Public
3. 在仓库页面点 **Add file → Upload files**，把整个文件夹里的内容拖进去（index.html 要在最外层），点 Commit
4. 进入仓库的 **Settings → Pages**，Source 选 `Deploy from a branch`，Branch 选 `main` 和 `/ (root)`，保存
5. 一两分钟后，网站就在 `https://你的用户名.github.io` 上线了

以后更新：在仓库里上传新照片、编辑 `content.js`，保存后网站自动更新。

## 5. 绑定自己的域名（可选，约 €10–15 / 年）

1. 在 Namecheap、Cloudflare、Porkbun 或 Simply.com（丹麦）买一个域名，例如 `yourname.com`
2. GitHub 仓库 **Settings → Pages → Custom domain** 填入域名
3. 按 GitHub 的提示在域名商那里添加 DNS 记录，并勾选 **Enforce HTTPS**

## 6. 放到 Instagram

Instagram 个人资料 → 编辑主页 → 链接，填入网站地址。

## 每个系列链接可以单独分享

例如 `https://yourname.com/#series-one` 会直接打开这个系列，投稿或给策展人发邮件时很方便。
