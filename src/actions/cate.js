import {
  LIST_CATE_REQUEST,
  LIST_CATE_SUCCESS,
  DELETE_CATE,
  ADD_CATE,
  EDIT_CATE,
} from "../contants/index";
export const get_cate_success = (data) => {
  return {
    type: LIST_CATE_SUCCESS,
    payload: data,
  };
};
export const get_cate_request = () => {
  return {
    type: LIST_CATE_REQUEST,
  };
};
export const delete_cate = (id) => {
  return {
    type: DELETE_CATE,
    payload: id,
  };
};
export const add_cate = (data) => {
  return {
    type: ADD_CATE,
    payload: data,
  };
};
export const edit_cate = (id, data) => {
  return {
    type: EDIT_CATE,
    payload: data,
    id:id
  };
};
