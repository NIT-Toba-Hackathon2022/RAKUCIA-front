import {
  InMemoryCache,
  ApolloLink,
  ApolloClient,
  createHttpLink,
} from "@apollo/client";
import { onError } from "apollo-link-error";

const httpLink = createHttpLink({
  uri: "https://toba.re-taro.dev/graphql",
});

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors)
    graphQLErrors.map(({ message, locations, path }) =>
      console.log(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
      )
    );
  if (networkError) console.log(`[Network error]: ${networkError}`);
});

export const appClient = new ApolloClient({
  link: ApolloLink.from([httpLink, errorLink]),
  cache: new InMemoryCache(),
});
