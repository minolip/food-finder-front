import React, { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Typography } from '@mui/material';
import Popover from '@mui/material/Popover';

const SingleProduct = ({
    products,
    selectedProduct
}) => {

    useEffect(() => {
        getSelectedProductDetails();
    }, [])

    const [displayingProduct, setDisplayingProduct] = useState({});
    const [anchorEl, setAnchorEl] = useState(null);

    const getSelectedProductDetails = () => {
        if (typeof selectedProduct == 'string') {
            products.map((product) => {
                if (product.name == selectedProduct) {
                    setDisplayingProduct(product);
                }
            })
        } else {
            setDisplayingProduct(selectedProduct);
        }
        handleOpen();
    }

    const handleOpen = () => {
        setAnchorEl(true);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    console.log("showPopover: ", selectedProduct);
    return (
        <div>
            {(id != undefined) &&
                <Popover
                    id={id}
                    open={open}
                    anchorEl={anchorEl}
                    onClose={handleClose}
                    sx={{
                        pointerEvents: 'none'
                    }}
                    anchorOrigin={{
                        vertical: 'center',
                        horizontal: 'center',
                    }}
                    transformOrigin={{
                        vertical: 'center',
                        horizontal: 'center',
                    }}
                    disableRestoreFocus
                    PaperProps={{
                        style: { width: '50%' },
                    }}
                >
                    <Card sx={{
                        display: "flex",
                        flexFlow: "column wrap",
                        justifyContent: "center",
                        padding: 2,
                        flex: "1 1 50px"
                    }}>
                        <CardMedia
                            component="img"
                            sx={{ width: '100%', maxHeight: '50%' }}
                            image={`http://localhost:8000/public/${displayingProduct.img.data}`}
                            alt={displayingProduct.name}
                        />
                        <CardContent>
                            <Typography variant="h5">{displayingProduct.name}</Typography>
                            <Typography>{displayingProduct.producer.description}</Typography>
                            <Typography
                                sx={{
                                    display: "flex",
                                    justifyContent: "flex-end"
                                }}
                                variant="subtitle1"
                                color="text.secondary"
                            >
                                Rs.{displayingProduct.price}
                            </Typography>
                        </CardContent>
                    </Card>
                </Popover>
            }
        </div>
    );
}

export default SingleProduct;