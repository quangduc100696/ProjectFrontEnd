import { LIST_CATE_SUCCESS } from "../contants/index";
const initalState = {
  cate: [],
};
export const cateReducer = (state = initalState, action) => {
  switch (action.type) {
    case LIST_CATE_SUCCESS:
      return {
        ...state,
        cate: action.payload,
      };
    default:
      return state;
  }
};
