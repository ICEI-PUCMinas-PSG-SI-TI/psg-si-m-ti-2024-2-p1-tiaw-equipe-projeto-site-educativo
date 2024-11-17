fetch('./json.json') // Atualize o caminho para incluir o nome correto do arquivo JSON
    .then(res => {
        if (!res.ok) throw new Error(`Erro HTTP: ${res.status}`);
        return res.json();
    })
    .then(data => {
        // Acessa a lista 'videosCarrossel' dentro do JSON
        let videos = data.videosCarrossel;
        let botoesHTML = '';
        let carrosselHTML = '';

        for (let i = 0; i < videos.length; i++) {
            // Construção dos botões do carrossel
            botoesHTML += i === 0
                ? `<button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="${i}" class="active" aria-current="true" aria-label="Slide ${i + 1}"></button>`
                : `<button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="${i}" aria-label="Slide ${i + 1}"></button>`;

            // Construção dos itens do carrossel
            carrosselHTML += `
            <div class="carousel-item ${i === 0 ? 'active' : ''}">
                <div class="overlay rounded"></div>
                <img id="teste" src="${videos[i].frame}" width="100%" height="800px" class="d-block w-100 rounded" alt="...">
                <div id="caixa" class="carousel-caption d-none d-md-block text-start">
                    <h6 class="text-start">
                        <i class="bi bi-play-btn mx-1"></i> ${videos[i].categoria}
                    </h6>
                    <h5 id="tituloCarrossel" class="mt-2">${videos[i].titulo}</h5>
                    <p id="textoCarrossel" class="">${videos[i].texto}</p>
                    <div class="row">
                        <div class="col-md-1">
                            <button 
                                type="button" 
                                data-bs-toggle="modal" 
                                data-bs-target="#exampleModal-${i}" 
                                class="btn rounded-circle bg-white" 
                                id="assistir">
                                <i class="bi bi-play-circle-fill"></i>
                            </button>
                        </div>
                        <div class="col-md-2">
                            <p class="mt-2">Assistir Vídeo</p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Modal para exibir o vídeo -->
            <div class="modal fade" id="exampleModal-${i}" tabindex="-1" aria-labelledby="exampleModalLabel-${i}" aria-hidden="true">
                <div class="modal-dialog modal-lg">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="exampleModalLabel-${i}">${videos[i].titulo}</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <!-- Exibe o vídeo -->
                            <div class="ratio ratio-16x9">
                                <iframe 
                                 src="${videos[i].iframeSRC}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>   
                                </iframe>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
                        </div>
                    </div>
                </div>
            </div>
            `;
        }

        // Inserção dos elementos no HTML após o loop
        document.getElementById('botoesCarrossel').innerHTML = botoesHTML;
        document.getElementById('carrossel').innerHTML = carrosselHTML;
    })
    .catch(error => console.error('Erro ao carregar JSON:', error));



//carrossel livros digitais

fetch('./json.json')
    .then(res => {
        if (!res.ok) throw new Error(`Erro HTTP: ${res.status}`);
        return res.json();
    })
    .then(data => {
        // Acessa a lista 'livrosdigitais' dentro do JSON
        const livros = data.livrosdigitais;
        let livrosHTML = '';

        // Cria os slides, cada um com até 4 livros
        for (let i = 0; i < livros.length; i += 4) {
            // Abre um novo slide (carousel-item) e define a classe "active" no primeiro item
            livrosHTML += `<div class="carousel-item${i === 0 ? ' active' : ''}"><div class="row justify-content-between">`;

            // Adiciona até 4 livros no slide atual
            for (let j = 0; j < 4; j++) {
                if (i + j < livros.length) {  // Garante que não passe do número de livros
                    livrosHTML += `
                        <div class="col-md-3">
                            <a href="${livros[i + j].linklivro}" target="_blank"><img src="${livros[i + j].imagem}" class="d-block" height="250px" alt="Livro ${i + j + 1}"></a>
                        </div>
                    `;
                }
            }

            // Fecha o slide do carrossel
            livrosHTML += `</div></div>`;
        }

        // Insere os slides no HTML dentro da div "carousel-inner"
        document.querySelector('#carouselExampleAutoplaying .carousel-inner').innerHTML = livrosHTML;
    })
    .catch(error => console.error('Erro ao carregar JSON:', error));

