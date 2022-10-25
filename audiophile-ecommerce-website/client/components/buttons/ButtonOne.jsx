import React from 'react';

import {Button} from '@mui/material';
import { styled } from '@mui/material/styles';

const ButtonDefault = styled(Button)(({widthFull}) => ({
    boxShadow: 'none',
    padding: '15px 30px',
    backgroundColor: '#D87D4A',
    color: 'white',
    borderRadius: '0px',
    '&:hover': {
        backgroundColor: '#FBAF85',
        boxShadow: 'none',
    },
    width: widthFull,
}));

const ButtonOne = ({children, href, handleClick, widthFull}) => {
    return (
        <ButtonDefault
            variant="contained"
            href={href}
            onClick={handleClick}
            widthFull={widthFull}
        >
            {children}
        </ButtonDefault>
    )
}

export default ButtonOne
