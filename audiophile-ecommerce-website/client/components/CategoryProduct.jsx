import React from 'react';

import {Box, Grid, Paper, Stack} from '@mui/material';
import {styled} from '@mui/material/styles';

import {urlFor} from '../lib/client'
import { TypographyDS } from './typography';
import { ButtonOne } from './buttons';

const ImgContainer = styled(Paper)(({}) => ({
    textAlign: 'center',
    backgroundColor: '#f1f1f1',
    maxWidth: 'fit-content',
}))

const CategoryProduct = ({item}) => {
    const {name, label, title, description, image} = item;
    return (
        <Grid
            container
            spacing={2}
            sx={{
                marginBottom: {xs: '60px', sm: '80px', md: '120px', lg: '160px'}
            }}
            className="category-reverse"
        >
            <Grid
                item
                xs={12}
                md={6}
            >
                <ImgContainer>
                    <img src={urlFor(image)}  alt='' style={{padding: '5rem', width: '100%', objectFit: 'cover'}}/>
                </ImgContainer>
            </Grid>
            <Grid
                item
                xs={12}
                md={6}
                sx={{
                    display: 'flex'
                }}
            >
                <Stack
                    spacing={2}
                    p={7}
                    sx={{
                        alignItems: {xs: 'center', lg: 'flex-start'}
                    }}
                >
                    <TypographyDS
                        color='#D87D4A'
                        letterSpacing='10px'
                        fontWeight={400}
                        fontSize='14px'
                        textTransform='uppercase'
                    >
                        {label}
                    </TypographyDS>
                    <TypographyDS
                        variant="h1"
                        component="h1"
                        fontWeight="bold"
                        fontSize='40px'
                        color="black"
                        letterSpacing='1.43px'
                        lineHeight='44px'
                        textTransform='uppercase'
                    >
                        {title}
                    </TypographyDS>
                    <TypographyDS
                        variant="body1"
                        component="p"
                        fontWeight={500}
                        fontSize='15px'
                        color="black"
                        lineHeight='25px'
                    >
                        {description}
                    </TypographyDS>
                    <ButtonOne>
                        <TypographyDS
                            variant="subtitle1"
                            component="p"
                            textTransform='uppercase'
                            fontWeight="bold"
                            fontSize='13px'
                            lineHeight='25px'
                            letterSpacing='1px'
                        >
                            SEE PRODUCT
                        </TypographyDS>
                    </ButtonOne>
                </Stack>
            </Grid>
        </Grid>
    )
}

export default CategoryProduct
