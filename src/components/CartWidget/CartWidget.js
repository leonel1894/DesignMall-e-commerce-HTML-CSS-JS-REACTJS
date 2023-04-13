import { useContext } from "react"
import { CartContex } from "../../context/CartContext"

const CartWidget = () => {
    const { totalQuantity } = useContext(CartContex)

    return (
        <div className="btn btn-outline-dark d-flex gap-2 ms-4">
            <i className="bi bi-cart"></i>
            {totalQuantity}
        </div>
    )
}

export default CartWidget