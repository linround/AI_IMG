# 记录在项目开发中的问题

## 出现报错
- 直接使用 less 来创建 css 文件时会报错。需要安装 less 即可直接使用less来创建css文件。(开箱即用的体验)
```text
npm install -D less
```
## 在安装谷歌浏览器中无法打开网站。需要进行打包配置

```text
build: {
    target: ['es2015', 'edge88', 'firefox78', 'chrome87', 'safari14'],
  },
```
