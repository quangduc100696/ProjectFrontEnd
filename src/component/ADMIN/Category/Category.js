import React, { useEffect, useState } from "react";
import MemuAdmin from "../MemuAdmin/MemuAdmin";
import HeaderAdmin from "../HeaderAdmin/HeaderAdmin";
import { connect } from "react-redux";
import swal from "sweetalert";
import {
  get_cate_request,
  delete_cate,
  add_cate,
  edit_cate,
} from "../../../actions/cate";
function Category(props) {
  const { getCate, cate, deleteCate, addCate, saveCate } = props;
  const [name, setName] = useState("");
  const [err, setErr] = useState("");
  const [id, setId] = useState("");
  useEffect(() => {
    getCate();
  }, []);
  const deleteCateById = (id) => {
    if (id) {
      swal({
        title: "Bạn chắc chắn muốn xóa",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      })
      .then((willDelete) => {
        if (willDelete) {
          deleteCate(id);
          getCate();
          setName('');
          setId('')
        } else {
          swal("Bạn chưa xóa!");
        }
      });
      
    }
  };
  const changeInputName = (event) => {
    setName(event.target.value);
  };
  const addCategory = (data) => {
    if (data) {
      addCate(data);
      getCate();
      setName("");
      setErr("");
    } else {
      setErr("Không được để trống!");
    }
  };
  const findById = (id) => {
    if (cate && id) {
      const data = cate.data.rows.filter((el, index) => el.id === id);
      if (data.length > 0) {
        setName(data[0].name);
        setId(data[0].id);
      }
    }
  };
  const saveCategory = (id,name) => {
    if (name && id) {
      saveCate(id,name);
      getCate();
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
  return (
    <div>
      <HeaderAdmin />
      <div className="row">
        <MemuAdmin />
        <div className="col-xs-9 col-sm-9 col-md-9 col-lg-9">
          <div className="p-3 border">
            <h3>Quản trị danh mục</h3>
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
                    onClick={() => saveCategory(id,name)}
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
                  <tbody>{cate.data ? listCate(cate.data.rows) : ""}</tbody>
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
  cate: state.cateReducer.cate,
});
const mapDispatchToProps = (dispatch) => ({
  getCate() {
    dispatch(get_cate_request());
  },
  deleteCate(id) {
    dispatch(delete_cate(id));
  },
  addCate(data) {
    dispatch(add_cate(data));
  },
  saveCate(id,name) {
    dispatch(edit_cate(id,name));
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(Category);
