import { Field, Float, Int, ObjectType } from "type-graphql";

@ObjectType()
export default class Offer {
    @Field(() => Int!)
    id: number;

    @Field()
    title: string;

    @Field()
    short_description: string;

    @Field(() => Float)
    original_price: number;

    @Field(() => Float, { nullable: true })
    discounted_price: number;

    @Field()
    image: string;
};