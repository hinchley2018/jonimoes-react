import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Nav from './Nav';
import Routes from './Routes';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav/>
        <Routes/>
      </BrowserRouter>
    </div>
  );
}

export default App;
