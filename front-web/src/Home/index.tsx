import './styles.css';
import { ReactComponent as MainImage} from './main.svg';
import Footer from '../Footer';
import React from 'react';
import { Link } from 'react-router-dom';


function Home() {
    return(
        <>
        <div className="home-container">
           <div className="home-content">
               <div className="home-actions">
                    <h1 className="home-title">
                        Make your order <br/>
                    </h1>
                    <h3 className="home-subtitle">
                        We delivery at your doorstep <br/> in few minutes!
                    </h3>
                    <Link to="orders" className="home-btn-order">
                        Order Now!
                    </Link>
               </div>
               <div className="home-image">
                    <MainImage/>
               </div>
           </div>
        </div>
        <Footer />
        </>
    );   
}

export default Home;