import React, {useState} from 'react';
import Head from 'next/head'
import Image from 'next/image'

import styles from '../styles/Home.module.css'
import { Footer, HeroBanner } from '../components';
import {client, urlFor} from '../lib/client'
import Product from '../components/Product';

const Home = ({products, bannerData}) => {

  console.log('prods: ', products)
  console.log('banner: ', bannerData)
  return (
    <div>
      
      <HeroBanner heroBanner={bannerData.length && (bannerData[0])} />

      <div className="products-heading">
        <h2>Beset Selling Products</h2>
        <p>Speakers of many variations</p>
      </div>

      <div className="products-container">
        {products?.map((product) => (
          <Product
            key={product._id}
            product={product}
          />
        ))}
      </div>

      <Footer />
    </div>
  );
}

// This gets called on every request
export const getServerSideProps = async () => {
  // Fetch data from external API
  const productQuery = '*[_type == "product"]';
  const products = await client.fetch(productQuery);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  // Pass data to the page via props
  return {
    props: {
      products,
      bannerData,
    }
  }
}

export default Home;