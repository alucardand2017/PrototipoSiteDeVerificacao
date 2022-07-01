function atualizaListaSites() {
    return document.querySelectorAll(".tr-conteudo");
}

function siteResponse(conteudoTr) {

    for (i = 0; i < conteudoTr.length; i++) {
        var siteTd = conteudoTr[i].querySelector(".site-conteudo");
        var statusTd = conteudoTr[i].querySelector(".status-conteudo");
        var timeTd = conteudoTr[i].querySelector(".time-conteudo");
        var site = siteTd.textContent;
        var statusSite = statusTd.textContent;
        var time = timeTd.textContent;

        var URL = "http://" + siteTd.innerHTML;
        var settings = {
            cache: false,
            dataType: "jsonp",
            async: true,
            crossDomain: true,
            url: URL,
            method: "GET",
            headers: {
                accept: "application/json",
                "Access-Control-Allow-Origin": "*",
            },
            statusCode: {
                200: function(response) {
                    console.log("Status 200: Page is up!");
                    statusTd.textContent = "Ativo";
                },
                201: function(response) {
                    console.log("Status 201: Page is up!");
                    statusTd.textContent = "Ativo";
                },
                202: function(response) {
                    console.log("Status 202: Page is up!");
                    statusTd.textContent = "Ativo";
                },
                203: function(response) {
                    console.log("Status 203: Page is up!");
                    statusTd.textContent = "Ativo";
                },
                204: function(response) {
                    console.log("Status 204: Page is up!");
                    statusTd.textContent = "Ativo";
                },
                400: function(response) {
                    console.log("Status 400: Page is down.");
                    statusTd.textContent = "Inativo";
                },
                401: function(response) {
                    console.log("Status 401: Page is down.");
                    statusTd.textContent = "Inativo";
                },
                404: function(response) {
                    console.log("Status 404: Page is down.");
                    statusTd.textContent = "Inativo";
                },
                403: function(response) {
                    console.log("Status 403: Page is down.");
                    statusTd.textContent = "Inativo";
                },
                405: function(response) {
                    console.log("Status 405: Page is down.");
                    statusTd.textContent = "Inativo";
                },
                406: function(response) {
                    console.log("Status 406: Page is down.");
                    statusTd.textContent = "Inativo";
                },
                407: function(response) {
                    console.log("Status 407: Page is down.");
                    statusTd.textContent = "Inativo";
                },
                408: function(response) {
                    console.log("Status 408: Page is down.");
                    statusTd.textContent = "Inativo";
                },
                409: function(response) {
                    console.log("Status 409: Page is down.");
                    statusTd.textContent = "Inativo";
                },
                410: function(response) {
                    console.log("Status 410: Page is down.");
                    statusTd.textContent = "Inativo";
                },
                0: function(response) {
                    console.log("Status 0: Page is down.");
                    statusTd.textContent = "Não Sei";
                },
            },
        };
        setTimeout(function() {
            $.ajax(settings).done(function(response) {
                console.log(response);
            });
        }, 100);
    }
}