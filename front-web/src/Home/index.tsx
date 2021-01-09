import './styles.css';
import { ReactComponent as MainImage} from './main.svg';
import Footer from '../Footer';


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
                    <a href="orders" className="home-btn-order">
                        Order Now!
                    </a>
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