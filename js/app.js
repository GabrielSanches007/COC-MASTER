// O JSON completo está embutido para evitar erros de carregamento externo no GitHub
const database = [
    { "id": 1, "n": "Centro de Vila", "t": "recursos", "m": { "1": 1, "2": 2, "3": 3, "4": 4, "5": 5, "6": 6, "7": 7, "8": 8, "9": 9, "10": 10, "11": 11, "12": 5, "13": 5, "14": 5, "15": 5, "16": 5 } },
    { "id": 100, "n": "Canhão", "t": "defesa", "m": { "1": 2, "2": 3, "3": 4, "4": 5, "5": 6, "6": 7, "7": 8, "8": 10, "9": 11, "10": 13, "11": 15, "12": 17, "13": 19, "14": 20, "15": 21, "16": 22 } },
    // ... adicione os outros itens do JSON aqui conforme a necessidade
];

let currentCV = 12;

function changeCV(amount) {
    const newVal = currentCV + amount;
    if (newVal >= 1 && newVal <= 16) {
        currentCV = newVal;
        document.getElementById('cv-display').innerText = currentCV;
        updateUI();
    }
}

function updateUI() {
    const container = document.getElementById('data-container');
    container.innerHTML = `<h3>Níveis Máximos para CV ${currentCV}</h3>`;
    
    // Exemplo de filtragem de dados baseada no CV selecionado
    const items = database.filter(item => item.m[currentCV]);
    
    items.forEach(item => {
        const div = document.createElement('div');
        div.innerHTML = `<strong>${item.n}:</strong> Nível ${item.m[currentCV]}`;
        container.appendChild(div);
    });
}

// Inicializa a tela
window.onload = updateUI;
