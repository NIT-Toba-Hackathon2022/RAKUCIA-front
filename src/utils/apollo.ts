import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://api.re-taro.dev/graphql",
  cache: new InMemoryCache({}),
});
