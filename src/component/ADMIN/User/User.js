import React from "react";
import MemuAdmin from "../MemuAdmin/MemuAdmin";
import HeaderAdmin from "../HeaderAdmin/HeaderAdmin";
function User(props) {
  return (
    <div>
      <HeaderAdmin />
      <div className="row">
        <MemuAdmin />
        <div className="col-xs-9 col-sm-9 col-md-9 col-lg-9">
          <div className="p-3 border">
            <h3>Quản trị Người dùng</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default User;