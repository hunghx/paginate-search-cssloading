import React, { useEffect } from 'react';
import { act_get_user } from '../../redux/action';
import { useDispatch, useSelector } from 'react-redux';

export default function ManagerUser() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(act_get_user())
    }, []);
    const listUser = useSelector(state => state.users);
    let elementUser = listUser.map((user, index) => {
        return <tr key={user.id}>
            <td>{index + 1}</td>
            <td>{user.id}</td>
            <td>{user.userName}</td>
            <td>{user.password}</td>
            <td>{user.email}</td>
            <td>
                <button className="btn btn-warning">Sửa</button>&nbsp;
                <button className="btn btn-danger">Xóa</button>
            </td>
        </tr>
    })
    return (
        <div className='cart container'>
            <h3 className='admin'>Tài khoản</h3><br></br>
            <table className='table'>
                <thead>
                    <tr>
                        <th>STT</th>
                        <th>ID</th>
                        <th>Họ & Tên</th>
                        <th>Mật khẩu</th>
                        <th>Email</th>
                        <th>SỬA</th>
                    </tr>
                </thead>
                <tbody>
                    {elementUser}
                </tbody>
            </table>
        </div>
    )
}
