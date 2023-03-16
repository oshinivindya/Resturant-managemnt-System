import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Header from './common/Header';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Contact from './pages/Contact';
import { MenuList } from './helpers/MenuList';
import Menu from './pages/Menu';


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route index element={<Home/>}/>
      <Route path='AboutUs' element={<AboutUs/>}/>
      <Route path='Contact' element={<Contact/>}/>
       <Route path='Menu' element={<Menu/>}/>
      

    </Routes>
    </BrowserRouter>
  );
}

export default App;
