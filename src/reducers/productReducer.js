import { LIST_PRODUCT_SUCCESS,PRODUCT_DETAILS_SUCCESS,PRODUCT_CATE_SUCCESS,PRODUCT_ADD_CART } from "../contants/index";
const initalState = {
  product: [],
  product_details:[],
  product_cate:[],
  product_cart:[],
};
export const productReducer = (state = initalState, action) => {
  switch (action.type) {
    case LIST_PRODUCT_SUCCESS:
      return {
        ...state,
        product: action.payload,
      };
      case PRODUCT_DETAILS_SUCCESS:{
        return {
          ...state,
          product_details:action.payload,
         
        }
      }
      case PRODUCT_CATE_SUCCESS:
        return {
          ...state,
          product_cate:action.payload
        }
        case PRODUCT_ADD_CART:{
          return {
            ...state,
            product_cart:[...state.product_cart,action.payload]
          }
        }
    default:
      return state;
  }
};
