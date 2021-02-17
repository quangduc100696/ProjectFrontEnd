import {cateReducer} from './cateReducer';
import {catePostReducer} from './post/cate';
import {productReducer} from './productReducer';
import {postReducer} from './post/post';
import {combineReducers} from 'redux';
const rootReducer = combineReducers({cateReducer,productReducer,catePostReducer,postReducer});
export default rootReducer;