import React, { useEffect } from "react";
import MemuAdmin from "../MemuAdmin/MemuAdmin";
import HeaderAdmin from "../HeaderAdmin/HeaderAdmin";
import { connect } from "react-redux";
import {
  get_product_request,
  delete_product_request,
} from "../../../actions/product";
import { Link } from "react-router-dom";
import swal from "sweetalert";
function HomeAdmin(props) {
  const { getProduct, product, deleteProduct } = props;
  useEffect(() => {
    getProduct();
  }, []);
  const deleteData = (id) => {
    swal({
      title: "Bạn chắc chắn muốn xóa",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {
        deleteProduct(id);
        getProduct();
      } else {
        swal("Bạn chưa xóa!");
      }
    });
   
  };
  const listData = (data) => {
    if (data) {
      return data.map((el, index) => (
        <tr key={index}>
          <td>{index + 1}</td>
          <td>{el.name}</td>
          <td>
            {!el.images && <img
              src="http://localhost:3000/images/products/a.jpg"
              width="200px"
              height="150px"
            />}
            {el.images && <img
              src={`http://localhost:3000/${el.images}`}
              width="200px"
              height="150px"
            />}
          </td>
          <td>{el.price}</td>
          <td>{el.amount}</td>
          <td>
            <button
              className="mx-2"
              style={{
                backgroundColor: "#00CC00",
                height: "40px",
                width: "70px",
                border: "none",
              }}
            >
              <Link to={`/admin/editProduct/${el.id}`}>Edit</Link>
            </button>
            <button
              style={{
                backgroundColor: "#003333",
                height: "40px",
                width: "70px",
                border: "none",
              }}
              onClick={() => deleteData(el.id)}
            >
              Delete
            </button>
          </td>
        </tr>
      ));
    }
  };
  return (
    <div>
      <HeaderAdmin />
      <div className="row">
        <MemuAdmin />
        <div className="col-xs-9 col-sm-9 col-md-9 col-lg-9">
          <div className="p-3 border">
            <h3>Quản trị sản phẩm</h3>
            <Link
              to="/admin/product"
              style={{ color: "blue", padding: "10px", float: "right" }}
            >
              Thêm mới sản phẩm
            </Link>
            <table className="table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Tên</th>
                  <th>Hình ảnh</th>
                  <th>Giá</th>
                  <th>Số lượng</th>
                  <th>Quản lý</th>
                </tr>
              </thead>
              <tbody>
                {product.data ? listData(product.data) : "Khong tim thay sp"}
              </tbody>
            </table>
          </div>
        </div>
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
  deleteProduct(id) {
    dispatch(delete_product_request(id));
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(HomeAdmin);
