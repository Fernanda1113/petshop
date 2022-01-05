import React from 'react'
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer'
import ItemListContainer from '../ItemListContainer/ItemListContainer'
import { Switch, Route } from "react-router-dom"
import Inicio from '../Inicio/Inicio'
import SomosCH from '../SomosCH/SomosCH';
import Cart from '../Cart/Cart'

const Principal = ({ greeting }) => {

    return (
        <principal>
            <Switch>

                <Route path="/" exact>
                    <Inicio greeting="HOLA CANHIJO!" />
                </Route>

                <Route path="/somosCanhijos">
                    <SomosCH />
                </Route>

                <Route path="/category/:categoryName?">
                    <ItemListContainer />
                </Route>

                <Route exact path="/item/:productId">
                    <ItemDetailContainer />
                </Route>

                <Route path="/Cart">
                    <Cart />
                </Route>

            </Switch>

        </principal>
    )
}

export default Principal
