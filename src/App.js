
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignUpCompenent from './components/SignUpComponent';
import LoginComponent from './components/LoginComponent';
import AddMealComponent from './components/AddMealComponent';
import MenuComponent from './components/MenuComponent';
import NavbarComponent from './components/NavbarComponent';
import 'bootstrap/dist/css/bootstrap.min.css'
import "bootstrap/dist/js/bootstrap.min.js"
//import MakePayment from"./components/MakePayment";

function App() {
  return (
    <BrowserRouter>
          <div className="container-fluid">
            
            <div className="App">
          <header className="App-header">
            <h1 className='warning'>Flaming Lizard</h1>
          </header>

          <Routes>
            <Route path='/signup'element={<SignUpCompenent/>} />
            <Route path='/login'element={<LoginComponent/>} />
            <Route path='/addmeal'element={<AddMealComponent/>} />
            <Route path='/'element={<MenuComponent/>} />
            
          </Routes>
        </div>
          </div>
    </BrowserRouter>
  );
}


export default App;
