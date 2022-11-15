import './App.scss';
import React, {useState} from 'react';
import Home from "./component/Home";
import Modal from "./component/Modal";
import Signup from './component/Signup';
import { Routes, Route } from 'react-router';

function App() {
  const [showBox, setShowBox] = useState(false)

  function handleshowbox(event){
    event.preventDefault()
    setShowBox(true)
    console.log(showBox)
  }
  
  return (
   <div>
      <Routes>
        <Route path="/" element={ <Home 
         showBox = {showBox}
        setShowBox = {setShowBox}
        handleshowbox = {handleshowbox}
        /> 
      
      }/>

        <Route path="Signup" element={ <Signup/> } /> 
        {/* <Route path="Modal" element={ <Modal/> } />  */}
      </Routes>
      <Modal 
       showBox = {showBox}
      setShowBox = {setShowBox}
      />
   </div>
  );
}

export default App;

