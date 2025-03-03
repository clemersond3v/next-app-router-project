import { ApolloClient, InMemoryCache } from "@apollo/client";

const apolloClient = new ApolloClient({
  uri: "http://localhost:3000/api/graphql", // Corrigindo a URL no ambiente local
  cache: new InMemoryCache(),
});

export default apolloClient;
