import React from 'react'
import Footer from './Footer'
import Header from './Header'

export default function Cart() {
    return (
        <div>
            <div className="container">
               <Header/>
                {/* phần <header></header> */}
                {/* phần sản phẩm */}
                <div className="cart">
                    <h1> Thông tin đặt hàng</h1>
                    <table className="table container">
                        <tbody>
                            <tr>
                                <th>Tên người nhận:</th>
                                <td colSpan={6}>
                                    <input type="text" />
                                </td>
                            </tr>
                            <tr>
                                <th>Email:</th>
                                <td colSpan={6}>
                                    <input type="text" />
                                </td>
                            </tr>
                            <tr>
                                <th>Số điện thoại:</th>
                                <td colSpan={6}>
                                    <input type="text" />
                                </td>
                            </tr>
                            <tr>
                                <th>Địa chỉ:</th>
                                <td colSpan={6}>
                                    <input type="text" />
                                </td>
                            </tr>
                        </tbody>
                        <tbody>
                            <tr>
                                <th>STT</th>
                                <th>Mã đơn hàng</th>
                                <th>Sản phẩm</th>
                                <th>Tên</th>
                                <th>Giá tiền</th>
                                <th>Số lượng</th>
                                <th>Sửa</th>
                            </tr>
                            <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <th>Tổng tiền: </th>
                                <td colSpan={6}>$</td>
                            </tr>
                        </tbody>
                    </table>
                    <br/>
                   
                    <button className="btn btn-info">Đặt hàng</button>
                </div>
                {/* phần sản phẩm */}
                {/*    phần footer*/}
               <Footer/>
            </div>

        </div>
    )
}
