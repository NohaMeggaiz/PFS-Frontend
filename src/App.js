
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Shop from './Pages/Shop';
import ShopCategorie from './Pages/ShopCategorie';
import Product from './Pages/Product';
import LoginSignUp from './Pages/LoginSignUp';
import Cart from './Pages/Cart';
import Footer from './Components/Footer/Footer';
import men_banner from './Components/Assets/banner_mens.png';
import women_banner from './Components/Assets/banner_women.png';
import kid_banner from './Components/Assets/banner_kids.png';


function App() {
  return (
    <div>
      <BrowserRouter>


      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Shop/> } ></Route>
        <Route path='/women' element={<ShopCategorie banner={women_banner} category="women"/> } ></Route>
        <Route path='/men' element={<ShopCategorie  banner={men_banner} category="men"/> } ></Route>
        <Route path='/kids' element={<ShopCategorie banner={kid_banner} category="kid"/> } ></Route>
        <Route path='/product' element={<Product/> } >
           <Route path=':productId' element={<Product/> }  />
        </Route>
        <Route path='/cart' element={<Cart/> } ></Route>
        <Route path='/login' element={<LoginSignUp/> } ></Route>
      
      </Routes>
      <Footer></Footer>

      </BrowserRouter>

    </div>
  );
}

export default App;
