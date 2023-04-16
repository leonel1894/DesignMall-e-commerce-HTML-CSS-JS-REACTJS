import { useContext } from "react"
import { CartContex } from "../../context/CartContext"
import { useNavigate } from "react-router-dom"

const CartWidget = () => {
    const { totalQuantity } = useContext(CartContex)

    const navigate = useNavigate()

    return (
        <div className="btn btn-outline-dark d-flex gap-2 ms-4" onClick={()=> navigate('/cart')}>
            <i className="bi bi-cart"></i>
            {totalQuantity}
        </div>
    )
}

export default CartWidget