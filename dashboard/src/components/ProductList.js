import React, { Component } from 'react';
import CardsProducts from './CardsProducts';

export default class ProductList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      productList: []
    }
  }
  componentDidMount() {
    fetch('/api/product')
      .then(respuesta => {
        return respuesta.json()
      })
      .then(products => {
        this.setState({ productList: products.data })
      })
      .catch(error => console.log(error))
  }
  render() {
    return (
      <div className='products-container'>
        <h1>Listado de productos</h1>
        {
          this.state.productList.map((product, index) => {
            return (                    
                 
              <CardsProducts key={index} product={product}/>
            )
          })
        }
      </div>
    );
  }
}
