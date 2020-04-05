import React , {useState} from 'react'
export default function Footer(props) {
    return (
        <div className="footer">
           <div>
            <p className="title">Qty {props.cart.reduce((a, b) => +a + +b.count, 0)} </p>
            <p className="title">Total {props.cart.reduce((a, b) => +a + +b.total, 0)} </p>       
           </div>
           <button className="secondary-button" onClick={props.handleModal}> CHECKOUT</button>
        </div>
    )
}
