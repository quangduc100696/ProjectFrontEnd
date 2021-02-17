import React, { useEffect } from "react";
import MemuAdmin from "../MemuAdmin/MemuAdmin";
import HeaderAdmin from "../HeaderAdmin/HeaderAdmin";
import { connect } from "react-redux";
import swal from "sweetalert";
import {
  get_post_request,
  delete_post_request,
} from "../../../actions/post/post.js";
import { Link } from "react-router-dom";
function Post(props) {
  const { post, getPost, deletePost } = props;
  useEffect(() => {
    getPost();
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
        deletePost(id);
        getPost();
      } else {
        swal("Bạn chưa xóa!");
      }
    });
    
  };
  const listData = (data) => {
    if (data) {
      console.log(data);
      return data.map((el, index) => (
        <tr key={index}>
          <td>{index + 1}</td>
          <td>{el.tittle}</td>
          <td>
            {!el.images && (
              <img
                src="http://localhost:3000/images/products/a.jpg"
                width="200px"
                height="150px"
              />
            )}
            {el.images && (
              <img
                src={`http://localhost:3000/${el.images}`}
                width="200px"
                height="150px"
              />
            )}
          </td>
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
              <Link to={`/admin/post-edit/${el.id}`}>Edit</Link>
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
            <h3>Quản trị bài viết</h3>
            <Link
              to="/admin/post-add"
              style={{ color: "blue", padding: "10px", float: "right" }}
            >
              Thêm mới bài viết
            </Link>
            <table className="table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Tiêu đề</th>
                  <th>Hình ảnh</th>
                  <th>Quản lý</th>
                </tr>
              </thead>
              <tbody>
                {post.data ? listData(post.data.rows) : "Khong tim thay sp"}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
const mapStateToProps = (state) => ({
  post: state.postReducer.post,
});
const mapDispatchToProps = (dispatch) => ({
  getPost() {
    dispatch(get_post_request());
  },
  deletePost(id) {
    dispatch(delete_post_request(id));
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(Post);
