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
require("reflect-metadata");
const express_1 = __importDefault(require("express"));
const apollo_server_1 = require("apollo-server");
const type_graphql_1 = require("type-graphql");
const cors_1 = __importDefault(require("cors"));
const OfferResolver_1 = __importDefault(require("./resolvers/OfferResolver"));
const ProductResolver_1 = __importDefault(require("./resolvers/ProductResolver"));
const main = () => __awaiter(void 0, void 0, void 0, function* () {
    const app = express_1.default();
    app.use(cors_1.default());
    const apolloServer = new apollo_server_1.ApolloServer({
        schema: yield type_graphql_1.buildSchema({
            resolvers: [OfferResolver_1.default, ProductResolver_1.default]
        }),
    });
    apolloServer.listen().then(({ url }) => {
        console.log(`Server ready at ${url}`);
    });
});
main().catch(err => {
    console.error(err);
});
//# sourceMappingURL=index.js.map