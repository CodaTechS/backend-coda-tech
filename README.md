# Backend Coda Tech Solutions

## Introdução

Este repositório contém uma API desenvolvida para armazenar no banco de dados as informações dos contatos e enviar e-mails de forma automática.

Utiliza Node.js, Express para a criação da API, e MongoDB como banco de dados.

## Pré-requisitos

Para rodar este projeto, você precisa ter o Node.js, npm (Node Package Manager) ou o Docker instalados em sua máquina.
**\*OBS:** Recomendamos utilizar a versão 21.5.0 do Node.js, já que foi a utilizada durante o desenvolvimento.\*

Siga os passos abaixo para preparar seu ambiente de desenvolvimento:

1. **Baixar e instalar Node.js:**
    - Acesse [Node.js website](https://nodejs.org/) e faça o download da versão recomendada para o seu sistema operacional.
    - Siga as instruções de instalação do pacote baixado.
2. **Verificar instalação:**
    - Após a instalação, abra o terminal e execute `node -v` e `npm -v` para verificar se o Node.js e o npm foram instalados corretamente.

**\*OBS:** O npm é instalado automáticamente junto com o Node.js.\*

## Instalação do projeto 

1. **Clonar o repositório:**
    - Use `git clone [URL_DO_REPOSITÓRIO]` para clonar o repositório para sua máquina local.
2. **Instalar dependências:**
    - Navegue até a pasta do projeto clonado e execute `npm install` para instalar todas as dependências necessárias.
3. **Iniciar o servidor no modo desenvolvimento:**
    - Execute o comando `npm run start:dev` para iniciar o servidor em modo de desenvolvimento.

## Scripts do projeto

-   `start:build-prod` e `start:build-dev`: Inicia o servidor a partir dos arquivos compilados, com o modo de produção ou desenvolvimento, respectivamente.
-   `start:prod` e `start:dev`: Inicia o servidor em modo de produção ou desenvolvimento.
-   `build`: Compila o projeto.
-   `clean-build`: Remove a pasta `dist/`, utilizada para armazenar os arquivos compilados.
-   `clean-log`: Remove a pasta `logs/`, onde os logs de execução são armazenados.
-   `lint` e `lint:fix`: Executa o ESLint para identificar e corrigir problemas de estilo no código.
-   `test` e `test:watch`: Executa os testes definidos com Jest, em modo normal ou assistido.

## Arquivos de Configuração de Ambiente

Os arquivos `.env.production` e `.env.development`, localizados na pasta `environment`, contêm variáveis de ambiente essenciais para a configuração do projeto em diferentes ambientes. As variáveis definidas são:

-   **PORT**: Define a porta na qual a aplicação irá rodar.
-   **SHOW_LOGGER**: Habilita ou desabilita o registro de logs.

## Instalação do arquivo usando Docker Compose

O projeto também pode ser executado utilizando Docker Compose, que facilita a configuração e execução do ambiente. Certifique-se de ter o Docker e o Docker Compose instalados na sua máquina.

### Pré-requisitos

1. **Instalar Docker:**
   - Siga as instruções em [Docker Installation Guide](https://docs.docker.com/get-docker/) para instalar o Docker na sua máquina.

2. **Instalar Docker Compose:**
   - Siga as instruções em [Docker Compose Installation Guide](https://docs.docker.com/compose/install/) para instalar o Docker Compose.

### Executando com Docker Compose

1. **Clonar o repositório:**
   - Use `git clone git@github.com:CodaTechS/backend-coda-tech.git` para clonar o repositório para sua máquina local.

2. **Navegar até a pasta do projeto:**
   - `cd backend-coda-tech`

3. **Criar arquivo `.env` para Docker Compose:**
   - Crie um arquivo chamado `.env` na raiz do projeto e configure as variáveis de ambiente necessárias, como `PORT` e outras conforme necessário.

4. **Construir e Iniciar os Contêineres:**
   - Execute o comando `docker-compose up --build` para construir as imagens e iniciar os contêineres.

5. **Acessar a API:**
   - A aplicação estará acessível em `http://localhost:{PORT}`, onde `{PORT}` é a porta definida no arquivo `.env`.

6. **Parar os Contêineres:**
   - Para parar a execução dos contêineres, pressione `Ctrl + C` no terminal onde o `docker-compose up` está sendo executado.