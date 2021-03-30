import React from "react";
import "cross-fetch/polyfill";
import { render, screen, fireEvent, cleanup } from "@testing-library/react";

import Cart from "../../components/Cart";
import { GetByBoundAttribute } from "../abstraction/types";

let getTestById:GetByBoundAttribute;

beforeEach(() => {
    const cartComponent = render(<Cart/>)
    getTestById = cartComponent.getByTestId;
});

describe("<Cart />", () => {
    test("renders without crashing", async () => {
        const headerElement = getTestById("divCart");
        expect(headerElement.textContent).toBe("UpsellStrategyAdd to Cart");
    });
    
    test("adding a product to cart", async () => {
        const buttonEl = getTestById("buttonToCart");
        // buttonEl.click();
        // cleanup();
        // console.log("hello");
        // const popupComp = render(
        //     <Popup id={1} 
        //         text="Click to Close Button to hide popup."
        //         alertClicked={false}
        //         closePopup={jest.fn(ct => ct = false)}
        //     />
        // )
        // console.log(popupComp);
        // const titleProductEl = getTestById("titleProduct");
        // expect(titleProductEl.textContent).toBe("Click to Close Button to hide popup.");
    });
});