import React, { useEffect } from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Slide from "../Slide/Slide";
import { connect } from "react-redux";
import { get_cate_request } from "../../actions/cate";
import {get_product_by_cate_request,get_product_request} from '../../actions/product';
import { Link } from "react-router-dom";
import HotProduct from "../HotProduct/HotProduct";
function Shop(props) {
  const { getCate, cate,productCate,getProductByCate,getProduct,product } = props;
  useEffect(() => {
    getCate();
    getProduct()
  }, []);
  console.log(product);
  debugger
  const getProductByCategory =id =>{
    getProductByCate(id);
  }
  const getListCate = (data) => {
    if (data) {
      debugger
      return data.rows.map((el, index) => (
        <Link
          className="nav-item nav-link"
          id="nav-home-tab"
          data-toggle="tab"
          to={`/shop/${el.id}`}
          role="tab"
          aria-controls="nav-home"
          aria-selected="true"
          key={index}
          onClick = {() =>getProductByCategory(el.id)}
        >
          {el.name}
        </Link>
      ));
    }
  };
  const litsProduct = (data1,data2) =>{
    if(data1){
      return data1.map((el,index) =>(
        <div key={index} className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
          <div className="single-popular-items mb-50 text-center">
            <div className="popular-img">
              <Link to="details-product">
                <img src={`http://localhost:3000/${el.images}`} alt="" />
              </Link>
              <div className="favorit-items">
                <span className="flaticon-heart" />
              </div>
            </div>
            <div className="popular-caption">
              <h3>
                <Link to={`details-product/${el.id}`}>
                  {el.name}
                </Link>
              </h3>
              <del>$ {el.price}</del>
              <span>{Number(el.price)-((Number(el.price) / 100) * Number(el.sale))}</span>
            </div>
          </div>
        </div>
      ))
    }else{
      return data2.map((el,index) =>(
        <div key={index} className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
          <div className="single-popular-items mb-50 text-center">
            <div className="popular-img">
              {/* <Link to="/details-product">
                <img src="http://localhost:3000/images/products/a.jpg" alt="" />
              </Link> */}

              <div className="img-cap">
                <span>Add to cart</span>
              </div>
              <div className="favorit-items">
                <span className="flaticon-heart" />
              </div>
            </div>
            <div className="popular-caption">
              <h3>
                <Link to={`details-product/${el.id}`}>
                  {el.name}
                </Link>
              </h3>
              <del>$ {el.price}</del>
              <span>{Number(el.price)-((Number(el.price) / 100) * Number(el.sale))}</span>
            </div>
          </div>
        </div>
      ))
    }
  }
  return (
    <div>
      <Header />
      <Slide />
      <HotProduct />
      <main>
        <section className="popular-items">
          <div className="container">
            <div className="row product-btn justify-content-between mb-40">
              <div className="properties__button">
                <nav>
                  <div className="nav nav-tabs" id="nav-tab" role="tablist">
                    {cate.data?getListCate(cate.data):''}
                  </div>
                </nav>
              </div>
              <div className="grid-list-view"></div>
            </div>
            <div className="tab-content" id="nav-tabContent">
              <div
                className="tab-pane fade show active"
                id="nav-home"
                role="tabpanel"
                aria-labelledby="nav-home-tab"
              >
                <div className="row">
                  {product.data?litsProduct(productCate,product.data.rows):''}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
const mapStateToProps = (state) => ({ 
  cate: state.cateReducer.cate,
  productCate:state.productReducer.product_cate,
  product: state.productReducer.product,
 });
const mapDispatchToProps = (dispatch) => ({
  getCate() {
    dispatch(get_cate_request());
  },
  getProductByCate(id){
    dispatch(get_product_by_cate_request(id))
  },
  getProduct() {
    dispatch(get_product_request());
  },

});
export default connect(mapStateToProps, mapDispatchToProps)(Shop);
