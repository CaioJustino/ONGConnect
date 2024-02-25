# ONGConnect (Em desenvolvimento)

## Visão Geral

ONGConnect é um sistema de gerenciamento exclusivo para organizações não governamentais (ONGs). Ele oferece uma plataforma completa para ajudar as ONGs a administrar seus recursos, atividades, voluntários, doações e muito mais. O sistema é dividido em duas partes principais: uma API desenvolvida em Flask para gerenciar dados e lógica de negócios, e um front-end desenvolvido em Vue.js para proporcionar uma experiência amigável e intuitiva aos usuários.

## Recursos Principais

- **Gestão de Organizações**: Cadastre e gerencie informações detalhadas sobre as ONGs, incluindo nome, missão, contatos e áreas de atuação.

- **Voluntários**: Registre e rastreie voluntários, atribua tarefas, registre horas de trabalho voluntário e mantenha um banco de dados atualizado de pessoas dispostas a ajudar.

- **Doações e Finanças**: Registre doações, acompanhe despesas e visualize relatórios financeiros para manter o controle completo sobre as finanças da ONG.

- **Projetos e Atividades**: Crie projetos, defina metas, aloque recursos e monitore o progresso. Mantenha um registro de todas as atividades e eventos relacionados à ONG.

- **Autenticação e Controle de Acesso**: Garanta a segurança dos dados da ONG com autenticação de usuário e controle de acesso baseado em funções.

## Tecnologias Utilizadas

- **Back-end**: A API é desenvolvida em Flask, um framework Python para construção de aplicativos web robustos e escaláveis.

- **Front-end**: O front-end é construído em Vue.js, uma biblioteca JavaScript de código aberto que permite criar interfaces de usuário interativas e responsivas.

- **Banco de Dados**: Utilizamos um banco de dados SQL para armazenar e gerenciar os dados da ONG.

- **Criptografia de Senhas**: Senhas criptografadas no padrão sha256.

- **Estilização**: Usamos CSS para criar um design limpo e intuitivo no front-end.

## Pré-requisitos

- Python 3
- Flask
- Banco de dados SQL (SQLite)
- Outras dependências especificadas nos arquivos de configuração do projeto

## Configuração e Instalação

1. Clone este repositório em sua máquina local.

```
git clone https://github.com/CaioJustino/ONGConnect.git
```

2. Navegue até a pasta do projeto.

```
cd ongconnectbackend
```

3. Instale as dependências da aplicação.

```
pip install -r requirements.txt
```

6. Configure as variáveis de ambiente no arquivo `.env` com as informações necessárias para seu ambiente (por exemplo, configurações de banco de dados e segurança).

7. Navegue até a pasta do front-end.

```
cd ongconnectfrontend
```

8. Instale as dependências do front-end.

```
npm install
```

9. Volte para a pasta raiz do projeto.

```
cd ..
```

10. Inicie o servidor Flask (back-end).

```
flask run
```

11. Inicie o servidor de desenvolvimento Vue.js (front-end).

```
cd ongconnectfrontend
npm run dev
```

## Linguagens e Ferramentas

<p align="left">
  <a href="https://skillicons.dev">
    <img src="https://skillicons.dev/icons?i=python,flask,html,css,bootstrap,javascript,nodejs,vue,sqlite" />
  </a>
</p>
