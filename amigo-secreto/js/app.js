let amigos = [];


function adicionar() {
    let nome = document.getElementById('nome-amigo').value.trim(); // Remova os espaços em branco no início e no final
    if (nome === '') {
        alert("Por favor, insira um nome válido para o amigo.");
        return;
    }

    if(amigos.includes(nome.value)){
        alert("Nome já adicionado. Insira um complemento!");
        return;
    }

    let lista = document.getElementById('lista-amigos');
    amigos.push(nome);


    if (lista.textContent == '') {
        lista.textContent = nome;
    } else {
        lista.textContent = lista.textContent + ', ' + nome;
    }
    document.getElementById('nome-amigo').value = '';
}


function sortear() {
    if (amigos.length < 4) {
        alert("Adicione pelo menos quatro amigos para sortear.");
        return;
    }

    embaralha(amigos);

    let sorteio = document.getElementById('lista-sorteio');
    for (let i = 0; i < amigos.length; i++) {
        if (i == amigos.length - 1) {
            sorteio.innerHTML = sorteio.innerHTML + amigos[i] +' --> ' +amigos[0] + '<br/>';
        } else {
            sorteio.innerHTML = sorteio.innerHTML + amigos[i] +' --> ' +amigos[i + 1] + '<br/>';
        }
    }

}

function embaralha(lista) {
    for (let indice = lista.length; indice; indice--) {
        const indiceAleatorio = Math.floor(Math.random() * indice);
        [lista[indice - 1], lista[indiceAleatorio]] = [lista[indiceAleatorio], lista[indice - 1]];
    }
}

function reiniciar(){
    amigos = [];
    document.getElementById('lista-sorteio').innerHTML = '';
    document.getElementById('lista-amigos').innerHTML = '';
}
