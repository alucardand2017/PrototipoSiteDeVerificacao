tabela.addEventListener("dblclick", function(event) {
    event.preventDefault();
    if (event.target.classList == "remove-conteudo") {
        event.target.parentNode.classList.add("fadeOut");
        setTimeout(function() {
            event.target.parentNode.remove();
        }, 400)
    }

});