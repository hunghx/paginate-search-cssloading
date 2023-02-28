import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { act_delete_pro, act_get_pro } from "../../redux/action";

export default function ListProduct() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const listProducts = useSelector((state) => state.products);

  const handleDelete = (idDel) => {
    dispatch(act_delete_pro(idDel));
  };
  const handleEdit = (pro) => {
    navigate("/edit-product", { state: pro });
  };

  useEffect(() => {
    dispatch(act_get_pro());
  }, []);
  return (
    <div>
      <div>
        <h3 className="admin">Quản lí sản phẩm</h3>
        <Link to={"/add-product"} className="btn btn-info">
          Add product
        </Link>
        <table className="table">
          <tbody>
            <tr>
              <th>Mã sản phẩm</th>
              <th>Sản phẩm</th>
              <th>Tên</th>
              <th>Giá tiền</th>
              <th>Sửa/Xóa</th>
            </tr>
            {listProducts.map((pro) => (
              <tr key={pro.id}>
                <td>{pro.id}</td>
                <td>
                  <img
                    width={70}
                    className="cart-img"
                    src={pro.image}
                    alt={pro.name}
                  />
                </td>
                <td>{pro.name}</td>
                <td>{pro.price}</td>
                <td>
                  <button
                    onClick={() => handleEdit(pro)}
                    className="btn btn-warning"
                  >
                    Sửa sản phẩm
                  </button>
                  &nbsp;
                  <button
                    className="btn btn-danger"
                    onClick={() => handleDelete(pro.id)}
                  >
                    Xóa sản phẩm
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
