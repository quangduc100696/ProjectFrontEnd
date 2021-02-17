import { LIST_CATE_POST_SUCCESS } from "../../contants/index";
const initState = {
  cate_post: [],
};
export const catePostReducer = (state = initState, action) => {
  switch (action.type) {
    case LIST_CATE_POST_SUCCESS:
      return {
        ...state,
        cate_post: action.payload,
      };
    default:
      return state;
  }
};
