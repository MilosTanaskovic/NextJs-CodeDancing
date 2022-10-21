import React from 'react';

import { Grid, Box } from '@mui/material';
import { urlFor } from '../../lib/client';
import { TypographyDS } from '../typography';
import { ButtonTwo } from '../buttons';

const SpeakerBanner = ({speakerBannerData}) => {
    const {name, Description, Title, buttonText, image} = speakerBannerData;

    // console.log("SpeakerBannerData: ", speakerBannerData)
    return (
        <Grid
            component="section"
            container
            spacing={0}
            mb="48px"
            width='100%'
            minHeight='560px'
            sx={{
                backgroundColor: "#D87D4A",
                borderRadius: '5px',
                boxShadow: '2px 2px 2px #979797',
            }}
            
        >
            <Grid
                item
                xs={12}
                lg={6}
                sx={{
                    display: 'flex',
                    position: 'relative'
                }}
            >
                <img src={urlFor(image)} alt={Title} style={{position: 'absolute', bottom: '0px', left: '15%', width: '75%'}} />
            </Grid>
            <Grid
                item
                xs={12}
                lg={6}
                sx={{
                    display: 'flex',
                }}
            >
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'start',
                    gap: {md: '30px', sm: '18px'},
                    width: {md: '300px', sm: '250px'}
                }}
            >
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
            </Box>
            </Grid>
        </Grid>
    )
}

export default SpeakerBanner
