import React from 'react'

import { useRouter } from 'next/router';

import { useStateContext } from '../context/StateContext'
import { HeroBanner } from './banners';
import CategoryBanner from './banners/CategoryBanner';


const NavBanner = () => {
    const {heroBanner} = useStateContext();
    const router = useRouter();
    const {slug, pathname} = router.query;

    // console.log('slug', slug)
    // console.log('router', router)
    // console.log('Nav Banner Hero: ', heroBanner[0])
    
    if(slug === 'headphones'){
        return (<CategoryBanner slug={slug} />)
    } else if(slug === 'speakers'){
        return (<CategoryBanner slug={slug} />)
    } else if(slug === 'earphones'){
        return (<CategoryBanner slug={slug} />)
    }

    return (
        <div>
            {heroBanner[0] && (
                <HeroBanner
                    heroBannerData={(heroBanner[0])}
                />
            )}
        </div>
    )
}

export default NavBanner