// carrega cursos

fetch('./json.json')
    .then(res => {
        if (!res.ok) throw new Error(`Erro HTTP: ${res.status}`);
        return res.json();
    })
    .then(data => {
        // Acessa a lista 'cursos' dentro do JSON
        const cursos = data.cursos;
        let cursosHTML = '';

        // Cria os slides, cada um com até 2 cursos
        for (let i = 0; i < cursos.length; i += 2) {
            // Abre um novo slide (carousel-item) e define a classe "active" no primeiro item
            cursosHTML += `<div class="carousel-item${i === 0 ? ' active' : ''}"><div class="row justify-content-between">`;

            // Adiciona até 2 cursos no slide atual
            for (let j = 0; j < 2; j++) {
                if (i + j < cursos.length) {  // Garante que não passe do número de livros
                    cursosHTML += `
                       <div class="card h-100 mb-3 p-0" style="max-width: 540px; min-width: 540px;">
    <div class="row g-0 h-100">
        <div class="col-md-4 h-100">
            <img src="${cursos[i + j].imagem}" style="width: 100%; height: 310px; object-fit: cover;" class="img-fluid rounded-start" alt="...">
        </div>
        <div class="col-md-8 h-100 bg-dark text-white">
            <div class="card-body d-flex flex-column justify-content-between">
                <h6 class="text-primary">Curso Online</h6>
                <h4 class="card-title mt-4">${cursos[i + j].titulo}</h4>
                <p class="card-text">${cursos[i + j].sinopse}</p>
                <p class="card-text">
                    <small class="text-secondary">Nível: ${cursos[i + j].nivel}</small>
                </p>
                <a>
                    <button id="botaoCard" class="btn btn-outline-primary rounded col-6 text-center">Acessar Cursos</button>
                </a>
            </div>
        </div>
    </div>
</div>
                    `;
                }
            }

            // Fecha o slide do carrossel
            cursosHTML += `</div></div>`;
        }

        // Insere os slides no HTML dentro da div "carousel-inner"
        document.getElementById('carroselCursos').innerHTML = cursosHTML;
    })
    .catch(error => console.error('Erro ao carregar JSON:', error));

// amostra de videos

fetch('./json.json')
    .then(res => {
        if (!res.ok) throw new Error(`Erro HTTP: ${res.status}`);
        return res.json();
    })
    .then(data => {
        // Acessa a lista 'amostravideos' dentro do JSON
        const amostravideos = data.amostravideos;
        let amostravideosHTML = '';

        // Cria os slides, cada um com até 4 vídeos
        for (let i = 0; i < amostravideos.length; i += 4) {
            // Abre um novo slide (carousel-item) e define a classe "active" no primeiro item
            if (i === 0) { // Apenas o primeiro slide recebe a classe "active"
                amostravideosHTML += `<div class="row justify-content-between">`;
            } else {
                amostravideosHTML += `<div class="row justify-content-between">`;
            }

            // Adiciona até 4 vídeos no slide atual
            for (let j = 0; j < 4; j++) {
                if (i + j < amostravideos.length) {  // Garante que não passe do número de vídeos
                    amostravideosHTML += `
                    <div class="col-md-3 col-12">  <!-- Mudança para garantir responsividade -->
                        <iframe class = rounded width="250" height="140" src="${amostravideos[i + j].iframe}" 
                        frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                        referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> 
                    </div>  
                    `;
                }
            }

            // Fecha o slide do carrossel (row)
            amostravideosHTML += `</div>`;
        }

        // Insere os slides no HTML dentro da div "carousel-inner"
        document.getElementById('linhavideos').innerHTML = amostravideosHTML;
    })
    .catch(error => console.error('Erro ao carregar JSON:', error));

