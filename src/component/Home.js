import { React, useState} from "react";
import { Link } from 'react-router-dom';
import Modal from "./Modal";
import "../App.scss";

function Home (){
  const [showBox, setShowBox] = useState(false)

    return(
        <div className="container">
            <header className="header">
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
                            <li className="mb-items"><a href="http://localhost:3000/" className="mb-link">HOME</a></li>
                            <li className="mb-items"><a href="http://localhost:3000/" className="mb-link">NFTs</a></li>
                            <li className="mb-items"><Link to="/signup" className='nav__link '>PLACE TO STAY</Link></li>
                            <li className="mb-items"><a href="http://localhost:3000/" className="mb-link">COMMUNITY</a></li>
                            <button onClick={ () => setShowBox(true)} className=' mb-btn'>Connect Wallet</button> 
                          </ul>
                          </nav>
                           
                        </div> 
                  </div>
                </div>

              <section className="intro">
               <div className="intro__text">
                   <h1 className="heading__1">Rent a place away from home in the Metaverse</h1>
                    <p className="para">we provide you access to luxury and affordable houses in the metaverse, get a chance to turn your imagination to reality in your comforr zone</p>
                    <input type="text" className="input-search" placeholder="search for location"/>
                     <button className="btn">Search</button>
                 </div>
               
                   <figure className="intro__image intro__item-1"><img src="img/image 3.png" alt="pic" className="intro__image"/></figure>
                   <figure className="intro__image intro__item-2"><img src="img/image 4.png" alt="pic" className="intro__image"/></figure>
                   <figure className="intro__image intro__item-3"><img src="img/image 5.png" alt="pic" className="intro__image"/></figure>
                   <figure className="intro__image intro__item-4"><img src="img/image 6.png" alt="pic" className="intro__image"/></figure> 
                   {/* <img src="img/Group 4028.png" alt="intro__group"className="intro__group"/> */}
              </section>

            
            </header>

            <div className="purple__frame">
             <img src="img/mbtoken2.png" alt="mbtoken" className="purple_img"/>
             <img src="img/metamask.png" alt="metamask"  className="purple_img"/>
             <img src="img/Frame 4041.png" alt="openair"  className="purple_img"/>
            </div>
           
            <section  className="inspo">
            <h1 className="inspo-h1">Inspiration for your next adventure</h1>
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


              </div>
            </section>

            <div className=" product">
               <div className="product__text">
               <h1>Metabnb NFTs</h1>
               <p className="para2">Discover our NFT gifts cards collection. Loyal customers gets amazing gift cards which are traded as NFTs gives our customer access to loads of our exclusive services </p>

              
               <Link to="/signup" className='nav__link '> <button className="product__btn">learn more </button></Link>
               </div>

               <div className="product__image">
                <img src="img/frame 59546.png" alt="gpimg" className="product__img"/>
               </div>
            </div>

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

export default Home;

                