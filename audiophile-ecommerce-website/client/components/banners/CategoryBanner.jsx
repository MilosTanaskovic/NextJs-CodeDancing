import React from 'react'

import {Box} from '@mui/material';
import { TypographyDS } from '../typography';

const CategoryBanner = ({slug}) => {
    return (
        <Box
            p={8}
            sx={{
                marginBottom: {xs: '60px', sm: '80px', md: '120px', lg: '160px'}
            }}
        >
            <TypographyDS
                variant="h1"
                component="h1"
                align="center"
                textTransform="uppercase"
                fontSize="40px"
                fontWeight="bold"
                letterSpacing="1.43px"
                lineHeight="44px"
            >
                {slug}
            </TypographyDS>
        </Box>
    )
}

export default CategoryBanner
