import React from 'react';

import {Box} from '@mui/material';

const UnderLine = () => {
    return (
        <Box
            height="1px"
            sx={{
                width: {xs: '100%', sm: '500px', md: '689px', lg: '1110px'},
                backgroundColor: "#979797",
                display: 'block'
            }}
        />
    )
}

export default UnderLine
