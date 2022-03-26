import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';

const CategoryContent = () => {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        getAllCategories();
    }, []);

    const getAllCategories = async () => {
        try {
            const data = await fetch("http://localhost:8000/categories/")
                .then(response => response.json())
                .then(response => setCategories(response));
            return data;
        } catch (error) {
            console.log(error);
        }
    }

    console.log("categories: ", categories);
    return (
        <Box sx={{ display: "flex", justifyContent: "center" }}>
            <ImageList sx={{ width: 0.8 }} cols={4} gap={8}>
                <ImageListItem key="Subheader" cols={4}>
                    <ListSubheader component="div">CATEGORIES</ListSubheader>
                </ImageListItem>
                {categories.map((item) => (
                    <ImageListItem
                        key={item._id}
                    >
                        <img
                            src={`http://localhost:8000/public/${item.img.data}`}
                            alt={item.name}
                            loading="lazy"
                        />
                        <Link to={`/categories/${item._id}`}>
                        <ImageListItemBar
                            title={item.name}
                        />
                        </Link>
                    </ImageListItem>
                ))}
            </ImageList>
        </Box>
    );
}

export default CategoryContent;