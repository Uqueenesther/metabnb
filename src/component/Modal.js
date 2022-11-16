import React from "react"
import "../App.scss";

function Modal({ setShowBox }){
  return(
    <div className="modal">
      <div className="modal__outline">
        <div className="modal__header">
          <h2>Connect Wallet</h2>
          <button
            onClick={ () => setShowBox(false)}
          > 
            x
          </button>
        </div> 
        <div className="modal__content">
          <h5>Choose your preferred wallet: </h5>
          <div><input type="text" placeholder="Metamask &#xf105;" className="modal__input1" id=" #myinput"/></div>
          <div><input type="text" placeholder="Metamask" className="modal__input"/></div>
        </div> 
      </div> 
    </div>
  )
}

export default Modal;