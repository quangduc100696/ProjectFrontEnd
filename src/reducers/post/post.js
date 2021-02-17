import { LIST_POST_CATE_SUCCESS,LIST_POST_DETAILS_SUCCESS,LIST_POST_SUCCESS } from "../../contants/index";
const initalState = {
  post: [],
  post_details:[],
  post_cate:[],
};
export const postReducer = (state = initalState, action) => {
  switch (action.type) {
    case LIST_POST_SUCCESS:
      return {
        ...state,
        post: action.payload,
      };
      case LIST_POST_DETAILS_SUCCESS:{
        return {
          ...state,
          post_details:action.payload,
         
        }
      }
      case LIST_POST_CATE_SUCCESS:
        return {
          ...state,
          post_cate:action.payload
        }
    default:
      return state;
  }
};
