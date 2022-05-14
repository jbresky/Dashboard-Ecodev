import React, {Component} from 'react';
import CardsCat from './CardsCat';

export default class ProductsInCategory extends Component{
    constructor(props){
        super(props);
        this.state = {
            prodsInCatList: []
        }
    }

    componentDidMount(){
        fetch('/api/total')
            .then(res => {
                return res.json()
            })
            .then(products => {
                this.setState({
                    prodsInCatList: products.productsCategories
                })
            })
            .catch(err => console.log(err))
    }

    render(){
        return(
            <div className='container'> 
      <h1>Productos en categorías</h1>
            {
              this.state.prodsInCatList.map((productsCat, index) => {
                return ( 
                  <CardsCat key={index} productsCat={productsCat}/>
                )
              })
            }
          </div>
        )
    }
}
