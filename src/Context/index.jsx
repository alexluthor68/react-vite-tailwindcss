import { createContext, useState, useEffect } from 'react'

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
    // 7. Get products
    const [items, setItems] = useState(null)
    // 9. Get products filters --> Home
    const [filteredItems, setFilteredItems] = useState(null)
     // 8. Get products by title.
    const [searchByTitle, setSearchByTitle] = useState(null)
    console.log('searchByTitle: ', searchByTitle)

     useEffect(() => {
      fetch('https://api.escuelajs.co/api/v1/products')
         .then(response => response.json())
         .then(data => setItems(data))
     }, [])
    
    const filteredItemsByTitle = (items, searchByTitle) => {
        return items?.filter(item => item.title.toLowerCase().includes(searchByTitle.toLowerCase()))
    }

    useEffect(() => {  
        if (searchByTitle) setFilteredItems(filteredItemsByTitle(items, searchByTitle))
    }, [items, searchByTitle])
    
    console.log('filteredItems: ', filteredItems)

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
            items,
            setItems,
            searchByTitle,
            setSearchByTitle,
            filteredItems,
            setFilteredItems
            }}>
            {children}
        </ShoppingCartContext.Provider>        
    )
}
