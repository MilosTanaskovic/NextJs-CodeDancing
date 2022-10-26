import React, {useState, useEffect, useContext, createContext} from 'react';

const Context = createContext();

export const StateContext = ({children}) => {
    const [info, setInfo] = useState([]);
    const [heroBanner, setHeroBanner] = useState([]);
    const [promoBanner, setPromoBanner] = useState([]);
    const [categories, setCategories] = useState([]);
    // Product/Cart State
    const [qty, setQty] = useState(1);
    const [cartQty, setCartQty] = useState(0);
    // Cart State
    const [showCart, setShowCart] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);

    let foundProduct;
    let index;

     {/** localStorage */}
     useEffect(() => {
         if(typeof window !== "undefined") {
            localStorage.setItem('items', JSON.stringify(cartItems));
         }
     }, [cartItems]);
 
    useEffect(() => {
        if (typeof window !== 'undefined') {
            console.log('You are on the browser')
            // 👉️ can use localStorage here
            const value = localStorage.getItem('items');
            const data = !!value ? JSON.parse(value) : undefined;
           
           setCartItems(data);
        } else {
            console.log('You are on the server')
            // 👉️ can't use localStorage
        }
         
     }, [])

    const handleAddToCart = (product, quantity) => {
       // check is product in cart
       const checkProductInCart = cartItems.find((item) => item._id === product._id);

       setTotalPrice((prevTotalPrice) => prevTotalPrice + product.price * quantity);
       setCartQty((prevCartQty) => prevCartQty + quantity)

       if(checkProductInCart) {
        const updatedCartItems = cartItems.map((cartProduct) => {
            if(cartProduct._id === product._id) return {
                ...cartProduct,
                quantity: cartProduct.quantity + quantity
            }
        })

        setCartItems(updatedCartItems);
       } else {
           product.quantity = quantity;
           setCartItems([...cartItems, {...product}]);
       }
    }

    {/** Cart items quantity */}
    const handleToggleCartItemQty = (product, id, value) => {
        foundProduct = cartItems.find((item) => item._id === id);
        index = cartItems.findIndex((product) => product._id === id);

        const newCartItems = cartItems.filter((item) => item._id !== id);

        if(value === 'inc') {
            setCartItems([...newCartItems, { ...foundProduct, quantity: foundProduct.quantity + 1}]);
            setTotalPrice((prevTotalPrice) => prevTotalPrice + foundProduct.price);
            setCartQty((prevCartQty) => prevCartQty + 1);
        } else if (value === 'dec'){
            if(foundProduct.quantity > 1){
                setCartItems([...newCartItems, { ...foundProduct, quantity: foundProduct.quantity - 1}]);
                setTotalPrice((prevTotalPrice) => prevTotalPrice - foundProduct.price);
                setCartQty((prevCartQty) => prevCartQty - 1);
            } else {
                // remove item from cart
                setCartItems(newCartItems);
                setTotalPrice((prevTotalPrice) => prevTotalPrice - foundProduct.price * foundProduct.quantity);
                setCartQty((prevCartQty) => prevCartQty - foundProduct.quantity);
            }
        }
    }

    {/** Remove All Product from Cart */}
    const handleRemoveAllProductCart = () => {
        setCartItems([]);
        setTotalPrice(0);
        setCartQty(0);
    }

    const handleIncQty = () => {
        setQty((prevQty) => prevQty + 1);
    }
    const handleDecQty = () => {
        setQty((prevQty) => {
            if((prevQty - 1) < 1) return 1;

            return prevQty - 1;
        })
    }
    
    return (
        <Context.Provider
            value={{
                setInfo,
                info,
                setHeroBanner,
                heroBanner,
                setCategories,
                categories,
                setPromoBanner,
                promoBanner,
                handleIncQty,
                handleDecQty,
                qty,
                cartQty,
                setShowCart,
                showCart,
                cartItems,
                handleAddToCart,
                totalPrice,
                handleToggleCartItemQty,
                handleRemoveAllProductCart,
                setCartItems,
                setTotalPrice,
                setCartQty
            }}
        >
            {children}
        </Context.Provider>
    )
}

export const useStateContext = () => useContext(Context);
