import React from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import { TiDeleteOutline } from 'react-icons/ti';
import { useStateContext } from '../context/StateContext';

import { urlFor } from '../lib/client';

const ProductCart = ({product}) => {
    const {details, image, name, price, quantity, _id } = product
    const {handleToggleCartItemQty, handleRemoveItemCart} = useStateContext()

    //console.log('product cart: ', product);
    return (
        <div className="product">
            <img 
                src={urlFor(image && (image[0]))} 
                className="cart-product-image"
            />
            <div className="item-desc">
                <div className="flex top">
                    <h5>{name}</h5>
                    <h4>{price}</h4>
                </div>
                <div className="flex bottom">
                    <div>
                        <p className="quantity-desc">
                            <span 
                                className="minus"
                                onClick={() => handleToggleCartItemQty(_id, 'dec')}
                            >
                                <AiOutlineMinus />
                            </span>
                            <span 
                                className="num"
                               
                            >
                                {quantity}
                            </span>
                            <span 
                                className="plus"
                                onClick={() => handleToggleCartItemQty(_id, 'inc')}
                            >
                                <AiOutlinePlus />
                            </span>
                        </p>
                    </div>
                    <button
                        type="button"
                        className="remove-item"
                        onClick={() => handleRemoveItemCart(product)}
                    >
                        <TiDeleteOutline />
                    </button>
                </div>
            </div>

        </div>
    )
}

export default ProductCart
