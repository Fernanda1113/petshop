import React from 'react'
//import Typography from '@mui/material/Typography'
//import ItemCount from '../ItemCount/ItemCount'

//const ItemListContainer = ({name}) => {
 //   const onAdd = () =>{
 //       console.log('Producto agregado');
 //   }
  //  return (
  //      <div>
  //          <p>{name}</p>
   //         <ItemCount onAdd={onAdd} stock='10'/>
   //     </div>
 //   )
//}
const ItemListContainer = () => {
    const [productos, setProductos] = useState([])
    useEffect(() =>{
        const list = getProductos()
        list.then (list => {
            setProductos(list)
        })
        return (() =>{
            setProductos([])
        })        
    }, [])
    return (
        <div className='ItemListContianer'>
            <ItemList productos = {productos}/>
        </div>
    )
}

export default ItemListContainer
