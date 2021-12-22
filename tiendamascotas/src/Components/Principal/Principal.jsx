import React from 'react'
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer'
import ItemListContainer from '../ItemListContainer/ItemListContainer'
import {Switch, Route} from "react-router-dom"
import Inicio from '../Inicio/Inicio'
import SomosCH from '../SomosCH/SomosCH';

const Principal = ({greeting}) => {

    return(
        <principal>
            <Switch>

                <Route path="/" exact>
                    <Inicio greeting="HOLA CANHIJO!"/>
                </Route>

                <Route path="/somosCanhijos">
                    <SomosCH />
                </Route>

                <Route path="/juguetes">
                    <ItemListContainer/>
                </Route>

                <Route exact path = "/item/:productoId">
                    <ItemDetailContainer />
                 </Route>
                
                <Route path="/contacto">
                    
                </Route>

                <Route path="/cart">
                    
                </Route>

            </Switch>

        </principal>
    )
}

export default Principal
