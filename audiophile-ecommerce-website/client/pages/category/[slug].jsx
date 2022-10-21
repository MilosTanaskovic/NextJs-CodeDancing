import React from 'react';

import {Box, Grid, Paper} from '@mui/material'

import {client} from '../../lib/client';
import CategoryProduct from '../../components/CategoryProduct';
import { Categories } from '../../components';
import { useStateContext } from '../../context/StateContext';
import { PromoBanner } from '../../components/banners';

// Pages with Dynamic Routes [category/headphones, category/speakers, ...]
const Category = ({productData}) => {
    const {categories, promoBanner} = useStateContext();

    console.log('Category Products Data: ', productData)
    return (
        <Box
            component="div"
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                width: {xs: '327px', sm: '500px', md: '689px', lg: '1110px'},
                height: 'auto',       
            }}
        >
            {/** Category Products Section */}
            {productData?.map((item, index) => (
                <CategoryProduct 
                    key={index}
                    item={item}
                />
            ))}
            {/** Categories Section */}
            <Categories categoryData={categories} />
            {/** Promo Banner Section */}
            {promoBanner[0] && (
                <PromoBanner promoBannerData={promoBanner[0]} />
            )}
        </Box>
    )
}

export const getStaticPaths = async () => {
    const queryCategory = `*[_type == "category"]{
        slug {
            current
        }
    }`;
    const categories = await client.fetch(queryCategory);

    const paths = categories.map((category) => ({
        params: {
            slug: category.slug.current
        }
    }))

    return {
        paths,
        fallback: 'blocking',
    }
}

export const getStaticProps = async ({params: {slug}}) => {
    const queryProduct = `*[_type == "product" && productcategory == "${slug}"]`;
    const productData = await client.fetch(queryProduct);

    if(!productData) {
        return {
            notFound: true,
        }
    }

    return {
        props: {
            productData,
        }
    }
}

export default Category
