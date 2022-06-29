var tabela = document.querySelector("#sites-cadastrados");
var botaoAdicionarSite = document.querySelector("#botao-inserir");
var campoEndereco = document.querySelector(".caixa-busca");


botaoAdicionarSite.addEventListener("click", adicionarSite);

campoEndereco.addEventListener("keydown", function(event) {
    if (event.which == 13) {
        adicionarSite();
    }
});

function adicionarSite() {
    var sitesTr = tabela.querySelectorAll("tr");
    var text = campoEndereco.value;
    if (validaTextoEmail(text)) {
        criaTd(campoEndereco.value);
        console.log(sitesTr);
        campoEndereco.value = null;
    } else {
        console.log("Digite um endereço válido!");
        alert("Digite um endereço válido!");
    }
}

function validaTextoEmail(regex) {
    return regex.match(/\./) && regex.length >= 3;
}