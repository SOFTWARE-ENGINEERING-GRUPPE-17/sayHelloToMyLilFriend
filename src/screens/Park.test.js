import React from "react";
import Enzyme, {shallow} from "enzyme"
import Adapter from "enzyme-adapter-react-16"
import Park from "./Park"


Enzyme.configure({adapter: new Adapter()});

//Testing the possibility to render the overview of parking spots.
    describe("Renders the overview of available parking spots without crashing", () => {
    it("Renders Park component without crashing", () => {
        shallow(<Park/>);
    });
})

//Test that check that the status is change to "leid" after clicking on button.
it("Shoud change the status of parking spot to rented ", () => {
    const wrapper = shallow(<Park/>);
    const status = wrapper.find("Button.b1").text();

    expect(status).toBe("Lei denne parkeringen");

    //Finding the button
    const button = wrapper.find("Button.b1");
    //Click button
    button.simulate("click");
    //Finding the button again.
    const status2 = wrapper.find("Button.b1").text();
    //Checking the status again
    expect(status2).toBe("Leid");

});

//Test that checks that free parking spots are visible to the user
it("Available parking slots are visible", () => {
    const wrapper = shallow(<Park/>);
    const status = wrapper.find("abracadabra").text();

});

describe("Test to ensure the rendering of the card items", () => {
    it("Should render card items and display parking spots", () => {
        const wrapper = shallow(<Park/>);
        expect(wrapper.find("Card.Card1").text());
        expect(wrapper.find("Card.Card2").text());
        expect(wrapper.find("Card.Card3").text());
        expect(wrapper.find("Card.Card4").text());
        expect(wrapper.find("Card.Card5").text());
        expect(wrapper.find("Card.Card6").text());
    });
})




