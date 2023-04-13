import { useState, useEffect } from "react"
// import { getProducts, getProductsByCategory } from "../../asyncMock"
import { useParams } from "react-router-dom"
import ItemList from "../ItemList/ItemList"
import { getDocs, collection, query, where } from "firebase/firestore"
import { db } from "../../services/firebase/firebaseConfig"


const ItemListContainer = ({ greeting }) => {
    const [productsState, setProductsState] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState (false)

    const { categoryId } = useParams()
    

    useEffect(() => {
        const productsRef = categoryId 
            ? query(collection(db, 'products'), where('category', '==', categoryId))
            : collection(db, 'products')

        getDocs(productsRef)
        .then(snapshot =>{
            const productsAdapted = snapshot.docs.map(doc => {
                const data = doc.data()
                return {id: doc.id, ...data}
            })
            setProductsState(productsAdapted)
        })
        .catch(error => {
            console.log(error)
            setError(true)
        })
        .finally(() => {
            setLoading(false)
        })
        // setLoading(true)
        // const asyncFunction = categoryId ? getProductsByCategory : getProducts

        // asyncFunction(categoryId)
        //     .then(products => {
        //         setProductsState(products)
        //     })
        //     .catch(error => {
        //         console.log(error)
        //     })
        //     .finally(() => {
        //         setLoading(false)
        //     })
    }, [categoryId])

    if (loading) {
        return <div className="d-flex justify-content-center mt-5">
            <button className="btn btn-primary" type="button" disabled>
                <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                Loading...
            </button>
        </div>

    }

    if(error) {
        return <h1>Vuelva a cargar la pagina</h1>
    }


    return (
        <div>
            <h1>{greeting}</h1>
            <ItemList products={productsState} />
        </div>
    )
}

export default ItemListContainer