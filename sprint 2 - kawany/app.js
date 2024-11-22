fetch('./json.json') // Atualize o caminho para incluir o nome correto do arquivo JSON
    .then(res => {
        if (!res.ok) throw new Error(`Erro HTTP: ${res.status}`);
        return res.json();
    })
    .then(data => {
        let videos = data.videosCarrossel;
        if (videos.length > 0) {
            //posteriormente será feita uma condicional para ver qual a categoria correta
            // Pegue o primeiro vídeo
            let imagem = `
            
                <div class="overlay"></div>
                <img id="img" src="${videos[0].frame}" width="100%" height="350px" class="d-block w-100" alt="...">
                <div id="caixa">
                <h3 class="text-start text-white">
                    <i class="bi bi-play-btn mx-1"></i> ${videos[0].categoria}
                </h3>
                <h5 class="mt-2 text-white">${videos[0].titulo}</h5>
                <p class="text-white">${videos[0].texto}</p>
                </div>
             
            `;
            // Insere o conteúdo gerado no elemento com ID 'imagemCurso'
            document.getElementById('imagemCurso').innerHTML = imagem;
        } else {
            console.error('Nenhum vídeo encontrado no JSON.');
        }
    })
    .catch(error => {
        console.error('Erro ao carregar o JSON:', error);
    });


//preencher os cards das aulas

fetch('./json.json') // Atualize o caminho para incluir o nome correto do arquivo JSON
    .then(res => {
        if (!res.ok) throw new Error(`Erro HTTP: ${res.status}`);
        return res.json();
    })
    .then(data => {
        let aulasPortugues = data.aulasPortugues; // Array do JSON
        let aulasPort = ''; // String acumuladora

        for (let i = 0; i < aulasPortugues.length; i++) {
            // Inicia uma nova linha a cada 3 cards
            if (i % 3 === 0) {
                if (i !== 0) {
                    // Fecha a linha anterior (exceto na primeira iteração)
                    aulasPort += `</div>`;
                }
                // Abre uma nova linha
                aulasPort += `<div class="row mt-3 justify-content-between">`;
            }

            // Adiciona um card à linha
            aulasPort += `
                <div class="col-md-3 col-3">
                    <a href="#" class="link-light">
                        <div class="card">
                            <img src="${aulasPortugues[i].frame}" class="card-img-top" alt="...">
                            <div class="card-body">
                            <h6 id= textoaula >Aula ${i+1}<h6>
                                <h5 class="card-title">${aulasPortugues[i].titulo}</h5>
                            </div>
                        </div>
                    </a>
                </div>`;
        }

        // Fecha a última linha, caso necessário
        if (aulasPortugues.length > 0) {
            aulasPort += `</div>`;
        }

        // Insere o conteúdo gerado no elemento com ID 'linhaulas'
        document.getElementById('linhaulas').innerHTML = aulasPort;
    })
    .catch(error => {
        console.error('Erro ao carregar o JSON:', error);
    });




