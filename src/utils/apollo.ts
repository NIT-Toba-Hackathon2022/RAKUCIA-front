import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';
import liff from '@line/liff';
import gql from 'graphql-tag';

const cache = new InMemoryCache();
const link = new HttpLink({
  uri: 'https://toba.re-taro.dev/graphql',
  fetchOptions: {
    mode: 'no-cors',
  },
});

const client = new ApolloClient({
  cache,
  link,
});

export default client;
