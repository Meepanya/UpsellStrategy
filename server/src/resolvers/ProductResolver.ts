import { product, IProductData } from "../mockData/data";
import Product from "../schemas/Product";
import { Query, Resolver } from "type-graphql";

@Resolver(_of => Product)
export default class {
    @Query(returns => Product, {nullable: true})
    getProduct(): IProductData | undefined {
        console.log(product);
        return product;
    };
};