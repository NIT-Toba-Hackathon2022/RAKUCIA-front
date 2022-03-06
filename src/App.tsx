import * as React from "react";
import { ApolloProvider } from "@apollo/client";
import { appClient } from "./utils/apollo";
import { ChakraProvider } from "@chakra-ui/react";

const App = () => {
  return (
    <ApolloProvider client={appClient}>
      {/*<ChakraProvider resetCSS>*/}
        <p>すみません実装が間に合いませんでした😭</p>
      {/*</ApolloProvider></ChakraProvider>*/}
    </ApolloProvider>
  );
};

export default App;
