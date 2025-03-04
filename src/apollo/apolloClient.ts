import { ApolloClient, InMemoryCache } from "@apollo/client";

// 🔹 Função para obter a URL da API GraphQL corretamente
const getGraphQLURI = () => {
  if (typeof window !== "undefined") {
    // ✅ Se estiver rodando no navegador, usa a URL do próprio site
    return `${window.location.origin}/api/graphql`;
  }

  // ✅ Se estiver no servidor, usamos a URL correta do ambiente Vercel ou local
  const vercelURL = process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "http://localhost:3000";

  return `${vercelURL}/api/graphql`;
};

// ✅ Criamos o Apollo Client corretamente para funcionar em Server e Client Components
const apolloClient = new ApolloClient({
  uri: getGraphQLURI(),
  cache: new InMemoryCache(),
});

export default apolloClient;
