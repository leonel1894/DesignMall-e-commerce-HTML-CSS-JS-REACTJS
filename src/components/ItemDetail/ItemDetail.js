import ItemCount from "../ItemCount/ItemCount"
import "./ItemDetail.css"

const ItemDetail = ({ id, name, img, price, stock, description }) => {
    const handleOnAdd = (quantity) => {
        const objProducto = {
            id, name, price, quantity
        }
        console.log(objProducto)
    }

    return (
        <div>
            <h2>{name}</h2>
            <div>
                    <img className="img" src={img} alt={name} />
                <div>
                    <p>Precio: {price}</p>
                    <p>Stock: {stock}</p>
                    <p>Descripcion: {description}</p>
                    <ItemCount stock={stock} onAdd={handleOnAdd} />
                </div>
            </div>
        </div>
    )
}

export default ItemDetail
