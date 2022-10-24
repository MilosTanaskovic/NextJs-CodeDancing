import React from 'react'

import {Box, Stack} from '@mui/material';
import { TypographyDS } from './typography';
import ProductMarquee from './ProductMarquee';

const ProductsMarquee = ({products}) => {
    
    return (
        <Box
            component="section"
            sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: '2rem',
                width: '100%',
                marginBottom: {xs: '60px', sm: '80px', md: '120px', lg: '160px'}
            }}
        >
            <TypographyDS
                variant="h2"
                component="h2"
                fontWeight="bold"
                fontSize='32px'
                color="black"
                letterSpacing='1.14px'
                lineHeight='36px'
                textTransform='uppercase'
                align='center'
            >
                You May Also Like
            </TypographyDS>
            <Stack
                direction="row"
                spacing={5}
                justifyContent="center"
                sx={{
                    width: '100%'
                }}
            >
                {products?.map((product, index) => (
                    <ProductMarquee 
                        key={index} 
                        product={product}
                    />
                ))}
            </Stack>
        </Box>
    )
}

export default ProductsMarquee
