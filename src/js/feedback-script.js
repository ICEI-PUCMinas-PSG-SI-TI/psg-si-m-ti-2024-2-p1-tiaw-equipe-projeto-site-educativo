document.addEventListener('DOMContentLoaded', () => {
    const stars = document.querySelectorAll('.star');
    const submitBtn = document.getElementById('submit-btn');
    const commentBox = document.getElementById('comment');
    const feedbacksContainer = document.getElementById('feedbacks-container');
    const viewMoreBtn = document.getElementById('view-more-btn');
    const hideBtn = document.getElementById('hide-btn');
    let rating = 0;

    // Função de seleção de estrelas
    stars.forEach(star => {
        star.addEventListener('click', function() {
            rating = this.getAttribute('data-rating');
            stars.forEach(s => {
                s.style.color = '#ffd700'; 
                if (s.getAttribute('data-rating') <= rating) {
                    s.style.color = '#f90'; 
                }
            });
        });
    });

    // Função para enviar feedback
    submitBtn.addEventListener('click', () => {
        const comment = commentBox.value.trim();
        
        if (comment && rating) {
            const feedback = {
                rating: rating,
                comment: comment
            };

            // Armazena o feedback no localStorage
            let feedbacks = JSON.parse(localStorage.getItem('feedbacks')) || [];
            feedbacks.push(feedback);
            localStorage.setItem('feedbacks', JSON.stringify(feedbacks));

            // Limpa os campos após o envio
            commentBox.value = '';
            rating = 0;
            stars.forEach(s => s.style.color = '#ffd700');
            alert('Feedback enviado com sucesso!');
            renderFeedbacks(); // Re-renderiza os feedbacks para incluir o novo
        } else {
            alert('Por favor, preencha todos os campos.');
        }
    });

    // Função para renderizar feedbacks
    let visibleFeedbacks = 3;

    function renderFeedbacks() {
        feedbacksContainer.innerHTML = ''; 
        const feedbacks = JSON.parse(localStorage.getItem('feedbacks')) || [];

        // Exibe apenas feedbacks visíveis
        feedbacks.slice(0, visibleFeedbacks).forEach(feedback => {
            const feedbackDiv = document.createElement('div');
            feedbackDiv.className = 'feedback';
            
            // Cria o layout da avaliação com estrelas e comentário
            const starsContainer = document.createElement('div');
            starsContainer.className = 'feedback-stars';
            for (let i = 1; i <= 5; i++) {
                const star = document.createElement('span');
                star.textContent = '★';
                star.style.color = i <= feedback.rating ? '#f90' : '#ffd700';
                starsContainer.appendChild(star);
            }

            const commentText = document.createElement('p');
            commentText.textContent = feedback.comment;

            feedbackDiv.appendChild(starsContainer);
            feedbackDiv.appendChild(commentText);
            feedbacksContainer.appendChild(feedbackDiv);
        });

        // Controle de visibilidade dos botões "Ver mais" e "Ocultar"
        if (visibleFeedbacks >= feedbacks.length) {
            viewMoreBtn.style.display = 'none';
            hideBtn.style.display = 'block';
        } else {
            viewMoreBtn.style.display = 'block';
            hideBtn.style.display = 'none';
        }
    }

    // Expande a lista de feedbacks ao clicar em "Ver mais"
    viewMoreBtn.addEventListener('click', () => {
        visibleFeedbacks += 3; // Mostra mais 3 feedbacks
        renderFeedbacks();
    });

    // Oculta feedbacks extras ao clicar em "Ocultar"
    hideBtn.addEventListener('click', () => {
        visibleFeedbacks = 3; // Redefine para número inicial de feedbacks visíveis
        renderFeedbacks();
    });

    // Renderiza feedbacks iniciais ao carregar a página
    renderFeedbacks();
});

