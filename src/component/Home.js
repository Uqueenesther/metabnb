import "../App.scss";
import { Link } from 'react-router-dom';

function Home(){
    return(
        <div className="container">
            <header className="header">
              <div className="nav"> 
                <ul className="nav__list">
                 <figure className="image1" ><img src="img/logoicon.png" alt="logoicon" className="logoicon"/>
                 <img src="img/logo.png" alt="logo" className="logo"/>
                 </figure> 
                     <li className="nav__item"><a href="http://localhost:3000/" className="nav__link">Home</a></li>
                     <li className="nav__item"><Link to="/signup" className='nav__link '>Place to stay</Link></li>
                     <li className="nav__item"><a href="http://localhost:3000/" className="nav__link">NFTs</a></li>
                     <li className="nav__item"><a href="http://localhost:3000/" className="nav__link">Community</a></li>
                     <button className=' nav__btn'>Connect Wallet</button>
                </ul>
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
             
              </section>
            </header>

            <div className="purple__frame">
             <img src="img/mbtoken2.png" alt="mbtoken"/>
             <img src="img/metamask.png" alt="metamask"/>
             <img src="img/Frame 4041.png" alt="openair"/>
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


              </div>
            </section>

            <div className=" product">
               <div className="product__text">
               <h1>Metabnb NFTs</h1>
               <p>Discover our NFT gifts cards collection. Loyal customers gets amazing gift cards which are traded as NFTs gives our customer access to loads of our exclusive services </p>

               <button className="product__btn">learn more </button>
               </div>

               <div className="product__image">
                <img src="img/frame 59546.png" alt="gpimg" className="product__img"/>
               </div>
            </div>

        <footer className="footer">
            <div className="footer__contact" >
            <img src="img/Group.png" alt="footerlogo" className="footer__logo"/>
              <div className="footer__social">
              <img src="img/facebook.png" alt="facebook" className=""/>
              <img src="img/instagram.png" alt="instagram" className=""/>
              <img src="img/twitter.png" alt="twitter" className=""/>
              </div>
              <p className='copyright'>&copy; Copyright metabnb</p>
            </div>

            <div>
              <ul className="footer__list">
             <h4>Community</h4>
              <li className="list__item"><a href="http://localhost:3000/" className="footer__link">NFT</a> </li>
              <li className="list__item"><a href="http://localhost:3000/" className="footer__link">Tokens</a></li>
              <li className="list__item"><a href="http://localhost:3000/" className="footer__link">Landlords</a></li>
              <li className="list__item"><a href="http://localhost:3000/" className="footer__link">Discard</a></li>
              </ul>
            </div>

            <div>
              <ul className="footer__list">
             <h4>Places</h4>
              <li className="list__item"><a href="http://localhost:3000/" className="footer__link">Castle</a> </li>
              <li className="list__item"><a href="http://localhost:3000/" className="footer__link">Farms</a></li>
              <li className="list__item"><a href="http://localhost:3000/" className="footer__link">Beach</a></li>
              <li className="list__item"><a href="http://localhost:3000/" className="footer__link">Learn more</a></li>
              </ul>
            </div>

            <div>
              <ul className="footer__list">
              <h4>About us</h4>
              <li className="list__item"><a href="http://localhost:3000/" className="footer__link">Road map</a></li>
              <li className="list__item"><a href="http://localhost:3000/" className="footer__link">Creators</a></li>
              <li className="list__item"><a href="http://localhost:3000/" className="footer__link">Career</a></li>
              <li className="list__item"><a href="http://localhost:3000/" className="footer__link">Contact us</a></li>
              </ul>
            </div>
        </footer>
        </div>
    )
}

export default Home;

                