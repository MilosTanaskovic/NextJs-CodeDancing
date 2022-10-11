import React, {useState} from 'react';
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Footer, HeroBanner } from '../components';

export default function Home() {
  const [products, setProducts] = useState(['Product1', 'Product2']);
  return (
    <>
      
      <HeroBanner />

      <div className="products-heading">
        <h2>Beset Selling Products</h2>
        <p>Speakers of many variations</p>
      </div>

      <div className="products-container">
      {products?.map((product) => (
        product
      ))}
      </div>

      <Footer />
    </>
  )
}
