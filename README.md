# 🧭 **Projeto React Viagens**

Bem-vindo ao **Projeto React Viagens**, um sistema desenvolvido como
atividade prática para disciplina de **Desenvolvimento Web com React**.

O objetivo do projeto é demonstrar:

-   criação de uma **Single Page Application (SPA)**\
-   uso de **React Router** para rotas\
-   componentes reutilizáveis\
-   **props**\
-   organização modular\
-   **CSS Modules**\
-   layout responsivo\
-   boas práticas de versionamento (Git)

O tema escolhido foi o de uma **agência de viagens**, simulando um site
simples onde é possível navegar entre destinos, pacotes e informações
técnicas do projeto.

------------------------------------------------------------------------

# ✨ **Demonstração**

*(adicione prints ou GIFs aqui depois)*

------------------------------------------------------------------------

# 🚀 **Tecnologias Utilizadas**

-   **React 18**
-   **Vite**
-   **React Router DOM**
-   **CSS Modules**
-   **JavaScript ES6**
-   **Node.js + npm**

------------------------------------------------------------------------

# 📦 **Instalação e Execução**

### ✔️ 1. Clonar o repositório

``` bash
git clone https://github.com/joaopkourym/projeto-react-viagens.git
```

### ✔️ 2. Acessar a pasta do projeto

``` bash
cd projeto-react-viagens
```

### ✔️ 3. Instalar dependências

``` bash
npm install
```

### ✔️ 4. Executar o ambiente de desenvolvimento

``` bash
npm run dev
```

------------------------------------------------------------------------

# 🗺️ **Sobre o Projeto**

O Projeto React Viagens é composto por **quatro páginas principais**,
todas controladas por rotas:

  Página         Função
  -------------- -------------------------------
  **Home**       Introdução ao site
  **Destinos**   Lista de destinos turísticos
  **Pacotes**    Lista de pacotes de viagem
  **Sobre**      Explicação técnica do projeto

Navbar e footer são componentes reaproveitados em todas as páginas.

------------------------------------------------------------------------

# 🧩 **Estrutura do Projeto**

    src/
      main.jsx
      App.jsx
      index.css

      components/
        TravelNavbar.jsx
        TravelFooter.jsx
        DestinationCard.jsx

      pages/
        Home.jsx
        Destinos.jsx
        Pacotes.jsx
        About.jsx

      data/
        destinosData.js
        pacotesData.js

      styles/
        TravelNavbar.module.css
        TravelFooter.module.css
        DestinationCard.module.css
        Home.module.css
        Destinos.module.css
        Pacotes.module.css
        About.module.css

------------------------------------------------------------------------

# 🧠 **Conceitos Aplicados**

### SPA

Navegação sem recarregar a página usando React Router.

### Props

Componentes recebem dados dinamicamente, como no `DestinationCard`.

### CSS Modules

Evita conflitos de estilo entre componentes.

------------------------------------------------------------------------

# 📘 **Objetivo Acadêmico**

O projeto cumpre os requisitos solicitados em aula, incluindo navegação,
props, SPA, CSS Modules, responsividade e organização de pastas.

------------------------------------------------------------------------

# 👤 **Autor**

Desenvolvido por **João Paulo Koury de Mendonça** --- 2025.
