import { createContext, useState } from "react"


export const CartContex = createContext()

export const CartProvaider = ({ children }) => {
    const [cart, setCart] = useState([])
    console.log(cart)


    const addItem = (productToAdd) => {
        if (!isInCart(productToAdd.id)) {
            setCart(prev => [...prev, productToAdd])
        } else {
            console.log('el producto ya esta agregado')
        }
    }

    const removeItem = (id) => {
        const cartUpdated = cart.filter(prod => prod.id !== id)
        setCart(cartUpdated)
    }

    const isInCart = (id) => {
        return cart.some(prod => prod.id === id)
    }

    const getTotalQuantity = () => {
        let totalQuantity = 0
        cart.forEach(prod => {
            totalQuantity += prod.quantity
        })
        return totalQuantity
    }

    const totalQuantity = getTotalQuantity()

    const getTotal = () => {
        let total = 0
        cart.forEach(prod => {
            total += prod.quantity * prod.price
        })
        return total
    }

    const total = getTotal()

    const clearCart = () => {
        setCart([])
    }

    return (
        <CartContex.Provider value={{ cart, addItem, removeItem, totalQuantity, total, clearCart }}>
            {children}
        </CartContex.Provider>
    )
}