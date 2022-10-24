import React from 'react';

import {ImageList, ImageListItem} from '@mui/material';

import {urlFor} from '../lib/client';

const ProductImageList = ({imageData}) => {
    const {productimages} = imageData;
    return (
        <ImageList
            cols={2}
            row={2}
            gap={6}
            variant='quilted'
            sx={{
                width: '100%',
                height: 450,
                marginBottom: {xs: '60px', sm: '80px', md: '120px', lg: '160px'}
            }}
        >
            {productimages?.map((prodImage) => (
                <ImageListItem
                    key={prodImage._key}
                >
                    <img
                        src={urlFor(prodImage)}
                        alt='prod image'
                        loading="lazy"
                    />
                </ImageListItem>
            ))}
        </ImageList>
    )
}

export default ProductImageList
