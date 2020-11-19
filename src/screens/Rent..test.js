import React from "react";
import Enzyme, {shallow} from "enzyme"
import Adapter from "enzyme-adapter-react-16"
import Rent from "./Rent"

Enzyme.configure({adapter: new Adapter()});

//Test that check that the Heading is displaying the correct tekst.
it("renders header correctly in parkering", () => {
    const wrapper = shallow(<Rent/>);
    const h1 = wrapper.find("h1");
    const result = h1.text();

    expect(result).toBe("Parkeringer");
});

