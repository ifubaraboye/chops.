
import { Routes, Route } from 'react-router-dom';
import './App.css';
import {Home} from './pages/Home';
import {Gallery} from './pages/Gallery';
import {About} from './pages/About';
import {Contact} from './pages/Contact';
import { CartProvider } from './components/CartContext';
import { Cart } from './pages/Cart';

function App() {
  return <CartProvider> <Routes>
    <Route path='/' element = {<Home />} />
    <Route path='/gallery' element = {<Gallery />} />
    <Route path='/about' element = {<About />} />
    <Route path='/contact' element = {<Contact />} />
    <Route path='/cart' element = {<Cart />} />
  </Routes>
  </CartProvider>
    
  ;
}

export default App;
