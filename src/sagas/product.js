import { put, call, takeEvery } from "redux-saga/effects";
import axios from "axios";
import { api } from "../api/index";
import {
  get_product_success,
  get_product_details_success,
  get_product_by_cate_success,
} from "../actions/product";
import {
  LIST_PRODUCT_REQUEST,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_CATE_REQUEST,
  PRODUCT_DELETE_REQUEST,
  PRODUCT_ADD,
  PRODUCT_SAVE,
} from "../contants/index";
import swal from "sweetalert";
const token = sessionStorage.getItem('token');
const getProduct = () => {
  return axios
    .get(`${api}/product`)
    .then((response) => ({ response }))
    .catch((err) => ({ err }));
};
function* getProductSaga() {
  const { response, err } = yield call(getProduct);
  if (response) {
    yield put(get_product_success(response.data));
  } else {
    console.log(err);
  }
}
export function* listProductRequest() {
  yield takeEvery(LIST_PRODUCT_REQUEST, getProductSaga);
}
const getDetails = (id) => {
  return axios
    .get(`${api}/product/${id}`)
    .then((response) => ({ response }))
    .catch((err) => ({ err }));
};
function* getDetailsSaga(action) {
  const { response, err } = yield call(getDetails, action.payload);
  if (response) {
    yield put(get_product_details_success(response.data.data[0]));
  } else {
    console.log(err);
  }
}
export function* listProductDetailsRequest() {
  yield takeEvery(PRODUCT_DETAILS_REQUEST, getDetailsSaga);
}
const getProductByCate = (id) => {
  return axios
    .get(`${api}/product/cate/${id}`)
    .then((response) => ({ response }))
    .catch((err) => ({ err }));
};
function* getProductByCateSaga(action) {
  const { response, err } = yield call(getProductByCate, action.payload);
  if (response) {
    yield put(get_product_by_cate_success(response.data.data));
  } else {
    console.log(err);
  }
}
export function* getProductByCateRequest() {
  yield takeEvery(PRODUCT_CATE_REQUEST, getProductByCateSaga);
}
function deleteProduct(id) {
  return axios
    .get(`${api}/admin/deleteProduct/${id}?token=${token}`)
    .then((response) => ({ response }))
    .catch((err) => ({ err }));
}
function* deleteProductSagas(action) {
  const { response } = yield call(deleteProduct, action.payload);
  if (response) {
    swal("Delete user success!");
  } else {
    swal("Delete user faild!");
  }
}
export function* deleteProductRequest() {
  yield takeEvery(PRODUCT_DELETE_REQUEST, deleteProductSagas);
}
const addProduct = (data) => {
  return axios({
    method: 'post',
    url: `${api}/admin/product?token=${token}`,
    data: data,
    headers: { 'Content-Type': 'multipart/form-data' }
  })
    .then((response) => ({ response }))
    .catch((err) => ({ err }));
};
function* addProductSaga(action) {
  const { response, err } = yield call(addProduct, action.payload);
  debugger
  if (response) {
    swal("Add product success!");
  } else {
    swal("Add product faild!");
  }
}
export function* addProductSuccess() {
  yield takeEvery(PRODUCT_ADD, addProductSaga);
}
const saveProduct = (data) => {
  return axios({
    method: 'post',
    url: `${api}/admin/productUpdate?token=${token}`,
    data: data,
    headers: { 'Content-Type': 'multipart/form-data' }
  })
    .then((response) => ({ response }))
    .catch((err) => ({ err }));
};
function* saveProductSaga(action) {
  const { response } = yield call(saveProduct, action.payload);
  debugger
  if (!response.data.messages) {
    swal("Save product success!");
  } else {
    swal("Save product faild!");
  }
}
export function* saveProductRequest() {
  yield takeEvery(PRODUCT_SAVE, saveProductSaga);
}
