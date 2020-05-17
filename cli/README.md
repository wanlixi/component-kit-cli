<!--
 * @Author: wanlixin
 * @Date: 2020-05-09 22:23:49
 * @LastEditors: wanlixin
 * @LastEditTime: 2020-05-17 08:31:07
 * @Description: 
--> 
# Vora Cli

Vora Cli 是一个 Vue 组件库构建工具，通过 Vora Cli 可以快速搭建一套功能完备的 Vue 组件库。

### 特性

- 提供丰富的命令，涵盖从开发测试到构建发布的完整流程
- 基于约定的目录结构，自动生成优雅的文档站点和组件示例
- 内置 ESlint、Stylelint 校验规则，提交代码时自动执行校验
- 构建后的组件库默认支持按需引入、主题定制、Tree Shaking

### 快速上手

执行以下命令可以快速创建一个基于 Vora Cli 的项目：

```bash
npx create-vora-cli-app
```

### 手动安装

```shell
# 通过 npm 安装
npm i @vora/cli -D

# 通过 yarn 安装
yarn add @vora/cli --dev
```

安装完成后，请将以下配置添加到 package.json 文件中

```json
{
  "scripts": {
    "dev": "vora-cli dev",
    "test": "vora-cli test",
    "lint": "vora-cli lint",
    "release": "vora-cli release",
    "build-site": "vora-cli build-site"
  },
  "husky": {
    "hooks": {
      "pre-commit": "lint-staged",
      "commit-msg": "vora commit-lint"
    }
  },
  "lint-staged": {
    "*.{js,jsx,ts,tsx,vue}": "eslint --fix",
    "*.{vue,css,less,scss}": "stylelint --fix"
  },
  "eslintConfig": {
    "root": true,
    "extends": ["@vora"]
  },
  "stylelint": {
    "extends": ["@vora/stylelint-config"]
  },
  "prettier": {
    "singleQuote": true
  },
  "browserslist": ["Android >= 4.0", "iOS >= 8"]
}
```

## 详细文档

- [命令](https://github.com/youzan/vora/tree/dev/packages/vora-cli/docs/commands.md)
- [配置指南](https://github.com/youzan/vora/tree/dev/packages/vora-cli/docs/config.md)
- [目录结构](https://github.com/youzan/vora/tree/dev/packages/vora-cli/docs/directory.md)
- [更新日志](https://github.com/youzan/vora/tree/dev/packages/vora-cli/changelog.md)

## 微信讨论群

扫码加入 Vora Cli 交流群，若群二维码过期，可以联系有赞前端小秘书加群

<img src="https://img.yzcdn.cn/vora/wechat_20200428.jpeg" width="220" height="285" >

## 关于桌面端组件

目前 Vora Cli 仅支持移动端组件的预览，桌面端组件暂不支持预览（欢迎 PR）。
