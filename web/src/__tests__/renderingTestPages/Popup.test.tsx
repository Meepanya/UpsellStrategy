import "cross-fetch/polyfill";
import { render, screen, fireEvent, cleanup } from "@testing-library/react";
import TestRenderer from "react-test-renderer";
import { MockedProvider } from "@apollo/client/testing";

import Popup from "../../components/Popup";
import singleOfferMockData from "../mockData/offerMockData";
import { GetByBoundAttribute } from "../abstraction/types";

let getTestById:GetByBoundAttribute;
let popupComponent: TestRenderer.ReactTestRenderer;

const singleProduct = singleOfferMockData;

beforeEach(() => {
    // const popupComp = TestRenderer.create(
    //     <MockedProvider mocks={singleProduct} addTypename={false}>
    //         <Popup 
    //             id={1} 
    //             text="Click to Close Button to hide popup."
    //             alertClicked={false}
    //             closePopup={jest.fn()}
    //         />
    //     </MockedProvider>
    // );
    // popupComponent = popupComp;

    const renderingPage = render(
        <Popup
            id={1} 
            text="Click to Close Button to hide popup."
            alertClicked={false}
            closePopup={jest.fn()}
        />
    );
    getTestById = renderingPage.getByTestId;
});

describe("<Popup />", () => {
    
    test("checking for rendered page", async () => { 
        const titleNameEl = getTestById("titleProduct");
        expect(titleNameEl.textContent).toBe("Click to Close Button to hide popup.");
    });
});