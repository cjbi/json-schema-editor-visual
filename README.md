# json-schema-editor-visual
A json-schema editor of high efficient and easy-to-use, base on React.

![avatar](json-schema-editor-visual.jpg)

## 说明

### 版本 2.0.0 更新日志 (2025-01)

#### 主要升级
- ✅ **React 16 → 18**
  - 使用 `createRoot` API 替代 `render`
  - 更新生命周期方法：`componentWillReceiveProps` → `componentDidUpdate`、`componentWillMount` → `componentDidMount`
  - 使用 `getDerivedStateFromProps` 替代旧的生命周期方法

- ✅ **Ant Design 4 → 5**
  - CSS 导入路径：`antd/dist/antd.css` → `antd/dist/reset.css`
  - 组件属性更新：`visible` → `open`、`autosize` → `autoSize`
  - `Tabs.TabPane` → `Tabs items` 数组格式
  - `Dropdown overlay` → `Dropdown menu`
  - `AutoComplete dataSource` → `options`
  - `Icon` 组件迁移至 `@ant-design/icons`
  - `Row type="flex"` 已移除

- ✅ **构建工具升级**
  - Webpack 4 → 5（更新配置文件）
  - Babel 6 → 7（`.babelrc` 配置更新）
  - 新增 `webpack-dev-server` 支持开发模式
  - ES Modules 支持（`export default` 替代 `module.exports`）

#### 架构优化
- ✅ **Context API 重构**
  - 创建独立的 `SchemaContext.js` 文件，解决循环依赖问题
  - 使用新版 React Context API（`createContext`、`contextType`、`useContext`）
  - 通过 props 传递 contextValue 确保组件正确访问 Context

- ✅ **Advanced Settings 双向绑定**
  - 修复表单和 JSON 编辑器之间的双向数据同步
  - 使用 React state 和 useEffect 管理内部状态
  - 包装 Context 拦截数据变更

#### 开发体验
- ✅ 新增开发模式：`npm run serve`
- ✅ 新增调试页面：`index-debug.html`
- ✅ 添加详细的调试日志
- ✅ 支持 source maps 便于调试

#### 构建脚本
```bash
npm start              # 开发服务器（端口 8082）
npm run build          # 生产构建（dist 目录，UMD 格式）
npm run build:prd      # 生产构建（prd 目录）
npm run build:prd:dev  # 开发构建（prd 目录，未压缩）
npm run serve          # 开发服务器（webpack-dev-server）
```

#### 已知问题
- 依赖安装需要使用 `npm install --legacy-peer-deps`（由于 moox@1.1.0 依赖 React 17）

#### 技术栈
- React 18.3.1
- Ant Design 5.22.0
- Webpack 5.95.0
- Babel 7.25.0
- Redux 4.1.2
- React-Redux 9.1.2


## Usage

### 安装
```bash
npm install json-schema-editor-visual --legacy-peer-deps
```

### 使用示例（React 18 + Ant Design 5）

```js
import React from 'react';
import { createRoot } from 'react-dom/client';
import 'antd/dist/reset.css'; // Ant Design v5
import 'json-schema-editor-visual/dist/main.css';
import jeditor from 'json-schema-editor-visual/dist/main.js';

const JEditor = jeditor({
  lang: 'zh_CN' // 或 'en_US'
});

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <JEditor
    data={''}
    showEditor={true}
    isMock={false}
    onChange={(value) => {
      console.log('Schema changed:', value);
    }}
  />
);
```

### 兼容旧版（React 16/17）
如果使用 React 16/17，请安装 v1.x 版本：
```bash
npm install json-schema-editor-visual@1.x
```

```js
// React 16/17 用法
import 'antd/dist/antd.css'
require('json-schema-editor-visual/dist/main.css')
const schemaEditor = require("json-schema-editor-visual/dist/main.js");
const SchemaEditor = schemaEditor(option)

render(
  <SchemaEditor />,
  document.getElementById('root')
)
```

## Option Object

| name | desc | default |
| ---- | ----------- | --------- |
| `lang` | language, support `en_US` or `zh_CN` | en_US 

## SchemaEditor Props

| name | type | default | desc
| ---- | ----------- | --------- | --------- |
| `data` | string | null | the data of editor
| `onChange`| function | null | 
| `showEditor` | boolean | false | 

## Links
https://github.com/zyqwst/json-schema-editor-vue
