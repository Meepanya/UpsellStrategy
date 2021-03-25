import { ApolloServer } from "apollo-server";
import fetch from "node-fetch";

const typeDefs = `
    type Query {
        getOffers: Product
    }

    type Offer {
        title: String
        short_description: String
        original_price: Float
        discounted_price: Float
        image: String
    }

    type Product {
        currency: String
        offers: [Offer]
    }
`;

const resolvers = {

    Query: {
        getOffers: async (_1:any, _2:any) => {
            const response = await fetch(`https://private-803503-digismoothietest.apiary-mock.com/offers`, { 
                method: "GET",
            });
            const body = await response.text();
            
            try {
                console.log(body);
                return JSON.stringify(body);
            } catch(err) { 
                console.error("Error: ", err);
                console.error("Response body: ", response);
            }
        },
    }
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen({port: 4000})
    .then(({url}) => console.log(`Server running at ${url}`));