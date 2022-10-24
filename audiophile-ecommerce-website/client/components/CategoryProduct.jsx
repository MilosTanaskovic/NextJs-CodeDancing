import React from 'react';

import Link from 'next/link';
import {Box, ButtonGroup, Button, Grid, Paper, Stack} from '@mui/material';
import {styled} from '@mui/material/styles';
import { useRouter } from 'next/router';

import {urlFor} from '../lib/client'
import { TypographyDS } from './typography';
import { ButtonOne } from './buttons';

const ImgContainer = styled(Paper)(({}) => ({
    textAlign: 'center',
    backgroundColor: '#f1f1f1',
    maxWidth: 'fit-content',
}))

const CategoryProduct = ({item}) => {
    const {name, label, title, description, image, slug, price} = item;

    const router = useRouter();
    const {pathname} = router;

    // console.log('pathname', pathname)
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
                    {/** For Category Page */}
                    {pathname === '/category/[slug]' && (
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
                                <Link href={`/product/${slug.current}`}>
                                   SEE PRODUCT
                                </Link>
                            </TypographyDS>
                        </ButtonOne>
                    )}
                    {/** For Product Page */}
                    {pathname === '/product/[slug]' && (
                        <>
                        <TypographyDS
                            variant="subtitle1"
                            component="p"
                            fontWeight="bold"
                            fontSize='18px'
                            lineHeight='auto'
                            letterSpacing='1.29px'
                        >
                            ${price}
                        </TypographyDS>
                        <Stack
                            direction="row"
                            spacing={3}
                            alignItems="start"
                        >
                            <ButtonGroup
                                variant="outlined"
                                aria-label="outlined button group"
                            >
                                <Button>-</Button>
                                <Button>1</Button>
                                <Button>+</Button>
                            </ButtonGroup>
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
                                    <Link href={`/product/${slug.current}`}>
                                        ADD TO CART
                                    </Link>
                                </TypographyDS>
                            </ButtonOne>
                        </Stack>
                        </>
                    )}
                </Stack>
            </Grid>
        </Grid>
    )
}

export default CategoryProduct
