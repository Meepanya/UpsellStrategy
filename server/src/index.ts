import "reflect-metadata";
// import "dotenv-safe/config";

import { ApolloServer } from "apollo-server";
import { buildSchema } from "type-graphql";
// import fetch from "node-fetch";
import OfferResolver from "./resolvers/OfferResolver";
import ProductResolver from "./resolvers/ProductResolver";

// const typeDefs = gql`
//     type Query {
//         getOffers: Product
//     }

//     type Offer {
//         title: String
//         short_description: String
//         original_price: Float
//         discounted_price: Float
//         image: String
//     }

//     type Product {
//         currency: String
//         offers: [Offer]
//     }
// `;

// const query = `
//     {
//         currency
//         offers {
//             title
//             short_description
//             original_price
//             discounted_price
//             image
//         }
//     }
// `

//const url = "https://private-803503-digismoothietest.apiary-mock.com/offers";

// const opts = {
//     method: "POST",
//     headers: { "Content-Type": "application/json"},
// };

// const resolvers = {

//     Query: {
//         getOffers: async (_1:any, _2:any) => {
//             const response = await fetch(url, opts);
//             const body = await response.json();
//             try {
//                 return body;
//             } catch(err) { 
//                 console.error("Error: ", err);
//                 console.error("Response body: ", );
//                 return null;
//             }
//         },
//     }
// };

const main = async () => {

    const apolloServer = new ApolloServer({
        schema: await buildSchema({
            resolvers: [OfferResolver, ProductResolver]
        }),
    }); 

    // apolloServer.applyMiddleware({ app, cors: false});
    apolloServer.listen().then(({url}) => {
        console.log(`Server ready at ${url}`)
    });

};

main().catch(err => {
    console.error(err);
});