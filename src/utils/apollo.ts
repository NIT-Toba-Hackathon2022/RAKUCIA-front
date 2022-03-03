import { ApolloClient, InMemoryCache } from '@apollo/client';
//apollo用
const client = new ApolloClient({
  uri: 'https://hogehoge/graphql',
  cache: new InMemoryCache({}),
});

export default client;
