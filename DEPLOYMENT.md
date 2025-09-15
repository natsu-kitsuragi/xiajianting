# GitHub Pages 部署指南

## 自动部署设置

您的项目已配置为自动部署到 GitHub Pages。部署域名将是：
**https://natsu-kitsuragi.github.io/xiajianting/**

## 部署步骤

1. **推送代码到 GitHub**：
   \`\`\`bash
   git add .
   git commit -m "Configure GitHub Pages deployment"
   git push origin main
   \`\`\`

2. **启用 GitHub Pages**：
   - 进入 GitHub 仓库设置
   - 找到 "Pages" 部分
   - Source 选择 "GitHub Actions"

3. **等待部署完成**：
   - GitHub Actions 会自动构建和部署
   - 查看 Actions 标签页了解部署状态

## 配置说明

- `basePath: '/xiajianting'` - 设置子路径
- `output: 'export'` - 启用静态导出
- `trailingSlash: true` - 添加尾部斜杠
- GitHub Actions 自动化部署流程

部署完成后，您可以通过 https://natsu-kitsuragi.github.io/xiajianting/ 访问您的网站。
