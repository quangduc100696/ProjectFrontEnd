import React from "react";
import { Link } from "react-router-dom";

function Slide(props) {
  return (
    <div className="slider-area " style={{ height: "600px" }}>
      <div className="slider-active">
        {/* Single Slider */}
        <div className="single-slider slider-height d-flex align-items-center slide-bg">
          <div className="container">
            <div className="row justify-content-between align-items-center">
              <div className="col-xl-8 col-lg-8 col-md-8 col-sm-8">
                <div className="hero__caption">
                  <p
                    data-animation="fadeInLeft"
                    data-delay=".7s"
                    data-duration="2000ms"
                  >
                    Sang trọng và đẳng cấp trong mỗi sản phẩm. Khẳng định sự mạnh mẽ, lịch sự trong sự ngỡ ngàng từ mọi ánh mắt!
                  </p>
                  <div
                    className="hero__btn"
                    data-animation="fadeInLeft"
                    data-delay=".8s"
                    data-duration="2000ms"
                  >
                    <Link className="btn hero-btn" to='/shop'>Mua ngay</Link>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-4 col-sm-4 d-none d-sm-block">
                <div
                  className="hero__img"
                  data-animation="bounceIn"
                  data-delay=".4s"
                >
                  <img
                    src="assets/img/hero/watch.png"
                    alt=""
                    className=" heartbeat"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Slide;
