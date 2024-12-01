const LOGIN_URL = "login.html";
const apiUrlUsuarios = '/usuarios';
const apiUrlPosts = '/posts';


// Inicializa db_usuarios e db_posts como arrays vazios para evitar erros
var db_usuarios = [];
var db_posts = [];

// Objeto para o usuário corrente
var usuarioCorrente = {};






// Funções de manipulação de dados e controle de login


function exibePosts() {
    let listaPost = '';
    for (let i = 0; i < db_posts.length; i++) {
        let post = db_posts[i];
        listaPost += `<tr><li>
                            <div class=" postzin col-sm-5 m-auto mt-5">
                                <div class="postzin card mb-3 p-4">
                                    
                                    <div class="card-title d-flex align-items-center">
                                        <img src="${post.url}" style="margin-right:10px; border-radius:20px;" width="35px" height="35px">
                                        <h5 class="teste m-0"></h5>
                                    </div>
                                    <hr>
                                    <div class="card-body">
                                        <img src="${post.url}" width="100%">
                                        <p class="card-text">${post.descricao}</p>
                                        <p class="card-text">${post.id}</p>
                                        <p class="card-text"><small>${post.time}</small></p>
                                        <hr>
                                        <p href="" class="btn btn--doar">Curtir</p>
                                        <p href="" class="btn btn--comment">Comentar</p>
                                    </div>
                                </div>
                            </div>
                        </li></tr>`;
    }

    document.getElementById("table-usuarios").innerHTML = listaPost;

    // Adiciona o nome em todos os elementos com a classe "teste"
    let nomeElements = document.getElementsByClassName('teste');
    for (let element of nomeElements) {
        element.innerText += usuarioCorrente.nome;
    }
}

function initPage() {
    document.getElementById('btn_logout').addEventListener('click', logoutUser);
    document.getElementById('nomeUsuario').textContent = usuarioCorrente.nome;
   
      
    exibePosts();
}

// Obter a hora atual
function getTime() {
    const time = new Date();
    const hour = time.getHours().toString().padStart(2, '0');
    const minutes = time.getMinutes().toString().padStart(2, '0');
    return `${hour}h ${minutes}min`;
}

// Função para gerar códigos randômicos
function generateUUID() { 
    var d = new Date().getTime();
    var d2 = (performance && performance.now && (performance.now() * 1000)) || 0;
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random() * 16;
        if (d > 0) {
            r = (d + r) % 16 | 0;
            d = Math.floor(d / 16);
        } else {
            r = (d2 + r) % 16 | 0;
            d2 = Math.floor(d2 / 16);
        }
        return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
}

// Inicializa o usuarioCorrente e banco de dados de usuários
function initLoginApp() {
    usuarioCorrenteJSON = sessionStorage.getItem('usuarioCorrente');
    if (usuarioCorrenteJSON) {
        usuarioCorrente = JSON.parse(usuarioCorrenteJSON);
    }

    // Carrega dados de usuários da API JSONServer
    fetch(apiUrlUsuarios)
        .then(response => {
            if (!response.ok) {
                throw new Error("Erro ao buscar dados de usuários");
            }
            return response.json();
        })
        .then(data => {
            db_usuarios = data;
            console.log("Usuários carregados:", db_usuarios);
        })
        .catch(error => {
            console.error('Erro ao carregar usuários:', error);
        });

    // Carrega dados de posts da API JSONServer
    fetch(apiUrlPosts)
        .then(response => {
            if (!response.ok) {
                throw new Error("Erro ao buscar dados de posts");
            }
            return response.json();
        })
        .then(data => {
            db_posts = data;
            console.log("Posts carregados:", db_posts);
        })
        .catch(error => {
            console.error('Erro ao carregar posts:', error);
        });
}

