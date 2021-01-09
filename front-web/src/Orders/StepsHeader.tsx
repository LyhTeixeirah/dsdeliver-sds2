import './styles.css';

function StepHeader() {
    return(
       <header className="orders-steps-container">
           <div className="orders-steps-content">
               <h1 className="steps-title">
                   Follow <br/> steps
               </h1>
               <ul className="steps-items">
                   <li>
                       <span className="steps-number">1</span>
                       Select products and your localization
                   </li>
                   <li>
                       <span className="steps-number">2</span>
                       press <strong>Order</strong>
                   </li>
               </ul>
           </div>
       </header>
    );   
}

export default StepHeader;