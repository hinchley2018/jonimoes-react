import { Route } from "react-router-dom";
import { Switch } from "react-router-dom";
import CreateOrderPage from './pages/CreateOrderPage'
import ReviewOrdersPage from "./pages/ReviewOrdersPage";
export default function Routes(){
    return(
        <Switch>
            <Route exact path={"/"} component={ReviewOrdersPage}/>
            <Route path={"/create-order"} component={CreateOrderPage}/>
            <Route path={"/orders"} component={ReviewOrdersPage}/>
            
        </Switch>
    )
}