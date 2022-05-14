import React from 'react';
import Total from './Totals';
import Users from './Users';
import ProductsInCategory from './ProductsInCategory';
import ProductList from './ProductList';

export default function ListData(){
    return (
        <div>
        <Total/>
        <div className='middle'>
        <ProductsInCategory/>
        <Users/>
        </div>
        <ProductList/>
        </div>
    )
}