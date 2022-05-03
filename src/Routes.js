import { Route,Switch } from "react-router-dom";

import CreateOrderPage from './pages/CreateOrderPage'
import ReviewOrdersPage from "./pages/ReviewOrdersPage";
export const Routes = () => {
    return(
        <Switch>
            <Route exact path="/" component={CreateOrderPage}/>
            <Route path={"/create-order"} component={CreateOrderPage}/>
            <Route path={"/orders"} component={ReviewOrdersPage}/>
            
        </Switch>
    )
}
export default Routes;