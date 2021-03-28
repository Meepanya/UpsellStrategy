import React, { useEffect } from "react";

interface IProps {
    closePopup(alertClicked: boolean, showPopup: boolean): void;
};

const AlertButton = ({closePopup}: IProps) => {
    useEffect(() => {
        // Can't change alert button styles cause of system alert configuration settings, but i can create a fake confirmation button.
        const timer = setTimeout(async() => {
            console.log("Gave a customer some time to think of buying additional things if user needs.");  
            var isPressed = window.confirm("Proceed checkout");
            closePopup(!isPressed, !isPressed);
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

    return(<></>);
};
export default AlertButton;