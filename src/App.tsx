import React from 'react';
import liff from '@line/liff';
import { ApolloProvider } from '@apollo/client';
import { client } from './utils/apollo';

const App = () => {

  return (
    <ApolloProvider client={client}>
      <h1>hello</h1>
    </ApolloProvider>
  );
}

export default App;