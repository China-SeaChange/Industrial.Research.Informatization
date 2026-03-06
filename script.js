(function() {
    const cases = [
        { 
            title: "1. 低质低价竞争螺旋",
            desc: "服务商为抢客户大幅降价 → 降低标准 → 客户体验下降，价值感知降低 → 客户只愿出低价 → 更多服务商跟进降质。行业陷入低价=低质牢笼。",
            thresholdDesc: "阈值突破：价格/价值阈值下移，体验跌破心理底线，行业价值贬损。",
            steps: ["大幅降价", "降低标准", "体验↓价值↓", "只愿出低价", "跟进降质"],
            thresholdIdx: 2,
        },
        { 
            title: "2. 内卷式研发竞赛",
            desc: "对手微小迭代 → 被迫跟风研发 → 研发成本激增但差异小 → 利润被吞噬 → 更密集内卷。全行业低水平重复。",
            thresholdDesc: "阈值突破：研发成本突破盈利线，投入产出比崩坏。",
            steps: ["对手微迭代", "被迫跟风", "研发成本激增", "利润吞噬", "更密内卷"],
            thresholdIdx: 2,
        },
        { 
            title: "3. 囚徒困境广告投放",
            desc: "流量成本攀升 → 支付更高广告费 → 获客成本 > 利润 → 提价或降质 → 平台生态恶化。商家平台双输。",
            thresholdDesc: "阈值突破：获客成本超过产品利润线，经营基础瓦解。",
            steps: ["流量成本攀升", "支付更高广告费", "获客成本>利润", "提价或降质", "平台生态恶化"],
            thresholdIdx: 2,
        },
        { 
            title: "4. 过度产能扩张陷阱",
            desc: "需求旺盛 → 厂商扩张产能 → 供给过剩 → 价格跌破成本 → 亏本倾销。全行业亏损。",
            thresholdDesc: "阈值突破：价格跌破现金成本线，生产越多亏损越大。",
            steps: ["需求旺盛", "扩张产能", "供给过剩", "价格跌破成本", "亏本倾销"],
            thresholdIdx: 3,
        },
        { 
            title: "5. 劣币驱逐良币逆向选择",
            desc: "少数违规获利 → 守规者失客户 → 被迫降低标准 → 行业诚信崩塌 → 客户离场。优质玩家退出。",
            thresholdDesc: "阈值突破：质量/诚信底线失守，客户信任瓦解。",
            steps: ["少数违规获利", "守规者失客户", "被迫降低标准", "行业诚信崩塌", "客户离场"],
            thresholdIdx: 3,
        },
        { 
            title: "6. 创新回避与专利丛林",
            desc: "专利丛林 → 外围微小创新 → 巨头压制 → 技术进步缓慢 → 低水平竞争。发展潜力枯竭。",
            thresholdDesc: "阈值突破：创新活力阈值，颠覆性创新被系统性压制。",
            steps: ["专利丛林", "外围微小创新", "巨头压制", "技术进步缓慢", "低水平竞争"],
            thresholdIdx: 2,
        },
        { 
            title: "7. 数据暴政内容螺旋",
            desc: "算法偏爱爆款 → 创作者转向标题党 → 用户审美阈值降低 → 平台加大推荐 → 深度内容退出。",
            thresholdDesc: "阈值突破：用户注意力耐心阈值，深度内容无法生存。",
            steps: ["算法偏爱爆款", "转向标题党", "用户审美阈值降", "平台加大推荐", "深度内容退出"],
            thresholdIdx: 2,
        },
        { 
            title: "8. 疲劳式人力消耗",
            desc: "客户要求低价快速 → 压缩人力 → 员工超负荷 → 质量下降人才流失 → 公司能力丧失。",
            thresholdDesc: "阈值突破：人才可持续阈值，创造力枯竭，核心流失。",
            steps: ["低价快速要求", "压缩人力", "员工超负荷", "质量↓人才流失", "能力丧失"],
            thresholdIdx: 2,
        },
        { 
            title: "9. 军备竞赛学历贬值",
            desc: "企业提高学历门槛 → 求职者追求高学历 → 学历通胀 → 门槛再提高 → 投入产出比下降。",
            thresholdDesc: "阈值突破：学历信号阈值，硕士成为基配，成本远超收益。",
            steps: ["提高学历门槛", "追求高学历", "学历通胀", "门槛再提高", "投入产出比↓"],
            thresholdIdx: 2,
        },
        { 
            title: "10. 流量诅咒实体商业",
            desc: "客流下滑 → 入驻平台付高佣金 → 利润降品质降 → 消费者更倾向电商 → 实体凋敝。",
            thresholdDesc: "阈值突破：实体盈亏平衡客流阈值，开店不如线上。",
            steps: ["客流下滑", "入驻高佣金", "利润降品质降", "消费者倾向电商", "实体凋敝"],
            thresholdIdx: 2,
        },
        { 
            title: "11. 合规成本监管套利",
            desc: "监管出台 → 合规成本上升 → 部分玩家违规套利 → 劣币驱逐良币 → 行业风险失控。",
            thresholdDesc: "阈值突破：合规成本剪刀差，守法成本远高于违规。",
            steps: ["监管出台", "合规成本上升", "玩家违规套利", "劣币驱逐良币", "行业风险失控"],
            thresholdIdx: 2,
        },
        { 
            title: "12. 共享经济供给过剩",
            desc: "高补贴涌入 → 运力过剩 → 单量收入下降 → 维护↓体验差 → 用户流失。",
            thresholdDesc: "阈值突破：供给方生存收入阈值，司机/单车无利可图。",
            steps: ["高补贴涌入", "运力过剩", "单量收入下降", "维护↓体验差", "用户流失"],
            thresholdIdx: 2,
        },
        { 
            title: "13. 新闻伦理崩坏",
            desc: "广告收入下跌 → 转向点击率 → 标题党情绪化 → 读者信任下降 → 公信力丧失。",
            thresholdDesc: "阈值突破：新闻公信力阈值，读者不再相信任何报道。",
            steps: ["广告收入下跌", "转向点击率", "标题党情绪化", "读者信任↓", "公信力丧失"],
            thresholdIdx: 3,
        },
        { 
            title: "14. 金融杠杆投机周期",
            desc: "投机资本加杠杆 → 价格虚高 → 实体企业减产 → 价格暴跌 → 杠杆爆仓。",
            thresholdDesc: "阈值突破：实体承受力阈值，价格信号脱离供需。",
            steps: ["投机资本加杠杆", "价格虚高", "实体企业减产", "价格暴跌", "杠杆爆仓"],
            thresholdIdx: 1,
        },
        { 
            title: "15. 网红工业化流水线",
            desc: "头部垄断流量 → 批量复制素人 → 内容同质化 → 欺骗式营销 → 信任透支。",
            thresholdDesc: "阈值突破：粉丝情感与消费信任阈值，模式根基动摇。",
            steps: ["头部垄断流量", "批量复制素人", "内容同质化", "欺骗式营销", "信任透支"],
            thresholdIdx: 3,
        },
        { 
            title: "16. 预防性治疗医疗挤兑",
            desc: "医患关系紧张 → 防御性检查 → 医疗费用上升 → 购买更多保险 → 社会成本失控。",
            thresholdDesc: "阈值突破：医患互信阈值，医疗行为转向自保，成本失控。",
            steps: ["医患关系紧张", "防御性检查", "医疗费用上升", "购买更多保险", "社会成本失控"],
            thresholdIdx: 1,
        }
    ];

    const caseListEl = document.getElementById('caseList');
    function renderSidebar() {
        caseListEl.innerHTML = '';
        cases.forEach((c, index) => {
            const li = document.createElement('li');
            li.className = 'case-item' + (index === 0 ? ' active' : '');
            li.dataset.index = index;
            li.textContent = c.title;
            caseListEl.appendChild(li);
        });
    }
    renderSidebar();

    const displayTitle = document.getElementById('displayTitle');
    const displayDesc = document.getElementById('displayDesc');
    const displayThreshold = document.getElementById('displayThreshold');

    const canvas = document.getElementById('cycleCanvas');
    const ctx = canvas.getContext('2d');
    const w = canvas.width, h = canvas.height;
    const centerX = w/2, centerY = h/2;

    let currentIdx = 0;
    let zoom = 1.0;
    let offsetX = 0, offsetY = 0;
    let isDragging = false;
    let lastMouseX = 0, lastMouseY = 0;
    const MIN_ZOOM = 0.4, MAX_ZOOM = 2.5;

    function getCurrentSteps() {
        return cases[currentIdx].steps;
    }
    function getThresholdIdx() {
        return cases[currentIdx].thresholdIdx;
    }
    function getCurrentTitle() {
        return cases[currentIdx].title.replace(/^\d+\.\s*/, '');
    }

    function drawWrappedText(ctx, text, x, y, maxWidth, lineHeight, color, fontSize) {
        ctx.save();
        ctx.font = `bold ${fontSize}px "Inter", sans-serif`;
        ctx.fillStyle = color;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';

        let lines = [];
        if (text.length <= 6) {
            lines = [text];
        } else {
            const mid = Math.ceil(text.length / 2);
            lines = [text.slice(0, mid), text.slice(mid)];
        }

        if (lines.length === 1) {
            ctx.fillText(text, x, y);
        } else {
            ctx.fillText(lines[0], x, y - lineHeight/2);
            ctx.fillText(lines[1], x, y + lineHeight/2);
        }
        ctx.restore();
    }

    function drawGraph(thresholdIdx, steps, caseTitle) {
        ctx.clearRect(0, 0, w, h);
        if (!steps || steps.length === 0) return;

        const N = steps.length;
        const baseRadius = 200;
        const nodeRadius = 42;
        const angleStep = (2 * Math.PI) / N;
        let startAngle = -Math.PI / 2; 

        function transformPoint(baseX, baseY) {
            const x = baseX * zoom + offsetX;
            const y = baseY * zoom + offsetY;
            return { x, y };
        }

        const points = [];
        const rawPoints = [];
        for (let i = 0; i < N; i++) {
            const angle = startAngle + i * angleStep;
            const rawX = centerX + Math.cos(angle) * baseRadius;
            const rawY = centerY + Math.sin(angle) * baseRadius;
            rawPoints[i] = { rawX, rawY };
        }

        for (let i = 0; i < N; i++) {
            const p = transformPoint(rawPoints[i].rawX, rawPoints[i].rawY);
            points[i] = p;
        }

        for (let i = 0; i < N; i++) {
            const j = (i + 1) % N;
            const { x: x1, y: y1 } = points[i];
            const { x: x2, y: y2 } = points[j];

            ctx.beginPath();
            ctx.moveTo(x1, y1);
            ctx.lineTo(x2, y2);
            ctx.strokeStyle = '#9bb7d6';
            ctx.lineWidth = 2.2;
            ctx.stroke();

            const dx = x2 - x1;
            const dy = y2 - y1;
            const len = Math.sqrt(dx*dx + dy*dy);
            if (len < 5) continue;

            const t = (performance.now() * 0.002 + i * 0.5) % 1;
            const safeT = 0.15 + t * 0.7;
            const fx = x1 + dx * safeT;
            const fy = y1 + dy * safeT;

            ctx.beginPath();
            ctx.arc(fx, fy, 5, 0, 2*Math.PI);
            ctx.fillStyle = '#ffffff';
            ctx.shadowColor = '#5a8ec9';
            ctx.shadowBlur = 10;
            ctx.fill();
            ctx.shadowBlur = 0;

            ctx.beginPath();
            ctx.arc(fx, fy, 3, 0, 2*Math.PI);
            ctx.fillStyle = '#b0d0f0';
            ctx.fill();
        }

        for (let i = 0; i < N; i++) {
            const { x, y } = points[i];
            const isThreshold = (i === thresholdIdx);

            ctx.beginPath();
            ctx.arc(x, y, nodeRadius, 0, 2 * Math.PI);
            
            if (isThreshold) {
                const t = Date.now() / 180;
                const alpha = 0.7 + 0.3 * Math.sin(t * 3);
                ctx.fillStyle = `rgba(209, 69, 69, ${alpha})`;
                ctx.shadowColor = '#d14545';
                ctx.shadowBlur = 16;
            } else {
                ctx.fillStyle = '#f0f7ff';
                ctx.shadowColor = 'rgba(0,0,0,0.05)';
                ctx.shadowBlur = 6;
            }
            ctx.fill();
            ctx.shadowBlur = 0;
            ctx.strokeStyle = '#2b5f8a';
            ctx.lineWidth = 2;
            ctx.stroke();

            const textColor = isThreshold ? '#ffffff' : '#10355e';
            const fontSize = 14;
            drawWrappedText(ctx, steps[i], x, y, nodeRadius*1.8, fontSize+2, textColor, fontSize);
        }

        const centerTx = centerX * zoom + offsetX;
        const centerTy = centerY * zoom + offsetY;
        let centerFontSize = 22 * zoom;
        if (centerFontSize < 16) centerFontSize = 16;
        if (centerFontSize > 32) centerFontSize = 32;

        ctx.save();
        ctx.font = `500 ${centerFontSize}px "Inter", sans-serif`;
        ctx.fillStyle = '#2b4c73';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.shadowColor = '#b0c8e0';
        ctx.shadowBlur = 10;
        const metrics = ctx.measureText(caseTitle);
        const textWidth = metrics.width;
        const textHeight = centerFontSize * 0.8;
        ctx.shadowBlur = 0;
        ctx.fillStyle = 'rgba(255,255,255,0.7)';
        ctx.fillRect(centerTx - textWidth/2 - 8, centerTy - textHeight/2 - 4, textWidth + 16, textHeight + 8);
        ctx.shadowBlur = 6;
        ctx.fillStyle = '#1e3f62';
        ctx.fillText(caseTitle, centerTx, centerTy);
        ctx.restore();

        for (let i = 0; i < N; i++) {
            const j = (i + 1) % N;
            const { x: x1, y: y1 } = points[i];
            const { x: x2, y: y2 } = points[j];
            const dx = x2 - x1;
            const dy = y2 - y1;
            const len = Math.sqrt(dx*dx + dy*dy);
            if (len < 10) continue;
            const arrowSize = 14;
            const ratio = (len - nodeRadius*1.2) / len;
            const arrowX = x1 + dx * ratio;
            const arrowY = y1 + dy * ratio;
            const angle = Math.atan2(dy, dx);
            ctx.beginPath();
            ctx.moveTo(arrowX, arrowY);
            ctx.lineTo(arrowX - arrowSize * 0.5 * Math.cos(angle - 0.4), arrowY - arrowSize * 0.5 * Math.sin(angle - 0.4));
            ctx.lineTo(arrowX - arrowSize * 0.5 * Math.cos(angle + 0.4), arrowY - arrowSize * 0.5 * Math.sin(angle + 0.4));
            ctx.closePath();
            ctx.fillStyle = '#6f8fb2';
            ctx.shadowBlur = 4;
            ctx.shadowColor = '#a0b8d0';
            ctx.fill();
            ctx.shadowBlur = 0;
        }
    }

    function animate() {
        const steps = getCurrentSteps();
        const thIdx = getThresholdIdx();
        const title = getCurrentTitle();
        drawGraph(thIdx, steps, title);
        requestAnimationFrame(animate);
    }
    animate();

    function switchCase(index) {
        currentIdx = index;
        const c = cases[index];
        displayTitle.innerText = c.title;
        displayDesc.innerText = c.desc;
        displayThreshold.innerHTML = `<span class="blink-dot"></span><strong>阈值点：</strong>${c.thresholdDesc}`;

        document.querySelectorAll('.case-item').forEach((el, i) => {
            if (i === index) el.classList.add('active');
            else el.classList.remove('active');
        });

        zoom = 1.0;
        offsetX = 0;
        offsetY = 0;
    }

    caseListEl.addEventListener('click', (e) => {
        const li = e.target.closest('.case-item');
        if (!li) return;
        const idx = li.dataset.index;
        if (idx !== undefined) switchCase(parseInt(idx));
    });

    switchCase(0);

    canvas.addEventListener('wheel', (e) => {
        e.preventDefault();
        const rect = canvas.getBoundingClientRect();
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        const canvasX = (mouseX - offsetX) / zoom;
        const canvasY = (mouseY - offsetY) / zoom;

        const delta = e.deltaY > 0 ? -0.1 : 0.1;
        const newZoom = Math.min(MAX_ZOOM, Math.max(MIN_ZOOM, zoom + delta));
        if (newZoom !== zoom) {
            offsetX = mouseX - canvasX * newZoom;
            offsetY = mouseY - canvasY * newZoom;
            zoom = newZoom;
        }
    });

    canvas.addEventListener('mousedown', (e) => {
        if (e.button !== 0) return;
        isDragging = true;
        lastMouseX = e.clientX;
        lastMouseY = e.clientY;
        canvas.style.cursor = 'grabbing';
        e.preventDefault();
    });

    window.addEventListener('mousemove', (e) => {
        if (!isDragging) return;
        const dx = e.clientX - lastMouseX;
        const dy = e.clientY - lastMouseY;
        offsetX += dx;
        offsetY += dy;
        lastMouseX = e.clientX;
        lastMouseY = e.clientY;
        e.preventDefault();
    });

    window.addEventListener('mouseup', () => {
        if (isDragging) {
            isDragging = false;
            canvas.style.cursor = 'grab';
        }
    });

    canvas.addEventListener('dblclick', () => {
        zoom = 1.0;
        offsetX = 0;
        offsetY = 0;
    });

    document.getElementById('resetZoomBtn').addEventListener('click', () => {
        zoom = 1.0;
        offsetX = 0;
        offsetY = 0;
    });

    window.addEventListener('mouseleave', () => {
        if (isDragging) {
            isDragging = false;
            canvas.style.cursor = 'grab';
        }
    });
})();