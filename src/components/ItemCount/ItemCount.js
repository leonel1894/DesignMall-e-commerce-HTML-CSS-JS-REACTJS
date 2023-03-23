import { useState } from "react"

const ItemCount = ({stock, onAdd }) => {
    const [count, setCount] = useState (1)
    const [message, setMessage] = useState ('')
    
    

    const increment = () => {
        setMessage('')
        if(count < stock) {
            setCount(count + 1)
        } else {
            setMessage('No hay stock')
        }
    }

    const decrement = () => {
        setMessage('')
        if(count > 1) {
            setCount(count - 1)
        } else {
            setMessage('No puede comprar menos de 1')
        }
    }
    




    return (
        <div>
            <h2>{count}</h2>
            <button onClick={decrement}>Decrementar</button>
            <button onClick={increment}>Incrementar</button>
            <button onClick={() => onAdd(count)} disabled={stock === 0}>Agregar al carrito</button>
            <h2>{message}</h2>
        </div>
    )
}

export default ItemCount