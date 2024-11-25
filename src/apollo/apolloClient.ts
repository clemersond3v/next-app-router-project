import { ApolloClient, InMemoryCache } from '@apollo/client';

const apolloClient = new ApolloClient({
  uri: `${process.env.NEXT_PUBLIC_API_URL}/graphql`, // Endpoint GraphQL do Strapi
  cache: new InMemoryCache(),
});

export default apolloClient;
