import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { act_get_pro } from '../../redux/action'
import Footer from '../work/Footer'
import Header from '../work/Header'
import Page from '../work/Page'
import Slide from '../work/Slide'

export default function Product() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    useEffect(() => {
        dispatch(act_get_pro())
    }, []);
    const listPro = useSelector(state => state.products);
    let elementPro = listPro.map((product) => {
        return <div className="col-3" key={product.id}>
            <div className="card h-100">
                <img
                    src={product.img}
                    className="card-img-top"
                    alt={product.productName}
                />
                <div className="card-body">
                    <h5 className="card-title">{product.productName}</h5>
                    <p className="card-text">Giá sản phẩm: {product.price}$</p>
                </div>
                <div className="card-footer">
                    <button className="btn btn-dark">Mua</button>
                </div>
            </div>
        </div>
    })

    return (
        <div>
            <Header />
            <Slide />
            {/* phần sản phẩm hiển thị */}
            <div className="title">
                <h1>
                    <b>Sản phẩm <span className='spanPro'>HOT</span></b>
                </h1>
            </div>
            <div className="row row-cols-1 row-cols-md-3 g-4 product">
                {elementPro}

            </div>
            <hr />
            <Page />
            <Footer />
        </div>
    )
}
