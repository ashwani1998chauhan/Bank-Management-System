import MainPage from './components/MainPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import ExchangeMenu from './components/ExchangeMenu';
import Footer from './components/Footer';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import NavComp from './components/NavComp';
import History from './components/History';
import Transact from './components/Transact';
import User from './components/User';
import './app.css';
function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <NavComp/>
    <Routes>
    <Route path="/history" element={<History/>}/>
    <Route path="/transact" element={<Transact/>}/>
    <Route path="/user/:id" element={<User/>}/>
    <Route path="*" element={<><MainPage/><ExchangeMenu/></>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
    </div>
  );
}

export default App;
