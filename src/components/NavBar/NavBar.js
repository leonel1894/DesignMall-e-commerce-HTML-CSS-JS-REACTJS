import CartWidget from "../CartWidget/CartWidget"
import { Link } from "react-router-dom"

const NavBar = () => {
    return (
        <nav className="d-flex justify-content-between align-items-center p-2 px-5 bg-light">
            <h1 className="fs-2">MundoMuebles <i class="bi bi-house"></i></h1>
            <div className="d-flex gap-2">
                <Link to='/category/comedor' className="btn btn-outline-secondary">Comedor</Link>
                <Link to='/category/living' className="btn btn-outline-secondary">Living</Link>
                <Link to='/category/cocina' className="btn btn-outline-secondary">Cocina</Link>
                <CartWidget/>
            </div>
            
        </nav>
    )
}

export default NavBar