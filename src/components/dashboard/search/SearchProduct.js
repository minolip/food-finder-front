import React, { useState, useEffect } from "react";
import { styled, alpha } from '@mui/material/styles';
import Autocomplete from '@mui/material/Autocomplete';
import { TextField } from "@mui/material";
import Stack from '@mui/material/Stack';
import SingleProduct from "../products/SingleProduct";

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchProduct = () => {

  const [selectedProduct, setSelectedProduct] = useState("");
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getAllProducts();
  }, []);


  const getAllProducts = async () => {
    const data = await fetch("http://localhost:8000/products/")
      .then(response => response.json())
      .then(response => setProducts(response));
  }

  const getSearchInput = (searchValue) => {
    console.log(searchValue);
    setSelectedProduct(searchValue);
  }

  return (
    <Search>
      <Stack spacing={2} sx={{ width: 300 }}>
        <Autocomplete
          id="search-input"
          options={products.map((product) => product.name)}
          onChange={(event, value) => getSearchInput(value)}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Search..."
              size="small"
            />
          )}
        />
      </Stack>
        {selectedProduct != "" &&
          <SingleProduct
            selectedProduct={selectedProduct}
            products={products}
            setSelectedProduct={setSelectedProduct}
          />
        }
    </Search>
  );
}

export default SearchProduct;