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
            
            sx={{
                backgroundColor: '#101010',
                gap: {lg: '2rem'},
                width: {xs: '327px', sm: '500px', md: '689px', lg: '1110px'},
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
                mb="150px"
                mt="150px"
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
                    display: 'flex',
                    width: {xs: '100%', lg: '500px'}
                }}
            >
                <img src={urlFor(image)} alt={Title} style={{display: 'flex', margin: 0, objectFit: 'cover'}} />
            </Box>
        </Stack>
    )
}

export default HeroBanner
