// === BANCO DE DATOS INTEGRADO (JSON) ===
const DB = [
    { id: 1, n: "Centro de Vila", t: "recursos", m: {1:1, 2:2, 3:3, 4:4, 5:5, 6:6, 7:7, 8:8, 9:9, 10:10, 11:11, 12:5, 13:5, 14:5, 15:5, 16:5} },
    { id: 2, n: "Mina de Ouro", t: "recursos", m: {1:2, 2:4, 3:6, 4:8, 5:10, 6:10, 7:11, 8:12, 9:12, 10:13, 11:15, 12:16, 13:17, 14:18, 15:19, 16:20} },
    { id: 3, n: "Coletor de Elixir", t: "recursos", m: {1:2, 2:4, 3:6, 4:8, 5:10, 6:10, 7:11, 8:12, 9:12, 10:13, 11:15, 12:16, 13:17, 14:18, 15:19, 16:20} },
    { id: 4, n: "Broca de Elixir Negro", t: "recursos", m: {7:3, 8:3, 9:6, 10:7, 11:8, 12:9, 13:10, 14:11, 15:12, 16:13} },
    { id: 5, n: "Armazenamento de Ouro", t: "recursos", m: {1:1, 2:2, 3:6, 4:8, 5:9, 6:10, 7:11, 8:12, 9:12, 10:13, 11:14, 12:15, 13:16, 14:17, 15:18, 16:19} },
    { id: 6, n: "Armazenamento de Elixir", t: "recursos", m: {1:1, 2:2, 3:6, 4:8, 5:9, 6:10, 7:11, 8:12, 9:12, 10:13, 11:14, 12:15, 13:16, 14:17, 15:18, 16:19} },
    { id: 7, n: "Armaz. de Elixir Negro", t: "recursos", m: {7:2, 8:4, 9:6, 10:7, 11:8, 12:9, 13:10, 14:11, 15:12, 16:13} },
    { id: 8, n: "Castelo do Clã", t: "recursos", m: {1:0, 2:1, 3:2, 4:2, 5:2, 6:3, 7:3, 8:4, 9:5, 10:6, 11:7, 12:8, 13:9, 14:10, 15:11, 16:12} },
    { id: 100, n: "Canhão", t: "defesa", m: {1:2, 2:3, 3:4, 4:5, 5:6, 6:7, 7:8, 8:10, 9:11, 10:13, 11:15, 12:17, 13:19, 14:20, 15:21, 16:22} },
    { id: 101, n: "Torre da Arqueira", t: "defesa", m: {2:2, 3:3, 4:4, 5:6, 6:7, 7:8, 8:10, 9:11, 10:13, 11:15, 12:17, 13:19, 14:20, 15:21, 16:22} },
    { id: 107, n: "Artilharia Águia", t: "defesa", m: {11:2, 12:3, 13:4, 14:5, 15:6, 16:7} },
    { id: 109, n: "Torre Inferno", t: "defesa", m: {10:3, 11:5, 12:6, 13:7, 14:8, 15:9, 16:10} },
    { id: 208, n: "Dragão", t: "elixir", m: {7:2, 8:3, 9:4, 10:5, 11:6, 12:7, 13:8, 14:9, 15:10, 16:11} },
    { id: 212, n: "Dragão Elétrico", t: "elixir", m: {11:2, 12:3, 13:4, 14:5, 15:6, 16:7} },
    { id: 303, n: "Golem", t: "negro", m: {8:2, 9:4, 10:5, 11:6, 12:7, 13:9, 14:10, 15:11, 16:12} },
    { id: 403, n: "Goblin Sorrateiro", t: "super", m: {11:8, 12:9} },
    { id: 504, n: "Lançador de Troncos", t: "cerco", m: {13:4, 14:4, 15:4, 16:5} },
    { id: 601, n: "Rainha Arqueira", t: "herois", m: {9:30, 10:40, 11:50, 12:65, 13:75, 14:80, 15:90, 16:95} }
    // ... (Mantenha todos os outros itens do JSON anterior aqui dentro)
];

// === ESTADO GLOBAL ===
let currentTab = 'dashboard';
let currentCV = parseInt(localStorage.getItem('clash_cv')) || 12;
let levels = JSON.parse(localStorage.getItem('clash_lvls')) || {};
let stratMode = 'farm';

// === FUNÇÕES DE INICIALIZAÇÃO ===
document.addEventListener('DOMContentLoaded', () => {
    console.log("Sistema ClashMaster Iniciado...");
    initApp();
});

function initApp() {
    render();
    setupEventListeners();
}

