import React from "react";

export default function CardsCat(props){ 
    return (
    <div className="card">
        <h2>{props.productsCat.name}: {props.productsCat.cantidad}</h2>
    </div>
    )}