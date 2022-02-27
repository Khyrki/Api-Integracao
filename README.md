# Api-Integração

Esta Api realiza uma integração entre as plataformas Pipedrive e Bling, também salvando os pedidos cadastrados no banco de dados MongoDB.

## Começando
Para execução desta aplicação é preciso ter o [NodeJS](https://nodejs.org/en/) instalado.

Faça o download zip ou clone o projeto para sua máquina, execute o comando:
```bash
npm install
```
Para instalar todas as dependências necessárias para o funcionamento correto do código.

Antes de iniciar a aplicação, altere o nome do arquivo `.envExemple.txt` para `.env` e preencha os dados de PORT, BLING_KEY, PIPEDRIVE_KEY e MONGO_DB_URL, com seus respectivos valores, pipedrive e bling key podem ser acessadas através da sua conta nestas plataformas.

Para iniciar a aplicação utilize o comando:
```bash
npm start
```
A seguinte mensagem irá aparecer no terminal, `ouvindo na porta 3005!`, isso significa que a aplicação está em execução e já pode ser usada, todas as requisições devem ser feitas para a url `http://localhost:<port>/<endpoint>`

## EndPoints

Esta aplicação conta com dois endpoints, uma para integrar os pedidos do pipedrive com o bling e salvar no banco mongo e outro para listar todos dados do MongoDB

### POST /integration

Este endpoint realiza a integração e salva no banco de dados os dados de pedidos, se tudo ocorrer bem uma mensagem `Integração feita com sucesso` será retornada para o usuário, caso contrário uma mensagem de erro.

### GET /orders

Este endpoint lista todos os dados inseridos no banco, ordenados por data de realização da venda.

Ex:
```json
[
  {
    "_id": "621a86149f3cfe5bade26826",
    "2022-02-22": [
      {
        "total": 1000
      },
      {
        "id": 1,
        "cliente": "Negócio Pessoa01",
        "data": "2022-02-22 03:00:00",
        "valor": 1000
      }
    ],
    "2022-02-24": [
      {
        "total": 9000
      },
      {
        "id": 2,
        "cliente": "Negócio Pessoa04",
        "data": "2022-02-24 14:58:08",
        "valor": 4000
      },
      {
        "id": 3,
        "cliente": "Negócio Pessoa05",
        "data": "2022-02-24 14:58:12",
        "valor": 5000
      }
    ]
  }
]
```

No arquivo `decisoesDeDesenvolvimento.txt` existem algumas considerações e tomadas de decisões durante o desenvolvimento.
