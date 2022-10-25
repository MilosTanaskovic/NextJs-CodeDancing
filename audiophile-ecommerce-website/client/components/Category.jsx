import React from 'react';

import Link from 'next/link';
import {Paper, Grid, Box} from '@mui/material';
import {styled} from '@mui/material/styles';

import {urlFor} from '../lib/client';
import { TypographyDS } from './typography';
import { ButtonThree } from './buttons';

const Item = styled(Paper)(({}) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',

    height: '70%',
    marginTop: '60px',
    backgroundColor: '#f1f1f1',
}));


const Category = ({categoryData}) => {
    const {name, btnText, image, slug} = categoryData;

    // console.log('Category Data: ', categoryData);
    return (
        <Grid item xs={12} md={6} lg={4}>
            <Item>
                <img 
                    src={urlFor(image)}
                    alt={name}
                    style={{width: '130px', position: 'absolute', marginTop: '-40px'}}
                />
                <Box
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                    marginBottom="0px"
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
                        {name}
                    </TypographyDS>
                    <ButtonThree
                        href={`/category/${slug.current}`}
                    >
                        {btnText}
                    </ButtonThree>
                </Box>
            </Item>
        </Grid>
    )
}

export default Category
