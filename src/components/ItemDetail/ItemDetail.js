import ItemCount from "../ItemCount/ItemCount"
import "./ItemDetail.css"
import { useContext, useState } from "react"
import { CartContex } from "../../context/CartContext"
import { Link } from "react-router-dom"
import { useNotification } from '../../notification/NotificationService'

const ItemDetail = ({ id, name, img, price, stock, description }) => {
    const [quantity, setQantity] = useState(0)
    const { addItem } = useContext(CartContex)
    const { setNotification } = useNotification()

    const handleOnAdd = (quantity) => {
        const objProducto = {
            id, name, price, quantity
        }
        setQantity(quantity)
        addItem(objProducto)
        setNotification('success', `Se agrego correctamente ${quantity} ${name}`)
    }

    return (
        <div>
            <div className="d-flex align-items-center justify-content-center">
                <h2>{name}</h2>
            </div>

            <div className="container">
                <div className="d-flex align-items-center">
                    <img className="img w-100" src={img} alt={name} />
                </div>
                <div className="d-flex flex-column align-items-center justify-content-center gap-3">
                    <p>Precio: {price}</p>
                    <p>Stock: {stock}</p>
                    <p>Descripcion: {description}</p>
                    {/* {
                        quantity > 0 ? (
                            <Link to='/cart'>Finalizar compra</Link>
                        ) : ( */}
                    {stock > 0 ? <ItemCount stock={stock} onAdd={handleOnAdd} /> : <div>No hay stock disponible</div>}
                    {/* )
                    } */}

                </div>
            </div>
        </div>
    )
}

export default ItemDetail
