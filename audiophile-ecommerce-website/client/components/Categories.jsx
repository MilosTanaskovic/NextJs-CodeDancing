import React from 'react';

import {Stack, Grid} from '@mui/material';
import Category from './Category';

const Categories = ({categoryData}) => {
    return (
        <Stack
            component="section"
            direction="row"
            alignItems="center"
            spacing={2}
            mb="120px"
            width='100%'
            sx={{
                backgroundColor: 'white',
                gap: {lg: '2rem'}
            }}
        >
            <Grid 
                container 
                spacing={2}
                minHeight='240px'
            >
                {categoryData?.map((item) => (
                    <Category 
                        key={item._id}
                        categoryData={item}
                    />
                ))}
            </Grid>
        </Stack>
    )
}

export default Categories
