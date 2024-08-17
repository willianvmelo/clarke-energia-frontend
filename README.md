# Documentação do Backend - Desafio Clarke Energia

## Índice

1. [Introdução](#introducao)
2. [Requisitos](#requisitos)
3. [Instalação](#instalacao)
4. [Testes](#testes)
5. [Considerações Finais](#consideracoes-finais)

---

## 1. Introdução <a name="introducao"></a>

Este projeto é o frontend da aplicação **Desafio Clarke Energia**, desenvolvido em React, que fornece uma interface para encontrar fornecedores de energia com base no consumo do cliente.

## 2. Requisitos <a name="requisitos"></a>

Antes de começar, certifique-se de ter os seguintes requisitos instalados em sua máquina:

- Node.js (versão 20 ou superior)
- npm (versão 10 ou superior)
- Docker e Docker Compose (opcional, para execução com Docker)

## 3. Instalação <a name="instalacao"></a>

Clone o repositório:

```
git clone https://github.com/willianvmelo/clarke-energia-frontend.git
cd clarke-energia-frontend
```

Instale as dependências:

```
npm install
```

Execução do Projeto

Executando em ambiente de desenvolvimento:

```
npm start
```

O aplicativo estará disponível em http://localhost:3000.

Executando com Docker:

Caso prefira utilizar Docker, siga os passos abaixo:

Construa e inicie:

```
docker-compose up --build
```

## 4. Testes <a name="testes"></a>

Executando testes:

```
npm test
```

## 5. Considerações Finais <a name="consideracoes-finais"></a>

Essa documentação fornece uma visão geral. Para maiores detalhes sobre funcionalidades específicas, consulte o código-fonte e entre em contato.