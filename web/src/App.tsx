import "cross-fetch/polyfill";
import * as React from "react";
import { ApolloProvider } from "react-apollo";
import ApolloClient from "apollo-boost";

import Cart from "./components/Cart";

const client = new ApolloClient({
    uri: "http://localhost:4000",
});
  
class App extends React.Component {
    render() {
        return (
            <ApolloProvider client={client}>
                <Cart/>
            </ApolloProvider>
        );
    };
};

export default App;