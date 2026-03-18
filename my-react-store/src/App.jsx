
import './App.css'
import Navbar from './components/Navbar';
import Catalog from './pages/Catalog';
import Footer from './components/footer'; 
import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';


function App() {

  return (
   
      <div>
        <Navbar/>
            <Catalog/>
            
            <Footer/>
        
      </div>
      
   
  )
}

export default App
