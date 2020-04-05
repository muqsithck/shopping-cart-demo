import React from "react";

export default function Product(props) {
  return (
    <div>
      <div className="product-item-wrapper">
        <div className="product-image-wrapper">
          <div className="product-image-container">
            <img
              src={require(`../assets/${props.item.image_URL}`)}
              alt={props.item.Product_name}
              width="90%"
            />
          </div>
        </div>
        <div className="product-details-wrapper">
          <div>
            <h3 className="heading">{props.item.brand_name}</h3>
            <p className="sub-title">{props.item.product_name}</p>
            <p className="sub-title">MRP {props.item.quantity}</p>
            <p className="sub-title bold">RS {props.item.price}</p>

            <div className="button-wrapper"> 
              <div>
                <button className="primary-button"> ADD TO CART </button>
              </div>
              <div className="round-button-wrapper">
              <button className="round-button"> + </button>
              <p className="caption" > 5 </p>
              <button className="round-button"> -</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
