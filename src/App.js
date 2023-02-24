import './App.css';
import { Routes, Route } from 'react-router-dom';
import Product from './components/product/Product';
import Cart from './components/work/Cart';
import Login from './components/work/Login';
import Signin from './components/work/Signin';
import Admin from './components/admin/Admin';
import ManagerUser from './components/admin/ManagerUser';

function App() {
  return (
    <div className="container">
      <Routes>
        <Route path='/' element={<Product />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signin' element={<Signin />} />
        <Route path='/admin' element={<Admin />}>
          <Route path='manage' element={<ManagerUser />} />
        </Route>
      </Routes>

    </div>
  );
}

export default App;
