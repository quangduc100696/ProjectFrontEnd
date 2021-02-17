import React, { useState, useEffect } from "react";
import HeaderAdmin from "./HeaderAdmin/HeaderAdmin";
import MemuAdmin from "./MemuAdmin/MemuAdmin";
import { Editor } from "@tinymce/tinymce-react";
import { add_product } from "../../actions/product";
import { get_cate_request } from "../../actions/cate";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import "./style.css";
function AddProduct(props) {
  const history = useHistory();
  const { addProduct, getCate, cate } = props;
  useEffect(() => {
    getCate();
  }, []);
  const [file, setFile] = useState(null);
  const [images, setImages] = useState(null);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [amount, setAmount] = useState("");
  const [sale, setSale] = useState("");
  const [cate_id, setCate] = useState("");
  const [details, setDetails] = useState("");
  const onChangeFile = async (event) => {
    const nameImages = event.target.files[0];
    await setFile(URL.createObjectURL(event.target.files[0]));
    setImages(nameImages);
  };
  const { handleSubmit, register, errors } = useForm();
  const clickAddProduct = (event) => {
    var formData = new FormData();
    formData.set("image", images);
    formData.set("name", name);
    formData.set("price", price);
    formData.set("amount", amount);
    formData.set("sale", sale);
    formData.set("cate_id", cate_id);
    formData.set("details", details);
    // addProduct({ name, formData, price, amount, sale, cate_id, details });
    addProduct(formData);
    setTimeout(() => {
      history.push("/admin/home");
    }, 2000);
  };
  const changeSelect = (event) => {
    setCate(event.target.value);
  };
  const changeText = (content, editor) => {
    setDetails(content);
  };
  console.log(images);

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
                <form encType="multipart/form-data">
                  <label>Tên sản phẩm</label>
                  <input
                    className="form-control"
                    onChange={(e) => setName(e.target.value)}
                    ref={register({
                      required: "Vui lòng điền tên sản phẩm", 
                    })}
                    name="name"
                    value={name}
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
                      required: "Vui lòng điền giá",
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
                  <select
                    name="cate_id"
                    onChange={changeSelect}
                    value={cate_id}
                    ref={register({
                      required: "Vui lòng chọn danh mục của sản phẩm",
                    })}
                  >
                    <option>---Chọn Danh mục---</option>
                    {cate.data
                      ? cate.data.rows.map((el, index) => {
                          return (
                            
                            <option key={index} value={el.id}>
                              {el.name}
                            </option>
                          );
                        })
                      : ""}
                  </select> <br />
                  <span id="err">
                    {errors.cate_id && errors.cate_id.message}
                  </span>
                  <br />
                  <br />
                  <label>Hình ảnh</label>
                  <input
                    name="images"
                    type="file"
                    onChange={onChangeFile}
                    ref={register({
                      required: "Vui lòng chọn ảnh sản phẩm",
                    })}
                  />
                  <br />
                  <span id="err">
                    {errors.images && errors.images.message} <br />
                  </span>
                  <br />
                  {file ? <img src={file} width="150px" height="150px" /> : ""}
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
                  ref={register({
                    required: "Vui lòng điền đầy đủ",
                  })}
                />
                {errors.details && errors.details.message} <br />
              </div>
            </div>
            <button
              onClick={handleSubmit(clickAddProduct)}
              type="submit"
              className="my-2"
              style={{
                backgroundColor: "#00CC00",
                height: "40px",
                width: "100px",
                border: "none",
              }}
            >
              Thêm mới
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
const mapStateToProps = (state) => ({
  cate: state.cateReducer.cate,
});
const mapDispatchToProps = (dispatch) => ({
  addProduct: (data) => dispatch(add_product(data)),
  getCate() {
    dispatch(get_cate_request());
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(AddProduct);
