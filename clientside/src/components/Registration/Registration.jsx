import React, { useState } from "react";
import styled from "styled-components";
import { Paper } from "@material-ui/core";
import {
  Typography,
  withStyles,
  InputAdornment,
  TextField,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import sigupStyles from "./signup.module.css";
import FacebookIcon from "@material-ui/icons/Facebook";

const iniState = {
  userEmail: "",
  userName: "",
  userUserName: "",
  userPassword: "",
};

function Registration() {
  const [showPassword, setShowPassword] = useState(false);
  const [data, setData] = useState(iniState);

  const handleChang = (e) => {
    const { name, value, type, checked } = e.target;
    const myAllUserData = {
      ...data,
      [name]: type === "checkbox" ? checked : value,
    };
    setData(myAllUserData);
  };

  const handleClick = () => {
    fetch("https://instagramclonedata.herokuapp.com/signup", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(() => {
      console.log(data);
    });
    setData(iniState);
    alert("You have successfully registered please go to the login page.");
  };

  const { userEmail, userName, userUserName, userPassword } = data;

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className={sigupStyles.main}>
      <Paper className={sigupStyles.inppaper}>
        <div>
          <img
            width="50%"
            src="https://logos-world.net/wp-content/uploads/2020/04/Instagram-Logo.png"
            alt=""
          />
        </div>
        <p className={sigupStyles.para}>
          Sign up to see photos and videos from your friends.
        </p>
        <br />
        <div className={sigupStyles.fbsignupbtn} style={{ color: "white" }}>
          <FacebookIcon style={{ color: "white" }} />
          <p style={{ color: "white" }}>
            <span style={{ opacity: 0 }}>-</span>
            Log in with Facebook
          </p>
        </div>
        <div className={sigupStyles.or_div}>
          <div></div>
          <p>OR</p>
          <div></div>
        </div>
        <div className={sigupStyles.inpBorder}>
          <Styledinp
            name="userEmail"
            label="Phone number or email"
            type="email"
            variant="filled"
            value={userEmail}
            onChange={handleChang}
          />
        </div>
        <div className={sigupStyles.inpBorder}>
          <Styledinp
            value={userName}
            onChange={handleChang}
            label="Full Name"
            name="userName"
            type="email"
            variant="filled"
          />
        </div>
        <div className={sigupStyles.inpBorder}>
          <Styledinp
            value={userUserName}
            onChange={handleChang}
            label="Username"
            name="userUserName"
            type="email"
            variant="filled"
          />
        </div>
        <div className={sigupStyles.inpBorder}>
          <Styledinp
            variant="filled"
            name="userPassword"
            value={userPassword}
            onChange={handleChang}
            size="small"
            type={showPassword ? "text" : "password"}
            label="Password"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  {
                    <Typography
                      style={{ marginTop: "12px", cursor: "pointer" }}
                      onClick={handleClickShowPassword}
                    >
                      {showPassword ? `hide` : `show`}
                    </Typography>
                  }
                </InputAdornment>
              ),
            }}
          />
        </div>

        <SignupBtn type="submit" onClick={handleClick}>
          Sign up
        </SignupBtn>
        <p className={sigupStyles.afterbtnPara}>
          By signing up, you agree to our Terms , Data Policy and Cookies Policy
          .
        </p>
      </Paper>
      <br />
      <Paper className={sigupStyles.loginpaper}>
        <Typography>
          Have an account?{" "}
          <Link className={sigupStyles.login_link} to={"/login"}>
            Log in
          </Link>
        </Typography>
      </Paper>
      <div className={sigupStyles.getapp_div}>
        <p>Get the app</p>
        <div className={sigupStyles.dlwd_img}>
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

export default Registration;

const SignupBtn = styled.button`
  background-color: #0095f6;
  border: none;
  outline: none;
  padding: 0.4rem;
  color: white;
  font-weight: 600;
  border-radius: 0.2rem;
  margin-top: 10px;
  :hover {
    cursor: pointer;
  }
  :disabled {
    opacity: 0.5;
  }
`;

const Styledinp = withStyles((theme) => ({
  root: {
    width: "100%",
    "& .MuiInputBase-root": {
      height: 30,
      background: "none",
      "& input": {
        fontSize: "13px",
        height: "30px",
      },
    },
    "& .MuiFilledInput-underline:before": {
      border: "none",
      color: "grey",
    },
    "& .MuiFilledInput-underline:after": {
      color: "grey",
      border: "none",
    },
    "& .MuiFormLabel-root": {
      fontSize: "12px",
      height: 18,
      margin: "-4px 0px 0px 0px",
      "& label": {
        height: 18,
        fontSize: "15px",
      },
    },
  },
}))(TextField);
