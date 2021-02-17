import React, { useState, useEffect } from "react";
import HeaderAdmin from "../HeaderAdmin/HeaderAdmin";
import MemuAdmin from "../MemuAdmin/MemuAdmin";
import { Editor } from "@tinymce/tinymce-react";
import { add_post } from "../../../actions/post/post";
import { get_cate_post_request } from "../../../actions/post/cate";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import "../style.css";
function AddPost(props) {
  const history = useHistory();
  const { addPost, getCate, cate } = props;
  useEffect( () => {
    getCate();
  }, []);
  const [file, setFile] = useState(null);
  const [images, setImages] = useState(null);
  const [tittle, setTitle] = useState("");
  const [cate_id, setCate] = useState("");
  const [content, setContent] = useState("");
  const [user,setUser] = useState(1);
  const onChangeFile = async (event) => {
    const nameImages = event.target.files[0];
    await setFile(URL.createObjectURL(event.target.files[0]));
    setImages(nameImages);
  };
  const { handleSubmit, register, errors } = useForm();
  const clickAddPost= (event) => {
    var formData = new FormData();
    formData.set("image", images);
    formData.set("tittle", tittle);
    formData.set("cate_id", cate_id);
    formData.set("content", content);
    formData.set("user", 1);
    debugger
    addPost(formData);
    setTimeout(() => {
      history.push("/admin/post");
    }, 2000);
  };
  const changeSelect = (event) => {
    setCate(event.target.value);
  };
  const changeText = (content, editor) => {
    setContent(content);
  };
  return (
    <div>
      <HeaderAdmin />
      <div className="row">
        <MemuAdmin />
        <div className="col-xs-9 col-sm-9 col-md-9 col-lg-9">
          <div className="p-3 border">
            <h3>Quản trị bài viết</h3>
            <div className="row">
              <div className="col-md-6">
                <form encType="multipart/form-data">
                  <label>Tiêu đề bài viết</label>
                  <input
                    className="form-control"
                    onChange={(e) => setTitle(e.target.value)}
                    ref={register({
                      required: "Vui lòng điền tiêu đề bài viết", 
                    })}
                    name="tittle"
                    value={tittle}
                  />
                  <span id="err">
                    {errors.tittle && errors.tittle.message} <br />
                  </span>
                  <input name='user' value={user} type='hidden' />
                  <label>Danh mục</label> <br />
                  <select
                    name="cate_id"
                    onChange={changeSelect}
                    value={cate_id}
                    ref={register({
                      required: "Vui lòng chọn danh mục của bài viết",
                    })}
                  >
                    <option>---Chọn Danh mục---</option>
                    {cate.data
                      ? cate.data.map((el, index) => {
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
                      required: "Vui lòng chọn ảnh bài viết",
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
                <label>Chi tiết bài viết</label>
                <Editor
                  textareaName="content"
                  onEditorChange={changeText}
                  value={content}
                  init={{
                    height: 385,
                    menubar: false,
                  }}
                  ref={register({
                    required: "Vui lòng điền đầy đủ",
                  })}
                />
                {errors.content && errors.content.message} <br />
              </div>
            </div>
            <button
              onClick={handleSubmit(clickAddPost)}
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
  cate: state.catePostReducer.cate_post,
});
const mapDispatchToProps = (dispatch) => ({
  addPost: (data) => dispatch(add_post(data)),
  getCate() {
    dispatch(get_cate_post_request());
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(AddPost);
