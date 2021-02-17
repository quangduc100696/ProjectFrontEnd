import {
  LIST_PRODUCT_REQUEST,
  LIST_PRODUCT_SUCCESS,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_CATE_SUCCESS,
  PRODUCT_CATE_REQUEST,
  PRODUCT_DELETE_REQUEST,
  PRODUCT_ADD,
  PRODUCT_SAVE,
  PRODUCT_ADD_CART
} from "../contants/index";
export const get_product_success = (data) => {
  return {
    type: LIST_PRODUCT_SUCCESS,
    payload: data,
  };
};
export const get_product_request = () => {
  return {
    type: LIST_PRODUCT_REQUEST,
  };
};
export const get_product_details_request = (id) => {
  return {
    type: PRODUCT_DETAILS_REQUEST,
    payload: id,
  };
};
export const get_product_details_success = (data) => {
  return {
    type: PRODUCT_DETAILS_SUCCESS,
    payload: data,
  };
};
export const get_product_by_cate_success = (data) => {
  return {
    type: PRODUCT_CATE_SUCCESS,
    payload: data,
  };
};
export const get_product_by_cate_request = (id) => {
  return {
    type: PRODUCT_CATE_REQUEST,
    payload: id,
  };
};
export const delete_product_request = (data) => {
  return {
    type: PRODUCT_DELETE_REQUEST,
    payload: data,
  };
};
export const add_product = (data) => {
  return {
    type: PRODUCT_ADD,
    payload: data,
  };
};
export const save_product = (data) => {
  return {
    type: PRODUCT_SAVE,
    payload: data
  };
};
export const add_cart = data =>{
  return {
    type:PRODUCT_ADD_CART,
    payload:data
  }
}
