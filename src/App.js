import "./App.css";
import { Routes, Route } from "react-router-dom";
import Product from "./components/product/Product";
import Cart from "./components/work/Cart";
import Login from "./components/work/Login";
import Signin from "./components/work/Signin";
import Admin from "./components/admin/Admin";
import ManagerUser from "./components/admin/ManagerUser";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { act_get_pro } from "./redux/action";
import Loading from "./components/Loading";
import AddProduct from "./components/product/AddProduct";
import EditProduct from "./components/product/EditProduct";
import ListProduct from "./components/product/ListProduct";

function App() {
  const [isLoad, setIsLoad] = useState(true);
  const [status, setStatus] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(act_get_pro());
    console.log("dispatch");
  }, [status]);
  const changeStatus = () => {
    setStatus(!status);
  };
  useEffect(() => {
    setTimeout(() => setIsLoad(false), 3000);
  }, []);
  // setTimeout(changeStatus, 1000);
  return (
    <div className="app">
      {isLoad ? (
        <Loading />
      ) : (
        <div className="container">
          <Routes>
            <Route path="/admin" element={<Product />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/" element={<Admin />}>
              <Route index element={<ListProduct />} />
              <Route path="add-product" element={<AddProduct />} />
              <Route path="edit-product" element={<EditProduct />} />
            </Route>
          </Routes>
        </div>
      )}
    </div>
  );
}

export default App;
