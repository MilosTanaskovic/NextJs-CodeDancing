import React from 'react';

import {Card, Box, CardContent, CardActions, Stack, Link, Paper, ButtonGroup, Button} from '@mui/material';
import { ButtonOne } from './buttons';
import { TypographyDS } from './typography';
import { useStateContext } from '../context/StateContext';

import {urlFor} from '../lib/client'
import { getStripe } from '../lib/getStripe';

const ProductCart = () => {
    const {
        showCart, 
        cartItems, 
        cartQty, 
        totalPrice, 
        handleToggleCartItemQty,
        handleRemoveAllProductCart
    } = useStateContext();

    const handleCheckout = async () => {
        const stripe = await getStripe();

        const response = await fetch('/api/stripe', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(cartItems),
        });

        if(response.statusCode === 500) return;

        const data = await response.json();

        stripe.redirectToCheckout({sessionId: data.id});
    }

    console.log('Cart', cartItems)
    return (
        <Card
            sx={{
                minWidth: {xs: '100%', md: '70%', lg: '377px'},
                position: showCart ? 'absolute' : 'none',
                top: '130px',
                right: '0px',
                zIndex: 1000,
            }}
        >
            <Box
                p={2}
            >
            <CardContent>
                {!cartItems.length && (
                    <Box>
                        Empty Cart
                    </Box>
                )}
                {cartItems.length && (
                    <Stack
                        spacing={2}
                    >
                        {/** Cart Items and Remove All */}
                        <Stack
                            direction="row"
                            spacing={4}
                            justifyContent='space-between'
                            width='100%'
                            alignItems='center'
                        >
                            <TypographyDS
                                variant="h6"
                                component="h6"
                                align="center"
                                fontWeight="bold"
                                fontSize="18px"
                                letterSpacing="1.29px"
                                lineHeight="auto"
                                textTransform="capitalize"
                            >
                                CART ({cartQty})
                            </TypographyDS>
                            <Link
                                comonent='button'
                                varient='body2'
                                color='#979797'
                                fontSize='15px'
                                fontWeight={500}
                                onClick={handleRemoveAllProductCart}
                            >
                                Remove All
                            </Link>
                        </Stack>
                        {/** List of Items */}
                        {cartItems?.map((cartItem, index) => (
                            <Stack
                                key={cartItem._id}
                                direction="row"
                                spacing={2}
                                justifyContent='space-between'
                                width='100%'
                                alignItems='center'
                            >
                                <Paper
                                    sx={{
                                        margin: '0px'
                                    }}
                                >
                                    <img 
                                        src={urlFor(cartItem.image)} 
                                        alt={name} 
                                        loading={'lazy'} 
                                        width='64px'
                                        height='64px'
                                    />
                                </Paper>
                                <Box
                                    sx={{
                                        marginLeft: '0px !important'
                                    }}
                                >
                                    <TypographyDS>
                                        {cartItem.brandname}
                                    </TypographyDS>
                                    <TypographyDS>
                                        ${cartItem.price}
                                    </TypographyDS>
                                </Box>
                                <ButtonGroup
                                    variant="outlined"
                                    aria-label="outlined button group"
                                >
                                    <Button onClick={() => handleToggleCartItemQty(cartItem, cartItem._id, 'dec')}>-</Button>
                                    <Button>{cartItem.quantity}</Button>
                                    <Button onClick={() => handleToggleCartItemQty(cartItem, cartItem._id, 'inc')}>+</Button>
                                </ButtonGroup>
                            </Stack>
                        ))}
                       
                        {/** Total Price */}
                        <Stack
                            direction="row"
                            spacing={4}
                            justifyContent='space-between'
                            width='100%'
                            alignItems='center'
                        >
                            <TypographyDS
                                variant="body1"
                                component="p"
                                fontWeight={500}
                                fontSize='15px'
                                color="#979797"
                                lineHeight='25px'
                            >
                                TOTAL
                            </TypographyDS>
                            <TypographyDS
                                variant="h6"
                                component="h6"
                                align="center"
                                fontWeight="bold"
                                fontSize="18px"
                            >
                                ${totalPrice}
                            </TypographyDS>
                        </Stack>
                    </Stack>
                )}
            </CardContent>
            <CardActions>
                {!cartItems.length && (
                    <p>GO BACK</p>
                )}
                {cartItems.length && (
                    <ButtonOne
                        widthFull={'100%'}
                        handleClick={handleCheckout}
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
                            CHECKOUT
                        </TypographyDS>
                    </ButtonOne>
                )}
            </CardActions>
            </Box>
        </Card>
    )
}

export default ProductCart;
