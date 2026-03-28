import {BrowserRouter,Routes,Route} from'react-router-dom'
import './App.css'
import Navbar from './components/Navbar';
import About from './pages/about';
import Home from './pages/Home';
import Catalog from './pages/Catalog';
import Contact from './pages/Contact';
import Footer from './components/footer'; 
import 'bootstrap/dist/css/bootstrap.min.css';

import 'bootstrap/dist/js/bootstrap.bundle.min.js';


function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path='/about' element={<About />} />
        <Route path='/catalog' element={<Catalog/>} />
        <Route path='/' element={<Home/>} /> 
        <Route path='/contact' element={<Contact/>} />      
      </ Routes>

      <Footer />
    </BrowserRouter>
  );
};

export default App;
