import React from 'react';

import {Stack, Box} from '@mui/material';

import Image from 'next/image';

import { urlFor } from '../../lib/client'
import { ButtonOne } from '../buttons';
import {TypographyDS} from '../typography';

const HeroBanner = ({heroBannerData}) => {
    const {name, Description, Label, Title, image, buttonText} = heroBannerData;

    console.log('heroBannerData: ', heroBannerData)
    return (
        <Stack
            component="section"
            direction="row"
            spacing={2}
            mb="120px"
            width='100%'
            sx={{
                backgroundColor: '#191919',
                gap: {lg: '2rem'}
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'start',
                    gap: {md: '24px', sm: '18px'},
                    width: {md: '400px', sm: '350px'}
                }}
            >
                <TypographyDS
                    color='#979797'
                    letterSpacing='10px'
                    fontWeight={400}
                    fontSize='14px'
                    textTransform='capitalize'
                >
                    {Label}
                </TypographyDS>
                <TypographyDS
                    variant="h1"
                    component="h1"
                    fontWeight="bold"
                    fontSize='56px'
                    color="white"
                    letterSpacing='2px'
                    lineHeight='58px'
                    textTransform='capitalize'
                >
                    {Title}
                </TypographyDS>
                <TypographyDS
                    variant="body1"
                    component="p"
                    fontWeight={500}
                    fontSize='15px'
                    color="white"
                    lineHeight='25px'
                >
                    {Description}
                </TypographyDS>
                <ButtonOne>
                    <TypographyDS
                        variant="subtitle1"
                        component="p"
                        textTransform='capitalize'
                        fontWeight="bold"
                        fontSize='13px'
                        lineHeight='25px'
                        letterSpacing='1px'
                    >
                        {buttonText}
                    </TypographyDS>
                </ButtonOne>
            </Box>
            <Box
                sx={{
                    width: {xs: '100%', lg: '500px'}
                }}
            >
                <img src={urlFor(image)} alt={Title} style={{display: 'flex'}} />
            </Box>
        </Stack>
    )
}

export default HeroBanner
