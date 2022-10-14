import React, {useRef} from 'react';
import Link from 'next/link';
import toast from 'react-hot-toast';
import { AiOutlineRight, AiOutlineShopping } from 'react-icons/ai';

import { useStateContext } from '../context/StateContext';
import {urlFor} from '../lib/client';
import ProductCart from './ProductCart';


const Cart = () => {
    const cartRef = useRef();
    const {setShowCart, cartItems, totalPrice, totalQuantities, handleToggleCartItemQty} = useStateContext();
    return (
        <div className="cart-wrapper" ref={cartRef}>
            <div className="cart-container">
                <button
                    type="button"
                    className="cart-heading"
                    onClick={() => setShowCart(false)}
                >
                    <AiOutlineRight />
                    <span className="heading">Your Cart</span>
                    <span className="cart-num-items">{totalQuantities}</span>
                </button>

                {/** empty cart */}
                {cartItems.length < 1 && (
                    <div className="empty-cart">
                        <AiOutlineShopping size={150} />
                        <h3>Your shopping bag is empty</h3>
                        <Link href="/">
                            <button
                                type="button"
                                className="btn"
                                onClick={() => setShowCart(false)}
                            >
                                Continue Shopping
                            </button>
                        </Link>
                    </div>
                )}
                {/** list of cartItems */}
                <div className="product-container">
                    {cartItems.length >= 1 && cartItems.map((item, index) => (
                        <ProductCart
                            key={index}
                            product={item}
                        />
                    ))}
                </div>
                {/** Subtotal */}
                {cartItems?.length >= 1 && (
                    <div className="cart-bottom">
                        <div className="total">
                            <h3>Subtotal:</h3>
                            <h3>${totalPrice}</h3>
                        </div>
                        <div className="btn-container">
                            <button
                                type="button"
                                className="btn"
                            >
                                Pay with Stripe
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Cart
