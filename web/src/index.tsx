import { render } from "react-dom"
import { ApolloProvider, ApolloClient, InMemoryCache, ApolloLink, createHttpLink } from "@apollo/client";
import Cart from "./cart";
import { schemaLink } from "./mockData/mockingSchema";

const link = createHttpLink({
  uri: "https://private-803503-digismoothietest.apiary-mock.com/offers",
});

const client = new ApolloClient({
  connectToDevTools: true,
  link: ApolloLink.from([link, (schemaLink as unknown) as ApolloLink]),
  cache: new InMemoryCache(),
  resolvers: {},
  defaultOptions: {
    query: {
      errorPolicy: "all",
    },
  },
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Cart/>
    </ApolloProvider>
  );
}

render(<App/>, document.getElementById("root"));