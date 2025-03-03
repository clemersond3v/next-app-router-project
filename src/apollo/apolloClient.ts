import { ApolloClient, InMemoryCache } from "@apollo/client";

const apolloClient = new ApolloClient({
  uri: process.env.NEXT_PUBLIC_API_URL
    ? `${process.env.NEXT_PUBLIC_API_URL}/api/graphql`
    : "http://localhost:3000/api/graphql", // Corrigindo a URL no ambiente local
  cache: new InMemoryCache(),
});

export default apolloClient;
