//posso usar esse Json para ppular a pagina jogabilidade, posso acrescentar noda da casa, descrição nação, imagem etc 

    var teste = JSON.parse('[{"id": 12414, "nacao": "NOME-DA-NAÇÃO", "casa": "NOME-DA-CASA", "descricao": "TEXTO-DESCRITIVO",  "personagens-saga":  ["FULANO",  "CICLADO",  "BELTRANO"], "imagem": "URL-DA-IMAGEM"}, {"id": 12414, "nacao": "NOME-DA-NAÇÃO", "casa": "NOME-DA-CASA", "descricao": "TEXTO-DESCRITIVO",  "personagens-saga":  ["FULANO",  "CICLADO",  "BELTRANO"], "imagem": "URL-DA-IMAGEM"}, {"id": 12414, "nacao": "NOME-DA-NAÇÃO", "casa": "NOME-DA-CASA", "descricao": "TEXTO-DESCRITIVO",  "personagens-saga":  ["FULANO",  "CICLADO",  "BELTRANO"], "imagem": "URL-DA-IMAGEM"}] ');
        teste.forEach(function(cada){
            document.getElementById('text').innerHTML += '<p class="">' + cada.casa + '</p>'
        });
    
