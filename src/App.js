import './App.css';
import { Navigate, Route, Routes } from 'react-router-dom';
import Home from './componants/page/Home.js';
import About from './componants/page/About';
import Posts from './componants/page/Posts';
import Blog from './componants/page/Blog';
import Contact from './componants/page/Contact';
import Footer from './componants/Footer';
import NavBar from './componants/NavBar';
import Product from './componants/page/Product';
import Cart from './componants/page/Cart';
import Shipping from './componants/page/Shipping';
import Payment from './componants/page/Payment';
import PlaceOrder from './componants/page/PlaceOrder';
// import NavBar from './componants/NavBar';

function App() {
  return (
    <>
    <NavBar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Navigate to="/" />} />
          <Route path="/about" element={<About />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/singleProduct" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/shipping" element={<Shipping />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/place_order" element={<PlaceOrder />} />
        </Routes>
        <Footer/>
    </>


  );
}

export default App;