import { useContext } from 'react'
import { CartContex } from '../../context/CartContext'
import { Link } from 'react-router-dom'

export const Cart = () => {
    const { cart, total } = useContext(CartContex)

    return (
        <div>
            <div className='d-flex justify-content-center m-3 h1 gap-2'>
                <h1>Carrito</h1>
                <i className="bi bi-cart"></i>
            </div>

            <div>
                {
                    cart.map(prod => {
                        return (
                            <div className='d-flex justify-content-center m-3 gap-3' key={prod.id}>
                                <div>
                                    <h2 className='h5 text-secondary'>Producto: {prod.name}</h2>
                                </div>
                                <div>
                                    <h2 className='h5 text-secondary'>Cantidad: {prod.quantity}</h2>
                                </div>
                                <div>
                                    <h2 className='h5 text-secondary'>Precio: {prod.price * prod.quantity}</h2>
                                </div>
                            </div>
                            
                        )
                    })
                }
            </div>
            <div className='d-flex justify-content-center m-3 gap-5'>
            <Link to='/checkout' className='btn btn-primary h4'>Finalizar compra</Link>
                <h2 className='h4 btn btn-dark'>Total: ${total}</h2>

            </div>

        </div>
    )
}




























