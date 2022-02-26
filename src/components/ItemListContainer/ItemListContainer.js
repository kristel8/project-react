import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { db } from "../../firebase/config"
import { ItemListCard } from "../ItemListCard/ItemListCard"
import { collection, getDocs, query, where } from "firebase/firestore"
 
export const ItemListContainer = () => {
    
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(false)

    const { catId } = useParams()


    useEffect( () => {
        setLoading(true)

        //ARMAR REFERENCIA
        const productosRef = collection(db, 'productos');
        const q = catId ? query(productosRef, where("categoria", "==", catId)) : productosRef
        //PEDIR REFERENCIA
        getDocs(q)
            .then((resp) => {
                setProductos( resp.docs.map((doc) => 
                {
                    return {
                        id: doc.id,
                        ...doc.data()
                    }
                }
                ) );
            })
            .finally(() => {
                setLoading(false);
            })

    },  [catId])

    return (
        <>
            {
                loading 
                    ? <h2>Loading...</h2> 
                    : <ItemListCard productos={productos}/>
            } 
        </>
    )
}