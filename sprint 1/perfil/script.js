function lerDados() {
    let strDados = localStorage.getItem('db');
    if (strDados) {
        let objDados = JSON.parse(strDados);
        // Atualiza os campos com os dados do localStorage
        document.getElementById('campoNome').value = objDados.nome;
        document.getElementById('campoEmail').value = objDados.email;
        document.getElementById('campoData').value = objDados.data_de_nascimento;
        document.getElementById('campoSenha').value = objDados.senha;

        // Atualiza a imagem do perfil
        document.getElementById('foto_perfil').src = objDados.urlImagem || ''; // Adiciona um campo para URL da imagem
        document.getElementById('foto_perfilAS').src = objDados.urlImagem || '';
        document.getElementById('foto_perfilMenu').src = objDados.urlImagem || '';
    }
}

function SalvarDados() {
    let dados = {
        nome: document.getElementById('campoNome').value,
        email: document.getElementById('campoEmail').value,
        data_de_nascimento: document.getElementById('campoData').value,
        senha: document.getElementById('campoSenha').value,
        urlImagem: document.getElementById('urlIMG').value // Certifique-se de que este campo existe
    };

    localStorage.setItem('db', JSON.stringify(dados));
    alert('Dados Alterados!');
}

function AlterarImagem() {
    var linkimg = document.getElementById('urlIMG').value;
    var fotoPerfil = document.getElementById('foto_perfil');
    var fotoPerfilAside = document.getElementById('foto_perfilAS');
    var fotoperfilMenu = document.getElementById('foto_perfilMenu');

    // Atualiza a fonte da imagem
    fotoPerfil.src = linkimg;
    fotoPerfilAside.src = linkimg;
    fotoperfilMenu.src = linkimg;

    // Salva a nova URL da imagem no localStorage
    SalvarDados();
}

// Carregar os dados ao carregar a página
window.onload = lerDados;


