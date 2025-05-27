import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import ProductList from './pages/productlist';
import Cart from './pages/cart';
import { CartProvider } from './context/cartcontext';

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;