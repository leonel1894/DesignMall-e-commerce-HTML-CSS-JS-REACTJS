import { useState, useEffect } from "react"
// import { getProductById } from "../../asyncMock"
import { useParams } from "react-router-dom"
import ItemDetail from "../ItemDetail/ItemDetail"
import { getDoc, doc } from "firebase/firestore"
import { db } from "../../services/firebase/firebaseConfig"

const ItemDetailContainer = () => {
    const [product, setProduct] = useState({})
    const [loading, setLoading] = useState(true)

    const { itemId } = useParams()

    useEffect(() => {
    const productsRef = doc (db, 'products', itemId)

    getDoc(productsRef)
    .then(snapshot => {

        const data = snapshot.data()
        const productAdapted = {id: snapshot.id, ...data}
        setProduct(productAdapted)
    })
    .catch(error => {
        console.log(error)
    })
    .finally(() => {
        setLoading(false)
    })



        // getProductById(itemId)
        //     .then(res => {
        //         setProduct(res)
        //     })
        //     .catch(error => {
        //         console.log(error)
        //     })
        //     .finally(() => {
        //         setLoading(false)
        //     })
    }, [itemId])

    if (loading) {
        return <div className="d-flex justify-content-center mt-5">
            <button className="btn btn-primary" type="button" disabled>
                <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                Loading...
            </button>
        </div>

    }

    return (
        <div>
            <h3 className="text-muted p-4">Detalles del producto</h3>
            <ItemDetail {...product} />
        </div>
    )
}

export default ItemDetailContainer