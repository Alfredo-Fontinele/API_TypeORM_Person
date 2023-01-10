# API_TypeORM_Person

* API REST | Servidor de criação, leitura, atualização e deleção de usuários utilizando TypeORM

# Bibliotecas Utilizadas:
* Ts-Node-Dev
* Typescript
* Dotenv
* Express
* Express-Async-Errors
* Pg
* Reflect-Metadata
* TypeORM
* Yup

## 1º) Instalação | Bibliotecas

* Dependências de Desenvolvimento

        yarn add @types/express @types/node typescript ts-node-dev -D

* Dependências

        yarn add express typeorm reflect-metadata dotenv pg

## 2º) Instalando as depêndencias

    # Rode esse comando no terminal do projeto
    yarn

## 3º) Configurando as variáveis de ambiente

    # Porta para inicializar o servidor
    PORT=

    # Nome do seu usuário
    DB_USERNAME=

    # Senha do seu usuário
    DB_PASSWORD=

    # Porta Padrão (5432)
    DB_PORT=

    # Nome do seu banco de dados
    DB_NAME=

    # Host (localhost)
    DB_HOST=


## 3º) Comandos para rodar a aplicação

    # O Servidor irá iniciar na porta que você determinar nas variáveis de ambiente

    yarn dev

## 4º) Endpoints 

## GET (200) /users
    
* ### Retorna dados dos usuários cadastrados
#
    
    [
        {
            id: "as6d54681OIionsa-asd2131",
            name: "teste",
            email: "teste@gmail.com"
        },
        {
            id: "as6d54681OIionsa-asd2131",
            name: "teste",
            email: "teste@gmail.com"
        },
        {
            id: "as6d54681OIionsa-asd2131",
            name: "teste",
            email: "teste@gmail.com"
        },
        (...)
    ]
## POST (201) /users

* ### Retorna dados do novo usuário
#

    
    {
        id: "as6d54681OIionsa-asd2131",
        name: "teste",
        email: "teste@gmail.com"
    }
## GET (200) /users/:id


* ### Retorna dados de um usuário específico a partir de um id que seja válido
#

    {
        id: "as6d54681OIionsa-asd2131",
        name: "teste",
        email: "teste@gmail.com"
    }

## PATCH (200) /users/:id


* ### Atualiza um usuário a partir de um id válido
#

    
    {
        id: "as6d54681OIionsa-asd2131",
        name: "teste",
        email: "teste@gmail.com"
    }

## DELETE (204) /users/:id


* ### Retorna um status 204
#

    {}

## 5º) Possíveis Erros

(...)
