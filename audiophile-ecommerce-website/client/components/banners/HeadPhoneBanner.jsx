import React from 'react'

import { Box, Stack } from '@mui/material'

import {urlFor} from '../../lib/client';
import { TypographyDS } from '../typography';
import { ButtonTwo } from '../buttons';

const HeadPhoneBanner = ({headphoneBannerData}) => {
    const {name, Title, buttonText, image} = headphoneBannerData;

    console.log("HeadphoneBannerData: ", headphoneBannerData)
    return (
        <Box
            component="section"
            mb="48px"
            width='100%'
            minHeight='320px'
            sx={{
                backgroundImage: `linear-gradient(to right, rgba(151, 151, 151, 0), rgba(151, 151, 151, 0)), 
                                    url(${urlFor(image)})`,
                backgroundColor: '#979797',
                height: '320px',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',

                borderRadius: '5px',
                boxShadow: '2px 2px 2px #979797',
            }}
        >
            <Stack
                component="div"
                direction="column"
                alignItems="flex-start"
                justifyContent="center"
                height="100%"
                p="4rem"
                spacing={2}
            >
                <TypographyDS
                    variant="h1"
                    component="h1"
                    fontWeight="bold"
                    fontSize='28px'
                    color="black"
                    letterSpacing='2px'
                    lineHeight='auto'
                    textTransform='capitalize'
                >
                    {Title}
                </TypographyDS>
               <ButtonTwo>
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
               </ButtonTwo>
            </Stack>
        </Box>
    )
}

export default HeadPhoneBanner
