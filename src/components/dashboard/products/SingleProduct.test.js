import React from "react";
import { mount } from "enzyme";
import SingleProduct from "./SingleProduct";

const categories = [
    {
        "img": {
            "data": "vegetables.png"
        },
        "_id": "6239f939cea8088ec1317df8",
        "name": "Vegetables",
        "createdAt": "2022-03-22T16:28:41.385Z",
        "updatedAt": "2022-03-22T16:28:41.385Z",
        "__v": 0
    },
    {
        "img": {
            "data": "fruits.jpeg"
        },
        "_id": "6239f94acea8088ec1317dfa",
        "name": "Fruits",
        "createdAt": "2022-03-22T16:28:58.317Z",
        "updatedAt": "2022-03-22T16:28:58.317Z",
        "__v": 0
    },
    {
        "img": {
            "data": "grains.jpg"
        },
        "_id": "6239f959cea8088ec1317dfc",
        "name": "Grains",
        "createdAt": "2022-03-22T16:29:13.056Z",
        "updatedAt": "2022-03-22T16:29:13.056Z",
        "__v": 0
    },
    {
        "img": {
            "data": "dairy.jpg"
        },
        "_id": "6239f96bcea8088ec1317dfe",
        "name": "Dairy",
        "createdAt": "2022-03-22T16:29:31.340Z",
        "updatedAt": "2022-03-22T16:29:31.340Z",
        "__v": 0
    },
    {
        "img": {
            "data": "protein.jpg"
        },
        "_id": "6239f97bcea8088ec1317e00",
        "name": "Protein Foods",
        "createdAt": "2022-03-22T16:29:47.094Z",
        "updatedAt": "2022-03-22T16:29:47.094Z",
        "__v": 0
    },
    {
        "img": {
            "data": "fats.jpg"
        },
        "_id": "6239f990cea8088ec1317e02",
        "name": "Oils & Solid Fats",
        "createdAt": "2022-03-22T16:30:08.490Z",
        "updatedAt": "2022-03-22T16:30:08.490Z",
        "__v": 0
    },
    {
        "img": {
            "data": "sugar.jpg"
        },
        "_id": "6239f9a1cea8088ec1317e04",
        "name": "Added Sugar Foods",
        "createdAt": "2022-03-22T16:30:25.354Z",
        "updatedAt": "2022-03-22T16:30:25.354Z",
        "__v": 0
    },
    {
        "img": {
            "data": "beverages.jpg"
        },
        "_id": "6239f9afcea8088ec1317e06",
        "name": "Beverages",
        "createdAt": "2022-03-22T16:30:39.523Z",
        "updatedAt": "2022-03-22T16:30:39.523Z",
        "__v": 0
    }
];

const product = {
    "img": {
        "data": "dairy1.jpg"
    },
    "_id": "623a807bb0252c330e1c4dc0",
    "name": "Beurre Charentes-Poitou",
    "categoryId": "6239f96bcea8088ec1317dfe",
    "price": 1200,
    "producer": {
        "description": "Beurre Charentes-Poitou is a traditionally made, solid, pale butter that has a unique aroma. It is produced using pasteurized cream and easily spreads on toast or bread. Its unique taste and soft texture are due to the traditional process of barrel churning."
    }
}

const initialProps = {
    products: categories,
    selectedProduct: product
}

describe("single product", () => {
    it("accept product props", () => {
        const wrapper = mount(<SingleProduct  {...initialProps} />);
        expect(wrapper.props().products).toEqual(categories);
    });
    
    it("contains product image", () => {
        const wrapper = mount(<SingleProduct  {...initialProps} />);
        const value = wrapper.find("h5").text();
        expect(value).toEqual("Beurre Charentes-Poitou");
    });
});