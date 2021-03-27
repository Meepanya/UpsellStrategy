import * as React from "react";
import Popup from "./Popup";

class Cart extends React.Component<{}, {showPopup: boolean}> {

    constructor(props: any) {
        super(props);
        this.state = { showPopup: false };
    };

    togglePopup() {
        this.setState({
            showPopup: !this.state.showPopup
        });
    };

    render() {
        return (
            <div>
                <h1>UpsellStrategy</h1>
                <button onClick={this.togglePopup.bind(this)}>Add to Cart</button>

                { this.state.showPopup 
                    ? <Popup 
                        id={1} 
                        text="Click to Close Button to hide popup."
                        closePopup={this.togglePopup.bind(this)}/> 
                    : null
                }
            </div>
        );
    };
};

export default Cart;