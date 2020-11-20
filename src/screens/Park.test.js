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





