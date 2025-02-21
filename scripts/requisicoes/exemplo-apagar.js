// pegara lista de elementos que contém a class="botao-apagar"
let botoesApagar = document.getElementsByClassName("botao-apagar");

// foreach percorre cada um dos elementos da lista
Array.from(botoesApagar).forEach((botao) => {
    // cada um dos botões atribuiremos o evento de click que esecutará a função apagar
    botao.addEventListener("click", apagar);
});

// Função responsável por quesitonar o usuário se o mesmo deseja realmente apagar aquele registro
function apagar() {
    Swal.fire({
        title: "ADeseja apagar o cdastro da empresa?",
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
            Swal.fire({
                title: "Apagado!",
                text: "O registro foi apagado.",
                icon: "success"
            });
        }
    });
}