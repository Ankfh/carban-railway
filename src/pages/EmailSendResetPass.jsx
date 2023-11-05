import { Box, Button, IconButton, InputAdornment } from "@mui/material";
import React, { useState } from "react";
import TopBar from "../components/TopBar";
import TextField from "@mui/material/TextField";
import {
  textFieldStyle,
  selectField,
  muiButton,
  boxStyleforlogin,
} from "../css/style";
import { ThemeTextField, ThemeSelect, ThemeButton } from "../muiTheme/Theme";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const EmailSendResetPass = () => {
  const dontHaveAccountText = "Don't have an account?";
  const join = "Join";
 const navigate = useNavigate()
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <TopBar Text={dontHaveAccountText} joinButton={join} />
      <form>
        <div className="mainDiv !h-[100vh]">
          <div className="formBox !h-[306px]">
            <div className="formHeader  ">
              <h5 className=" headline">Email sent</h5>
              <p className="title ">
                <p className="">
                  Go to your email to reset your password You may need to check
                  your spam
                </p>
              </p>
            </div>

            <div className="w-full mt-[48px] ">
              <ThemeButton
              onClick={()=>navigate('/login')}
              fullWidth variant="contained">
                Back to Login
              </ThemeButton>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default EmailSendResetPass;
