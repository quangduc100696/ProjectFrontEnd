import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "../Home/Home";
import Shop from "../Shop/Shop";
import About from "../About/About";
import Login from "../Login/Login";
// import LoginAdmin from "../ADMIN/LoginAdmin";
import Cart from "../Cart/Cart";
import Details from "../Details/Details";
import HomeAdmin from "../ADMIN/HomeAdmin/HomeAdmin";
import Category from "../ADMIN/Category/Category";
import EditProduct from "../ADMIN/EditProduct";
import AddProduct from "../ADMIN/AddProduct";
import User from "../ADMIN/User/User";
import CategoryPost from "../ADMIN/CategoryPost/CategoryPost";
import Repport from "../ADMIN/Repport";
import Post from "../ADMIN/Post/Post";
import AddPost from "../ADMIN/Post/AddPost";
import EditPost from "../ADMIN/Post/EditPost";
import LoginAdmin from "../ADMIN/LoginAdmin";
function LeftMenu(props) {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/repport" component={Repport} />
        <Route path="/shop" component={Shop} />
        <Route path="/about" component={About} />
        <Route path="/login" component={Login} />
        <Route path="/cart" component={Cart} />
        <Route path="/details-product/:id" component={Details} />
        <Route path="/login-admin" component={LoginAdmin} />
        {/* Admin */}
        {/* <PrivateRoute path='/admin/home' component={HomeAdmin} /> */}
        <PrivateRoute path="/admin/home">
          <HomeAdmin />
        </PrivateRoute>
        {/* <PrivateRoute path="/admin/editProduct/:id" component={EditProduct} /> */}
        <PrivateRoute path="/admin/editProduct/:id">
          <EditProduct />
        </PrivateRoute>
        {/* <PrivateRoute path="/admin/product" component={AddProduct} /> */}
        <PrivateRoute path="/admin/product">
          <AddProduct />
        </PrivateRoute>
        {/* <PrivateRoute path="/admin/category" component={Category} /> */}
        <PrivateRoute path="/admin/category">
          <Category />
        </PrivateRoute>
        <PrivateRoute path="/admin/user">
          <User />
        </PrivateRoute>
        {/* <PrivateRoute path="/admin/user" component={User} /> */}
        {/* <Redirect to='/' /> */}
        {/* POST */}
        {/* <PrivateRoute path="/admin/post-category" component={CategoryPost} /> */}
        <PrivateRoute path="/admin/post-category">
          <CategoryPost />
        </PrivateRoute>
        {/* <PrivateRoute path="/admin/post" component={Post} /> */}
        <PrivateRoute path="/admin/post">
          <Post />
        </PrivateRoute>
        {/* <PrivateRoute path="/admin/post-add" component={AddPost} /> */}
        <PrivateRoute path="/admin/post-add">
          <AddPost />
        </PrivateRoute>
        {/* <PrivateRoute path="/admin/post-edit/:id" component={EditPost} /> */}
        <PrivateRoute path="/admin/post-edit/:id">
          <EditPost />
        </PrivateRoute>
      </Switch>
    </div>
  );
}

function PrivateRoute({ children, ...rest }) {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        data ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login-admin",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}
const data = sessionStorage.getItem("emailAdmin");
export default LeftMenu;
