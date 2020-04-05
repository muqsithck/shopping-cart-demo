import React from "react";

export default function Modal(props) {
  return (
    <div className="modal" style={{ display: props.modal ? "flex" : "none" }}>
      <div>
        <p className="title" style={{textAlign:"center"}}>
          Total {props.cart.reduce((a, b) => +a + +b.total, 0)}{" "}
             </p>
             <div style={{paddingTop:'20px'}}>
        <button className="secondary-button" onClick={props.handleModal}>
          close
        </button>
        <button className="secondary-button" onClick={props.handleSubmit}>
          ok
        </button>
        </div>
      </div>
    </div>
  );
}
