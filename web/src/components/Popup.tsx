import * as React from "react";
import { graphql, ChildProps } from "react-apollo";

import offer from "../queries/offer";
import { Offer, OfferVariables } from "../operation-result-types";
import { InnerPopup, StyledPopup } from "../styled-components/popup.styles";
import AlertButton from "./AlertButton";

interface IProps {
    id: number;
    text: string;
    alertClicked: boolean;
    closePopup(isClosedBtn: boolean): void;
};

class Popup extends React.Component<ChildProps<IProps, Offer, OfferVariables>> {
    
    render() {
        console.log(this.props);
        const { data } = this.props;
        if (!data) {
            return null;
        };

        const { loading, getOffer: offer } = data;
        if (loading || !offer) {
            return null;
        };

        return (
            <StyledPopup>
                <InnerPopup>
                    <h1 data-testid="titleProduct">{ this.props.text }</h1>
                    <li>{ offer.title }</li>
                    <li>{ offer.short_description }</li>
                    <li>{ offer.original_price }</li>
                    { offer.discounted_price ? <li>{ offer.original_price }</li> : null }
                    <li>{ offer.image}</li>
                    { this.props.alertClicked ? <button onClick={() => {this.props.closePopup(!this.props.alertClicked)}}>Close Confirmation</button> : null }
                </InnerPopup>
                <AlertButton closePopup={this.props.closePopup}/>
            </StyledPopup>
        );
    };
};

export default graphql<IProps, Offer, OfferVariables>(offer, {
    options: ({ id }) => ({ variables: { id }})
})(Popup);