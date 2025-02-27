let urlAPI = "https://api.franciscosens.com";
let botaoSalvar = document.getElementById("btn-salvar");
botaoSalvar.addEventListener("click", salvar);

async function salvar(e) {
    e.preventDefault();
    let url =  `${urlAPI}/api/v1/empresa/produtos`;
    let campoNome = document.getElementById("campoNome");
    let nome = campoNome.value;
    let campoPreco = document.getElementById("campoPreco");
    let preco = campoPreco.value;
    let campoCategoria = document.getElementById("campoCategoria")
    let categoria = campoCategoria.value;
    const dados = {
        nome: nome,
        preco: preco,
        categoria: categoria
    }
    const resposta = await fetch(url, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(dados)
    });

    if(resposta.ok == false){
        alert("Não foi possível cadastrar o produto")
    }else{
        location.href = "../produto/index"
    }

    console.log(dados)
};