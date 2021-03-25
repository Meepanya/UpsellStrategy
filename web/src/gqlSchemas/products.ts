import gql from "graphql-tag";

export const CART_PRODUCTS = gql`
    query GetProducts {
        Product() {
            currency
            offers {
                title
                short_description
                original_price
                discounted_price
                image
            }
        }
    }
`;