import React from 'react';

import {Button} from '@mui/material';
import { styled } from '@mui/material/styles';

const ButtonDefault = styled(Button)({
    boxShadow: 'none',
    padding: '15px 30px',
    backgroundColor: '#D87D4A',
    color: 'white',
    borderRadius: '0px',
    '&:hover': {
        backgroundColor: '#FBAF85',
        boxShadow: 'none',
    }
}) 

const ButtonOne = ({children}) => {
    return (
        <ButtonDefault
            variant="contained"
        >
            {children}
        </ButtonDefault>
    )
}

export default ButtonOne
