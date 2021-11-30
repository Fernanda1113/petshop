const productos = [
    {id:1, name:'perfume', price: '5000', category: 'gatos', img: 'http://canamor.com/wp-content/uploads/2017/03/PERFUME-GATOS.jpg'},
    {id:2, name:'jugete ', price: '7000', category: 'perros', img: 'https://m.media-amazon.com/images/I/71mfLrszjdL._AC_SX466_.jpg'},
    {id:3, name:'alpiste', price: '2000', category: 'aves', img: 'https://amigofiel.com.co/900-thickbox_default/alpiste.jpg'}
]

const categorias = [
    {id:'gatos',description:'Perfume de gato'},
    {id:'perros',description:'Juguete de perro'},
    {id:'aves',description:'Comida de aves'}
]

export const getProductos = () => {
    return new Promise((resolve, reject) =>{
        setTimeout(() =>{
            resolve(productos)
        },1000)
    })
}

export const getCategorias = () => {
    return new Promise((resolve, reject) =>{
        setTimeout(() =>{
            resolve(categorias)
        },2000)
    })
}

 
