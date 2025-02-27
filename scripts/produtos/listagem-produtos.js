let tabelaProdutos = document.getElementById("tabela-produtos");
let botaoListarProdutos = document.getElementById("listar-produtos");

let urlAPI = "https://api.franciscosens.com";
function atribuirCliqueBotoesApagar(){
    let botoesApagar = document.getElementsByClassName("botao-apagar");

    Array.from(botoesApagar).forEach((botao) => {
        botao.addEventListener("click", apagar);
    });
};

async function apagar(evento) {
    const nome = botaoClique.getAttribute("data-nome");
    const id = botaoClique.getAttribute("data-id");
    Swal.fire({
        title: `Deseja apagar o produto ${nome}?`,
        text: "Você não poderá reverter isso!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Sim, apagar!",
        cancelButtonText: "Não, cancelar!",
        reverseButtons: true
    }).then((result) => {
        if (result.isConfirmed) {
            apagarProduto(id);
        }
    });
}

async function apagarProduto(id) {
    let url = `${urlAPI}/api/v1/empresa/produtos/${id}`;
    console.log(url);

    const resposta = await fetch(url, {method: "DELETE"});
    if(resposta.ok == false){
        alert("Não foi possível apagar");
        return;
    }

    Swal.fire({
        title: "Apagado!",
        text: "O registro foi apagado.",
        icon: "success"
    });
    listarProdutos();
}

async function listarProdutos(evento) {
    let url = urlAPI + "/api/v1/empresa/produtos"
    const resposta = await fetch(url);
    if(resposta.ok == false) {
        alert("não foi possível carregar a lista de produtos")
    }
    const produtos = await resposta.json();

    let tbody = tabelaProdutos.querySelector("tbody")
    tbody.innerHTML = " ";

    produtos.forEach(produtos => {
        const colunas = ` 
        <td>${produtos.id}</td>
        <td>${produtos.nome}</td>
        <td>${produtos.preco}</td>
        <td>${produtos.categoria}</td>
        <td>
        <a href="editar.html?id=${produtos.id}" class="btn btn-warning"><i class="fas fa-pencil"></i> Editar</a>
        <button class="btn btn-danger botao-apagar" 
            data-id=${produtos.id}
            data-nome=${produtos.nome}
            ><i class="fas fa-trash"></i> Apagar</button>
        </td>`
        
        const linha = document.createElement("tr");
        linha.innerHTML = colunas;

        tbody.appendChild(linha);

        console.log(produtos);
    });

    atribuirCliqueBotoesApagar();
};

botaoListarProdutos.addEventListener("click", listarProdutos);

listarProdutos();