
window.onload = function() {
    CarregarDados();
};

let livros = JSON.parse(localStorage.getItem('livros')) || [];

// Verifica se o array de livros está vazio e adiciona os livros padrão
if (livros.length === 0) {
    livros.push(
        {
            nome: "Livro de Português",
            url: "https://issuu.com/editoraftd/docs/immp0000090001p240100200010_cara-reduz",
            nlink: "www.livrodeportugues.com.br"
        },
        {
            nome: "Livro de Matemática",
            url: "https://issuu.com/editoraftd/docs/immp0000090079p240100020020_cara-reduz",
            nlink: "www.livrodematematica.com.br"
        }
    );

    // Salva os livros padrão no Local Storage
    localStorage.setItem('livros', JSON.stringify(livros));
}

function CarregarDados() {
    // Recupera os dados do Local Storage
    let livros = JSON.parse(localStorage.getItem('livros')) || [];
    const tbody = document.querySelector('#tabela tbody');

    // Limpa o tbody antes de adicionar os itens
    tbody.innerHTML = '';

    // Adiciona cada livro na tabela
    livros.forEach(livro => {
        tbody.innerHTML += `
            <tr> 
                <td>${livro.nome}</td> 
                <td><a href="${livro.url}" target="_blank">${livro.nlink}</a></td> 
            </tr>`;
    });
}

function AdicionarLivro() {
    var nomelivro = document.getElementById('campoNome').value;
    var link = document.getElementById('urlLivro').value;
    var nomelink = document.getElementById('nomeLink').value;

    if (!nomelivro || !link || !nomelink) {
        alert("Todos os campos devem ser preenchidos!");
        return;
    }

    const tbody = document.querySelector('#tabela tbody');
    const newRow = tbody.insertRow();
    const cell1 = newRow.insertCell(0);
    const cell2 = newRow.insertCell(1);
    cell1.textContent = nomelivro;
    cell2.innerHTML = `<a href="${link}" target="_blank">${nomelink}</a>`;

    SalvarDados(nomelivro, link, nomelink);

    // Limpa os campos
    document.getElementById('campoNome').value = '';
    document.getElementById('urlLivro').value = '';
    document.getElementById('nomeLink').value = '';
}


function SalvarDados(nomelivro, link, nomelink) {
    // Recupera os dados existentes no Local Storage
    let livros = JSON.parse(localStorage.getItem('livros')) || [];

    // Adiciona o novo livro ao array de livros
    livros.push({ nome: nomelivro, url: link, nlink: nomelink });

    // Salva o array atualizado no Local Storage
    localStorage.setItem('livros', JSON.stringify(livros));
}


function filtro (){
var pesquisa = document.getElementById('pesquisa');



}
