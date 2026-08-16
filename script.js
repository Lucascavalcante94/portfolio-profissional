function mostrarMensagem() {
    alert("Olá! Seja bem-vindo ao meu portfólio profissional.");
}

function enviarFormulario(event) {
    event.preventDefault();

    const nome = document.getElementById("nome").value;

    document.getElementById("resultado").textContent =
        `Obrigado pelo contato, ${nome}!`;

    localStorage.setItem("nome", nome);
}