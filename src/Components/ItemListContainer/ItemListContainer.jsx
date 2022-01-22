import React, {useState, useEffect} from 'react';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';
import { getFirestore } from '../Firebase/Firebase'

const ItemListContainer = () => {

    const [list, setList] = useState([]);
    const {categoryName} = useParams();

    useEffect(() => {
        const db = getFirestore()
        let items

        if (categoryName){
            items = db.collection("items").where("category", "==", categoryName)
        } else{
            items = db.collection("items")
        }
        
        const itemCollectionQuery = items.get()

        itemCollectionQuery.then((querySnapshot) => {
            setList(querySnapshot.docs.map(doc => ({...doc.data(), id: doc.id})))
        })
        .catch((e) => {console.log(e)})
        
    },[categoryName])
    
    
    return(
        <section>
            <ItemList list={list} />
        </section>
        
    )
}

export default ItemListContainer;
