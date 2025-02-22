let tabelaEmpresas = document.getElementById("tabela-empresas");
let urlAPI = "https://public.franciscosensaulas.com";
let botaoConsultarEmpresas = document.getElementById("consultar-empresas");

// Função responsável por fazer o request(requisição) para carregar os dados da empresa
async function consultarEmpresas() {
    //let url = urlAPI + "/api/empresa"
    let url = `${urlAPI}/api/empresa`
    // fetch vai realizar a requisição, na variável resposta teremos os dados do response como:
    // Status, response (dados que o back-end retornou)
    const resposta = await fetch(url);
    // verificar se a requisição falhou por algum motivo
    if (resposta.ok == false) {
        alert("não foi possível carregar os dados")
    }
    // Obter o response da requisiçãom que neste cenário será uma lista de objetos
    const empresas = await resposta.json();
    
    let tbody = tabelaEmpresas.querySelector("tbody");
    tbody.innerHTML = " ";

    empresas.forEach(empresa => {

        const colunas = ` 
        <td>${empresa.id}</td>
        <td>${empresa.nome}</td>
        <td>${empresa.cnpj}</td>
        <td>
        <a href="editar.html" class="btn btn-warning"><i class="fas fa-pencil"></i> Editar</a>
        <button class="btn btn-danger botao-apagar"><i class="fas fa-trash"></i> Apagar</button>
        </td>`
        const linha = document.createElement("tr");
        linha.innerHTML = colunas;

        tbody.appendChild(linha);

        console.log(empresa);
    });
    
    atribuirCliqueBotoesApagar();
};

botaoConsultarEmpresas.addEventListener("click", consultarEmpresas);