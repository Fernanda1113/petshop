import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import ItemDetail from '../ItemDetail/ItemDetail'
import { getFirestore } from '../Firebase/firebase'

const ItemDetailContainer = () => {
    const [loading, setLoading] = useState(false);
    const [item, setItem] = useState([]);
    console.log(item);
    const {productId} = useParams();

    useEffect(() => {

        const db = getFirestore()
        const getItem = db.collection("items").doc(productId)

        getItem.get().then((querySnapshot) => {
            setItem({id:querySnapshot.id, ...querySnapshot.data()})
            setLoading(false)
        })
            .catch((e) => {console.log(e)})

    }, [productId])


    return (
        <>
          {loading ? "Cargando ..." : <ItemDetail item={item}/>}
        </>
    )
}
export default ItemDetailContainer;
