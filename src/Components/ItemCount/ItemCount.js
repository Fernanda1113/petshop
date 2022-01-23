import React, {Component} from 'react';
import './ItemCount.css'

class ItemCount extends Component{
    constructor (props){
        super(props)
    this.state = {count: 0}
    }
    increment = () =>{
        this.setState({
            count: this.state.count +1
        })
    }
    decrement = () =>{
        this.setState({
            count: this.state.count -1
        })
    }
    reset = () => {
        this.setState({
            count: 0
        })
    }
    render (){
        return(
            <>
            <h2>Contador</h2>
            <h3>{this.state.count}</h3>
            <button onClick={() => this.decrement()}>Decremento</button>
            <button onClick={() => this.reset()}>Resetear</button>
          <button func={this.reset} label={'Reset'}/>
          <button onClick={() => this.increment()}>Incrementar</button>
            </>
        )
    }
}


export default ItemCount
