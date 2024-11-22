import { ApolloClient, InMemoryCache } from '@apollo/client';

const apolloClient = new ApolloClient({
  uri: 'http://localhost:1337/graphql', // Endpoint GraphQL do Strapi
  cache: new InMemoryCache(),
});

export default apolloClient;
