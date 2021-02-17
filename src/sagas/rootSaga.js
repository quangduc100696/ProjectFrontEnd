import { all } from "redux-saga/effects";
import {
  listCateRequest,
  deleteCateRequest,
  addCateRequest,
  editCategoryRequest,
} from "./cate";
import {
  listProductRequest,
  listProductDetailsRequest,
  getProductByCateRequest,
  deleteProductRequest,
  addProductSuccess,
  saveProductRequest,
} from "./product";
import {
  getCatePostRequest,
  deleteCatePostRequest,
  addCategoryPostRequest,
  editCategoryPostRequest,
} from "./post/catePost.js";
import {
  listPostRequest,
  listPostDetailsRequest,
  getPostByCateRequest,
  deletePostRequest,
  addPostSuccess,
  savePostRequest,
} from "./post/post.js";
import {loginUserRequest,loginAdminRequest} from './user/user';
export default function* rootSaga() {
  yield all([
    listCateRequest(),
    listProductRequest(),
    listProductDetailsRequest(),
    getProductByCateRequest(),
    deleteProductRequest(),
    addProductSuccess(),
    deleteCateRequest(),
    addCateRequest(),
    editCategoryRequest(),
    saveProductRequest(),
    // ----Post---//
    getCatePostRequest(),
    deleteCatePostRequest(),
    addCategoryPostRequest(),
    editCategoryPostRequest(),
    // -----
    listPostRequest(),
    listPostDetailsRequest(),
    getPostByCateRequest(),
    deletePostRequest(),
    addPostSuccess(),
    savePostRequest(),
    // -----user
    loginUserRequest(),
    loginAdminRequest()
  ]);
}
