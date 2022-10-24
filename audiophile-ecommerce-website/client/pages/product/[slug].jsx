import React from 'react';

import Link from 'next/link'
import {Box, Container} from '@mui/material';
import {client, urlFor} from '../../lib/client';
import { TypographyDS } from '../../components/typography';
import CategoryProduct from '../../components/CategoryProduct';
import ProductMoreInfo from '../../components/ProductMoreInfo';
import ProductImageList from '../../components/ProductImageList';
import { Categories } from '../../components';
import { PromoBanner } from '../../components/banners';
import { useStateContext } from '../../context/StateContext';
import ProductsMarquee from '../../components/ProductsMarquee';

// Pages with Dynamic Routes [product/product1, product/product2, ...]
const ProductDetail = ({product, products}) => {
    const {categories, promoBanner} = useStateContext();

    console.log('Product Detail ', product);
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
            {/** Go Back Link Section */}
            <Container
                component="section"
                p={0}
                sx={{
                    margin: {xs: '20px 0px', md: "40px 0px", lg: "80px 0px"}
                }}
            >
                <TypographyDS
                    variant="body1"
                    component="p"
                    fontWeight={500}
                    fontSize='15px'
                    color="#979797"
                    lineHeight='25px'
                >
                    <Link href="">
                        Go Back
                    </Link>
                </TypographyDS>
            </Container>
            {/** Product Section */}
            <CategoryProduct item={product} />
            {/** More Info Product Section */}
            <ProductMoreInfo info={product} />
            {/** ImageList Sectiomn */}
            <ProductImageList imageData={product} />
            {/** List Products Section */}
            <ProductsMarquee products={products}  />
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
    const querySlug = `*[_type == "product"]{
        slug {
            current
        }
    }`;
    const products = await client.fetch(querySlug);

    const paths = products.map((product) => ({
        params: {
            slug: product.slug.current
        }
    }))

    return {
        paths,
        fallback: 'blocking',
    }
}

export const getStaticProps = async ({params: {slug}}) => {
    const queryProduct = `*[_type == 'product' && slug.current == '${slug}'][0]`;
    const product = await client.fetch(queryProduct);

    const queryProducts = '*[_type == "product"]';
    const products = await client.fetch(queryProducts);

    return {
        props: {
            product,
            products,
        }
    }
}

export default ProductDetail;
