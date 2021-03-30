import * as React from "react";

import Popup from "./Popup";

interface IReadonlyProps {
    alertClicked: boolean,
    showPopup: boolean,
}

class Cart extends React.Component<{}, IReadonlyProps> {

    constructor(props: any) {
        super(props);
        this.state = { 
            alertClicked: false,
            showPopup: false, 
        };
    };
    
    togglePopup(alertClicked = false, showPopup = false): void {
        this.setState({
            alertClicked, 
            showPopup,
        });
    };

    render() {
        return (
            <div data-testid="divCart">
                <h1>UpsellStrategy</h1>
                <button 
                    data-testid="buttonToCart"
                    onClick={this.togglePopup.bind(this, this.state.alertClicked, !this.state.showPopup)}>
                    Add to Cart</button>

                { this.state.showPopup 
                    ? <Popup 
                            id={1} 
                            text="Click to Close Button to hide popup."
                            alertClicked={this.state.alertClicked}
                            closePopup={this.togglePopup.bind(this)}
                        /> 
                    : null
                }
            </div>
        );
    };
};

export default Cart;