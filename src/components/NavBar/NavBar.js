import CartWidget from "../CartWidget/CartWidget"
import { Link } from "react-router-dom"

const NavBar = () => {
    return (
        <nav className="navbar navbar-light bg-light px-4">
            <Link to='' className="navbar-brand mb-0 h1">DesignMall <i className="bi bi-house"></i></Link>
            <div className="d-flex justify-content-center align-items-center gap-2">
                <Link to='/category/comedor' className="nav-item nav-link">Comedor</Link>
                <Link to='/category/living' className="nav-item nav-link">Living</Link>
                <Link to='/category/dormitorio' className="nav-item nav-link">Dormitorio</Link>
                <CartWidget/>
            </div>
            
        </nav>
    )
}

export default NavBar