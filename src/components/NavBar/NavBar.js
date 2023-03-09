import CartWidget from "../CartWidget/CartWidget"

const NavBar = () => {
    return (
        <nav className="d-flex justify-content-between align-items-center p-2 px-5 bg-light">
            <h1 className="fs-2">MundoMuebles <i class="bi bi-house"></i></h1>
            <div className="d-flex gap-2">
                <button className="btn btn-outline-secondary">Muebles</button>
                <button className="btn btn-outline-secondary">Electrodomesticos</button>
                <button className="btn btn-outline-secondary">Bazar</button>
            </div>
            <CartWidget/>
        </nav>
    )
}

export default NavBar