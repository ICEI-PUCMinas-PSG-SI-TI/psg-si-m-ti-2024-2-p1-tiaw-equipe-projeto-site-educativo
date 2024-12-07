// Elementos DOM
const selecaoCurso = document.getElementById('selecaoCurso');
const entradaMensagem = document.getElementById('entradaMensagem');
const botaoEnviar = document.getElementById('botaoEnviar');
const listaMensagens = document.getElementById('listaMensagens');
const painelLateral = document.getElementById('painelLateral');

// Informações dos professores
const professores = {
    matematica: { nome: "Prof. João", icone: "icone.png" },
    portugues: { nome: "Prof. Maria", icone: "icone.png" },
    historia: { nome: "Prof. Pedro", icone: "icone.png" }
};

const mensagensPorProfessor = JSON.parse(localStorage.getItem('mensagensPorProfessor')) || {
    matematica: [],
    portugues: [],
    historia: []
};

let professorAtual = null;

// Função para adicionar um professor à lista
function adicionarProfessorNaLista(curso) {
    const professor = professores[curso];
    const itemLateral = document.createElement('div');
    itemLateral.className = 'item-lateral ' + curso;
    itemLateral.innerHTML = `
        <img src="${professor.icone}" alt="${professor.nome}" class="foto-professor" />
        <div class="info">
            <p class="nome">${professor.nome}</p>
            <p class="curso">${selecaoCurso.options[selecaoCurso.selectedIndex].text}</p>
        </div>
    `;
    itemLateral.addEventListener('click', () => {
        professorAtual = curso;
        atualizarChat();
    });
    painelLateral.prepend(itemLateral); // Adiciona no início
}

selecaoCurso.addEventListener('change', () => {
    const cursoSelecionado = selecaoCurso.value;

    if (cursoSelecionado) {
        // Adiciona o professor à lista se não estiver presente
        if (!painelLateral.querySelector(`.${cursoSelecionado}`)) {
            adicionarProfessorNaLista(cursoSelecionado);
        }

        // Seleciona o professor atual
        professorAtual = cursoSelecionado;

        // Redefine o valor do dropdown para "Selecionar Curso"
        selecaoCurso.value = ""; // Ou defina como o valor correspondente à opção padrão

        atualizarChat();
    }
});

// Adiciona evento de teclado para enviar mensagem ao pressionar Enter
entradaMensagem.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        botaoEnviar.click(); // Simula um clique no botão de enviar
    }
});

botaoEnviar.addEventListener('click', () => {
    const textoMensagem = entradaMensagem.value.trim();

    if (textoMensagem && professorAtual) {
        const dataAtual = new Date();
        const horario = dataAtual.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        const data = dataAtual.toLocaleDateString();

        const novaMensagem = { 
            texto: textoMensagem, 
            remetente: "Aluno", 
            horario: horario,
            data: data 
        };

        mensagensPorProfessor[professorAtual].push(novaMensagem); // Adiciona a nova mensagem à lista
        localStorage.setItem('mensagensPorProfessor', JSON.stringify(mensagensPorProfessor)); // Salva no localStorage

        entradaMensagem.value = ''; // Limpa a entrada de mensagem
        atualizarChat();
    }
});

// Função para limpar mensagens
function limparMensagens() {
    mensagensPorProfessor[professorAtual] = []; // Limpa as mensagens do professor atual
    localStorage.setItem('mensagensPorProfessor', JSON.stringify(mensagensPorProfessor)); // Atualiza o localStorage
    atualizarChat(); // Atualiza a visualização do chat
}

function atualizarChat() {
    listaMensagens.innerHTML = ''; 
    const dataAtual = new Date();
    let ultimaDataExibida = null; // Variável para controlar a última data exibida

    mensagensPorProfessor[professorAtual].forEach(msg => {
        const itemMensagem = document.createElement('div');
        itemMensagem.className = 'mensagem aluno'; 

        const msgData = new Date(msg.data); // Cria um objeto de data a partir da string da mensagem
        
        // Verifica se a mensagem é do mesmo dia
        const ehMesmoDia = dataAtual.toDateString() === msgData.toDateString();
        
        // Define se a hora e a data devem ser exibidas
        const mostrarData = !ehMesmoDia || (ehMesmoDia && ultimaDataExibida !== msg.data);
        const mostrarHora = ehMesmoDia;

        // Atualiza a última data exibida
        if (mostrarData) {
            ultimaDataExibida = msg.data;
        }

        // Formatação da hora e data
        const horaFormato = mostrarHora ? `<span class="hora">${msg.horario}</span>` : '';
        const dataFormato = mostrarData ? `<span class="data">${msg.data}</span>` : '';

        itemMensagem.innerHTML = `
            <div class="chat">
                <p>${msg.texto}</p>
                ${horaFormato}
            </div>
            <div class="horario-data">
                ${dataFormato}
            </div>
        `;

        listaMensagens.appendChild(itemMensagem);
    });
}

// Carregar mensagens ao iniciar
function carregarMensagens() {
    if (mensagensPorProfessor[professorAtual]) {
        atualizarChat();
    }
}

// Chamando a função para carregar mensagens ao iniciar
carregarMensagens();
