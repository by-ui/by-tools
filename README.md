# by-tools


### 安装
```
npm install by-tools --save
```

### 如需按需引入，安装配套插件
```
npm install babel-plugin-by-tools-demand-loading --save-dev
```

### 修改babel.config.js
```
  "plugins": [
    [
      "by-tools-demand-loading",
      {
        "library": "by-tools"
      }
    ],
  ]
```
