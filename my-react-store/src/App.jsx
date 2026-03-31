import {BrowserRouter,Routes,Route} from'react-router-dom'
import Admin from "./pages/admin";
import About from './pages/about';
import Catalog from "./pages/Catalog";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import NotFound from './pages/NotFound';
  
import Footer from "./components/footer";
import Navbar from './components/Navbar';

import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="d-flex flex-column min-vh-100 bg-light">
        <Navbar />
        <main className="flex-grow-1">
          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/catalog" element={<Catalog />} />
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
