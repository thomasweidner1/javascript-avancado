request(requisição), response(resposta)

Cliente (mobile, web, desktop) => request
Servidor (php, python, java) receber o request e retornar => response (lista de cliente)

request: é a solicitação(request) de dados, ou solicitação de cadastro, alteração, exclusão.
response: é a resposta que o servido dá para o cliente.
request URL: é o local que será executada a requisição.
request method: é o verbo utilizado para a requisição.
status code: é o status da resposta que o servidor deu, exemplos:
    - 200: OK
    - 201: Created
    - 404: Não encontrado
    - 500: Erro no servidor

GET => Utilizado para consultar um dado ou vários(exemplo: precisol da lista de clientes na tela)
POST => Utilizado para cadastrar algo(exemplo: preciso cadastrar o cliente)
PATCH => Utilizado para atualizar dados parciais (exemplo: preciso alterar o telefone do cliente)
DELETE => Utilizado para apagar registro (exemplo: preciso apagar o cliente)

Request Payload: dados que são enviados na requisição para o back-end

[] Lista

[1, 2, 3, 4] Lista de inteiro

{} Objeto

{
    "nome": "Francisco",
    "idade": 20
}

- Lista de objetos
[
    {
        "nome": "Power Ranger Rosa",
        "arma": "Arco e flecha"
    },
    {
        "nome": "Power Ranger Preto"
        "arma": "Tacape"
    }
]

Como depurar no navegador o código JavaScript:
    - Colocar a palavra 'debugger' antes da linha que você deseja
    - Voltar para o navegador
    - Abrir as ferramentas de desenvolvedor F12
    -Executar a ação que faz chegar até naquela linha (se for na ação de um botão, clique no botão)
    - PS.: Sources é o lugar onde fica os códigos no navegador (JS, CSS)
    - F11 - Step Into (se estiver em uma linha que chama uma function entrará nessa função)
    - F10 - Step Over (vai para a próxima linha)
    - F8 - Continuar até o próximo debugger/breakpoint

PS.: Breakpoint é um ponto de parada, mesma coisa que o debugger.

Depurar é a ação de analisar um problema, linha a linha.

https => protocolo
dominio => franciscosensaulas.com
porta => 2000
recurso => /api/v1/empresa
query_params (variáveis) => id (valor do id é 20)

https://franciscosensaulas.com:2000/api/v1/empresa?id=20