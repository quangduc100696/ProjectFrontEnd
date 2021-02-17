import {LOGIN_REQUEST,REGISTER_REQUEST,LOGIN_ADMIN_REQUEST} from '../../contants/index';
export const login_user_request = data =>{
    return {
        type:LOGIN_REQUEST,
        payload:data
    }
}
export const login_admin_request = data =>{
    return {
        type:LOGIN_ADMIN_REQUEST,
        payload:data
    }
}
export const register_user_request = data =>{
    return {
        type:REGISTER_REQUEST,
        payload:data
    }
}