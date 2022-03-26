import React from "react";
import { mount } from "enzyme";
import ProductList from "./ProductList";

it("renders without crashing", () => {
    mount(<ProductList />);
});