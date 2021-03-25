import { SchemaLink } from "@apollo/client/link/schema";
import { makeExecutableSchema } from "@graphql-tools/schema";

import gql from "graphql-tag";

const typeDefs = gql`
    type Query {
        products: [Products!]!
    }

    type Products {
        title: String!
        short_description: String!
        original_price: Float!
        discounted_price: Float!
        image: String!
    }
`;

export const schemaLink = new SchemaLink({ schema: makeExecutableSchema({typeDefs})});