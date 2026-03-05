# 🌊 SeaChange: 产业经济学 · 数据可视化

欢迎来到SeaChange的GitHub Pages！这里聚焦于产业经济学（Industrial Organization）的前沿研究，利用交互式可视化将复杂的经济数据转化为直观、可探索的图表，推动经济学领域的信息数据化处理。

## 🎯 研究使命
通过数据驱动方法分析市场结构、企业行为与公共政策，并提供开放的可视化工具，促进学者、政策制定者和业界人士对产业动态的理解。

## 📌 核心研究主题
- **市场势力与竞争测度**：计算并展示各行业的价格-成本边际、勒纳指数、HHI等指标。
- **企业动态与资源配置**：追踪企业进入、退出、成长过程，量化资源错配程度。
- **创新与产业演化**：结合专利数据与产业数据，揭示技术创新对市场结构的影响。
- **反事实模拟与政策评估**：通过交互式模拟展示兼并审查、价格管制等政策的效果。

## 📈 精选可视化作品
点击以下卡片可进入全交互式图表页面（部分示例链接为占位符，将逐步完善）。

### [📊 市场集中度长期趋势 (CR4, HHI)](visuals/concentration.html)
![市场集中度预览](https://placehold.co/600x400/2d3748/white?text=Concentration+Trends)
*图：1990-2024年美国制造业CR4与HHI指数变化，数据源：Economic Census。*

### [🏭 企业进入率与退出率动态](visuals/entry_exit.html)
![企业动态预览](https://placehold.co/600x400/2d3748/white?text=Entry+and+Exit+Rates)
*图：不同行业的企业进入率与退出率气泡图，气泡大小代表行业总产出。*

### [💰 价格-成本边际分布 (PCM)](visuals/pcm_distribution.html)
![PCM分布预览](https://placehold.co/600x400/2d3748/white?text=PCM+Distribution)
*图：价格-成本边际的核密度估计及行业异质性，颜色区分贸易部门与非贸易部门。*

### [🔗 专利引用网络 (ICT产业)](visuals/patent_network.html)
![专利网络预览](https://placehold.co/600x400/2d3748/white?text=Patent+Citation+Network)
*图：2020-2024年ICT产业专利引用网络，节点大小表示被引次数，社区结构按技术子领域着色。*

## ⚙️ 数据处理与可视化流水线
1. **数据源**：整合OECD STAN、EU KLEMS、中国工业企业数据库、USPTO专利数据等。
2. **清洗与融合**：Python (Pandas, NumPy) + R (dplyr, tidyr)。
3. **经济计量分析**：使用PyMC3、statsmodels进行结构估计和因果推断。
4. **可视化构建**：采用Plotly、D3.js、Apache ECharts生成交互式HTML，嵌入本网站。

## 📁 开源仓库与协作
所有代码、数据处理脚本和可视化源代码均可在 [GitHub组织](https://github.com/Hub-Q) 中找到。欢迎通过Issue报告问题、贡献代码或提出新的可视化想法！

## 📬 联系与讨论
- 在对应项目的GitHub Discussion中留言
- 或发送邮件至：hub-q@example.com（示例邮箱，请替换）

---

**注**：本页面及可视化作品持续建设中。敬请关注更新！
