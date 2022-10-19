import React from 'react';

import {Grid, Paper, Box, Stack} from '@mui/material';
import { styled } from '@mui/material/styles';

import {urlFor} from '../../lib/client';
import { TypographyDS } from '../typography';
import { ButtonTwo } from '../buttons';

const Item = styled(Paper)(({}) => ({
    textAlign: 'center',
    height: '100%',
    backgroundColor: '#f1f1f1',
}))

const EarPhoneBanner = ({earPhoneBannerData}) => {
    const {name, Title, buttonText, image} = earPhoneBannerData;

    console.log('EarPhoneBannerData: ', earPhoneBannerData)
    return (
        <Box
            component="section"
            mb="200px"
            width='100%'
            minHeight='320px'
            sx={{
                height: {lg: '320px'}
            }}
        >
            <Grid
                container
                spacing={2}
            >
                <Grid
                    item
                    xs={12}
                    md={6}
                >
                    <Item>
                        <img 
                            src={urlFor(image)}
                            alt={Title}
                            style={{width: '100%', height: '100%', objectFit: 'cover', borderRadius: '4px'}}
                        />
                    </Item>
                </Grid>

                <Grid
                    item
                    xs={12}
                    md={6}
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
                    </Item>
                </Grid>
            </Grid>
        </Box>
    )
}

export default EarPhoneBanner
