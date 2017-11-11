import React, { Component } from 'react'

export class Product extends Component {
    render() {
        var id = this.props.id
        var title = this.props.title
        var description = this.props.description
        var price = this.props.price
        var addToShoppingCartHandler = this.props.addToShoppingCartHandler

        return (
            <div style={{border : "1px solid black"}}>
                <h1>{ title }</h1>
                <p>{ description }</p>
                <h3>{ price }</h3>
                <button onClick={ () => addToShoppingCartHandler(id) }>Bestel product</button>
            </div>
        )
    }
}