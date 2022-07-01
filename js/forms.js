    function criaTd(site) {
        var siteTd = document.createElement("td");
        var statusTd = document.createElement("td");
        var timeTd = document.createElement("td");
        var removeTd = document.createElement("td");

        siteTd.classList.add("site-conteudo");
        siteTd.textContent = site;

        statusTd.classList.add("status-conteudo");
        statusTd.textContent = " . . .";

        timeTd.classList.add("time-conteudo");
        timeTd.textContent = " . . ."

        removeTd.classList.add("remove-conteudo");
        removeTd.textContent = "( x )";

        siteTr = document.createElement("tr");
        siteTr.classList.add("tr-conteudo");
        siteTr.appendChild(siteTd);
        siteTr.appendChild(statusTd);
        siteTr.appendChild(timeTd);
        siteTr.appendChild(removeTd);

        tabela.appendChild(siteTr);
    }

    function siteAtivo(atributo) {
        atributo.textContent = "Ativo";
    }

    function siteInativo(atributo) {
        atributo.textContent = "Inativo";
    }