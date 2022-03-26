import React from "react";
import SearchProduct from "./SearchProduct";
import { mount } from "enzyme";

it("renders without crashing", () => {
    mount(<SearchProduct />);
});