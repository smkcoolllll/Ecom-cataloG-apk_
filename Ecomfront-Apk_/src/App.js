import Dashboard from './components/Dashboard';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import AddProduct from './components/AddProduct';
import Products from './components/Products';
import AddCategory from './components/AddCategory';

function App() {
  return (
    <div className="App">
      {/* <Navbar /> */}
     <Dashboard />
      <BrowserRouter >
      <Routes >
      <Route path='add-product' element={<AddProduct />}/>
      <Route path='products' element={<Products />}/>
      <Route path='add-category' element={<AddCategory />}/>
      </Routes>
      </BrowserRouter>
        
    </div>
  );
}

export default App;
