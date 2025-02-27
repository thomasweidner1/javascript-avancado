// Obtém os campos de entrada do formulário pelo ID
const campoNome = document.getElementById("campoNome");
const campoCnpj = document.getElementById("campoCNPJ");

// Define a máscara para o campo CNPJ (formato "00.000.000-0000.00")
const mascara = {
    mask: "00.000.000-0000.00"
};
// Aplica a máscara ao campo CNPJ usando a biblioteca IMask
const mask = IMask(campoCnpj, mascara);

// Obtém a URL atual da página
const url = new URL(window.location.href);

// Extrai os parâmetros da URL
const params = new URLSearchParams(url.search);

// Obtém o ID da empresa a ser editada a partir dos parâmetros da URL
const idParaEditar = params.get("id");

// Define a URL base da API
let urlAPI = "https://public.franciscosensaulas.com";

// Função assíncrona para buscar os dados da empresa pelo ID
async function consultarDadosEmpresaPorId() {
    // Monta a URL para consulta da empresa específica
    let urlParaConsultarEmpresa = `${urlAPI}/api/v1/empresa/${idParaEditar}`;
    console.log(urlParaConsultarEmpresa);

    // Faz a requisição GET para obter os dados da empresa
    const resposta = await fetch(urlParaConsultarEmpresa);

    // Se a empresa não for encontrada, exibe um alerta e redireciona para a página inicial
    if (resposta.ok == false) {
        alert("Empresa não encontrada");
        window.location.href = "/index.html";
        return;
    }

    // Converte a resposta para JSON
    const dadosEmpresa = await resposta.json();
    console.log(dadosEmpresa);

    // Preenche os campos do formulário com os dados da empresa
    campoNome.value = dadosEmpresa.nome;
    campoCnpj.value = dadosEmpresa.cnpj;
}

// Função assíncrona para editar os dados da empresa
async function editar(evento) {
    evento.preventDefault(); // Evita o recarregamento da página ao enviar o formulário

    // Obtém os valores dos campos preenchidos pelo usuário
    let cnpj = campoCnpj.value;
    let nome = campoNome.value;

    // Cria o objeto com os dados a serem enviados para a API
    const dados = {
        nome: nome,
        cnpj: cnpj
    };

    // Monta a URL para editar a empresa
    let url = `${urlAPI}/api/v1/empresa/${idParaEditar}`;

    // Faz a requisição PUT para atualizar os dados da empresa
    const resposta = await fetch(url, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(dados)
    });

    // Verifica se a atualização foi bem-sucedida
    if (resposta.ok == false) {
        alert("Não foi possível alterar"); // Exibe um alerta caso ocorra um erro
    } else {
        location.href = '../empresa/index.html'; // Redireciona para a página de listagem das empresas
    }
}

// Obtém o botão de edição pelo ID
const botaoEditar = document.getElementById("botao-alterar");

// Adiciona um evento de clique ao botão para chamar a função editar()
botaoEditar.addEventListener("click", editar);

// Chama a função para preencher o formulário com os dados da empresa ao carregar a página
consultarDadosEmpresaPorId();
