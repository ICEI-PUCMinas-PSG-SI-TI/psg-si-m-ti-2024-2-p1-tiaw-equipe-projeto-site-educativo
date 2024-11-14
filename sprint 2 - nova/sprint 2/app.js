fetch('./json.json') // Atualize o caminho para incluir o nome do arquivo
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
            carrosselHTML += i === 0
                ? `<div class="carousel-item active">
                        <img src="${videos[i].frame}" width="100%" height="800px" class="d-block w-100 opacity-75" alt="...">
                        <div class="carousel-caption d-none d-md-block">
                          <h5 class="bg-secondary">${videos[i].titulo}</h5>
                          <p class="bg-secondary">${videos[i].texto}</p>
                        </div>
                    </div>`
                : `<div class="carousel-item">
                        <img src="${videos[i].frame}  width="100%" height="800px"" class="d-block w-100 opacity-75" alt="...">
                        <div class="carousel-caption d-none d-md-block">
                          <h5 class="bg-secondary">${videos[i].titulo}</h5>
                          <p class="bg-secondary">${videos[i].texto}</p>
                        </div>
                    </div>`;
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
                       <div class="card mb-3" style="max-width: 540px;min-width: 540px">
                       <div class="row g-0">
                       <div class="col-md-4">
                       <img src="${cursos[i + j].imagem}" style="min-width:100%;" class="img-fluid rounded-start" alt="...">
                    </div>
                    <div class="col-md-8">
                    <div class="card-body">
                    <h5 class="card-title">${cursos[i + j].titulo}</h5>
                    <p class="card-text">${cursos[i + j].sinopse}</p>
                    <p class="card-text"><small class="text-body-secondary"> Nível: ${cursos[i + j].nivel}</small></p>
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
                        <iframe class = rounded width="250" height="140" src="${amostravideos[i+j].iframe}" 
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

