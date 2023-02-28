import React, { useEffect, useState } from "react";
import { storage } from "../../firebase";
import { ref, uploadBytes, getDownloadURL, listAll } from "firebase/storage";
import { useDispatch } from "react-redux";
import { act_post_pro } from "../../redux/action";
import { useNavigate } from "react-router-dom";

export default function AddProduct() {
  const [imageUrl, setImageUrl] = useState("");
  const [productName, setProductName] = useState("");
  const [price, setPrice] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const imagesListRef = ref(storage, "uploads/");

  // Tạo storage lưu trữ từ dịch vụ của firebase
  const uploadImage = (e) => {
    let imageUpload = e.target.files[0];
    if (imageUpload == null) return;
    const imageRef = ref(storage, `images/${imageUpload.name}`);
    uploadBytes(imageRef, imageUpload).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        setImageUrl(url);
      });
    });
  };
  const handleAddProduct = () => {
    dispatch(act_post_pro({ name: productName, price, image: imageUrl }));
    navigate("/");
  };
  useEffect(() => {
    listAll(imagesListRef).then((res) => {
      res.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          setImageUrl(url);
        });
      });
    });
  }, []);
  return (
    <div>
      <h3 className="admin">Thêm sản phẩm mới</h3>

      <table className="table">
        <thead>
          <tr>
            <th>
              <b>Ảnh sản phẩm: </b>
            </th>
            <td>
              <img width="100" src={imageUrl} alt="new-product" />
              <input type="file" onChange={uploadImage} />
            </td>
          </tr>
          <tr>
            <th>
              <b>Tên sản phẩm: </b>
            </th>
            <td>
              <input
                value={productName}
                onChange={(e) => setProductName(e.target.value)}
                type="text"
              />
            </td>
          </tr>
          <tr>
            <th>
              <b>Giá sản phẩm: </b>
            </th>
            <td>
              <input
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                type="number"
              />
            </td>
          </tr>
        </thead>
      </table>
      <button onClick={handleAddProduct} className="btn btn-primary">
        Thêm mới
      </button>
    </div>
  );
}
