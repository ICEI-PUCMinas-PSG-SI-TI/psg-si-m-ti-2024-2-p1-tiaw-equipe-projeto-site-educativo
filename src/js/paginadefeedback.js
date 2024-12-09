document.addEventListener('DOMContentLoaded', () => {
    const submitBtn = document.getElementById('submit-btn');
    const commentBox = document.getElementById('comment');
    const stars = document.querySelectorAll('.star');
    const feedbacksContainer = document.getElementById('feedbacks-container');
    let rating = 0;

    stars.forEach(star => {
        star.addEventListener('click', () => {
            rating = star.getAttribute('data-rating');
            stars.forEach(s => s.classList.remove('selected'));
            star.classList.add('selected');
        });
    });

    submitBtn.addEventListener('click', () => {
        const comment = commentBox.value;
        
        if (comment && rating) {
            const feedback = {
                rating: rating,
                comment: comment
            };

            let feedbacks = JSON.parse(localStorage.getItem('feedbacks')) || [];
            feedbacks.push(feedback);
            localStorage.setItem('feedbacks', JSON.stringify(feedbacks));

            commentBox.value = '';
            rating = 0;
            stars.forEach(s => s.classList.remove('selected'));
            alert('Feedback enviado com sucesso!');

            displayFeedbacks();
        } else {
            alert('Por favor, preencha todos os campos.');
        }
    });

    function displayFeedbacks() {
        const feedbacks = JSON.parse(localStorage.getItem('feedbacks')) || [];
        feedbacksContainer.innerHTML = '';

        feedbacks.forEach((feedback, index) => {
            const feedbackDiv = document.createElement('div');
            feedbackDiv.className = 'feedback-item';
            feedbackDiv.innerHTML = `
                <strong>Classificação: ${feedback.rating} ★</strong>
                <p>${feedback.comment}</p>
            `;
            feedbacksContainer.appendChild(feedbackDiv);
        });
    }
    displayFeedbacks();
});
