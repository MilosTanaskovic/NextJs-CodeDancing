import React from 'react';

import { Button } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import {styled} from '@mui/material/styles';

const ButtonSecondary = styled(Button)(({}) => ({
    boxShadow: 'none',
    padding: '15px 30px',
    backgroundColor: 'none',
    color: '#979797',
    borderRadius: 'none',
    '&:hover': {
        backgroundColor: 'none',
        color: '#D87D4A',
        boxShadow: 'none',
    }
}));

const ButtonThree = ({children, href}) => {
    return (
        <ButtonSecondary
            endIcon={<ArrowForwardIosIcon fontSize='small' sx={{color: '#D87D4A'}} />}
            href={href}
        >      
            {children}
        </ButtonSecondary>
    )
}

export default ButtonThree
