import React, { useEffect, useState } from "react";
import MemuAdmin from "../MemuAdmin/MemuAdmin";
import HeaderAdmin from "../HeaderAdmin/HeaderAdmin";
import { connect } from "react-redux";
import swal from "sweetalert";
import {
  delete_cate_post,
  add_cate_post,
  edit_cate_post,
} from "../../../actions/post/cate.js";
import { get_cate_post_request } from "../../../actions/post/cate";
function CategoryPost(props) {
  const {
    getCate,
    cate_post,
    delete_cate_post,
    add_cate_post,
    save_cate_post,
  } = props;
  const [name, setName] = useState("");
  const [err, setErr] = useState("");
  const [id, setId] = useState("");
  useEffect(() => {
    getCate();
  }, []);
  const deleteCateById = async (id) => {
    debugger;
    if (id) {
      swal({
        title: "Bạn chắc chắn muốn xóa",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      }).then((willDelete) => {
        if (willDelete) {
          delete_cate_post(id);
          getCate();
          setName("");
          setId("");
        } else {
          swal("Bạn chưa xóa!");
        }
      });
    }
  };
  const changeInputName = (event) => {
    setName(event.target.value);
  };
  const addCategory = async (data) => {
    if (data) {
      await add_cate_post(data);
      await getCate();
      setName("");
      setErr("");
    } else {
      setErr("Không được để trống!");
    }
  };
  const findById = (id) => {
    if (cate_post && id) {
      const data = cate_post.data.filter((el, index) => el.id === id);
      if (data.length > 0) {
        setName(data[0].name);
        setId(data[0].id);
      }
    }
  };
  const saveCategory = async (id, name) => {
    if (name && id) {
      await save_cate_post(id, name);
      await getCate();
      setName("");
      setId("");
    }
  };
  const listCate = (data) => {
    if (data) {
      return data.map((el, index) => (
        <tr key={index}>
          <td>{el.name}</td>
          <td>
            <button
              onClick={() => findById(el.id)}
              style={{
                backgroundColor: "#00CC00",
                height: "40px",
                width: "60px",
                border: "none",
              }}
            >
              Edit
            </button>
            <button
              onClick={() => deleteCateById(el.id)}
              className="mx-2"
              style={{
                backgroundColor: "#00CC99",
                height: "40px",
                width: "60px",
                border: "none",
              }}
            >
              Delete
            </button>
          </td>
        </tr>
      ));
    }
  };
  console.log(cate_post);
  debugger;
  return (
    <div>
      <HeaderAdmin />
      <div className="row">
        <MemuAdmin />
        <div className="col-xs-9 col-sm-9 col-md-9 col-lg-9">
          <div className="p-3 border">
            <h3>Quản trị danh mục bài viết</h3>
            <div className="row">
              <div className="col-md-6">
                <label>Tên danh mục</label>
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  onChange={changeInputName}
                  value={name}
                />
                <p> {err ? err : ""}</p>

                {name && id ? (
                  <button
                    onClick={() => saveCategory(id, name)}
                    className="my-2"
                    style={{
                      backgroundColor: "#00CC00",
                      height: "40px",
                      width: "100px",
                      border: "none",
                    }}
                  >
                    Lưu
                  </button>
                ) : (
                  <button
                    onClick={() => addCategory(name)}
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
                )}
              </div>
              <div className="col-md-6">
                <table className="table">
                  <thead>
                    <tr>
                      <th>Tên danh mục</th>
                      <th>Quản lý</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cate_post
                      ? listCate(cate_post.data)
                      : "Không có danh mục nào!"}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
const mapStateToProps = (state) => ({
  cate_post: state.catePostReducer.cate_post,
});
const mapDispatchToProps = (dispatch) => ({
  getCate() {
    dispatch(get_cate_post_request());
  },
  delete_cate_post(id) {
    dispatch(delete_cate_post(id));
  },
  add_cate_post(data) {
    dispatch(add_cate_post(data));
  },
  save_cate_post(id, name) {
    dispatch(edit_cate_post(id, name));
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(CategoryPost);
