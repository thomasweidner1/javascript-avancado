let urlAPI = "https://public.franciscosensaulas.com";
const campoCnpj = document.getElementById("campoCNPJ");
const mascara = {
    mask: "00.000.000-0000.00"
};
const mask = IMask(campoCnpj, mascara);

let botaoSalvar = document.getElementById("btn-salvar");
botaoSalvar.addEventListener("click", salvar);

async function salvar(e){
    e.preventDefault(); // form não deve ser eenviado, interrompe o envio de oformulário
    let campoNome = document.getElementById("campoNome");
    let nome = campoNome.value
    
    if(nome.lenght < 3) {
        alert("Nome deve conter no mínimo 3 caracteres");
        return; // Faz com que o código abaixo não seja executado, ou seja, encerrando a execução dessa função
    }

    if(nome.lenght > 20){
        alert("Nome deve conter no máximo 20 caracteres");
        return;
    }

    let cnpj = campoCnpj.value
    const dados = {
        nome: nome,
        cnpj: cnpj
    }
    let url = `${urlAPI}/api/empresa`
    const resposta = await fetch(url, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(dados)
    });
    
    if(resposta.ok == false){
        alert("Não foi possível cadastrar")
    }else{
        location.href = "/exemplo-requisicoes.html"
    }
};