import { ApolloClient, InMemoryCache } from "@apollo/client";

// 🔹 Função para obter a URL correta da API GraphQL
const getGraphQLURI = () => {
  if (typeof window !== "undefined") {
    // ✅ Se estiver rodando no navegador, usa a URL do próprio site
    return `${window.location.origin}/api/graphql`;
  }

  // ✅ Se estiver no servidor, verifica se está rodando na Vercel
  const isVercel = process.env.VERCEL_ENV || process.env.NEXT_PUBLIC_VERCEL_ENV;

  if (isVercel) {
    return "https://next-app-router-project.vercel.app/api/graphql";
  }

  // ✅ Se estiver rodando localmente, usa a URL local
  return "http://localhost:3000/api/graphql";
};

// ✅ Criamos o Apollo Client corretamente para funcionar em Server e Client Components
const apolloClient = new ApolloClient({
  uri: getGraphQLURI(),
  cache: new InMemoryCache(),
});

console.log("📌 Apollo Client conectado em:", getGraphQLURI());

export default apolloClient;
