# 🤖 AI代码审查系统

基于多Agent协作的智能代码审查系统，实现自动化、全方位的代码质量检测。

## ✨ 功能特点

- 多Agent并行审查
  - 📝 语法规范Agent - 代码风格、命名规范、注释检查
  - 🔒 安全审查Agent - 安全漏洞识别
  - ⚡ 性能优化Agent - 性能瓶颈分析
- 智能结果合成
- 可视化审查报告
- 可扩展架构

## 📦 安装

```bash
git clone git@github.com:DamianZayne/Coding_Review.git
cd Coding_Review
npm install
```

## 🚀 使用

```bash
npm start
```

## 📁 项目结构

```
.
├── src/
│   ├── agents/          # 各类审查Agent
│   │   ├── BaseAgent.js
│   │   ├── SyntaxAgent.js
│   │   ├── SecurityAgent.js
│   │   └── PerformanceAgent.js
│   ├── core/            # 核心模块
│   │   ├── CodeReviewSystem.js
│   │   └── ReviewCoordinator.js
│   └── index.js         # 入口文件
├── package.json
└── README.md
```

## 🔧 扩展开发

添加新Agent只需继承 `BaseAgent` 并实现 `analyze()` 方法。

## 📄 许可证

MIT License