function setupEventListeners() {
    // Cliques nos botões da barra lateral
    document.querySelectorAll('.sc-btn').forEach(btn => {
        btn.onclick = () => {
            currentTab = btn.dataset.tab;
            document.querySelectorAll('.sc-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            document.getElementById('tabTitle').innerText = btn.innerText;
            render();
        };
    });

    // Controle de CV
    document.getElementById('btnPlus').onclick = () => updateCV(1);
    document.getElementById('btnMinus').onclick = () => updateCV(-1);

    // Mudança de níveis nos inputs
    document.addEventListener('input', (e) => {
        if (e.target.classList.contains('sc-input')) {
            const id = e.target.dataset.id;
            levels[id] = parseInt(e.target.value) || 1;
            localStorage.setItem('clash_lvls', JSON.stringify(levels));
            // Não renderiza tudo de novo para não perder o foco do input, apenas atualiza a barra visualmente
            updateProgressBar(e.target);
        }
    });
}

function updateCV(amt) {
    currentCV = Math.max(1, Math.min(17, currentCV + amt));
    localStorage.setItem('clash_cv', currentCV);
    render();
}

function updateProgressBar(input) {
    const card = input.closest('.sc-card');
    const bar = card.querySelector('.sc-fill');
    const max = parseInt(input.max);
    const val = parseInt(input.value);
    const perc = Math.min(100, (val / max) * 100);
    bar.style.width = perc + '%';
}

function render() {
    const grid = document.getElementById('grid');
    document.getElementById('cvDisplay').innerText = currentCV;
    grid.innerHTML = '';

    if (currentTab === 'dashboard') {
        renderDashboard(grid);
    } else if (currentTab === 'strategy') {
        renderStrategy(grid);
    } else {
        renderCategory(grid);
    }
}

function renderDashboard(grid) {
    let cur = 0, maxTotal = 0;
    const available = DB.filter(u => u.m[currentCV] !== undefined);
    
    available.forEach(u => {
        cur += (levels[u.id] || 1);
        maxTotal += u.m[currentCV];
    });

    const score = Math.round((cur / maxTotal) * 100) || 0;
    
    grid.innerHTML = `
        <div class="analysis-card">
            <h2>Progresso da Vila: ${score}%</h2>
            <div class="sc-bar"><div class="sc-fill" style="width:${score}%; background:var(--status-high)"></div></div>
            <p style="margin-top:20px">Seu Centro de Vila ${currentCV} está sendo analisado pela IA...</p>
        </div>
    `;
}

function renderCategory(grid) {
    const items = DB.filter(u => u.t === currentTab && u.m[currentCV] !== undefined);

    if(items.length === 0) {
        grid.innerHTML = `<p style="grid-column: 1/-1; text-align:center; opacity:0.5">Nada disponível para CV${currentCV} nesta categoria.</p>`;
        return;
    }

    grid.innerHTML = items.map(u => {
        const lvl = levels[u.id] || 1;
        const max = u.m[currentCV];
        const perc = (lvl / max) * 100;
        return `
            <div class="sc-card">
                <h3>${u.n}</h3>
                <div style="display:flex; justify-content:space-between; align-items:center">
                    <input type="number" class="sc-input" data-id="${u.id}" value="${lvl}" max="${max}" min="1">
                    <span>MAX: ${max}</span>
                </div>
                <div class="sc-bar"><div class="sc-fill" style="width:${perc}%; background:var(--status-mid)"></div></div>
            </div>
        `;
    }).join('');
}

function renderStrategy(grid) {
    grid.innerHTML = `
        <div class="strat-container" style="grid-column: 1/-1">
            <div class="strat-options">
                <button class="strat-opt-btn" onclick="setStrat('farm')">FARM</button>
                <button class="strat-opt-btn" onclick="setStrat('push')">TROFÉU</button>
                <button class="strat-opt-btn" onclick="setStrat('war')">GUERRA</button>
            </div>
            <div id="stratContent" class="strat-result">Selecione um objetivo acima.</div>
        </div>
    `;
}

// Global para os botões de estratégia funcionarem
window.setStrat = (type) => {
    const content = document.getElementById('stratContent');
    const strats = {
        farm: "Use Goblins Sorrateiros e Feitiços de Pulo. Foque em minas externas.",
        push: "E-Drag Spam ou Queen Charge Root Riders são o meta atual.",
        war: "Blizzard Lalo ou Hybrid (Mineiros/Corredores) garantem o PT."
    };
    content.innerHTML = `<h3>Estratégia Recomendada:</h3><p>${strats[type]}</p>`;
};
