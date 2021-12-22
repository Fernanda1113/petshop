import React, {useState, useEffect} from 'react';
import ItemList from '../ItemList/ItemList';
import Products from "../../productos";
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {

    const [list, setList] = useState([]);
    const {categoryName} = useParams();

    function filtroCategoria(item) {
        return item.category === categoryName
    }

    useEffect(() => {
        setTimeout(() =>{
            let itemsPorCategoria = Products.filter(filtroCategoria);
            setList(categoryName ? itemsPorCategoria : Products);
        },1000)
    },)
    
    
    return(
        <section>
            <ItemList list={list} />
        </section>
        
    )
}

export default ItemListContainer;
{/*
const ItemListContainer = ()=> {
    const [productos, setProductos] = useState([])
    
    useEffect(() => {
        const list = getProductos()
        
        list.then(item => {
            setProductos(item)
        }).catch(err  => {
            console.log(err)
        })

        return (() => {
            setProductos([])
        })

    }, [])

    return (
        <div className="ItemListContainer" >
            <ItemList  productos={productos}/>
        </div>
    )    
    
} 

export default ItemListContainer*/}