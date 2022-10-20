import React from 'react'

import {Box, Grid, Stack, Container} from '@mui/material';
import {styled} from '@mui/material/styles';
import { useStateContext } from '../context/StateContext';

import {urlFor} from '../lib/client';
import { TypographyDS } from './typography';


const Footer = () => {
    const {info} = useStateContext();
    
    console.log('Footer Data: ', info[0])
    console.log('Footer Logo: ', info[0]?.image)
    return (
        <Box
            component="div"
            sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: {xs: '327px', sm: '500px', md: '689px', lg: '1110px'},
            height: 'auto',
            
            }} 
        >
            <Grid
                container
                spacing={3}
                mt={0}
            >
                {/** Logo */}
                <Grid
                    item
                    xs={12}
                    lg={4}
                >
                    <Container
                        sx={{
                            justifyContent: {xs: 'center', md: 'flex-start'}
                        }}
                    >
                        {info[0] && (
                            <img src={urlFor(info[0]?.image)} alt="Logo" />
                        )}
                    </Container>
                </Grid>
                {/** Nav */}
                <Grid
                    item
                    xs={12}
                    lg={8}
                >
                    <Stack 
                        spacing={1} 
                        direction="row"
                        sx={{
                            justifyContent: {xs: 'center', md: 'flex-start', lg: 'flex-end'}
                        }}
                    >
                        {info[0]?.navitem?.map((item, index) => (
                            <TypographyDS>
                                {item}
                            </TypographyDS>
                        ))}
                    </Stack>
                </Grid>
                {/** Desc */}
                <Grid
                    item
                    xs={12}
                    
                >
                    <Container
                        sx={{
                            width: {xs: '100%', lg: '50%'},
                            marginLeft: '0px'
                        }}
                    >
                        <TypographyDS
                            variant="body1"
                            component="p"
                            align="start"
                            fontSize="15px"
                            fontWaight={500}
                            letterSpacing="0px"
                            lineHeight="25px"
                            color="#191919"
                        >
                            {info[0]?.description}
                        </TypographyDS>
                    </Container>
                </Grid>
                {/** Copyright */}
                <Grid
                    item
                    xs={12}
                    md={6}
                >
                    <Container>
                        <TypographyDS
                            variant="body1"
                            component="p"
                            align="start"
                            fontSize="15px"
                            fontWaight={500}
                            letterSpacing="0px"
                            lineHeight="25px"
                            color="#191919"
                        >
                            {info[0]?.copyright}
                        </TypographyDS>  
                    </Container>
                </Grid>
                {/** SocialIcons */}
                <Grid
                    item
                    xs={12}
                    md={6}
                >
                    <Stack
                        alignItems="end"
                    >
                        SocialIcons
                    </Stack>
                </Grid>
            </Grid>
        </Box>
    )
}

export default Footer
