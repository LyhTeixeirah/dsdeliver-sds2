import './styles.css';
import { ReactComponent as MainImage} from './main.svg';

function Home() {
    return(
        <div className="home-container">
           <div className="home-content">
               <div className="home-actions">
                    <h1 className="home-title">
                        Make your order <br/>

                    </h1>
                    <h3 className="home-subtitle">
                        switch you order and a few minutes <br/> guess to yout home 
                    </h3>
                    <a href="orders" className="home-btn-order">
                        Make it
                    </a>
               </div>
               <div className="home-image">
                    <MainImage/>
               </div>
           </div>
        </div>
    );   
}

export default Home;