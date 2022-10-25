import React, {useEffect} from 'react'

import { styled } from '@mui/material/styles';
import {Box, Container, Stack, Badge, IconButton} from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useStateContext } from '../context/StateContext';
import {urlFor} from '../lib/client';
import { TypographyDS } from './typography';
import ProductCart from './ProductCart';

const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
      right: -3,
      top: 13,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: '0 4px',
    },
  }));

const NavBar = () => {
    const {info, cartQty, showCart, setShowCart} = useStateContext();

    const handleToggleShowCart = () => {
        setShowCart(!showCart)
    }

    //console.log('cart qty', cartQty)
    return (
        <Box
            component="div"
            sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: {xs: '327px', sm: '500px', md: '689px', lg: '1110px'},
            height: 'auto',
            position: showCart ? 'relative' : 'none',
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
                    {/* {info[0] && (
                        <img 
                            src={urlFor(info[0].cart)} 
                            alt="cart"
                            onClick={() => console.log('click')}
                        />
                    )}
                    */}
                    <IconButton 
                        aria-label="cart"
                        sx={{
                            color: 'white',
                        }}
                        onClick={handleToggleShowCart}
                    >
                        <StyledBadge 
                            badgeContent={cartQty} 
                            color="primary"
                        >
                            <ShoppingCartIcon />
                        </StyledBadge>
                    </IconButton>
                </Container>
            </Stack>

            {/** Render Cart Component */}
            {showCart && (
                <ProductCart />
            )}
        </Box>
    )
}

export default NavBar
