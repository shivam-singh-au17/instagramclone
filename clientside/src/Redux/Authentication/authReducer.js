import { loadData, saveData } from "../../Utils/localStorage";
import {  LOGIN_FAIL, LOGIN_REQ, LOGIN_SUC, LOGOUT_SUC } from "./actionType";

const init ={
    user:loadData("users")||{},
    isAuth:loadData("auth")||false,
    isLoading:false,
    isError:false
}

export const loginReducer=(state=init,action)=>{
    switch (action.type) {
        case LOGIN_REQ:
            saveData("users",action.payload)
            saveData("auth",false)
            return{
                ...state,
                isLoading:true,
                isAuth:false
            }
        case LOGIN_SUC:
            saveData("users",action.payload)
            saveData("auth",true)
            return{
                ...state,
                isLoading:false,
                isAuth:true,
                user:action.payload,
            }
        case LOGIN_FAIL:
            saveData("auth",false)
            return{
                ...state,
                isLoading:false,
                isAuth:false,
                isError:true
            }  
        case LOGOUT_SUC:
            localStorage.removeItem("auth")
            localStorage.removeItem("users")
            return{
                ...state,
                isAuth:false
            }                   
        default:
           return state;
    }
}