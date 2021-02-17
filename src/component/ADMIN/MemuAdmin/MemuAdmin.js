import React from "react";
import { Link } from "react-router-dom";

function MemuAdmin(props) {
  return (
    // <div>
    <div
      className="col-xs-3 col-sm-3 col-md-3 col-lg-3 p-4"
      style={{
        height: "100vh",
        backgroundImage: "linear-gradient(rgb(98, 209, 191), pink)",
      }}
    >
      <div className="list-group">
        <Link
          to="/admin/home"
          className="list-group-item list-group-item-action list-group-item-danger"
        >
          Sản phẩm
        </Link>
        <Link
          to="/admin/category"
          className="list-group-item list-group-item-action list-group-item-danger"
        >
          Danh mục
        </Link>
        <Link
          to="/admin/post"
          className="list-group-item list-group-item-action list-group-item-danger"
        >
          Bài viết
        </Link>
        <Link
          to="/admin/post-category"
          className="list-group-item list-group-item-action list-group-item-danger"
        >
          Danh mục bài viết
        </Link>
        <Link
          to="/admin/user"
          className="list-group-item list-group-item-action list-group-item-danger"
        >
          Người dùng
        </Link>
        <Link to='/repport'
          href="#"
          className="list-group-item list-group-item-action list-group-item-danger"
        >
          Báo cáo
        </Link>
      </div>
    </div>
    // </div>
  );
}

export default MemuAdmin;
