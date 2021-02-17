import { put, call, takeEvery } from "redux-saga/effects";
import axios from "axios";
import swal from "sweetalert";
import { api } from "../api/index";
import { get_cate_success } from "../actions/cate";
import {
  LIST_CATE_REQUEST,
  DELETE_CATE,
  ADD_CATE,
  EDIT_CATE,
} from "../contants/index";
const token = sessionStorage.getItem('token');
const getCate = () => {
  return axios
    .get(`${api}/cate`)
    .then((response) => ({ response }))
    .catch((err) => ({ err }));
};
function* getCateSaga() {
  const { response, err } = yield call(getCate);
  if (response) {
    yield put(get_cate_success(response.data));
  } else {
    console.log(err);
  }
}
export function* listCateRequest() {
  yield takeEvery(LIST_CATE_REQUEST, getCateSaga);
}
const deleteCate = (id) => {
  return axios
    .get(`${api}/admin/deleteCategory/${id}?token=${token}`)
    .then((response) => ({ response }))
    .catch((err) => ({ err }));
};
function* deleteCateSagas(action) {
  const { response } = yield call(deleteCate, action.payload);
  if (response) {
    swal("Delete category success!");
  } else {
    swal("Delete category faild!");
  }
}
export function* deleteCateRequest() {
  yield takeEvery(DELETE_CATE, deleteCateSagas);
}
const addCate = (data) => {
  return axios
    .post(`${api}/admin/cate?token=${token}`, { name: data })
    .then((response) => ({ response }))
    .catch((err) => ({ err }));
};
function* addCateSagas(action) {
  const { response } = yield call(addCate, action.payload);
  if (!response.data.messages) {
    swal("Add category success!");
  } else {
    swal("Add category faild!");
  }
}
export function* addCateRequest() {
  yield takeEvery(ADD_CATE, addCateSagas);
}
const editCategory = (id, name) => {
  return axios
    .post(`${api}/admin/updateCate?token=${token}`, { id, name })
    .then((response) => ({ response }))
    .catch((err) => ({ err }));
};
function* editCategorySaga(action) {
  const { response } = yield call(editCategory,action.id, action.payload);
  if (!response.data.messages) {
    swal("Save category success!");
  } else {
    swal("Save category faild!");
  }
}
export function* editCategoryRequest() {
  yield takeEvery(EDIT_CATE, editCategorySaga);
}
