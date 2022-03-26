import React from "react";
import { mount } from "enzyme";
import CategoryContent from "./CategoryContent";

describe("categories", () => {
    it("renders without crashing", () => {
        mount(<CategoryContent />);
    });

    it("contains catagories label", () => {
        const wrapper = mount(<CategoryContent />);
        const value = wrapper.find("li").text();
        expect(value).toEqual("CATEGORIES");
    });
});