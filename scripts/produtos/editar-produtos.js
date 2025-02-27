const urlAPI = "https://public.franciscosensaulas.com";
const campoNome = document.getElementById("campoNome");
const campoPreco = document.getElementById("campoPreco");
const campoCategoria = document.getElementById("campoCategoria");
const url = new URL (window.location.href);
const params = new URLSearchParams(url.search);
const idParaEditar = params.get("id");

async function consultarProdutosPorId() {
    let urlParaConsultarProduto = `${urlAPI}/api/v1/empresa/produtos/${idParaEditar}`;
    const resposta = await fetch(urlParaConsultarProduto);

    if(resposta.ok == false){
        alert("Produto não encontarado");
        window.location.href = "/index.html";
        return;
    }

    const dadosProduto = await resposta.json();

    campoNome.value = dadosProduto.nome;
    campoPreco.value = dadosProduto.preco;
    campoCategoria.options[campoCategoria.selectedIndex].text = dadosProduto.categoria;
}

async function editar(evento) {
    evento.preventDefault();
    
    let nome = campoNome.value;
    let preco = campoPreco.value;
    let categoria = campoCategoria.options[campoCategoria.selectedIndex].text;

    const dados = {
        nome: nome,
        preco: preco,
        categoria: categoria
    };

    let url = `${urlAPI}/api/v1/empresa/produtos/${idParaEditar}`;
    const resposta = await fetch(url, {
        method: "PUT",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(dados)
    });

    if(resposta.ok == false) {
        alert("Não foi possível alterar");
    }else{
        location.href = '../produto/index.html';
    }
}

const botaoEditar = document.getElementById("botao-alterar");

botaoEditar.addEventListener("click", editar);

consultarProdutosPorId();