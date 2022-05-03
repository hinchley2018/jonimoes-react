import './App.css';
import { BrowserRouter,Route,Switch } from 'react-router-dom';
import Nav from './Nav';

import CreateOrderPage from './pages/CreateOrderPage'
import ReviewOrdersPage from "./pages/ReviewOrdersPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav/>
        <Switch>
            
            <Route path={"/create-order"} component={CreateOrderPage}/>
            <Route path={"/orders"} component={ReviewOrdersPage}/>
            <Route exact path={"/"} component={ReviewOrdersPage}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
