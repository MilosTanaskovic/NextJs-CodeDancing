import React from 'react';
import { AiFillStar, AiOutlineMinus, AiOutlinePlus, AiOutlineStar } from 'react-icons/ai';

import {client, urlFor} from '../../lib/client';

const ProductDetails = ({product, products}) => {
    const {details, image, name, price, slug, _id} = product;

    console.log('Product Detail: ', product);
    console.log('Products Detail: ', products);
    return (
        <div>
            <div className="product-detail-container">
                <div>
                    <div className="image-container">
                        <img src={urlFor(image && image[0])} alt={name} />
                    </div>

                    {/*<div className="small-images-container">
                        {image?.map((item, i) => (
                            <img 
                                key={i}
                                src={urlFor(item)}
                                className=""
                                onMouseEnter=""
                            />
                        ))}
                        </div> */}
                    
                    
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
                                onClick=""
                            >
                                <AiOutlineMinus />
                            </span>
                            <span 
                                className="num"
                                onClick=""
                            >
                                QTY
                            </span>
                            <span 
                                className="plus"
                                onClick=""
                            >
                                <AiOutlinePlus />
                            </span>
                        </p>
                    </div>
                    <div className="buttons">
                        <button
                            type="button"
                            className="add-to-cart"
                            onClick=""
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

                {/**  */}
                
            </div>
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
