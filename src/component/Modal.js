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
          <h4>Choose your preferred wallet: </h4>
          <form action="#" className="modal__form">
          <div className="imagediv">
          <input type="text" placeholder="Metamask 	&#62;" className="modal__metamask" id=" #myinput"/>
          <img src="img/image 66.svg" alt="metamask" className="metamaskimg"/>
          <input type="text" placeholder="Connect wallet" className="modal__wallet"/>
          <img src="img/image 69.svg" alt="wallet" className="wallet"/> 
          </div>
          </form>
        </div> 
      </div> 
    </div>
  )
}

export default Modal;