import React from 'react';

export default function CardsProducts(props) {
    return (
        <>
            <div className='card-product'>
                <img src={props.product.image} width='80' alt='' />
                <div className='product-right'>
                    <h2>{props.product.name}</h2>
                    <h2>Precio: ${props.product.price}</h2>
                    {props.product.off > 0
                        ?
                        <h2 className="discount">Descuento: {props.product.off}%</h2>
                        : ""}
                </div>
            </div>
        </>
    )
}