// Verifica login do usuário
function loginUser(login, senha) {
    for (var i = 0; i < db_usuarios.length; i++) {
        var usuario = db_usuarios[i];
        if (login === usuario.login && senha === usuario.senha) {
            usuarioCorrente = { id: usuario.id, login: usuario.login, email: usuario.email, nome: usuario.nome };
            sessionStorage.setItem('usuarioCorrente', JSON.stringify(usuarioCorrente));
            return true;
        }
    }
    return false;
}

// Apaga dados do usuário corrente no sessionStorage
function logoutUser() {
    usuarioCorrente = {};
    sessionStorage.setItem('usuarioCorrente', JSON.stringify(usuarioCorrente));
    window.location = LOGIN_URL;
}

// Adiciona um novo usuário
function addUser(nome, login, senha, email) {
    let usuario = { "id": generateUUID(), "login": login, "senha": senha, "nome": nome, "email": email };
    fetch(apiUrlUsuarios, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(usuario),
    })
    .then(response => {
        console.log("Resposta ao adicionar usuário:", response);
        if (!response.ok) {
            throw new Error("Erro ao inserir usuário");
        }
        return response.json();
    })
    .then(data => {
        db_usuarios.push(data); // Aqui adiciona a resposta da API ao `db_usuarios`
        console.log("Usuário adicionado:", data);
        alert("Usuário inserido com sucesso");
    })
    .catch(error => {
        console.error('Erro ao inserir usuário:', error);
        alert("Erro ao inserir usuário");
    });
    window.location.reload(true);
}

// Adiciona um novo post
function addPost(url, descricao) {
    let post = { "id": generateUUID(), "url": url, "descricao": descricao, "time": getTime()};
    fetch(apiUrlPosts, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(post),
    })
    .then(response => {
        console.log("Resposta ao adicionar post:", response);
        if (!response.ok) {
            throw new Error("Erro ao inserir post");
        }
        return response.json();
    })
    .then(data => {
        db_posts.push(data); // Adiciona o post retornado pela API
        console.log("Post adicionado:", data);
        alert("Post inserido com sucesso");
    })
    .catch(error => {
        console.error('Erro ao inserir post:', error);
        alert("Erro ao inserir post");
    });
}

function salvaPost(event) {
    event.preventDefault();
    let url = document.getElementById('url-foto').value;
    let descricao = document.getElementById('txt_descricao').value;
    alert("url: "+ url + "descricao: "+ descricao);

    addPost(url, descricao); // Simulando uma função `addPost`
    
    alert('Post salvo com sucesso.');
  
    $('#postModal').modal('hide');
    window.location.reload(true);
}

// Declara uma função para processar o formulário de login
function processaFormLogin (event) {                
    // Cancela a submissão do formulário para tratar sem fazer refresh da tela
    event.preventDefault ();

    // Obtem os dados de login e senha a partir do formulário de login
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Valida login e se estiver ok, redireciona para tela inicial da aplicação
    resultadoLogin = loginUser (username, password);
    if (resultadoLogin) {
        window.location.href = 'index.html';
    }
    else { // Se login falhou, avisa ao usuário
        alert ('Usuário ou senha incorretos');
    }
}

function salvaLogin (event) {
    // Cancela a submissão do formulário para tratar sem fazer refresh da tela
    event.preventDefault ();

    // Obtem os dados do formulário
    let login  = document.getElementById('txt_login').value;
    let nome   = document.getElementById('txt_nome').value;
    let email  = document.getElementById('txt_email').value;
    let senha  = document.getElementById('txt_senha').value;
    let senha2 = document.getElementById('txt_senha2').value;
    if (senha != senha2) {
        alert ('As senhas informadas não conferem.');
        return
}

    // Adiciona o usuário no banco de dados
    addUser (nome, login, senha, email);
    alert ('Usuário salvo com sucesso. Proceda com o login para ');

    // Oculta a div modal do login
    //document.getElementById ('loginModal').style.display = 'none';
    $('#loginModal').modal('hide');
}



// Inicializa a aplicação de login
initLoginApp();
