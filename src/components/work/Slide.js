import React from 'react'

export default function Slide() {
    return (
        <div>
            {/* phan slide */}
            <div className='container text-center  nav-css'>
                <img
                    src="https://www.apple.com/v/iphone-14-pro/c/images/overview/colors/gallery_deep_purple__du23dbfjl1km_large.jpg"
                    alt="Apple"
                />
            </div>
            <div className="container row mt-3 slide ">
                <img
                    src="https://www.apple.com/v/iphone-14-pro/c/images/overview/hero/hero_endframe__dtzvajyextyu_large.jpg"
                    alt="Apple"
                />
            </div>
            <div className="container row mt-3 slide ">
                <img
                    src="https://support.apple.com/content/dam/edam/applecare/images/en_US/psp_heros/hero-banner-homepage.image.large_2x.jpg"
                    alt="Apple"
                />
            </div>
            <div className="container row mt-3 slide1 ">
                <img
                    src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/apple-gift-cards-landing-202006?wid=2982&hei=1176&fmt=jpeg&qlt=90&.v=1653339390751"
                    alt="Apple"
                />
            </div>
            {/* phan slide */}
            {/* phần danh sách list sản phẩm */}
            <div className="listNav">
                <ul>
                    <li>
                        <img
                            className='img-fluid'
                            src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mac-icon-gift-cards-landing-202006?wid=204&hei=116&fmt=png-alpha&.v=1654894467619"
                            alt="Apple"
                        />{" "}
                    </li>
                    <li>
                        <img
                            className='img-fluid'
                            src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-icon-gift-cards-landing-202006?wid=60&hei=116&fmt=png-alpha&.v=1654894467625"
                            alt="Apple"
                        />{" "}
                    </li>
                    <li>
                        <img
                            className='img-fluid'
                            src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-icon-gift-cards-landing-202006?wid=79&hei=116&fmt=png-alpha&.v=1654894467607"
                            alt="Apple"
                        />{" "}
                    </li>
                    <li>
                        <img
                            className='img-fluid'
                            src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/watch-icon-gift-cards-landing-202006?wid=59&hei=116&fmt=png-alpha&.v=1654894467599"
                            alt="Apple"
                        />{" "}
                    </li>
                    <li>
                        <img
                            className='img-fluid'
                            src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/airpods-icon-gift-cards-landing-202006?wid=116&hei=116&fmt=png-alpha&.v=1654894467040"
                            alt="Apple"
                        />{" "}
                    </li>
                </ul>
            </div>
            {/* phần list sản phẩm */}

            <hr />

        </div>
    )
}
