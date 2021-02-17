import {
  LIST_CATE_POST_REQUEST,
  LIST_CATE_POST_SUCCESS,
  ADD_CATE_POST,
  DELETE_CATE_POST,
  EDIT_CATE_POST,
} from "../../contants/index";
export const get_cate_post_success = (data) => {
  return {
    type: LIST_CATE_POST_SUCCESS,
    payload: data,
  };
};
export const get_cate_post_request = () => {
  return {
    type: LIST_CATE_POST_REQUEST,
  };
};
export const delete_cate_post = (id) => {
  return {
    type: DELETE_CATE_POST,
    payload: id,
  };
};
export const add_cate_post = (data) => {
  return {
    type: ADD_CATE_POST,
    payload: data,
  };
};
export const edit_cate_post = (id, data) => {
  return {
    type: EDIT_CATE_POST,
    payload: data,
    id: id,
  };
};
