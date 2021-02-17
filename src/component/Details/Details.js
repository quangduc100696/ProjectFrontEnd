import React, { useEffect } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import parse from 'html-react-parser';
import { get_product_details_request,add_cart } from "../../actions/product";
import { connect } from "react-redux";
import { useParams,useHistory } from "react-router-dom";
import { Editor } from "@tinymce/tinymce-react";
import swal from "sweetalert";
function Details(props) {
  const history = useHistory();
  const { id } = useParams();
  const { product_details, getDetails,addProductToCart,product_cart } = props;
  useEffect(() => {
    getDetails(id);
  }, [getDetails, id]);
  const addToCart = (id) => {
    if (!localStorage.getItem("dataCart")) {
      addProductToCart(product_details);
      let data = [];
      let data2 = [];
      data.push(id);
      data2.push(product_details);
      const dataCart = JSON.stringify(data);
      localStorage.setItem("dataCart", dataCart);
      localStorage.setItem('detailsProductCart',JSON.stringify(data2));
      swal("Thêm vào giỏ hàng thành công!");
       setTimeout(()=>{
          history.push('/cart')
       },2000)
    } else {
      const dataDefaultCart = JSON.parse(localStorage.getItem("dataCart"));
      let data3 =JSON.parse(localStorage.getItem('detailsProductCart'));
      let check = dataDefaultCart.indexOf(id);
      if (check === -1) {
        dataDefaultCart.push(id);
        data3.push(product_details)
        localStorage.setItem("dataCart", JSON.stringify(dataDefaultCart));
        addProductToCart(product_details);
        localStorage.setItem('detailsProductCart',JSON.stringify(data3));
        swal("Thêm vào giỏ hàng thành công!");
       setTimeout(()=>{
          history.push('/cart')
       },2000)
      } else {
        swal("Sản phẩm đã tồn tại trong giỏ hàng!");
      }
    }
  };
  console.log(product_cart);
  return (
    <div>
      <Header />
      <div className="product_image_area" style={{ marginTop: "0px" }}>
        <h1 className="text-center">Chi tiết sản phẩm</h1>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <img
                src={`http://localhost:3000/${product_details.images}`}
                style={{ width: "100%", height: "500px" }}
              />
            </div>
            <div className="col-lg-12">
              <div className="single_product_text text-center">
                <h3>{product_details.name}</h3>
                <span>{product_details.amount>0?'Còn hàng':'Hết hàng'}</span>
               { parse(`${product_details.details}`)}
                <div className="card_area">
                  <div className="add_to_cart">
                    <a
                      href="#"
                      className="btn_3"
                      onClick={() => addToCart(product_details.id)}
                    >
                      add to cart
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
const mapStateToProps = (state) => ({
  product_details: state.productReducer.product_details,
  product_cart:state.productReducer.product_cart,
});
const mapDispatchToProps = (dispatch) => ({
  getDetails(id) {
    dispatch(get_product_details_request(id));
  },
  addProductToCart(data){
    dispatch(add_cart(data));
  }
});
export default connect(mapStateToProps, mapDispatchToProps)(Details);
