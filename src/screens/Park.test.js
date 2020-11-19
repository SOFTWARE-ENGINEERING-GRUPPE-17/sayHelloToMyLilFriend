import React from "react";
import Enzyme, {shallow} from "enzyme"
import Adapter from "enzyme-adapter-react-16"
import Park from "./Park"

Enzyme.configure({adapter: new Adapter()});

//Test som Sjekker at status .
it("Shoud change the status of parking spot to rented ", () => {
    const wrapper = shallow(<Park/>);
    const status = wrapper.find("Button.b1").text();

    expect(status).toBe("Lei denne parkeringen");

    //finner knappen
    const button = wrapper.find("Button.b1");
    //Klikker på knappen
    button.simulate("click");
    // finner teksten igjen
    const status2 = wrapper.find("Button.b1").text();

    expect(status2).toBe("Leid");
});

