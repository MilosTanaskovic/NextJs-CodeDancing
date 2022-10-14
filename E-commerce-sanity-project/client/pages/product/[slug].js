import React, {useState} from 'react';
import { AiFillStar, AiOutlineMinus, AiOutlinePlus, AiOutlineStar } from 'react-icons/ai';
import Marquee from '../../components/Marquee';

import {client, urlFor} from '../../lib/client';

import { useStateContext } from '../../context/StateContext'

const ProductDetails = ({product, products}) => {
    const {details, image, name, price, slug, _id} = product;
    const [index, setIndex] = useState(0);

    const { qty, handleIncQty, handleDecQty, handleAddToCart } = useStateContext();

    console.log('Product Detail: ', product);
    console.log('Products Detail: ', products);
    console.log('useSC - qty: ', qty);
    return (
        <div>
            <div className="product-detail-container">
                <div>
                    <div className="image-container">
                        <img 
                            src={urlFor(image && image[index])} 
                            alt={name} 
                            className="product-detail-image"
                        />
                    </div>

                    <div className="small-images-container">
                        {image?.map((item, i) => (
                            <img 
                                key={i}
                                src={urlFor(item)}
                                className={i === index ? 'small-image selected-image' : 'small-image'}
                                onMouseEnter={() => setIndex(i)}
                            />
                        ))}
                    </div>
                    
                    
                </div>

                {/** Product Detail Description */}
                <div className="product-detail-desc">
                    <h1>{name}</h1>
                    <div className="reviews">
                        <div>
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                            <AiOutlineStar />
                        </div>
                        <p>
                            (20)
                        </p>
                    </div>
                    <h4>Details: </h4>
                    <p>{details}</p>
                    <p className="price">${price}</p>
                    <div className="quantity">
                        <h3>Quantity:</h3>
                        <p className="quantity-desc">
                            <span 
                                className="minus"
                                onClick={handleDecQty}
                            >
                                <AiOutlineMinus />
                            </span>
                            <span 
                                className="num"
                                onClick=""
                            >
                                {qty}
                            </span>
                            <span 
                                className="plus"
                                onClick={handleIncQty}
                            >
                                <AiOutlinePlus />
                            </span>
                        </p>
                    </div>
                    <div className="buttons">
                        <button
                            type="button"
                            className="add-to-cart"
                            onClick={() => handleAddToCart(product, qty)} 
                        >
                            Add to Cart
                        </button>
                        <button
                            type="button"
                            className="buy-now"
                            onClick=""
                        >
                            Buy Now
                        </button>
                    </div>
                </div>
              
            </div>

            {/**  */}
            <Marquee products={products}  />
        </div>
    )
}

export const getStaticPaths = async () => {
    const query = `*[_type == "product"] {
        slug {
            current
        }
    }
    `;

    const products = await client.fetch(query);

    const paths = products.map((product) => ({
        params: {
            slug: product.slug.current
        }
    }));

    return {
        paths,
        fallback: 'blocking'
    }
}

export const getStaticProps = async ({params: {slug}}) => {
    const query = `*[_type == "product" && slug.current == '${slug}'][0]`;
    const productsQuery = '*[_type == "product"]';

    const product = await client.fetch(query);
    const products = await client.fetch(productsQuery);

    return {
        props: {
            product,
            products
        }
    }
}

export default ProductDetails
