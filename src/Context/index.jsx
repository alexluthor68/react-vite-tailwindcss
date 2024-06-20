import { createContext, useState } from 'react'

export const ShoppingCartContext = createContext()

export const ShoppingCartProvider = ({ children }) => {
    // 1. Shopping Cart --> Increment quantity.
    const [count, setCount] = useState(0)
    // 2. Product Detail --> Open/Close.
    const [isProductDetailOpen, setIsProductDetailOpen] = useState(false)
    const openProductDetail = () => setIsProductDetailOpen(true)
    const closeProductDetail = () => setIsProductDetailOpen(false)
     // 5. Checkout Side Menu --> Open/Close.
    const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false)
    const openCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(true)
    const closeCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(false)
    // 3. Product Details --> Show product.
    const [productToShow, setProductToShow] = useState({})
    // 4. Shopping Cart --> add products to cart.
    const [cartProducts, setCartProducts] = useState([])
    // 6. Shopping Cart --> Order.
    const [order, setOrder] = useState([])

    return (
        <ShoppingCartContext.Provider value={{
            count,
            setCount,
            openProductDetail,
            closeProductDetail,
            isProductDetailOpen,
            productToShow,
            setProductToShow,
            cartProducts,
            setCartProducts,
            isCheckoutSideMenuOpen,
            openCheckoutSideMenu,
            closeCheckoutSideMenu,
            order,
            setOrder,
            }}>
            {children}
        </ShoppingCartContext.Provider>        
    )
}
