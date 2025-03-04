import { ApolloClient, InMemoryCache } from "@apollo/client";

// 🔹 Identifica a URL correta dinamicamente
const getGraphQLURI = () => {
  if (typeof window !== "undefined") {
    // Se estiver no navegador, usa a URL atual do site
    return `${window.location.origin}/api/graphql`;
  }

  // Se estiver no servidor, usa a URL fornecida pela Vercel ou localhost
  return process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}/api/graphql`
    : "http://localhost:3000/api/graphql"; // Fallback para ambiente local
};

// ✅ Agora a URL do Apollo Client se adapta ao ambiente automaticamente
const apolloClient = new ApolloClient({
  uri: getGraphQLURI(),
  cache: new InMemoryCache(),
});

export default apolloClient;
