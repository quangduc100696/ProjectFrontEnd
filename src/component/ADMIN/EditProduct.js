import React, { useState, useEffect } from "react";
import HeaderAdmin from "./HeaderAdmin/HeaderAdmin";
import MemuAdmin from "./MemuAdmin/MemuAdmin";
import { useParams, useHistory } from "react-router-dom";
import { Editor } from "@tinymce/tinymce-react";
import "./style.css";
import { useForm } from "react-hook-form";
import {
  get_product_details_request,
  save_product,
} from "../../actions/product";
import { get_cate_request } from "../../actions/cate";
import { connect } from "react-redux";
function EditProduct(props) {
  const history = useHistory();
  const [file, setFile] = useState(null);
  const [images, setImages] = useState(null);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [amount, setAmount] = useState("");
  const [sale, setSale] = useState("");
  const [cate_id, setCate] = useState("");
  const [details, setDetails] = useState("");
  const [cateName, setCateNAme] = useState("");
  const [status,setStatus] = useState(false);
  const { handleSubmit, register, errors } = useForm();
  const onChangeFile = async (event) => {
    const nameImages = event.target.files[0];
    await setFile(URL.createObjectURL(event.target.files[0]));
    setImages(nameImages);
  };
  const showImages = () =>{
    setStatus(true);
  }
  const { id } = useParams();
  const { product_details, getDetails, category, getCate, saveProduct } = props;
  useEffect(() => {
    getDetails(id);
    getCate();
  }, [getDetails, id]);
  useEffect(() => {
    setName(product_details.name);
    setPrice(product_details.price);
    setAmount(product_details.amount);
    setSale(product_details.sale);
    setCate(product_details.cate_id);
    setDetails(product_details.details);
    setImages(product_details.images);
    setCateNAme(product_details.cate);
  }, [product_details]);
  const updateProduct = () => {
    var formData = new FormData();
    formData.set("image", images);
    formData.set("name", name);
    formData.set("price", price);
    formData.set("amount", amount);
    formData.set("sale", sale);
    formData.set("cate_id", cate_id);
    formData.set("details", details);
    formData.set("id", id);
    saveProduct(formData);
    setTimeout(() => {
      history.push("/admin/home");
    }, 2000);
  };
  const changeText = (content, editor) => {
    setDetails(content);
  };
  return (
    <div>
      <HeaderAdmin />
      <div className="row">
        <MemuAdmin />
        <div className="col-xs-9 col-sm-9 col-md-9 col-lg-9">
          <div className="p-3 border">
            <h3>Quản trị sản phẩm</h3>
            <div className="row">
              <div className="col-md-6">
                <form>
                  <label>Tên sản phẩm</label>
                  <input
                    className="form-control"
                    onChange={(e) => setName(e.target.value)}
                    name="name"
                    value={name}
                    ref={register({
                      required: "Vui lòng điền tên sản phẩm",
                    })}
                  />
                  <span id="err">
                    {errors.name && errors.name.message} <br />
                  </span>
                  <label>Giá</label>
                  <input
                    className="form-control"
                    onChange={(e) => setPrice(e.target.value)}
                    name="price"
                    value={price}
                    ref={register({
                      required: "Vui lòng điền số lượng",
                      pattern: {
                        value: /^[0-9]+$/,
                        message: "Nhập số",
                      },
                    })}
                  />
                  <span id="err">
                    {errors.price && errors.price.message} <br />
                  </span>
                  <label>Số lượng</label>
                  <input
                    className="form-control"
                    onChange={(e) => setAmount(e.target.value)}
                    name="amount"
                    value={amount}
                    ref={register({
                      required: "Vui lòng điền số lượng",
                      pattern: {
                        value: /^[0-9]+$/,
                        message: "Nhập số",
                      },
                    })}
                  />
                  <span id="err">
                    {errors.amount && errors.amount.message} <br />
                  </span>
                  <label>Giảm giá</label>
                  <input
                    className="form-control"
                    onChange={(e) => setSale(e.target.value)}
                    name="sale"
                    value={sale}
                    ref={register({
                      required: "Vui lòng điền giảm giá",
                      pattern: {
                        value: /^[0-9]+$/,
                        message: "Nhập số",
                      },
                    })}
                  />
                  <span id="err">
                    {errors.sale && errors.sale.message} <br />
                  </span>
                  <label>Danh mục</label> <br />
                  <select name="cate" onChange={(e) => setCate(e.target.value)}>
                  <option checked value={cate_id}>{cateName?cateName.name:''}</option>
                    {category.data
                      ? category.data.rows.map((el, index) => {
                          return (
                            <option key={index} value={el.id}>
                              {el.name}
                            </option>
                          );
                        })
                      : ""}
                  </select>
                  <br />
                  <br />
                  <label>Hình ảnh</label>
                  {status? <input
                    name="images"
                    type="file"
                    // value={`${images}`}
                    onChange={onChangeFile}
                    ref={register({
                      required: "Vui lòng chọn ảnh sản phẩm",
                    })}
                  />:''}
                 
                  <span id="err">
                    {errors.images && errors.images.message} <br />
                  </span>
                  <br />
                  <span
                  onClick={showImages}
                  style={{
                    backgroundColor: "#00CC40",
                    padding: "10px",
                    width: "100px",
                    border: "none",
                  }}
                  >Thay đổi
                  </span>
                  <br />
                  {file?<img src={file} width="150px" height="150px" /> : <img src={`http://localhost:3000/${images}`} width="150px" height="150px" />}
                </form>
              </div>
              <div className="col-md-6">
                <label>Chi tiết sản phẩm</label>
                <Editor
                  textareaName="details"
                  onEditorChange={changeText}
                  value={details}
                  init={{
                    height: 385,
                    menubar: false,
                  }}
                />
              </div>
            </div>
            <button
              onClick={handleSubmit(updateProduct)}
              className="my-2"
              style={{
                backgroundColor: "#00CC00",
                height: "40px",
                width: "100px",
                border: "none",
              }}
            >
              Cập nhật
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
const mapStateToProps = (state) => ({
  product_details: state.productReducer.product_details,
  category: state.cateReducer.cate,
});
const mapDispatchToProps = (dispatch) => ({
  getDetails(id) {
    dispatch(get_product_details_request(id));
  },
  getCate() {
    dispatch(get_cate_request());
  },
  saveProduct(id, data) {
    dispatch(save_product(id, data));
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(EditProduct);
