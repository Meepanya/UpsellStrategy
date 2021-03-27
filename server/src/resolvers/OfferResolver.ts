import { IOfferData, offers } from "../mockData/data";
import Offer from "../schemas/Offer";
import { Arg, Mutation, Query, Resolver } from "type-graphql";

@Resolver(() => Offer) 
export default class {
    @Query(() => [Offer])
    fetchOffers(): IOfferData[] {
        return offers;
    };

    @Query(() => Offer, {nullable: true})
    getOffer(@Arg("id") id: number): IOfferData | undefined {
        return offers.find(offer => offer.id === id);
    };

    @Mutation(() => Offer)
    markAsCompleted(@Arg("offerId") offerId: number): IOfferData {
        const offer = offers.find(offer => {
            return offer.id === offerId;
        });
        if (!offer) {
            throw new Error(`Couldn't find the offer with id ${offerId}.`);
        }
        if (offer.upsell === true) {
            throw new Error(`Offer with id ${offer.id} is already for upselling`);
        }
        offer.upsell = true;
        return offer;
    };
};