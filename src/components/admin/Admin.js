import React from 'react';
import Footer from '../work/Footer';
import Header from '../work/Header';
import { useState, useEffect } from 'react';
// import { storage } from '../../firebase';
// import { ref, uploadBytes, getDownloadURL, listAll } from "firebase/storage";
import { useDispatch, useSelector } from 'react-redux';
import { act_get_pro, act_post_pro } from '../../redux/action';
import ManagerUser from './ManagerUser';

export default function Admin() {
    const [productName, setProductName] = useState();
    const [price, setPrice] = useState()
    const dispatch = useDispatch();
    const handleAdd = () => {
        dispatch(act_post_pro({ productName, price }))
    }
    useEffect(() => {
        dispatch(act_get_pro())
    }, [])
    const listPro = useSelector(state => state.products);
    let elementPro = listPro.map((product, index) => {
        return <tr key={product.id}>
            <td>{index + 1}</td>
            <td>{product.id}</td>
            <td><img className='cart-img' src={product.img} /></td>
            <td>{product.productName}</td>
            <td>{product.price}</td>
            <td>
                <button className="btn btn-warning">Sửa sản phẩm</button>&nbsp;
                <button className="btn btn-danger">Xóa sản phẩm</button>
            </td>
        </tr>
    })
    return (
        <div>
            <div className="container">

                <Header />
               
                {/* tai khoan cua admin */}
                <div className="cart">
                    <h1>ADMIN</h1><br></br>
                    <div>
                        <h3 className='admin'>Thêm sản phẩm mới</h3><br></br>
                        <div>
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th><b>Ảnh sản phẩm: </b></th>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <th><b>Tên sản phẩm: </b></th>
                                        <td><input type="text" onChange={(e) => setProductName(e.target.value)} /></td>
                                    </tr>
                                    <tr>
                                        <th><b>Giá sản phẩm: </b></th>
                                        <td><input type="number" onChange={(e) => setPrice(e.target.value)} /></td>
                                    </tr>

                                </thead>
                            </table>
                            <button className="btn btn-primary" onClick={handleAdd}>Thêm mới</button>
                            <br></br>
                            <br></br>
                            <h3 className='admin'>Quản lí sản phẩm</h3>
                            <table className="table">
                                <tbody>
                                    <tr>
                                        <th>STT</th>
                                        <th>Mã sản phẩm</th>
                                        <th>Sản phẩm</th>
                                        <th>Tên</th>
                                        <th>Giá tiền</th>
                                        <th>Sửa/Xóa</th>
                                    </tr>
                                    {elementPro}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <ManagerUser />
                {/* tai khoan cua admin */}
                <Footer />
            </div>

        </div>
    )
}
