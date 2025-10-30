const log = document.getElementById("log");
const log2 = document.getElementById("log2")
const nomeInput = document.getElementById("nome");
const listaInput = document.getElementById("lista");

let listaEscolhida = []; // variável global, acessível em ambos os botões

document.getElementById("escolherlista").addEventListener("click", () => {
    const minhalista = listaInput.value.trim();
    
    if (!minhalista) {
        alert("Digite sua lista antes de confirmar!");
        return;
    }
    log.textContent = "";
    
    // divide a lista digitada por vírgulas e remove espaços extras
    listaEscolhida = minhalista.split(",").map(item => item.trim()).filter(Boolean);

    log.textContent += `Lista definida: [${listaEscolhida.join(", ")}]\n\n`;
});

document.getElementById("sortear").addEventListener("click", () => {
    const sorteado = nomeInput.value.trim();
    
    if (!sorteado) {
        alert("Digite seu nome antes de sortear!");
        return;
    }
    log.textContent = "";

    if (listaEscolhida.length === 0) {
        log.textContent += "A lista está vazia. Sorteio acabado! 😄\n\n";
        return;
    }

    const indice = Math.floor(Math.random() * listaEscolhida.length);
    const item = listaEscolhida[indice];

    log.textContent += `LISTA ATUAL ---> [${listaEscolhida.join(", ")}] <---\n\n`;
    log.textContent += `========== O ${sorteado} sorteou o ${item} ==========\n\n`;

    listaEscolhida.splice(indice, 1); // remove o item sorteado

    log.textContent += `LISTA APÓS O SORTEIO ===> [${listaEscolhida.join(", ")}] <===\n\n`;
    log.textContent += "--------------------------------------------------\n\n";

    log2.textContent += "--------------------------------------------------\n\n"
    log2.textContent += `Nome do sorteado: ${sorteado}\n\n`;
    log2.textContent += `Objeto sorteado: ${item}\n\n`; 
    nomeInput.value = "";
    nomeInput.focus();
});

