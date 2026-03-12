function adicionarItem() {
 let paragrafo = document.createElement('p');
 paragrafo.textContent = `Item: ${formItem.value} - Quantidade: ${formQuantidade.value} - Preço: R$ ${precoForamtado.toFixed(2)}`;
}

// Primeiro passo - pegar os valores dos campos do formulário
let formItem = document.getElementById('item');
let formQuantidade = document.getElementById('quantidade');
let formPreco = document.getElementById('preco');

// Transformando o preço em um número
precoForamtado = parseFloat(formPreco);

// Nome do evento do botão para adicionar o item
let btAdicionar = document.getElementById('adicionar');
btAdicionar.addEventListener("click", adicionarItem());

