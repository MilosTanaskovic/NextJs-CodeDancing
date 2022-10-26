import React, {useState, useEffect} from 'react';

import { Container, Paper, Stack, Box } from '@mui/material';
import { useStateContext } from '../context/StateContext';
import { TypographyDS } from '../components/typography';
import { ButtonOne } from '../components/buttons';

import { runFireworks } from '../lib/utils';

const Success = () => {
    const {setCartItems, setTotalPrice, setCartQty} = useStateContext();

    useEffect(() => {
        localStorage.clear();
        setCartItems([]);
        setTotalPrice(0);
        setCartQty(0);
        runFireworks();
    }, [])
    return (
        <Container
            sx={{
                maxWidth: '540px',
                marginTop: '100px',
                marginBottom: '100px',
                borderRadius: '4px',
            }}
        >
            <Paper
                elevation={3}
            >
                <Stack
                    spacing={4}
                    p={4}
                >
                    <Box
                        ml={0}
                    >
                        <img src='/assets/successorder.png' alt='success order' />
                    </Box>
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
                        THANK YOU FOR YOUR ORDER
                    </TypographyDS>
                    <TypographyDS
                        variant="body1"
                        component="p"
                        fontWeight={500}
                        fontSize='15px'
                        color="black"
                        lineHeight='25px'
                    >
                        You will receive an email confirmation shortly.
                    </TypographyDS>
                    <Paper
                    elevation={3}
                    >
                        ORDER
                    </Paper>
                    <ButtonOne
                        href='/'
                    >
                        <TypographyDS
                            variant="subtitle1"
                            component="p"
                            textTransform='uppercase'
                            fontWeight="bold"
                            fontSize='13px'
                            lineHeight='25px'
                            letterSpacing='1px'
                        >
                            BACK TO HOME
                        </TypographyDS>
                    </ButtonOne>
                </Stack>
            </Paper>
        </Container>
    )
}

export default Success
