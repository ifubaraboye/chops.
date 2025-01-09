
import { Routes, Route } from 'react-router-dom';
import './App.css';
import {Home} from './pages/Home';
import {Gallery} from './pages/Gallery';
import {About} from './pages/About';
import {Contact} from './pages/Contact';
import { CartProvider } from './components/CartContext';

function App() {
  return <Routes>
    
    <Route path='/' element = {
      <CartProvider>
        <Home />
      </CartProvider>
      
      } />


    <Route path='/gallery' element = {<Gallery />} />
    <Route path='/about' element = {<About />} />
    <Route path='/contact' element = {<Contact />} />
  </Routes>
    
  ;
}

export default App;
