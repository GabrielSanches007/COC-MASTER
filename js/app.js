const DB = [
    { id: 1, n: "Centro de Vila", t: "recursos", m: {1:1, 2:2, 3:3, 4:4, 5:5, 6:6, 7:7, 8:8, 9:9, 10:10, 11:11, 12:5, 13:5, 14:5, 15:5, 16:5} },
    { id: 2, n: "Mina de Ouro", t: "recursos", m: {1:2, 2:4, 3:6, 4:8, 5:10, 6:10, 7:11, 8:12, 9:12, 10:13, 11:15, 12:16, 13:17, 14:18, 15:19, 16:20} },
    { id: 3, n: "Coletor de Elixir", t: "recursos", m: {1:2, 2:4, 3:6, 4:8, 5:10, 6:10, 7:11, 8:12, 9:12, 10:13, 11:15, 12:16, 13:17, 14:18, 15:19, 16:20} },
    { id: 4, n: "Broca de Elixir Negro", t: "recursos", m: {7:3, 8:3, 9:6, 10:7, 11:8, 12:9, 13:10, 14:11, 15:12, 16:13} },
    { id: 5, n: "Armazenamento de Ouro", t: "recursos", m: {1:1, 2:2, 3:6, 4:8, 5:9, 6:10, 7:11, 8:12, 9:12, 10:13, 11:14, 12:15, 13:16, 14:17, 15:18, 16:19} },
    { id: 6, n: "Armazenamento de Elixir", t: "recursos", m: {1:1, 2:2, 3:6, 4:8, 5:9, 6:10, 7:11, 8:12, 9:12, 10:13, 11:14, 12:15, 13:16, 14:17, 15:18, 16:19} },
    { id: 7, n: "Armaz. de Elixir Negro", t: "recursos", m: {7:2, 8:4, 9:6, 10:7, 11:8, 12:9, 13:10, 14:11, 15:12, 16:13} },
    { id: 8, n: "Castelo do Clã", t: "recursos", m: {1:0, 2:1, 3:2, 4:2, 5:2, 6:3, 7:3, 8:4, 9:5, 10:6, 11:7, 12:8, 13:9, 14:10, 15:11, 16:12} },
    { id: 9, n: "Cabana do Construtor", t: "recursos", m: {1:1, 14:4, 15:5, 16:6} },
    { id: 100, n: "Canhão", t: "defesa", m: {1:2, 2:3, 3:4, 4:5, 5:6, 6:7, 7:8, 8:10, 9:11, 10:13, 11:15, 12:17, 13:19, 14:20, 15:21, 16:22} },
    { id: 101, n: "Torre da Arqueira", t: "defesa", m: {2:2, 3:3, 4:4, 5:6, 6:7, 7:8, 8:10, 9:11, 10:13, 11:15, 12:17, 13:19, 14:20, 15:21, 16:22} },
    { id: 102, n: "Morteiro", t: "defesa", m: {3:1, 4:2, 5:3, 6:4, 7:5, 8:6, 9:7, 10:8, 11:10, 12:12, 13:13, 14:14, 15:15, 16:16} },
    { id: 103, n: "Defesa Aérea", t: "defesa", m: {4:2, 5:3, 6:4, 7:5, 8:6, 9:7, 10:8, 11:9, 12:10, 13:11, 14:12, 15:13, 16:14} },
    { id: 104, n: "Torre do Mago", t: "defesa", m: {5:2, 6:3, 7:4, 8:6, 9:7, 10:9, 11:10, 12:11, 13:12, 14:13, 15:15, 16:16} },
    { id: 105, n: "Dispersor Aéreo", t: "defesa", m: {6:2, 7:4, 8:5, 9:6, 10:6, 11:7, 12:7, 13:7, 14:7, 15:7, 16:8} },
    { id: 106, n: "Tesla Oculta", t: "defesa", m: {7:3, 8:6, 9:7, 10:8, 11:9, 12:10, 13:11, 14:13, 15:14, 16:15} },
    { id: 107, n: "Artilharia Águia", t: "defesa", m: {11:2, 12:3, 13:4, 14:5, 15:6, 16:7} },
    { id: 108, n: "X-Besta", t: "defesa", m: {9:3, 10:4, 11:5, 12:6, 13:7, 14:8, 15:9, 16:10} },
    { id: 109, n: "Torre Inferno", t: "defesa", m: {10:3, 11:5, 12:6, 13:7, 14:8, 15:9, 16:10} },
    { id: 110, n: "Torre de Bombas", t: "defesa", m: {8:2, 9:3, 10:6, 11:7, 12:8, 13:9, 14:10, 15:11, 16:12} },
    { id: 111, n: "Catapulta", t: "defesa", m: {13:2, 14:3, 15:4, 16:5} },
    { id: 112, n: "Monólito", t: "defesa", m: {15:2, 16:3} },
    { id: 113, n: "Muros (Nível Máx)", t: "defesa", m: {1:1, 2:2, 3:3, 4:4, 5:5, 6:6, 7:7, 8:8, 9:10, 10:11, 11:12, 12:13, 13:14, 14:15, 15:16, 16:17} },
    { id: 114, n: "Bomba", t: "defesa", m: {3:2, 4:2, 5:3, 6:3, 7:4, 8:5, 9:6, 10:7, 11:8, 12:9, 13:10, 14:11, 15:12, 16:13} },
    { id: 115, n: "Armadilha de Mola", t: "defesa", m: {4:1, 5:2, 6:2, 7:3, 8:4, 9:5, 10:5, 11:5, 12:5, 13:5, 14:5, 15:5} },
    { id: 116, n: "Bomba Gigante", t: "defesa", m: {6:1, 7:2, 8:3, 9:4, 10:5, 11:6, 12:7, 13:8, 14:9, 15:10, 16:11} },
    { id: 117, n: "Bomba Aérea", t: "defesa", m: {5:1, 6:2, 7:3, 8:3, 9:4, 10:5, 11:6, 12:7, 13:8, 14:9, 15:10, 16:11} },
    { id: 118, n: "Mina Aérea Guiada", t: "defesa", m: {7:1, 8:1, 9:2, 10:3, 11:4, 12:5, 13:6, 14:7, 15:8, 16:9} },
    { id: 119, n: "Armadilha de Esqueletos", t: "defesa", m: {8:1, 9:2, 10:3, 11:4, 12:5, 13:6, 14:7, 15:8} },
    { id: 120, n: "Armadilha Tornado", t: "defesa", m: {11:1, 12:2, 13:3, 14:3, 15:3} },
    { id: 200, n: "Bárbaro", t: "elixir", m: {1:1, 2:2, 3:2, 4:2, 5:3, 6:3, 7:4, 8:5, 9:6, 10:7, 11:8, 12:9, 13:9, 14:10, 15:11, 16:12} },
    { id: 201, n: "Arqueira", t: "elixir", m: {1:1, 2:2, 3:2, 4:2, 5:3, 6:3, 7:4, 8:5, 9:6, 10:7, 11:8, 12:9, 13:9, 14:10, 15:11, 16:12} },
    { id: 202, n: "Gigante", t: "elixir", m: {1:0, 2:1, 3:2, 4:2, 5:3, 6:3, 7:4, 8:5, 9:6, 10:7, 11:8, 12:9, 13:10, 14:10, 15:11, 16:12} },
    { id: 203, n: "Goblin", t: "elixir", m: {2:1, 3:2, 4:2, 5:3, 6:3, 7:4, 8:5, 9:6, 10:7, 11:8, 12:9} },
    { id: 204, n: "Quebra-muros", t: "elixir", m: {3:2, 4:2, 5:3, 6:3, 7:4, 8:5, 9:6, 10:7, 11:8, 12:9, 13:10, 14:11, 15:12, 16:13} },
    { id: 205, n: "Balão", t: "elixir", m: {4:2, 5:3, 6:3, 7:4, 8:5, 9:6, 10:7, 11:8, 12:9, 13:9, 14:10, 15:11, 16:12} },
    { id: 206, n: "Mago", t: "elixir", m: {5:3, 6:3, 7:4, 8:5, 9:6, 10:7, 11:8, 12:9, 13:10, 14:10, 15:11, 16:12} },
    { id: 207, n: "Curadora", t: "elixir", m: {6:2, 7:4, 8:4, 9:4, 10:5, 11:6, 12:7, 13:7, 14:8, 15:9, 16:10} },
    { id: 208, n: "Dragão", t: "elixir", m: {7:2, 8:3, 9:4, 10:5, 11:6, 12:7, 13:8, 14:9, 15:10, 16:11} },
    { id: 209, n: "P.E.K.K.A", t: "elixir", m: {8:3, 9:4, 10:6, 11:7, 12:8, 13:9, 14:10, 15:11} },
    { id: 210, n: "Bebê Dragão", t: "elixir", m: {9:2, 10:4, 11:5, 12:6, 13:7, 14:8, 15:9} },
    { id: 211, n: "Mineiro", t: "elixir", m: {10:3, 11:4, 12:6, 13:7, 14:8, 15:9} },
    { id: 212, n: "Dragão Elétrico", t: "elixir", m: {11:2, 12:3, 13:4, 14:5, 15:6, 16:7} },
    { id: 213, n: "Yeti", t: "elixir", m: {12:2, 13:3, 14:4, 15:5} },
    { id: 214, n: "Dragão Rider", t: "elixir", m: {14:2, 15:3, 16:4} },
    { id: 215, n: "Titã Elétrica", t: "elixir", m: {15:2, 16:3} },
    { id: 216, n: "Root Rider", t: "elixir", m: {15:3, 16:3} },
    { id: 300, n: "Servo", t: "negro", m: {7:2, 8:4, 9:5, 10:6, 11:7, 12:8, 13:9, 14:10, 15:11, 16:12} },
    { id: 301, n: "Corredor", t: "negro", m: {7:2, 8:4, 9:5, 10:6, 11:7, 12:9, 13:10, 14:11, 15:12, 16:13} },
    { id: 302, n: "Valquíria", t: "negro", m: {8:2, 9:4, 10:5, 11:6, 12:7, 13:8, 14:9, 15:10, 16:11} },
    { id: 303, n: "Golem", t: "negro", m: {8:2, 9:4, 10:5, 11:6, 12:7, 13:9, 14:10, 15:11, 16:12} },
    { id: 304, n: "Bruxa", t: "negro", m: {9:2, 10:3, 11:4, 12:5, 14:6, 16:7} },
    { id: 305, n: "Lava Hound", t: "negro", m: {9:2, 10:3, 11:4, 12:5, 13:6, 14:7, 15:8} },
    { id: 306, n: "Lançador", t: "negro", m: {10:2, 11:3, 12:4, 13:5, 14:6, 15:7} },
    { id: 307, n: "Golem de Gelo", t: "negro", m: {11:3, 12:5, 13:6, 14:7, 15:8} },
    { id: 308, n: "Caçador de Cabeças", t: "negro", m: {12:1, 13:2, 14:3, 16:5} },
    { id: 400, n: "Super Bárbaro", t: "super", m: {11:8, 12:9, 13:9, 14:10, 15:11, 16:12} },
    { id: 401, n: "Super Arqueira", t: "super", m: {11:8, 12:9, 13:9, 14:10, 15:11, 16:12} },
    { id: 402, n: "Super Gigante", t: "super", m: {11:8, 12:9, 13:10, 14:10, 15:11, 16:12} },
    { id: 403, n: "Goblin Sorrateiro", t: "super", m: {11:8, 12:9} },
    { id: 404, n: "Super Quebra-muros", t: "super", m: {11:8, 12:9, 13:10, 14:11, 15:12, 16:13} },
    { id: 405, n: "Balão Foguete", t: "super", m: {11:8, 12:9, 13:9, 14:10, 15:11, 16:12} },
    { id: 406, n: "Super Mago", t: "super", m: {11:8, 12:9, 13:10, 14:10, 15:11, 16:12} },
    { id: 407, n: "Super Dragão", t: "super", m: {12:7, 13:8, 14:9, 15:10, 16:11} },
    { id: 408, n: "Dragão Infernal", t: "super", m: {11:5, 12:6, 13:7, 14:8, 15:9} },
    { id: 409, n: "Super Servo", t: "super", m: {11:7, 12:8, 13:9, 14:10, 15:11, 16:12} },
    { id: 410, n: "Super Valquíria", t: "super", m: {12:7, 13:8, 14:9, 15:10, 16:11} },
    { id: 411, n: "Super Bruxa", t: "super", m: {11:4, 12:5, 14:6, 16:7} },
    { id: 412, n: "Sabujo de Gelo", t: "super", m: {11:4, 12:5, 13:6, 14:7, 15:8} },
    { id: 413, n: "Super Lançador", t: "super", m: {12:4, 13:5, 14:6, 15:7} },
    { id: 500, n: "Quebra-Muros de Cerco", t: "cerco", m: {12:3, 13:4, 14:4, 15:4, 16:5} },
    { id: 501, n: "Dirigível de Batalha", t: "cerco", m: {12:3, 13:4, 14:4, 15:4, 16:5} },
    { id: 502, n: "Quebra-Pedras", t: "cerco", m: {12:3, 13:4, 14:4, 15:4, 16:5} },
    { id: 503, n: "Quartel de Cerco", t: "cerco", m: {13:4, 14:4, 15:4, 16:5} },
    { id: 504, n: "Lançador de Troncos", t: "cerco", m: {13:4, 14:4, 15:4, 16:5} },
    { id: 505, n: "Lança-Chamas", t: "cerco", m: {14:4, 15:4, 16:5} },
    { id: 506, n: "Broca de Batalha", t: "cerco", m: {15:4, 16:5} },
    { id: 600, n: "Rei Bárbaro", t: "herois", m: {7:10, 8:20, 9:30, 10:40, 11:50, 12:65, 13:75, 14:80, 15:90, 16:95} },
    { id: 601, n: "Rainha Arqueira", t: "herois", m: {9:30, 10:40, 11:50, 12:65, 13:75, 14:80, 15:90, 16:95} },
    { id: 602, n: "Grande Guardião", t: "herois", m: {11:20, 12:40, 13:50, 14:55, 15:60, 16:70} },
    { id: 603, n: "Campeã Real", t: "herois", m: {13:25, 14:30, 15:40, 16:45} }
];

