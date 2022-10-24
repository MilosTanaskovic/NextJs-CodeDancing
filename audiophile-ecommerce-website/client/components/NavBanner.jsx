import React from 'react'

import { useRouter } from 'next/router';

import { useStateContext } from '../context/StateContext'
import { HeroBanner } from './banners';
import CategoryBanner from './banners/CategoryBanner';


const NavBanner = () => {
    const {heroBanner} = useStateContext();
    const router = useRouter();
    const {slug} = router.query;
    const {pathname} = router;

    // console.log('slug', slug)
    // console.log('router', router)
    // console.log('Nav Banner Hero: ', heroBanner[0])
    
    if(slug === 'headphones'){
        return (<CategoryBanner slug={slug} />)
    } else if(slug === 'speakers'){
        return (<CategoryBanner slug={slug} />)
    } else if(slug === 'earphones'){
        return (<CategoryBanner slug={slug} />)
    } else if(pathname === '/product/[slug]') {
        return;
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
