//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
document.addEventListener("DOMContentLoaded", () => {
    let amigos = [];

    window.adicionarAmigo = function () {
        let inputNome = document.getElementById("amigo").value.trim();
        if (inputNome === "") {
            alert("Por favor, digite um nome válido!");
            return;
        }
        amigos.push(inputNome);
        atualizarLista();
        document.getElementById("amigo").value = "";
    };

    function atualizarLista() {
        let lista = document.getElementById("listaAmigos");
        lista.innerHTML = "";
        amigos.forEach(nome => {
            let li = document.createElement("li");
            li.textContent = nome;
            lista.appendChild(li);
        });
    }

    window.sortearAmigo = function () {
        if (amigos.length === 0) {
            alert("Adicione pelo menos um nome para o sorteio!");
            return;
        }
        let sorteado = amigos[Math.floor(Math.random() * amigos.length)];
        let resultado = document.getElementById("resultado");
        resultado.innerHTML = `<li>O amigo secreto é: <strong>${sorteado}</strong>!</li>`;
    };
});