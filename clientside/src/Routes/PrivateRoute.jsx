import React from "react";
import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router-dom";


export function PrivateRoute({children,
    path,
    exact=false,
    redirectPath="/login",
    push=false}){
    
    
        const {isAuth} = useSelector(state=>state.login)
 
 
        return isAuth?(
            <Route path={path} exact={exact}>
                {children}
            </Route>
        ):(
            <Redirect to={redirectPath} push={push}/>
        )
}
