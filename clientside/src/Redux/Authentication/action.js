import axios from "axios"
import { LOGIN_FAIL, LOGIN_REQ, LOGIN_SUC, LOGOUT_SUC } from "./actionType"

export const loginReq=()=>{
    return{
        type:LOGIN_REQ
    }
}
export const loginSuc=(payload)=>{
    return{
        type:LOGIN_SUC,
        payload:payload
    }    
}
export const loginFail=()=>{
    return{
        type:LOGIN_FAIL
    }    
}
export const logout_suc=()=>{
    return{
        type:LOGOUT_SUC,
    }    
}

export const loginUser = ({email,password}) => (dispatch) => {
    dispatch(loginReq())
    return axios.post("http://localhost:2511/login",{username:email,password:password})
    .then(res =>dispatch(loginSuc(res.data.data)))
    .catch(err => dispatch(loginFail(err)))
}
