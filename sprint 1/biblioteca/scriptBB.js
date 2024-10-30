
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

// Função de busca
document.getElementById("searchInput").addEventListener("keyup", function() {
    const filter = this.value.toLowerCase();
    const rows = document.querySelectorAll("#tabela tbody tr");

    rows.forEach(row => {
        const text = row.innerText.toLowerCase();
        if (filter === "" || text.includes(filter)) {
            row.style.backgroundColor = "yellow";
        } else {
            row.style.backgroundColor = ""; // Remove a cor de fundo
        }
    });
});