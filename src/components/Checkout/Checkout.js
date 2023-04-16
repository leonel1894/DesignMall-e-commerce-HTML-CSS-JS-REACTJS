import { useContext, useState } from "react"
import { CartContex } from "../../context/CartContext"
import { addDoc, collection, documentId, getDocs, query, where, writeBatch } from "firebase/firestore";
import { db } from "../../services/firebase/firebaseConfig";
import { useNotification } from "../../notification/NotificationService";

export const Checkout = () => {


    const { cart, total, clearCart } = useContext(CartContex)
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [telefono, setTelefono] = useState('');
    const [direccion, setDireccion] = useState('');
    const [orderId, setOrderId] = useState('')
    const { setNotification } = useNotification()
    const [loading, setLoading] = useState(false)

    const handleSubmit = async (event) => {
        event.preventDefault();
        setNombre('');
        setApellido('');
        setTelefono('');
        setDireccion('');
        try {
            setLoading(true)
            const objOrder = {
                buyer: { nombre, 
                    apellido, 
                    telefono, 
                    direccion },
                items: cart,
                total: total
            }



            const ids = cart.map(prod => prod.id)

            const productRef = query(collection(db, 'products'), where(documentId(), 'in', ids))

            const productsAddedFromFirestore = await getDocs(productRef)

            const { docs } = productsAddedFromFirestore

            const batch = writeBatch(db)
            const outOfStock = []

            docs.forEach(doc => {
                const dataDoc = doc.data()
                const stockDb = dataDoc.stock

                const productAddedToCart = cart.find(prod => prod.id === doc.id)
                const prodQuantity = productAddedToCart?.quantity

                if(stockDb >= prodQuantity) {
                    batch.update(doc.ref, { stock: stockDb - prodQuantity})
                } else {
                    outOfStock.push({ id: doc, ...dataDoc})
                }
            })

            if(outOfStock.length === 0) {
                batch.commit()

                const orderRef = collection(db, 'orders')

                const orderAdded = await addDoc(orderRef, objOrder)
                clearCart()
                setOrderId(orderAdded.id)

            } else {
                setNotification('error', 'Hay productos que no tienen stock disponible')
            } 
        } catch (error) {
            setNotification('error', 'Hubo un error generando la orden')
        } finally {
            setLoading(false)
        }
    }
    
    if(loading) {
        return <h1>Se esta generando su orden...</h1>
    }



    return (
        <div>
            <h1>Checkout</h1>
            <form className="row g-3" onSubmit={handleSubmit}>
                <div className="col-md-4">
                    <label className="form-label">
                        Nombre:
                        <input className="m-2" type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />
                    </label>
                </div>
                <div className="col-md-4">
                    <label className="form-label">
                        Apellido:
                        <input className="m-2" type="text" value={apellido} onChange={(e) => setApellido(e.target.value)} />
                    </label>
                </div>

                <div className="col-md-4">
                    <label className="form-label">
                        Teléfono:
                        <input className="m-2" type="text" value={telefono} onChange={(e) => setTelefono(e.target.value)} />
                    </label>
                </div>

                <div className="col-md-4">
                    <label className="form-label">
                        Dirección:
                        <input className="m-2" type="text" value={direccion} onChange={(e) => setDireccion(e.target.value)} />
                    </label>
                </div>

            </form>

            { orderId ? <h2 className="text-muted p-4">El id de su orden es: {orderId}</h2> : <button className="btn btn-primary" onClick={handleSubmit}>Generar orden</button> }
        </div>
    )

}
