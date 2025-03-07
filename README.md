# Next APP Router Project

## 📌 Sobre o Projeto

Esse projeto está sendo desenvolvido a fim de apoiar o meu estudo contínuo em engenharia de software e tecnologias front-end. O projeto consiste em uma loja (e-commerce).

## 🚀 Tecnologias Utilizadas

Este projeto foi desenvolvido utilizando as seguintes tecnologias:

- **Next.js App Router** (14+) - Framework para aplicações React
- **TypeScript** - Tipagem estática para maior segurança no código
- **Tailwind CSS** - Abordagem utility-first, produtividade e performance
- **JSON** - Utilizado nesse projeto para construir mock de dados
- **GraphQL** - Utilizado nesse projeto para buscar e manipular dados de forma eficiente e flexível
- **Swiper.js** - Carrosséis responsivos e otimizados
- **Lighthouse** - Monitoramento das pontuações em performance, acessibilidade e SEO
- **Vercel** - Hospedagem e deploy contínuo - integração com Rotinas de CI/CD
- **Mobile-first** - Visando alcançar uma maior acessibilidade e responsividade

## 📂 Estrutura do Projeto

```bash
├── .github
├── public/                # Arquivos estáticos
├── src/
|   ├── apollo/            # Configurações do ApolloClient
|   ├──app
|   |  ├── [slug]/         # Páginas dinâmicas (Departamento e Produto)
|   |  ├── about/          # Página de "Sobre"
│   |  ├── api/            # Configuração da API GraphQL
|   |  ├── components/     # Componentes reutilizáveis
|   |  ├── fonts/          # Configurações de fontes
|   |  ├── error.tsx       # Template de error
|   |  ├── globals.css     # Estilizações Globais
|   |  ├── layout.tsx       
|   |  ├── loading.tsx     # Template de loading
|   |  ├── not-found.tsx   # Template de erro 404
|   |  ├── page.tsx         
│   ├── data/              # Mock de dados em JSON
|   ├── hooks/             # Hooks customizados
└── next.config.ts         # Configuração do Next.js
```



## 🛠️ Configuração e Instalação

### **1️⃣ Pré-requisitos**

Certifique-se de ter instalado:

- **Node.js** (versão 16+ recomendada)
- **Yarn** ou **npm**

### **2️⃣ Instalação das dependências**

```bash
yarn install  # ou npm install
```

### **3️⃣ Configuração das variáveis de ambiente**

Crie um arquivo `.env.local` (opcional) e adicione as variáveis necessárias:

```env
NEXT_PUBLIC_API_URL=https://api.example.com
NEXT_PUBLIC_DB_ACCOUNT=exemple
```

### **4️⃣ Rodando o projeto**

```bash
yarn dev  # ou npm run dev
```

O projeto estará disponível em `http://localhost:3000`

## 🚀 Deploy e Hospedagem

Este projeto está hospedado na **Vercel**, e todo push para a branch `main` aciona um deploy automático.

Cada push em uma branch também dispara o monitoramento do lighthouse, que ao final da rotina, disponibiliza no painel da Vercel
um arquivo JSON com os dados da análise de performance, acessibilidade, Práticas recomendadas e SEO. 

📌 **Build para produção:**

```bash
yarn build  # ou npm run build
```

📌 **Rodar em produção localmente:**

```bash
yarn start  # ou npm run start
```

## ✅ Otimizações Implementadas

- **Code Splitting** com `next/dynamic`
- **Lazy Loading** para imagens fora da tela
- **Compactação de texto** com Gzip/Brotli
- **Melhoria de tempo de resposta** via Webpack `splitChunks`
- **Otimização de imagens** (`.webp` e `.avif` quando disponível)
- **Melhoria de SEO** com metatags e otimização de performance

---

🚀 **Desenvolvido por Clemerson Costa**

