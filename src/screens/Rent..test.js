import React from "react";
import Enzyme, {shallow} from "enzyme"
import Adapter from "enzyme-adapter-react-16"
import Rent from "./Rent"

Enzyme.configure({adapter: new Adapter()});

//Test som Sjekker at Header viser riktig tekst.
it("renders header in parkering", () => {
    const wrapper = shallow(<Rent/>);
    const h1 = wrapper.find("h1");
    const result = h1.text();

    expect(result).toBe("Parkeringer");

});

