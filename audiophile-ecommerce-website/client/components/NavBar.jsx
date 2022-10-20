import React from 'react'

import {Box, Container, Stack} from '@mui/material';
import { useStateContext } from '../context/StateContext';
import {urlFor} from '../lib/client';
import { TypographyDS } from './typography';

const NavBar = () => {
    const {info} = useStateContext();

    console.log('NavBar Info: ', info[0])
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
            <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                width="100%"
                spacing={10}
                sx={{
                    padding: '32px 0px'
                }}
            >
                <Container>
                    {info[0] && (
                        <img src={urlFor(info[0].image)} alt="Logo" />
                    )}
                </Container>
                <Stack
                    direction="row"
                    spacing={3}
                >
                    {info[0]?.navitem?.map((item, index) => (
                        <TypographyDS>
                            {item}
                        </TypographyDS>
                    ))}    
                </Stack>
                <Container
                    sx={{
                        textAlign: "end"
                    }}
                >
                    {info[0] && (
                        <img src={urlFor(info[0].cart)} alt="cart" />
                    )}
                </Container>
            </Stack>
        </Box>
    )
}

export default NavBar
