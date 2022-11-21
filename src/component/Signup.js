import "../App.scss";
import { Link } from 'react-router-dom';
import Modal from "./Modal";
import { React, useState} from "react";

function Signup(){
  const [showBox, setShowBox] = useState(false)

    return (
        <div className="container">
           <div className="header">
           <div className="nav"> 
                <ul className="nav__list">
                <div className="image1" >
                  <div className="logocon">
                  <img src="img/logoicon.png" alt="logoicon" className="logoicon"/>
                  <img src="img/logo.png" alt="logo" className="logo"/>
                  </div>
                  {/* <img src="img/hamburger-menu-icon (1).svg" alt="hambuger" className="ham-icon"/> */}
                 </div>
                     <li className="nav__item"><a href="http://localhost:3000/" className="nav__link">Home</a></li>
                     <li className="nav__item"><Link to="/signup" className='nav__link '>Place to stay</Link></li>
                     <li className="nav__item"><a href="http://localhost:3000/" className="nav__link">NFTs</a></li>
                     <li className="nav__item"><a href="http://localhost:3000/" className="nav__link">Community</a></li>
                     <button onClick={ () => setShowBox(true)} className=' nav__btn'> Connect Wallet </button>
                     {showBox && (<Modal setShowBox={setShowBox}/>)}
                </ul>
              </div>
               
              <div className="nav">
                    <ul className="place__list">
                     <li className="place__item" ><a href="http://localhost:3000/" className="place__link">Resturant</a></li>
                     <li className="place__item" ><a href="http://localhost:3000/" className="place__link">Cottage</a></li>
                     <li className="place__item"><a href="http://localhost:3000/" className="place__link">Castle</a></li>
                     <li className="place__item"><a href="http://localhost:3000/" className="place__link">Fantast city</a></li>
                     <li className="place__item"><a href="http://localhost:3000/" className="place__link">beach</a></li>
                     <li className="place__item"><a href="http://localhost:3000/" className="place__link">carbin</a></li>
                     <li className="place__item"><a href="http://localhost:3000/" className="place__link">off grid</a></li>
                     <li className="place__item"><a href="http://localhost:3000/" className="place__link">Farm</a></li>
                     <button className="place__btn">Location<img src="img/setting-5.svg" alt="location" className="place__icon"/></button>
                </ul>
              </div>

               {/* MOBILE NAV */}

               <div className="hamburger1">
                <input id="toggle" type="checkbox"></input>

                <label for="toggle" className="hamburger">
                  <div className="top-bun"></div>
                  <div className="meat"></div>
                  <div className="bottom-bun"></div>
                </label>
                    <div className="nav">
                        <div className="nav-wrapper">
                          <nav>
                          <ul className="mb-list">
                            <li><a href="http://localhost:3000/">HOME</a></li>
                            <li><a href="http://localhost:3000/">NFTs</a></li>
                            <li><a href="http://localhost:3000/">PLACE TO STAY</a></li>
                            <li><a href="http://localhost:3000/">COMMUNITY</a></li>
                            <button onClick={ () => setShowBox(true)} className=' mb-btn'>Connect Wallet</button> 
                          </ul>
                          </nav>
                           
                        </div> 
                  </div>
                </div>

                  
           </div>

         

           <section  className="inspo">
            
              <div className="features">
                  <div className="framecontainer">
                      <img src="img/frame (5).png" alt="frame1" className="frame"/>
                      <div className="frame-text">
                        <h5> Desert KIng </h5>
                        <h5>1mbt per night</h5> 
                      </div>
                      <div className="frametext2"> 
                          <p>234km away</p>
                          <p> available for 2 weeks</p>
                       </div>
                      <div>
                      <img src="img/Star 2.svg" alt="Starsicon" className="star"/>
                      <img src="img/Star 2.svg" alt="Starsicon" className="star"/>
                      <img src="img/Star 2.svg" alt="Starsicon" className="star"/>
                      <img src="img/Star 2.svg" alt="Starsicon" className="star"/>
                      <img src="img/Star 2.svg" alt="Starsicon" className="star"/>
                    </div>
                  </div>

                  
                  <div className="framecontainer">
                      <img src="img/frame (3).png" alt="frame1" className="frame"/>
                      <div className="frame-text">
                        <h5> Desert KIng </h5>
                        <h5>1mbt per night</h5> 
                      </div>
                      <div className="frametext2"> 
                          <p>234km away</p>
                          <p> available for 2 weeks</p>
                       </div>
                       <div>
                      <img src="img/Star 2.svg" alt="Starsicon" className="star"/>
                      <img src="img/Star 2.svg" alt="Starsicon" className="star"/>
                      <img src="img/Star 2.svg" alt="Starsicon" className="star"/>
                      <img src="img/Star 2.svg" alt="Starsicon" className="star"/>
                      <img src="img/Star 2.svg" alt="Starsicon" className="star"/>
                    </div>
                  </div>

                  
                  <div className="framecontainer">
                      <img src="img/frame (2).png" alt="frame1" className="frame"/>
                      <div className="frame-text">
                        <h5> Desert KIng </h5>
                        <h5>1mbt per night</h5> 
                      </div>
                      <div className="frametext2"> 
                          <p>234km away</p>
                          <p> available for 2 weeks</p>
                       </div>
                       <div>
                      <img src="img/Star 2.svg" alt="Starsicon" className="star"/>
                      <img src="img/Star 2.svg" alt="Starsicon" className="star"/>
                      <img src="img/Star 2.svg" alt="Starsicon" className="star"/>
                      <img src="img/Star 2.svg" alt="Starsicon" className="star"/>
                      <img src="img/Star 2.svg" alt="Starsicon" className="star"/>
                    </div>
                  </div>

                  
                  <div className="framecontainer">
                      <img src="img/frame (4).png" alt="frame1" className="frame"/>
                      <div className="frame-text">
                        <h5> Desert KIng </h5>
                        <h5>1mbt per night</h5> 
                      </div>
                      <div className="frametext2"> 
                          <p>234km away</p>
                          <p> available for 2 weeks</p>
                       </div>
                       <div>
                      <img src="img/Star 2.svg" alt="Starsicon" className="star"/>
                      <img src="img/Star 2.svg" alt="Starsicon" className="star"/>
                      <img src="img/Star 2.svg" alt="Starsicon" className="star"/>
                      <img src="img/Star 2.svg" alt="Starsicon" className="star"/>
                      <img src="img/Star 2.svg" alt="Starsicon" className="star"/>
                    </div>
                  </div>

                  
                  <div className="framecontainer">
                      <img src="img/frame (1).png" alt="frame1" className="frame"/>
                      <div className="frame-text">
                        <h5> Desert KIng </h5>
                        <h5>1mbt per night</h5> 
                      </div>
                      <div className="frametext2"> 
                          <p>234km away</p>
                          <p> available for 2 weeks</p>
                       </div>
                       <div>
                      <img src="img/Star 2.svg" alt="Starsicon" className="star"/>
                      <img src="img/Star 2.svg" alt="Starsicon" className="star"/>
                      <img src="img/Star 2.svg" alt="Starsicon" className="star"/>
                      <img src="img/Star 2.svg" alt="Starsicon" className="star"/>
                      <img src="img/Star 2.svg" alt="Starsicon" className="star"/>
                    </div>
                  </div>

                  
                  <div className="framecontainer">
                      <img src="img/frame (5).png" alt="frame1" className="frame"/>
                      <div className="frame-text">
                        <h5> Desert KIng </h5>
                        <h5>1mbt per night</h5> 
                      </div>
                      <div className="frametext2"> 
                          <p>234km away</p>
                          <p> available for 2 weeks</p>
                       </div>
                       <div>
                      <img src="img/Star 2.svg" alt="Starsicon" className="star"/>
                      <img src="img/Star 2.svg" alt="Starsicon" className="star"/>
                      <img src="img/Star 2.svg" alt="Starsicon" className="star"/>
                      <img src="img/Star 2.svg" alt="Starsicon" className="star"/>
                      <img src="img/Star 2.svg" alt="Starsicon" className="star"/>
                    </div>
                  </div>

                  
                  <div className="framecontainer">
                      <img src="img/frame (3).png" alt="frame1" className="frame"/>
                      <div className="frame-text">
                        <h5> Desert KIng </h5>
                        <h5>1mbt per night</h5> 
                      </div>
                      <div className="frametext2"> 
                          <p>234km away</p>
                          <p> available for 2 weeks</p>
                       </div>
                       <div>
                      <img src="img/Star 2.svg" alt="Starsicon" className="star"/>
                      <img src="img/Star 2.svg" alt="Starsicon" className="star"/>
                      <img src="img/Star 2.svg" alt="Starsicon" className="star"/>
                      <img src="img/Star 2.svg" alt="Starsicon" className="star"/>
                      <img src="img/Star 2.svg" alt="Starsicon" className="star"/>
                    </div>
                  </div>

                  
                  <div className="framecontainer">
                      <img src="img/frame (4).png" alt="frame1" className="frame"/>
                      <div className="frame-text">
                        <h5> Desert KIng </h5>
                        <h5>1mbt per night</h5> 
                      </div>
                      <div className="frametext2"> 
                          <p>234km away</p>
                          <p> available for 2 weeks</p>
                       </div>
                       <div>
                      <img src="img/Star 2.svg" alt="Starsicon" className="star"/>
                      <img src="img/Star 2.svg" alt="Starsicon" className="star"/>
                      <img src="img/Star 2.svg" alt="Starsicon" className="star"/>
                      <img src="img/Star 2.svg" alt="Starsicon" className="star"/>
                      <img src="img/Star 2.svg" alt="Starsicon" className="star"/>
                    </div>
                  </div>

                  <div className="framecontainer">
                      <img src="img/Frame 151 (10).png" alt="frame1" className="frame"/>
                      <div className="frame-text">
                        <h5> Desert KIng </h5>
                        <h5>1mbt per night</h5> 
                      </div>
                      <div className="frametext2"> 
                          <p>234km away</p>
                          <p> available for 2 weeks</p>
                       </div>
                       <div>
                      <img src="img/Star 2.svg" alt="Starsicon" className="star"/>
                      <img src="img/Star 2.svg" alt="Starsicon" className="star"/>
                      <img src="img/Star 2.svg" alt="Starsicon" className="star"/>
                      <img src="img/Star 2.svg" alt="Starsicon" className="star"/>
                      <img src="img/Star 2.svg" alt="Starsicon" className="star"/>
                    </div>
                  </div>

                  <div className="framecontainer">
                      <img src="img/Frame 151 (9).png" alt="frame1" className="frame"/>
                      <div className="frame-text">
                        <h5> Desert KIng </h5>
                        <h5>1mbt per night</h5> 
                      </div>
                      <div className="frametext2"> 
                          <p>234km away</p>
                          <p> available for 2 weeks</p>
                       </div>
                       <div>
                      <img src="img/Star 2.svg" alt="Starsicon" className="star"/>
                      <img src="img/Star 2.svg" alt="Starsicon" className="star"/>
                      <img src="img/Star 2.svg" alt="Starsicon" className="star"/>
                      <img src="img/Star 2.svg" alt="Starsicon" className="star"/>
                      <img src="img/Star 2.svg" alt="Starsicon" className="star"/>
                    </div>
                  </div>
                  
                  <div className="framecontainer">
                      <img src="img/Frame 151 (8).png" alt="frame1" className="frame"/>
                      <div className="frame-text">
                        <h5> Desert KIng </h5>
                        <h5>1mbt per night</h5> 
                      </div>
                      <div className="frametext2"> 
                          <p>234km away</p>
                          <p> available for 2 weeks</p>
                       </div>
                       <div>
                      <img src="img/Star 2.svg" alt="Starsicon" className="star"/>
                      <img src="img/Star 2.svg" alt="Starsicon" className="star"/>
                      <img src="img/Star 2.svg" alt="Starsicon" className="star"/>
                      <img src="img/Star 2.svg" alt="Starsicon" className="star"/>
                      <img src="img/Star 2.svg" alt="Starsicon" className="star"/>
                    </div>
                  </div>

                  <div className="framecontainer">
                      <img src="img/Frame 151 (7).png" alt="frame1" className="frame"/>
                      <div className="frame-text">
                        <h5> Desert KIng </h5>
                        <h5>1mbt per night</h5> 
                      </div>
                      <div className="frametext2"> 
                          <p>234km away</p>
                          <p> available for 2 weeks</p>
                       </div>
                       <div>
                      <img src="img/Star 2.svg" alt="Starsicon" className="star"/>
                      <img src="img/Star 2.svg" alt="Starsicon" className="star"/>
                      <img src="img/Star 2.svg" alt="Starsicon" className="star"/>
                      <img src="img/Star 2.svg" alt="Starsicon" className="star"/>
                      <img src="img/Star 2.svg" alt="Starsicon" className="star"/>
                    </div>
                  </div>

                  <div className="framecontainer">
                      <img src="img/Frame 151 (6).png" alt="frame1" className="frame"/>
                      <div className="frame-text">
                        <h5> Desert KIng </h5>
                        <h5>1mbt per night</h5> 
                      </div>
                      <div className="frametext2"> 
                          <p>234km away</p>
                          <p> available for 2 weeks</p>
                       </div>
                       <div>
                      <img src="img/Star 2.svg" alt="Starsicon" className="star"/>
                      <img src="img/Star 2.svg" alt="Starsicon" className="star"/>
                      <img src="img/Star 2.svg" alt="Starsicon" className="star"/>
                      <img src="img/Star 2.svg" alt="Starsicon" className="star"/>
                      <img src="img/Star 2.svg" alt="Starsicon" className="star"/>
                    </div>
                  </div>

                  <div className="framecontainer">
                      <img src="img/Frame 151 (15).png" alt="frame1" className="frame"/>
                      <div className="frame-text">
                        <h5> Desert KIng </h5>
                        <h5>1mbt per night</h5> 
                      </div>
                      <div className="frametext2"> 
                          <p>234km away</p>
                          <p> available for 2 weeks</p>
                       </div>
                       <div>
                      <img src="img/Star 2.svg" alt="Starsicon" className="star"/>
                      <img src="img/Star 2.svg" alt="Starsicon" className="star"/>
                      <img src="img/Star 2.svg" alt="Starsicon" className="star"/>
                      <img src="img/Star 2.svg" alt="Starsicon" className="star"/>
                      <img src="img/Star 2.svg" alt="Starsicon" className="star"/>
                    </div>
                  </div>

                  <div className="framecontainer">
                      <img src="img/Frame 151 (14).png" alt="frame1" className="frame"/>
                      <div className="frame-text">
                        <h5> Desert KIng </h5>
                        <h5>1mbt per night</h5> 
                      </div>
                      <div className="frametext2"> 
                          <p>234km away</p>
                          <p> available for 2 weeks</p>
                       </div>
                       <div>
                      <img src="img/Star 2.svg" alt="Starsicon" className="star"/>
                      <img src="img/Star 2.svg" alt="Starsicon" className="star"/>
                      <img src="img/Star 2.svg" alt="Starsicon" className="star"/>
                      <img src="img/Star 2.svg" alt="Starsicon" className="star"/>
                      <img src="img/Star 2.svg" alt="Starsicon" className="star"/>
                    </div>
                  </div>

                  <div className="framecontainer">
                      <img src="img/Frame 151 (13).png" alt="frame1" className="frame"/>
                      <div className="frame-text">
                        <h5> Desert KIng </h5>
                        <h5>1mbt per night</h5> 
                      </div>
                      <div className="frametext2"> 
                          <p>234km away</p>
                          <p> available for 2 weeks</p>
                       </div>
                       <div>
                      <img src="img/Star 2.svg" alt="Starsicon" className="star"/>
                      <img src="img/Star 2.svg" alt="Starsicon" className="star"/>
                      <img src="img/Star 2.svg" alt="Starsicon" className="star"/>
                      <img src="img/Star 2.svg" alt="Starsicon" className="star"/>
                      <img src="img/Star 2.svg" alt="Starsicon" className="star"/>
                    </div>
                  </div>             
              </div>
            </section>

            <footer className="footer">
            <div className="footer__contact" >
            <img src="img/Group.png" alt="footerlogo" className="footer__logo"/>
              <div className="footer__social">
              <img src="img/facebook.png" alt="facebook" className="footer__sub"/>
              <img src="img/instagram.png" alt="instagram" className="footer__sub"/>
              <img src="img/twitter.png" alt="twitter" className="footer__sub"/>
              </div>
            
            </div>

            <div>
              <ul className="footer__list">
             <h4 className="fth4">Community</h4>
              <li className="list__item"><a href="http://localhost:3000/" className="footer__link">NFT</a> </li>
              <li className="list__item"><a href="http://localhost:3000/" className="footer__link">Tokens</a></li>
              <li className="list__item"><a href="http://localhost:3000/" className="footer__link">Landlords</a></li>
              <li className="list__item"><a href="http://localhost:3000/" className="footer__link">Discard</a></li>
              </ul>
            </div>

            <div>
              <ul className="footer__list">
             <h4 className="fth4" >Places</h4>
              <li className="list__item"><a href="http://localhost:3000/" className="footer__link">Castle</a> </li>
              <li className="list__item"><a href="http://localhost:3000/" className="footer__link">Farms</a></li>
              <li className="list__item"><a href="http://localhost:3000/" className="footer__link">Beach</a></li>
              <li className="list__item"><a href="http://localhost:3000/" className="footer__link">Learn more</a></li>
              </ul>
            </div>

            <div>
              <ul className="footer__list">
              <h4 className="fth4">About us</h4>
              <li className="list__item"><a href="http://localhost:3000/" className="footer__link">Road map</a></li>
              <li className="list__item"><a href="http://localhost:3000/" className="footer__link">Creators</a></li>
              <li className="list__item"><a href="http://localhost:3000/" className="footer__link">Career</a></li>
              <li className="list__item"><a href="http://localhost:3000/" className="footer__link">Contact us</a></li>
              <p className='copyright'>&copy; Copyright metabnb</p> 
              </ul>
              
            </div>
        </footer>
        </div>
    )
}

export default Signup;