import React, { Component } from 'react';
import './App.css';
import { Product } from './Product/Product.js'

class App extends Component {
  products = [
      {
        id: 1,
        title: "Title Product1",
        description: "Description Product1",
        price: 104.95
      },
      {
        id: 2,
        title: "Title Product2",
        description: "Description Product2",
        price: 2.99
      },
      {
        id: 3,
        title: "Title Product3",
        description: "Description Product3",
        price: 10.99
      },
      {
        id: 4,
        title: "Title Product4",
        description: "Description Product4",
        price: 19.95
      }
    ]

  constructor(props) {
    super(props)
    
    this.state = {
      shoppingCart: []
    }

    this.addToShoppingCart = this.addToShoppingCart.bind(this);
  }

  render() {
    return (
      <div>
        <h1>Nr of items: {this.state.shoppingCart.reduce((b, a) => b + a.quantity, 0)}</h1>
        {
          this.products.map(product => <Product {...product} key={product.id} addToShoppingCartHandler={ this.addToShoppingCart } /> )
        }
      </div>
    )
  }

  addToShoppingCart(id) {
    var state = this.state;
    if (!state.shoppingCart.find(item => item.id === id)) {
      state.shoppingCart.push({
        id: id,
        quantity: 1
      })
    } else {
      state = state.shoppingCart.map(item => { 
        if (item.id === id) { 
          return {id: id, quantity: item.quantity + 1}
        } else {
          return item
        }
      })
    }

    this.setState(state)
  }
}

export default App;
