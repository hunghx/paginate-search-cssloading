import React from "react";
import Footer from "../work/Footer";
import Header from "../work/Header";
import { useState, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { act_get_pro, act_post_pro } from "../../redux/action";
import ManagerUser from "./ManagerUser";
import ReactPaginate from "react-paginate";
import { filter_list_products } from "../../filter";

export default function Admin() {
  //   const listPro = useSelector((state) => state.products);
  const pageTotal = useSelector((state) => state.page);
  const searchName = useSelector((state) => state.filter.searchName);
  const [productName, setProductName] = useState();
  const [price, setPrice] = useState();
  const [listFilter, setListFilter] = useState([]);
  console.log(pageTotal);
  const dispatch = useDispatch();
  const handleAdd = () => {
    dispatch(act_post_pro({ productName, price }));
  };
  useEffect(() => {
    filter_list_products(0, 5).then((res) => {
      setListFilter(res.data);
    });
  }, []);
  const handlePageChange = ({ selected }) => {
    filter_list_products(selected, 5).then((res) => {
      setListFilter(res.data);
    });
  };
  let list = listFilter.filter((pro) => pro.productName.includes(searchName));

  let elementPro = list.map((product, index) => {
    return (
      <tr key={product.id}>
        <td>{product.id}</td>
        <td>
          <img className="cart-img" src={product.img} />
        </td>
        <td>{product.productName}</td>
        <td>{product.price}</td>
        <td>
          <button className="btn btn-warning">Sửa sản phẩm</button>&nbsp;
          <button className="btn btn-danger">Xóa sản phẩm</button>
        </td>
      </tr>
    );
  });
  return (
    <div>
      <div className="container">
        <Header />

        {/* tai khoan cua admin */}
        <div className="cart">
          <h1>ADMIN</h1>
          <br></br>
          <div>
            <h3 className="admin">Thêm sản phẩm mới</h3>
            <br></br>
            <div>
              <table className="table">
                <thead>
                  <tr>
                    <th>
                      <b>Ảnh sản phẩm: </b>
                    </th>
                    <td></td>
                  </tr>
                  <tr>
                    <th>
                      <b>Tên sản phẩm: </b>
                    </th>
                    <td>
                      <input
                        type="text"
                        onChange={(e) => setProductName(e.target.value)}
                      />
                    </td>
                  </tr>
                  <tr>
                    <th>
                      <b>Giá sản phẩm: </b>
                    </th>
                    <td>
                      <input
                        type="number"
                        onChange={(e) => setPrice(e.target.value)}
                      />
                    </td>
                  </tr>
                </thead>
              </table>
              <button className="btn btn-primary" onClick={handleAdd}>
                Thêm mới
              </button>
              <br></br>
              <br></br>
              <h3 className="admin">Quản lí sản phẩm</h3>
              <table className="table">
                <tbody>
                  <tr>
                    <th>Mã sản phẩm</th>
                    <th>Sản phẩm</th>
                    <th>Tên</th>
                    <th>Giá tiền</th>
                    <th>Sửa/Xóa</th>
                  </tr>
                  {elementPro}
                </tbody>
              </table>

              <ReactPaginate
                previousLabel={"PREV"}
                previousClassName="page-item"
                previousLinkClassName="page-link"
                nextClassName="page-item"
                nextLinkClassName="page-link"
                nextLabel={"NEXT"}
                pageCount={pageTotal}
                onPageChange={handlePageChange}
                pageLinkClassName={"page-link"}
                pageClassName="page-item"
                containerClassName={"pagination"}
                activeClassName={"active"}
              />
            </div>
          </div>
        </div>
        <ManagerUser />
        {/* tai khoan cua admin */}
        <Footer />
      </div>
    </div>
  );
}
