import "cross-fetch/polyfill";
import { render, screen, fireEvent, cleanup, findByTestId } from "@testing-library/react";
import TestRenderer from "react-test-renderer";
import { MockedProvider } from "@apollo/react-testing";


import ApolloClient from "apollo-boost";
const client = new ApolloClient({
    uri: "http://localhost:4000",
}); 

import Popup from "../../components/Popup";
import singleOfferMockData from "../mockData/offerMockData";
import { GetByBoundAttribute } from "../typeChecking/types";
import { ApolloProvider } from "react-apollo";

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

    // const renderingPage = render(
    //     <MockedProvider mocks={singleProduct} addTypename={false}>
    //         <Popup
    //             id={1} 
    //             text="Click to Close Button to hide popup."
    //             alertClicked={false}
    //             closePopup={jest.fn()}
    //         />
    //     </MockedProvider>
    // );
    const renderingPage = render(
        <ApolloProvider client={client}>
            <Popup
                id={1} 
                text="Click to Close Button to hide popup."
                alertClicked={false}
                closePopup={jest.fn()}
            />
        </ApolloProvider>
    );
    getTestById = renderingPage.getByTestId;
});

describe("<Popup />", () => {
    
    test("checking for rendered page", async () => { 
        const titleNameEl = await screen.findByTestId("titleProduct");
        expect(titleNameEl.textContent).toBe("Click to Close Button to hide popup.");
    });
});