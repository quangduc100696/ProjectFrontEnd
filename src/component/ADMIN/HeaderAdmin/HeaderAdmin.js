import React from "react";
import {Link, useHistory} from 'react-router-dom'
function HeaderAdmin(props) {
  const history = useHistory();
  const logout = () =>{
    sessionStorage.removeItem('emailAdmin');
    sessionStorage.removeItem('token');
    history.push('/');
  }
  return (
    <div>
      <nav className="navbar navbar-light bg-light">
        <Link to='/admin/home' className="navbar-brand">Cao The Anh</Link>
        <div className="dropdown">
          <div
            className="dropdown-toggle mr-5"
            type="button"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
           {sessionStorage.getItem('emailAdmin')}
          </div>
          <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <a className="dropdown-item" onClick={() =>logout()}>
              Đăng xuất
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default HeaderAdmin;
