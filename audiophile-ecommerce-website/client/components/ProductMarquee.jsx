import React from 'react';

import Link from 'next/link';
import {Stack, Paper} from '@mui/material';
import {styled} from '@mui/material/styles';

import {urlFor} from '../lib/client';
import { TypographyDS } from './typography';
import { ButtonOne } from './buttons';

const ImgContainer = styled(Paper)(({}) => ({
    backgroundColor: '#f1f1f1',
    alignItems: 'center',
    
    borderRadius: '4px',
    width: '20vw',
    height: '100%',
    margin: '0px',
}));

const ProductMarquee = ({product}) => {
    const {name, brandname, image} = product;
    return (
        <Stack
            spacing={3}
            alignItems="center"
            justifyContent="space-between"
            m={0}
        >
            <ImgContainer>
                <img src={urlFor(image)} alt={name} loading='lazy' style={{width: '100%', objectFit: 'cover'}} />
            </ImgContainer>
            <TypographyDS
                variant="h3"
                component="h3"
                fontWeight="bold"
                fontSize='24px'
                color="black"
                letterSpacing='1.71px'
                lineHeight='auto'
                textTransform='uppercase'
            >
                {brandname}
            </TypographyDS>
            <ButtonOne>
                <TypographyDS>
                    <Link href=''>
                        SEE PRODUCT
                    </Link>
                </TypographyDS>
            </ButtonOne>
        </Stack>
    )
}

export default ProductMarquee
