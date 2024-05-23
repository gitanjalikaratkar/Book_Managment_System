import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Supplier from './Pages/Supplier';
import Catergories from './Pages/Categories';
import AboutUs from './Pages/AboutUs';
import Home from './Pages/Home';


function App() {
  return (
    <div className='app'>
      <div className='navbar-section'>
        <Navbar />
      </div>
      <div className='main-container'>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/AboutUs' element={<AboutUs />}></Route>
          <Route path='/Supplier' element={<Supplier />}></Route>
          <Route path='/Categories' element={<Catergories />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;