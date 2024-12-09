document.getElementById("botao-comecar").addEventListener("click", function () {
    const botao = this;
    botao.style.transform = "scale(1.3)";
    botao.style.backgroundColor = "#20c997";
    botao.style.color = "#fff";
    setTimeout(() => {
        botao.style.transform = "scale(1)";
        botao.style.backgroundColor = "#007bff";
    }, 300);
});
