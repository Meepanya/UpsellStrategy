"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_1 = require("apollo-server");
const node_fetch_1 = __importDefault(require("node-fetch"));
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
        getOffers: (_1, _2) => __awaiter(void 0, void 0, void 0, function* () {
            const response = yield node_fetch_1.default(`https://private-803503-digismoothietest.apiary-mock.com/offers`, {
                method: "GET",
            });
            const body = yield response.text();
            try {
                console.log(body);
                return JSON.stringify(body);
            }
            catch (err) {
                console.error("Error: ", err);
                console.error("Response body: ", response);
            }
        }),
    }
};
const server = new apollo_server_1.ApolloServer({ typeDefs, resolvers });
server.listen({ port: 4000 })
    .then(({ url }) => console.log(`Server running at ${url}`));
//# sourceMappingURL=index.js.map