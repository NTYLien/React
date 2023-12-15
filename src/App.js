
import './App.css';
import {Link, Routes, Route} from "react-router-dom";
import Product from  './product';
import Galary from './galary';
import About from './about'
import db from './products.json'
import Create from './create';



function App() {
  return (
    <div className="App"> 
        <h3>Product Management</h3>
      <nav>
      <Link to="" className="App-link">Home</Link>
      <Link to="/product" className="App-link">Product</Link>
      <Link to="/galary" className="App-link">Galary</Link>
      <Link to="/about" className="App-link">About us</Link>
      
      </nav>

      <Routes>
        <Route path="/product" element={<Product data={db}/>}/>
        <Route path="/galary" element= {<Galary/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/product/create" element={<Create data={db}/>} />
      </Routes>

    </div>
  );
}

export default App;
