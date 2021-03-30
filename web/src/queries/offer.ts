import { gql } from "apollo-boost";

const GET_OFFER = gql`
    query Offer($id: Float!)
    {
        getOffer(id: $id) {
            id
            title
            short_description
            original_price
            discounted_price
            image
        }
    }
`;

export default GET_OFFER;