import { put, call, takeEvery } from "redux-saga/effects";
import axios from "axios";
import swal from "sweetalert";
import { api } from "../../api/index";
import {
  LIST_CATE_POST_REQUEST,
  // ADD_CATE_POST,
  EDIT_CATE_POST,
  DELETE_CATE_POST,
  ADD_CATE_POST,
} from "../../contants/index";
import { get_cate_post_success } from "../../actions/post/cate";
const token = sessionStorage.getItem('token');
const getCatePost = () => {
  return axios
    .get(`${api}/admin/cate_post`)
    .then((response) => ({ response }))
    .catch((err) => ({ err }));
};
function* getCatePostSagas() {
  const { response, err } = yield call(getCatePost);
  if (response) {
    yield put(get_cate_post_success(response.data));
  } else {
    console.log(err);
  }
}
export function* getCatePostRequest() {
  yield takeEvery(LIST_CATE_POST_REQUEST, getCatePostSagas);
}
const deleteCatePost = id =>{
  return axios.get(`${api}/admin/deleteCategory_post/${id}?token=${token}`).then(response =>({response}))
  .catch(err =>({err}))
}
function* deleteCatePostSagas(action){
  const {response,err} = yield call(deleteCatePost,action.payload);
  debugger
  if(response){
    swal('Delete Category Success!');
    
  }else{
    swal('Delete Category Faild!');
    console.log(err)
  }
}
export function* deleteCatePostRequest(){
  yield takeEvery(DELETE_CATE_POST,deleteCatePostSagas);
}
const addCategoryPost = data =>{
  return axios.post(`${api}/admin/cate_post?token=${token}`,{name:data}).then(response =>({response}))
  .catch(err =>({err}))
}
function* addCategoryPostSagas(action){
  debugger
  const {response,err} = yield call(addCategoryPost,action.payload);
  if(response){
    swal('Add Category Success!');
    
  }else{
    swal('Add Category Faild!');
    console.log(err)
  }
}
export function* addCategoryPostRequest(){
  yield takeEvery(ADD_CATE_POST,addCategoryPostSagas)
}
const editCategoryPost = (id, name) => {
  return axios
    .post(`${api}/admin/updateCate_post?token=${token}`, { id, name })
    .then((response) => ({ response }))
    .catch((err) => ({ err }));
};
function* editCategoryPostSaga(action) {
  const { response } = yield call(editCategoryPost,action.id, action.payload);
  if (!response.data.messages) {
    swal("Save category success!");
  } else {
    swal("Save category faild!");
  }
}
export function* editCategoryPostRequest() {
  yield takeEvery(EDIT_CATE_POST, editCategoryPostSaga);
}
