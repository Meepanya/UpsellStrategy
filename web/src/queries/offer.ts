import { gql } from "apollo-boost";

export default gql`
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