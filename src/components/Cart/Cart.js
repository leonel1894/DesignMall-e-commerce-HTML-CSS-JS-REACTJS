import { useContext } from 'react'
import { CartContex } from '../../context/CartContext'
import { Link } from 'react-router-dom'

export const Cart = () => {
    const { cart } = useContext(CartContex)

    return (
        <div>
            <h1>Cart</h1>
            <div>
            {
                cart.map(prod => {
                    return (
                        <div key={prod.id}>
                            {prod.name}
                        </div>
                    )
                })
            }
            </div>
            <Link to='/checkout'>Finalizar compra</Link>
        </div>
    )
}




























