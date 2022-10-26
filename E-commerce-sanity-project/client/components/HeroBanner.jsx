import React from 'react';
import Link from 'next/link';
import {urlFor} from '../lib/client';

const HeroBanner = ({heroBanner}) => {
    const {
        buttonText, 
        desc, 
        discount, 
        image, 
        largeText1, 
        largeText2, 
        midText, 
        product,  
        saleTime,
        smallText,
        slug
    } = heroBanner;

    console.log('heroBanner: ', heroBanner);
    return (
        <div className="hero-banner-container">
          <div>
            <p className="beats-solo">{smallText}</p>
            <h3>{midText}</h3>
            <h1>{largeText1}</h1>
            <img src={urlFor(image)} alt={product} className="hero-banner-image" />

            <div>
                    {/** /product/${product} */}
                <Link href={``}>
                    <button type="button" style={{textTransform: 'uppercase'}}>
                        {buttonText}
                    </button>
                </Link>
                <div className="desc">
                    <h5>Description</h5>
                    <p>{desc}</p>
                </div>
            </div>
          </div>
        </div>
    )
}

export default HeroBanner
