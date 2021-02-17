import {
  LIST_POST_SUCCESS,
  LIST_POST_REQUESST,
  POST_ADD,
  POST_EDIT,
  POST_DELETE,
  LIST_POST_CATE_SUCCESS,
  LIST_POST_CATE_REQUESST,
  LIST_POST_DETAILS_REQUESST,
  LIST_POST_DETAILS_SUCCESS,
} from "../../contants/index";
export const get_post_success = (data) => {
  return {
    type: LIST_POST_SUCCESS,
    payload: data,
  };
};
export const get_post_request = () => {
  return {
    type: LIST_POST_REQUESST,
  };
};
export const get_post_details_request = (id) => {
  return {
    type: LIST_POST_DETAILS_REQUESST,
    payload: id,
  };
};
export const get_post_details_success = (data) => {
  return {
    type: LIST_POST_DETAILS_SUCCESS,
    payload: data,
  };
};
export const get_post_by_cate_success = (data) => {
  return {
    type: LIST_POST_CATE_SUCCESS,
    payload: data,
  };
};
export const get_post_by_cate_request = (id) => {
  return {
    type: LIST_POST_CATE_REQUESST,
    payload: id,
  };
};
export const delete_post_request = (data) => {
  return {
    type: POST_DELETE,
    payload: data,
  };
};
export const add_post = (data) => {
  return {
    type: POST_ADD,
    payload: data,
  };
};
export const save_post = (data) => {
  return {
    type: POST_EDIT,
    payload: data,
  };
};
