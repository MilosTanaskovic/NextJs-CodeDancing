import React from 'react';

import {Button} from '@mui/material';
import { styled } from '@mui/material/styles';

const ButtonPrimary = styled(Button)(({}) => ({
    boxShadow: 'none',
    backgroundColor: '#fff',
    color: 'black',
    padding: '15px 30px',
    border: '1px solid black',
    borderRadius: '0px',
    '&:hover': {
        backgroundColor: 'black',
        color: '#fff',
        boxShadow: 'none',
    }
}));

const ButtonTwo = ({children}) => {
    return (
        <ButtonPrimary
            variant="contained"
        >
            {children}
        </ButtonPrimary>
    )
}

export default ButtonTwo
