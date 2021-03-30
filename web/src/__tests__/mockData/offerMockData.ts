import GET_OFFER from "../../queries/offer";

const singleOfferMockData:Array<any> = [
    {
        request: {
            query: GET_OFFER,
            variables: {
                id: 1,
            },
            result: {
                data: {
                    getOffer: {
                        id: 1,
                        title: "Bulb",
                        short_description: "You know you will need them later",
                        original_price: 9.98,
                        discounted_price: 7.99,
                        image: "https://cdn.shopify.com/s/files/1/0078/4606/8295/products/black_medium.png?v=1565111862",
                        upsell: true,
                    },
                },
            },
        },
    },
];

export default singleOfferMockData;