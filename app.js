function pesquisar() {
    let section = document.getElementById
    ("resultados-pesquisa");

    let campoPesquisa = document.getElementById
    ("campo-pesquisa").value;
    
    if (!campoPesquisa){
        section.innerHTML = "Nada foi encontrado. Você precisa buscar o nome de um agente"
        return
    }
    campoPesquisa = campoPesquisa.toLowerCase()
    
    let resultados = "";
    let nome = "";
    let descricao = "";
    let papel = "";
    let tags = "";

for (let dado of agentes) {
    nome = dado.nome.toLowerCase()
    descricao = dado.descricao.toLowerCase()
    papel = dado.papel.toLowerCase()
    tags = dado.tags.toLowerCase()
    if(nome.includes(campoPesquisa) || papel.includes(campoPesquisa) || tags.includes(campoPesquisa)){
        //  cria um novo elemento
        resultados += `<div class="item-resultado">
    <h2><a href="${dado.link}" target="_blank">${dado.nome}</a></h2>
    <p>${dado.papel}</p>
    <p class="descricao-meta">${dado.descricao} </p>
    <p> ${dado.habilidades}</p>
    <a href = ${dado.link} target="_blank">Mais informações</a>
</div>`;
    }
}

if (!resultados){
    resultados = "<p>Nada foi encontrado. Você não buscou por um agente</p>"
}
section.innerHTML = resultados;
}