const state = {
    tab: 'dashboard',
    cv: parseInt(localStorage.getItem('sc_cv_elite')) || 12,
    lvls: JSON.parse(localStorage.getItem('sc_lvls_elite')) || {},
    stratMode: 'farm'
};

const App = {
    init() {
        this.bindEvents();
        this.render();
    },

    bindEvents() {
        const sidebar = document.getElementById('sidebar');
        const overlay = document.getElementById('sidebarOverlay');
        const menuToggle = document.getElementById('menuToggle');

        // LÓGICA DE ABRIR/FECHAR MENU
        const toggleMenu = () => {
            sidebar.classList.toggle('active');
            overlay.classList.toggle('active');
        };

        menuToggle.onclick = toggleMenu;
        overlay.onclick = toggleMenu;

        document.querySelectorAll('.sc-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                state.tab = btn.dataset.tab;
                
                // FECHAR MENU AUTOMATICAMENTE NO MOBILE APÓS CLICAR
                if (window.innerWidth <= 768) toggleMenu();

                document.querySelectorAll('.sc-btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                document.getElementById('tabTitle').innerText = btn.innerText;
                this.render();
            });
        });

        document.getElementById('btnPlus').onclick = () => this.updateCV(1);
        document.getElementById('btnMinus').onclick = () => this.updateCV(-1);

        document.addEventListener('change', (e) => {
            if (e.target.classList.contains('sc-input')) {
                state.lvls[e.target.dataset.id] = parseInt(e.target.value) || 1;
                localStorage.setItem('sc_lvls_elite', JSON.stringify(state.lvls));
                this.render();
            }
        });

        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('strat-opt-btn')) {
                state.stratMode = e.target.dataset.strat;
                this.renderStrategy();
            }
        });
    },

    updateCV(amt) {
        state.cv = Math.max(1, Math.min(16, state.cv + amt));
        localStorage.setItem('sc_cv_elite', state.cv);
        this.render();
    },

    analyze() {
        let cur = 0, max = 0, alerts = [];
        const available = DB.filter(u => u.m[state.cv] !== undefined && u.m[state.cv] > 0);
        available.forEach(u => {
            const lvl = state.lvls[u.id] || 1;
            const m = u.m[state.cv];
            cur += lvl; max += m;
            if (lvl / m < 0.5) alerts.push(`⚠️ Alerta Crítico: Atualize seu(ua) <b>${u.n}</b>.`);
        });
        const score = Math.round((cur / max) * 100) || 0;
        let rank = score > 90 ? "Lendário" : (score > 70 ? "Ouro" : (score > 40 ? "Prata" : "Bronze"));
        return { score, rank, alerts };
    },

    render() {
        const grid = document.getElementById('grid');
        document.getElementById('cvDisplay').innerText = state.cv;
        const data = this.analyze();
        const badge = document.getElementById('rankingBadge');
        badge.innerText = `NÍVEL ${data.rank}`;
        badge.className = `badge ${data.rank.toLowerCase()}`;
        grid.innerHTML = '';

        if (state.tab === 'dashboard') {
            grid.innerHTML = `
                <div class="analysis-card">
                    <h2>Progresso Geral do CV${state.cv}: <span style="color:var(--sc-gold)">${data.score}%</span></h2>
                    <div class="sc-bar"><div class="sc-fill" style="width:${data.score}%; background:var(--status-high)"></div></div>
                    <div style="margin-top:25px">
                        <h3 style="color:#aaa; font-size:0.85rem">PRIORIDADES DO CONSTRUTOR:</h3>
                        ${data.alerts.slice(0, 6).map(a => `<div class="alert-item">${a}</div>`).join('')}
                        ${data.alerts.length === 0 ? '<div class="alert-item" style="border-left-color:var(--status-high)">✅ Tudo maxado!</div>' : ''}
                    </div>
                </div>`;
        } else if (state.tab === 'strategy') {
            this.renderStrategy(grid);
        } else {
            const items = DB.filter(u => u.t === state.tab && u.m[state.cv] !== undefined && u.m[state.cv] > 0);
            grid.innerHTML = items.map(u => {
                const lvl = state.lvls[u.id] || 1;
                const max = u.m[state.cv];
                const perc = (lvl / max) * 100;
                const color = perc < 50 ? 'var(--status-low)' : (perc < 85 ? 'var(--status-mid)' : 'var(--status-high)');
                return `
                    <div class="sc-card">
                        <h3>${u.n}</h3>
                        <div style="display:flex; justify-content:space-between">
                            <input type="number" class="sc-input" data-id="${u.id}" value="${lvl}" max="${max}" min="1">
                            <span>MAX: ${max}</span>
                        </div>
                        <div class="sc-bar"><div class="sc-fill" style="width:${perc}%; background:${color}"></div></div>
                    </div>`;
            }).join('');
        }
    },

    renderStrategy(gridElement = document.getElementById('grid')) {
        let text = "";
        if (state.stratMode === 'farm') {
            text = state.cv < 11 ? "<b>Composição:</b> BARCH ou Full Goblins.<br><b>Foco:</b> Coletores externos." : "<b>Composição:</b> Goblins Sorrateiros.<br><b>Foco:</b> Depósitos e CV direto.";
        } else if (state.stratMode === 'push') {
            text = state.cv <= 12 ? "<b>Composição:</b> E-Drag Spam.<br><b>Foco:</b> Vilas aglomeradas." : "<b>Composição:</b> Super Lançadores Smash.<br><b>Foco:</b> Funil perfeito.";
        } else if (state.stratMode === 'war') {
            text = state.cv <= 11 ? "<b>Composição:</b> Queen Charge LaLo.<br><b>Foco:</b> Elimine CC e Rainha." : "<b>Composição:</b> Queen Charge Hybrid.<br><b>Foco:</b> Mineiros e Corredores pelo meio.";
        }
        gridElement.innerHTML = `
            <div class="strat-container">
                <h2>Objetivo - CV${state.cv}</h2>
                <div class="strat-options">
                    <div class="strat-opt-btn ${state.stratMode === 'farm' ? 'active' : ''}" data-strat="farm">Farm de Recursos</div>
                    <div class="strat-opt-btn ${state.stratMode === 'push' ? 'active' : ''}" data-strat="push">Subir Troféus</div>
                    <div class="strat-opt-btn ${state.stratMode === 'war' ? 'active' : ''}" data-strat="war">Guerra de Clãs</div>
                </div>
                <div class="strat-result">
                    <p>${text}</p>
                </div>
            </div>`;
    }
};

App.init();
