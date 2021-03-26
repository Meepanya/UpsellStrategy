import { Field, Int, ObjectType } from "type-graphql";
import Offer from "./Offer";

@ObjectType()
export default class Product {
    @Field(() => Int)
    id: number;

    @Field()
    currency: string;

    @Field(() => [Offer])
    offers: Offer[];
};