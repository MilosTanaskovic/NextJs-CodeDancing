import React from 'react'
import { useStateContext } from '../context/StateContext'
import { HeroBanner } from './banners';

const NavBanner = () => {
    const {heroBanner} = useStateContext();

    console.log('Nav Banner Hero: ', heroBanner[0])
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
