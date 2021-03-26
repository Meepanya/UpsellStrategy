export interface IProductData {
    id: number;
    currency: string;
};

export interface IOfferData {
    id: number;
    title: string;
    short_description: string;
    original_price: number;
    discounted_price: number | null;
    image: string;
    upsell: boolean;
};

export const product: IProductData = {
    id: 1, 
    currency: "USD", 
};

export const offers: IOfferData[] = [
    {
        id: 1,
        title: "Bulb",
        short_description: "You know you will need them later",
        original_price: 9.98,
        discounted_price: 7.99,
        image: "https://cdn.shopify.com/s/files/1/0078/4606/8295/products/black_medium.png?v=1565111862",
        upsell: true,
    },

    {
        id: 2,
        title: "Gift packaging",
        short_description: "We will wrap your order in style",
        original_price: 4.99,
        discounted_price: null,
        image: "https://candycart.ds-cdn.com/static/media/gift.7a4a2504.svg",
        upsell: true,
    },

    {
        id: 3,
        title: "First in line",
        short_description: "Priority order processing",
        original_price: 4.99,
        discounted_price: null,
        image: "https://candycart.ds-cdn.com/static/media/star.a3b1d182.svg",
        upsell: true,
    },
];