import React, { useEffect, useState } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { connect } from "react-redux";
import { get_product_details_request } from "../../actions/product";
function Cart(props) {
  const { product_cart, getDetails,product_details } = props;
  useEffect(() => {
    getDataLocal();
  }, []);
  console.log(product_details);
  debugger
  let listIdCart = [];
  let listDetailsCart = [];
  if (localStorage.getItem("dataCart") && product_details) {
    listIdCart = JSON.parse(localStorage.getItem("dataCart"));
    listDetailsCart = JSON.parse(localStorage.getItem("detailsProductCart"));
  }else{
    let setDataCart = JSON.parse(localStorage.getItem("dataCart"));
    let setDetailsDataCart = JSON.parse(localStorage.getItem("dataCart"));
  }
  const getDataLocal = () => {
    if (listIdCart && listDetailsCart) {
      listIdCart.forEach((el) => {
        getDetails(el);
      });
    } else {
      console.log("haha");
    }
  };
  const listProductCart = (data) => {
    if(data){
      return data.map((el, index) => (
        <tr key={index}>
          <td>
            <div className="media">
              <div className="d-flex">
                <img
                  src={`http://localhost:3000/${el.images}`}
                  width="150"
                  height="150"
                  alt=""
                />
              </div>
              <div className="media-body">
                <p>{el.name}</p>
              </div>
            </div>
          </td>
          <td>
            <h5>
              {Number(el.price) - (Number(el.price) / 100) * Number(el.sale)}đ
            </h5>
          </td>
          <td>
            <div className="product_count">
              <input
                name={`input_${index}`}
                className="input-number"
                type="text"
                defaultValue={1}
                min={0}
                max={10}
              />
  
              <svg
              style={{ marginLeft:'15 px' }}
                width="1.5em"
                height="1.5em"
                viewBox="0 0 16 16"
                class="bi bi-archive-fill"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M12.643 15C13.979 15 15 13.845 15 12.5V5H1v7.5C1 13.845 2.021 15 3.357 15h9.286zM6 7a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1H6zM.8 1a.8.8 0 0 0-.8.8V3a.8.8 0 0 0 .8.8h14.4A.8.8 0 0 0 16 3V1.8a.8.8 0 0 0-.8-.8H.8z"
                />
              </svg>
            </div>
          </td>
          {/* <td>
            <h5>
              {state
                ? (Number(el.price) -
                    (Number(el.price) / 100) * Number(el.sale)) *
                  Number(state.input_index)
                : Number(el.price) - (Number(el.price) / 100) * Number(el.sale)}
            </h5>
          </td> */}
        </tr>
      ));
    }else{
      return "Khong co san pham"
    }
  
  };
  return (
    <div>
      <Header />
      <section
        className="cart_area section_padding"
        style={{ paddingTop: "0px" }}
      >
        <div className="container">
          <div className="cart_inner">
            <div className="table-responsive">
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">Sản phẩm</th>
                    <th scope="col">Giá</th>
                    <th scope="col">Số lượng</th>
                    {/* <th scope="col">Tổng tiền</th> */}
                  </tr>
                </thead>
                <tbody>
                  {product_cart
                    ? listProductCart(listDetailsCart)
                    : "Không có sản phẩm nào trong giỏ hàng"}
                  {/* <tr className="bottom_button">
                    <td>
                      <a className="btn_1" href="#">
                        Cập nhật giỏ hàng
                      </a>
                    </td>
                    <td />
                    <td />
                    <td></td>
                  </tr> */}
                  <tr>
                    <td />
                    <td />

                    <td>
                      <h5>$2160.00</h5>
                    </td>
                  </tr>
                </tbody>
              </table>
              <div className="checkout_btn_inner float-right">
                <a className="btn_1" href="#">
                  Tiến hành thanh toán
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
const mapStateToProps = (state) => ({
  product_cart: state.productReducer.product_cart,
  product_details: state.productReducer.product_details,
});
const mapDispatchToProps = (dispatch) => ({
  getDetails(id) {
    dispatch(get_product_details_request(id));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
