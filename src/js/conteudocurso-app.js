// Seleciona todos os botões com a classe 'category'
document.querySelectorAll('.category').forEach(button => {
    button.addEventListener('click', () => {
        // Obtém o valor do atributo data-url associado ao botão
        const url = button.getAttribute('data-url');
        
        // Verifica se a URL foi configurada
        if (url) {
            // Redireciona para a URL correspondente
            window.location.href = url;
        } else {
            alert('URL não configurada para esta categoria.');
        }
    });
});
