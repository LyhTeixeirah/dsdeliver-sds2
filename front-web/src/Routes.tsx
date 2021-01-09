import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Orders from "./Orders";
import Home from "./Home";

function Routes() {
    return(
        <BrowserRouter>
        <Navbar />
    <Switch>
        <Route path="/orders"> 
            <Orders />
        </Route>
        <Route path="/" exact> 
            <Home />
        </Route>
    </Switch>
  </ BrowserRouter>
    )
}

export default Routes;