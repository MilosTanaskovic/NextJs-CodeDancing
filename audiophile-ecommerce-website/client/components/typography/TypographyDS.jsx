import React from 'react'

import {Typography} from '@mui/material';

const TypographyDS = ({
    children,
    key,
    variant,
    component,
    align,
    fontFamily="Manrope",
    fontWeight,
    fontSize,
    color,
    letterSpacing,
    lineHeight,
    textTransform,
    sx,

}) => {
    return (
        <Typography
            key={key}
            variant={variant}
            component={component}
            align={align}
            fontFamily={fontFamily}
            fontWeight={fontWeight}
            fontSize={fontSize}
            color={color}
            letterSpacing={letterSpacing}
            lineHeight={lineHeight}
            textTransform={textTransform}
            sx={sx}
        >
            {children}
        </Typography>
    )
}

export default TypographyDS
