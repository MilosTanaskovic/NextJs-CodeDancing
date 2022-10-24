import React from 'react';

import {Stack, Grid} from '@mui/material';
import { TypographyDS } from './typography';

const ProductMoreInfo = ({info}) => {
    const {featurestitle, featuresdesc1, featuresdesc2, intheboxtitle, intheboxdesc} = info;
    return (
        <Grid
            container
            spacing={6}
            sx={{
                marginBottom: {xs: '60px', sm: '80px', md: '120px', lg: '160px'}
            }}
        >
            <Grid
                item
                xs={12}
                lg={8}
            >
                <Stack
                    spacing={4}
                >
                    <TypographyDS
                        variant="h2"
                        component="h2"
                        fontWeight="bold"
                        fontSize='32px'
                        color="black"
                        letterSpacing='1.14px'
                        lineHeight='36px'
                        textTransform='uppercase'
                    >
                        {featurestitle}
                    </TypographyDS>
                    <TypographyDS
                        variant="body1"
                        component="p"
                        fontWeight={500}
                        fontSize='15px'
                        color="black"
                        lineHeight='25px'
                    >
                        {featuresdesc1}
                    </TypographyDS>
                    <TypographyDS
                        variant="body1"
                        component="p"
                        fontWeight={500}
                        fontSize='15px'
                        color="black"
                        lineHeight='25px'
                    >
                        {featuresdesc2}
                    </TypographyDS>
                </Stack>
            </Grid>
            {/** ----- */}
            <Grid
                item
                xs={12}
                lg={4}
            >
                <Stack
                    spacing={2}
                >
                    <TypographyDS
                        variant="h2"
                        component="h2"
                        fontWeight="bold"
                        fontSize='32px'
                        color="black"
                        letterSpacing='1.14px'
                        lineHeight='36px'
                        textTransform='uppercase'
                    >
                        {intheboxtitle}
                    </TypographyDS>
                    
                    {intheboxdesc?.map((item, index) => (
                        <TypographyDS 
                            key={index}
                            variant="body1"
                            component="p"
                            fontWeight={500}
                            fontSize='15px'
                            color="black"
                            lineHeight='25px'
                        >
                            {item}
                        </TypographyDS>
                    ))}
            
                </Stack>
            </Grid>
        </Grid>
    )
}

export default ProductMoreInfo
