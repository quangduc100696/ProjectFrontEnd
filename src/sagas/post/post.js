import { put, call, takeEvery } from "redux-saga/effects";
import axios from "axios";
import { api } from "../../api/index";
import {
  get_post_success,
  get_post_details_success,
  get_post_by_cate_success,
} from "../../actions/post/post.js";
import {
  LIST_POST_REQUESST,
  LIST_POST_DETAILS_REQUESST,
  LIST_POST_CATE_REQUESST,
  POST_DELETE,
  POST_ADD,
  POST_EDIT,
} from "../../contants/index";
import swal from "sweetalert";
const token = sessionStorage.getItem('token');
const getPost = () => {
  return axios
    .get(`${api}/post`)
    .then((response) => ({ response }))
    .catch((err) => ({ err }));
};
function* getPostSaga() {
  const { response, err } = yield call(getPost);
  if (response) {
    yield put(get_post_success(response.data));
  } else {
    console.log(err);
  }
}
export function* listPostRequest() {
  yield takeEvery(LIST_POST_REQUESST, getPostSaga);
}
const getDetails = (id) => {
  return axios
    .get(`${api}/post/${id}`)
    .then((response) => ({ response }))
    .catch((err) => ({ err }));
};
function* getDetailsSaga(action) {
  const { response, err } = yield call(getDetails, action.payload);
  if (response) {
    yield put(get_post_details_success(response.data.data[0]));
  } else {
    console.log(err);
  }
}
export function* listPostDetailsRequest() {
  yield takeEvery(LIST_POST_DETAILS_REQUESST, getDetailsSaga);
}
const getPostByCate = (id) => {
  return axios
    .get(`${api}/post/cate/${id}`)
    .then((response) => ({ response }))
    .catch((err) => ({ err }));
};
function* getPostByCateSaga(action) {
  const { response, err } = yield call(getPostByCate, action.payload);
  if (response) {
    yield put(get_post_by_cate_success(response.data.data));
  } else {
    console.log(err);
  }
}
export function* getPostByCateRequest() {
  yield takeEvery(LIST_POST_CATE_REQUESST, getPostByCateSaga);
}
function deletePost(id) {
  return axios
    .get(`${api}/admin/delete-post/${id}?token=${token}`)
    .then((response) => ({ response }))
    .catch((err) => ({ err }));
}
function* deletePostSagas(action) {
  const { response } = yield call(deletePost, action.payload);
  if (response) {
    swal("Delete post success!");
  } else {
    swal("Delete post faild!");
  }
}
export function* deletePostRequest() {
  yield takeEvery(POST_DELETE, deletePostSagas);
}
const addPost = (data) => {
  return axios({
    method: 'post',
    url: `${api}/admin/post?token=${token}`,
    data: data,
    headers: { 'Content-Type': 'multipart/form-data'}
  })
    .then((response) => ({ response }))
    .catch((err) => ({ err }));
};
function* addPostSaga(action) {
  const { response, err } = yield call(addPost, action.payload);
  if (response) {
    swal("Add post success!");
  } else {
    swal("Add post faild!");
    console.log(err);
  }
}
export function* addPostSuccess() {
  yield takeEvery(POST_ADD, addPostSaga);
}
const savePost = (data) => {
  return axios({
    method: 'post',
    url: `${api}/admin/post-update?token=${token}`,
    data: data,
    headers: { 'Content-Type': 'multipart/form-data' }
  })
    .then((response) => ({ response }))
    .catch((err) => ({ err }));
};
function* savePosttSaga(action) {
  const { response } = yield call(savePost, action.payload);
  if (!response.data.messages) {
    swal("Save post success!");
  } else {
    swal("Save post faild!");
  }
}
export function* savePostRequest() {
  yield takeEvery(POST_EDIT, savePosttSaga);
}
