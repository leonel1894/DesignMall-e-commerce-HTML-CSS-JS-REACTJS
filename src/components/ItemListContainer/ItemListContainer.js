import { useState, useEffect } from "react"
import { getProducts, getProductsByCategory } from "../../asyncMock"
import { Link, useParams } from "react-router-dom"
import "./ItemListContainer.css"

const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([])
    const { categoryId } = useParams()


    useEffect(() => {
const asynFunction = categoryId ? getProductsByCategory : getProducts

        asynFunction(categoryId)
            .then(res => {
                setProducts(res)
            })
            .catch(error => {
                console.log(error)
            })
    }, [categoryId])

    return (
        <div>
            <h1 className="text-muted fs-3 pt-3">{greeting}</h1>
            
            <div className="Container">
                {
                    products.map(prod => {
                        return (
                            <div className="card d-flex justify-content-between m-3" key={prod.id}>
                                <img className="card-img-top h-50" src={prod.img} alt={prod.name}/>
                                <h5 className="card-title">{prod.name}</h5>
                                <p className="card-text">{prod.description}</p>
                                <Link className="btn btn-primary" to={`/item/${prod.id}`}>ver detalle</Link>
                            </div>
                        )
                    })
                }
                
            </div>

        </div>
    )
}

export default ItemListContainer