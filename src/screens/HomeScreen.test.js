import React from "react";
import Enzyme, {shallow} from "enzyme"
import Adapter from "enzyme-adapter-react-16"
import Home from "./HomeScreen";

Enzyme.configure({adapter: new Adapter()});


//Testing the possibility to chose role from Home Screen.
describe("Renders the overview of available roles crashing", () => {
    it("Renders Park component without crashing", () => {
        shallow(<Home />);
    });
})

//Test to check whether the user is welcomed
it("renders Home header", () => {
    const wrapper = shallow(<Home />);
    const welcome = <h1>Velkommen! </h1>;
    expect(wrapper.contains(welcome)).toEqual(true);
});



//Test that check that the buttones for roles "Se Ledige Parkeringer" and "Lei ut din parkering" exists.

//Checking for "Ledige parkeringer"

describe("Test to ensure correct paths for the buttons", () => {
    it("Se Ledige Parkeringer option is available", () => {
        const wrapper = shallow(<Home />);
        expect(wrapper.find("Link.ledigeParkeringer").props().to).toBe('/Park');
    });

//Test that check that the buttones "Lei ut din parkering" exists.
    it("Se Lei Ut Din Parkering option is available", () => {
        const wrapper = shallow(<Home />);
        expect(wrapper.find("Link.leiUtParkering").props().to).toBe('/Rent');
    });
})