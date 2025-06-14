const form = document.getElementById("form-add-contato");
const nomeContato = [];
const numeroContato = [];

let i = 1; // Vai servir para contar os contatos
let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    adicionaLinha();    
    atualizaTabela();
});

function adicionaLinha(){
    const inputNomeContato = document.getElementById("nome-contato")
    const inputNumeroContato = document.getElementById("numero-contato")

    if(numeroContato.includes(inputNumeroContato.value)){
        alert(`O contato: ${inputNumeroContato.value} já foi inserida`);
    } else {
        nomeContato.push(inputNomeContato.value);
        numeroContato.push(inputNumeroContato.value);

        let linha = '<tr>';
        linha += `<td>${i}</td>`;
        linha += `<td>${inputNomeContato.value}</td>`;
        linha += `<td>${inputNumeroContato.value}</td>`;
        linha += '</tr>';

        linhas += linha;
    }

    inputNomeContato.value = '';
    inputNumeroContato.value = '';
    i++; //adiciona +1 ao contador de contatos
}

function atualizaTabela(){
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;

}