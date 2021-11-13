import React, { useState } from 'react'
import styled from "styled-components"
import { Link, Redirect } from "react-router-dom";
import {Paper,Typography,withStyles,InputAdornment,TextField} from '@material-ui/core';
import inpStyle from "./logininp.module.css"
import FacebookIcon from '@material-ui/icons/Facebook';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../../../Redux/Authentication/action';

function LoginInp() {
    const init = {
        email:"",
        password :""
    }
    const dispatch = useDispatch()
    const {isAuth} = useSelector(state=>state.login)
    const [showPassword,setShowPassword] = useState(false)
    const [values,setValues] = useState(init)
    const handleChange=(e)=>{
        const {name,value} = e.target
        setValues({...values,[name]:value})
    }
    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    };
    const handleLogin=()=>{
        dispatch(loginUser(values))
    }
    if(isAuth){
      return <Redirect to={"/"} push />
    }



    return (
      <div className={inpStyle.main}>
        <Paper className={inpStyle.inppaper}>
          <div>
            <img
              width="70%"
              height="80%"
              src="https://logos-world.net/wp-content/uploads/2020/04/Instagram-Logo.png"
              alt=""
            />
          </div>
          <p></p>
          <br />
          <div className={inpStyle.inpBorder}>
            <Styledinp
              onChange={handleChange}
              label="Phone number,username, or email"
              name="email"
              type="email"
              variant="filled"
            />
          </div>
          <div className={inpStyle.inpBorder}>
            <Styledinp
              variant="filled"
              name="password"
              size="small"
              type={showPassword ? "text" : "password"}
              label="Password"
              // value={showPassword.password}
              onChange={handleChange}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    {values.password && (
                      <Typography
                        style={{ marginTop: "12px", cursor: "pointer" }}
                        onClick={handleClickShowPassword}
                      >
                        {showPassword ? `hide` : `show`}
                      </Typography>
                    )}
                  </InputAdornment>
                ),
              }}
            />
          </div>
          <LoginBtn
            onClick={handleLogin}
            disabled={values.password && values.email ? false : true}
          >
            Log In
          </LoginBtn>
          <div className={inpStyle.or_div}>
            <div></div>
            <p>OR</p>
            <div></div>
          </div>
          <div className={inpStyle.fb_div}>
            <FacebookIcon color="primary" />
            <p>Log in with Facebook</p>
          </div>
          <p className={inpStyle.forgotpass_para}>Forgot Password?</p>
        </Paper>
        <br />
        <Paper className={inpStyle.signuppaper}>
          <Typography>
            Don't have an account?{" "}
            <Link className={inpStyle.signup_link} to={"/signup"}>
              Sign up
            </Link>
          </Typography>
        </Paper>
        <div className={inpStyle.getapp_div}>
          <p>Get the app</p>
          <div className={inpStyle.dlwd_img}>
            <img
              width="120px"
              src="https://www.instagram.com/static/images/appstore-install-badges/badge_ios_english-en.png/180ae7a0bcf7.png"
              alt=""
            />
            <img
              width="120px"
              src="https://www.instagram.com/static/images/appstore-install-badges/badge_android_english-en.png/e9cd846dc748.png"
              alt=""
            />
          </div>
        </div>
      </div>
    );
}

export default LoginInp

const LoginBtn = styled.button`
    background-color: #0095F6;
    border: none;
    outline: none;
    padding: .4rem;
    color: white;
    font-weight: 600;
    border-radius: .2rem;
    margin-top: 10px;
    :hover{
        cursor: pointer;
    }
    :disabled{
        opacity: .5;
    } 
`

const Styledinp =  withStyles((theme) => ({
    root: {
      width:"100%",
      "& .MuiInputBase-root": {
        height:30,
        background:"none",
        "& input": {
            fontSize:"13px",
            height:"30px"
        }
      },
      "& .MuiFilledInput-underline:before":{
          border:"none",
          color:"grey"
      },
      "& .MuiFilledInput-underline:after":{
          color:"grey",
          border:"none"
      },
      "& .MuiFormLabel-root": {
        fontSize:"12px",
        height:18,
        margin:"-4px 0px 0px 0px",
        "& label": {
            height:18,
            fontSize:"15px"
        }
      },
    }
  }))(TextField)

