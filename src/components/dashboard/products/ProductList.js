import React, { useEffect, useState } from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { useParams } from 'react-router-dom';
import SingleProduct from './SingleProduct';

const ProductList = () => {

    const { id } = useParams();
    const [products, setProducts] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState({});
    const [anchorEl, setAnchorEl] = useState(false);
    const open = Boolean(anchorEl);

    useEffect(() => {
        getProductDetails();
    }, []);

    const getProductDetails = async () => {
        const requestOptions = {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
        };

        try {
            const data = await fetch(`http://localhost:8000/categories/${id}/products`)
                .then(response => response.json())
                .then(response => setProducts(response));
        } catch (error) {
            console.log(error);
        }
    }

    const viewSingleProduct = (item) => {
        setSelectedProduct(item);
        handlePopoverOpen();
    }

    const handlePopoverOpen = () => {
        if (selectedProduct != {}) {
            setAnchorEl(true);
        }
    };

    const handlePopoverClose = () => {
        setAnchorEl(false);
        setSelectedProduct({}); 
    };

    console.log("products", products);
    return (
        <Box sx={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            marginTop: 4
        }}>
            {products.map((item) => (
                <Card
                    key={item._id}
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        flexWrap: "wrap",
                        justifyContent: "center",
                        padding: 0.5,
                        margin: 2
                    }}
                    aria-owns={open ? 'mouse-over-popover' : undefined}
                    aria-haspopup="true"
                    onMouseEnter={() => viewSingleProduct(item)}
                    onMouseLeave={handlePopoverClose}
                >
                    <CardMedia
                        component="img"
                        sx={{ height: 200 }}
                        image={`http://localhost:8000/public/${item.img.data}`}
                        alt={item.name}
                    />
                    <CardContent>
                        <Typography variant="h5">{item.name}</Typography>
                        <Typography
                            variant="subtitle1"
                            align="right"
                            style={{ color: "#06499C" }}
                        >
                            Rs:{item.price}
                        </Typography>
                    </CardContent>
                </Card>
            ))}
            {open &&
                <SingleProduct
                    selectedProduct={selectedProduct}
                />
            }
        </Box>
    );
}

export default ProductList;