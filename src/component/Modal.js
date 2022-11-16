import React from "react"
import "../App.scss";

function Modal({ setShowBox }){
  return(
    <div className="modal">
      <div className="modal__outline">
        <div className="modal__header">
          <h2 >Connect Wallet</h2>
          <button
            onClick={ () => setShowBox(false)}
         className="modalbtn" > 
           <img src="img/x.svg" alt="btnimg"/> 
          </button>
        </div> 
        <div className="modal__content">
          <p className="mh4">Choose your preferred wallet: </p>
          <form action="#" className="modal__form">
          <div className="imagediv">
          <input type="text" placeholder="Metamask " className="modal__input metamask" />
          <input type="text" placeholder="Connect wallet" className="modal__input wallet"/>
           
          </div>
          </form>
        </div> 
      </div> 
    </div>
  )
}

export default Modal;