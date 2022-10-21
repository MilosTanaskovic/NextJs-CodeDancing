import React from 'react';

import {Grid, Paper, Box, Stack, Container} from '@mui/material';
import { styled } from '@mui/material/styles';

import {urlFor} from '../../lib/client';
import { TypographyDS } from '../typography';

const Item = styled(Container)(({}) => ({
    textAlign: 'start',
    height: '100%',
    padding: '0px !important',
}))

const PromoBanner = ({promoBannerData}) => {
    const {name, Title, Description, image} = promoBannerData;

    // console.log('PromoBannerData: ', promoBannerData)
    return (
        <Box
            component="section"
            mb="200px"
            width='100%'
            minHeight='588px'
            sx={{
                height: {lg: '588px'}
            }}
        >
            <Grid
                container
                spacing={2}
                sx={{
                    flexDirection: {xs: 'column-reverse', lg: 'row'},
                    flexWrap: {xs: 'nowrap', lg: 'wrap'},
                }}
            >
                <Grid
                    item
                    xs={12}
                    lg={6}
                    sx={{
                        marginTop: { xs: '16px', md: '0px'}
                    }}
                >
                    <Item>
                        <Stack
                            component="div"
                            direction="column"
                            alignItems="flex-start"
                            justifyContent="center"
                            height="100%"
                            p="4rem 4rem 4rem 0rem"
                            spacing={4}
                        >
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
                                {Title}
                            </TypographyDS>
                            <TypographyDS
                                variant="body1"
                                component="p"
                                fontWeight={500}
                                fontSize='15px'
                                color="black"
                                letterSpacing='0px'
                                lineHeight='25px'
                            >
                                {Description}
                            </TypographyDS>
                        </Stack>
                    </Item>
                </Grid>
            
                <Grid
                    item
                    xs={12}
                    lg={6}
                >
                    <Item
                        className="img-height"
                    >
                        <img 
                            src={urlFor(image)}
                            alt={Title}
                            style={{width: '100%', height: '100%', objectFit: 'cover', borderRadius: '4px'}}
                        />
                    </Item>
                </Grid>

                
            </Grid>
        </Box>
    )
}

export default PromoBanner
