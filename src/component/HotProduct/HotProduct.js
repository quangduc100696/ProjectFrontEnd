import React, { useEffect } from "react";
import { connect } from "react-redux";
import { get_product_request } from "../../actions/product";
import { Link } from "react-router-dom";
function HotProduct(props) {
  const { getProduct, product } = props;
  useEffect(() => {
    getProduct();
  }, []);
  console.log(product.data);
  const listHotProduct = (data) => {
    if (data) {
      return data.map((el, index) => (
        <div key={index} className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
          <div className="single-popular-items mb-50 text-center">
            <div className="popular-img">
              <Link to={`/details-product/${el.id}`}>
                {!el.images && (
                  <img
                    src="http://localhost:3000/images/products/a.jpg"
                    alt=""
                  />
                )}
                {el.images && (
                  <img
                    src={`http://localhost:3000/${el.images}`}
                    height="300px"
                    width="300px"
                    alt=""
                  />
                )}
              </Link>
              <div className="favorit-items">
                <span className="flaticon-heart" />
              </div>
            </div>
            <div className="popular-caption">
              <h3>
                <Link to={`details-product/${el.id}`}>
                  <a href="product_details.html">{el.name}</a>
                </Link>
              </h3>
              <del>$ {el.price}</del>
              <span>{Number(el.price)-((Number(el.price) / 100) * Number(el.sale))}</span>
            </div>
          </div>
        </div>
      ));
    }
  };
  return (
    <div className="popular-items my-3">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-7 col-lg-8 col-md-10">
            <div className="section-tittle mb-70 text-center">
              <h2>Danh sản phẩm</h2>
            </div>
          </div>
        </div>
        <div className="row">{product ? listHotProduct(product.data) : ""}</div>
      </div>
    </div>
  );
}
const mapStateToProps = (state) => ({
  product: state.productReducer.product,
});
const mapDispatchToProps = (dispatch) => ({
  getProduct() {
    dispatch(get_product_request());
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(HotProduct);
