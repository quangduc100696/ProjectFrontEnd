import { put, call, takeEvery } from "redux-saga/effects";
import axios from "axios";
import { api } from "../../api/index";
import {
  REGISTER_REQUEST,
  LOGIN_REQUEST,
  LOGIN_ADMIN_REQUEST,
} from "../../contants/index";
import swal from "sweetalert";
const login_user = (data) => {
  return axios
    .post(`${api}/login`, data)
    .then((response) => ({ response }))
    .catch((err) => ({ err }));
};
function* loginUserSagas(action) {
  const { response } = yield call(login_user, action.payload);

  if (!response.data.messages) {
    sessionStorage.setItem("email", response.data.data.email);
    swal("Login success!");
    setTimeout(() => {
      window.location.reload();
    }, 2000);
  } else {
    swal(response.data.messages);
  }
}
export function* loginUserRequest() {
  yield takeEvery(LOGIN_REQUEST, loginUserSagas);
}
const login_admin = (data) => {
  return axios
    .post(`${api}/admin/login`, data)
    .then((response) => ({ response }))
    .catch((err) => ({ err }));
};
function* loginAdminSagas(action) {
  const { response } = yield call(login_admin, action.payload);
  if (!response.data.messages) {
    sessionStorage.setItem("emailAdmin", response.data.data.email);
    sessionStorage.setItem("token", response.data.token);
    swal("Login success!");
    setTimeout(() => {
      window.location.reload();
    }, 2000);
  } else {
    swal(response.data.messages);
  }
}
export function* loginAdminRequest() {
  yield takeEvery(LOGIN_ADMIN_REQUEST, loginAdminSagas);
}
