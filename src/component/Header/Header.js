import React from "react";
import { Link } from "react-router-dom";
function Header(props) {
  return (
    <div>
      <header>
        <div className="header-area">
          <div className="main-header header-sticky">
            <div className="container-fluid">
              <div className="menu-wrapper">
                <div className="logo">
                  <Link to="/">
                    <img src="assets/img/logo/logo.png" alt="" />
                  </Link>
                </div>
                <div className="main-menu d-none d-lg-block">
                  <nav>
                    <ul id="navigation">
                      <li>
                        <Link to="/">Trang chủ</Link>
                      </li>
                      <li>
                        <Link to="/shop">Cửa hàng</Link>
                      </li>
                      <li>
                        <Link to="/about">Giới thiệu</Link>
                      </li>
                      {/* <li>
                        <a href="#">Pages</a>
                        <ul className="submenu">
                          <li>
                            <Link to="/login">Đăng nhập</Link>
                          </li>
                          <li>
                            <Link to="/cart">Giỏ hàng</Link>
                          </li>
                        </ul>
                      </li> */}
                    </ul>
                  </nav>
                </div>
                <div className="header-right">
                  <ul>
                    <li>
                      <div className="nav-search search-switch">
                        <span className="flaticon-search" />
                      </div>
                    </li>
                    {sessionStorage.getItem("email") ? (
                      sessionStorage.getItem("email")
                    ) : (
                      <li>
                        <Link to="/login">
                          <span className="flaticon-user" />
                        </Link>
                      </li>
                    )}
                    <li>
                      <Link to="/cart">
                        <span className="flaticon-shopping-cart" />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-12">
                <div className="mobile_menu d-block d-lg-none" />
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
export default Header;
