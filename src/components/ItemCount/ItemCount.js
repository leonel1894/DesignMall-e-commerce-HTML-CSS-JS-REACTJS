import { useState } from "react"

const ItemCount = ({ stock, onAdd }) => {
    const [count, setCount] = useState(1)




    const increment = () => {
        if (count < stock) {
            setCount(count + 1)
        } else {

        }
    }

    const decrement = () => {
        if (count > 1) {
            setCount(count - 1)
        } else {

        }
    }





    return (
        <div className="w-100">
            <div className="d-flex align-items-center justify-content-center">
                <h2>{count}</h2>
            </div>

            <div  className="d-flex align-items-center justify-content-center">
                <button className="btn btn-outline-danger border border-white" onClick={decrement}>Decrementar</button>
                <button className="btn btn-outline-success border border-white" onClick={increment}>Incrementar</button>
                <button className="btn btn-outline-dark border border-white" onClick={() => onAdd(count)} disabled={stock === 0}>Agregar al carrito</button>

            </div>

        </div>
    )
}

export default ItemCount