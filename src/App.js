import { BrowserRouter , Routes, Route } from 'react-router-dom';
import './App.css';

import CategoryContent from './components/dashboard/products/CategoryContent';
import Home from './components/dashboard/Home';
import ProductList from './components/dashboard/products/ProductList';
import SingleProduct from './components/dashboard/products/SingleProduct';
import Login from './components/Login';
import Register from './components/Register';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Home />
        <Routes>
          <Route path="/" element={<CategoryContent/>} />
          <Route path="/categories" element={<CategoryContent/>} />
          <Route path="/categories/:id" element={<ProductList/>} />
          <Route path="/products/:id" element={<SingleProduct/>} />

          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
