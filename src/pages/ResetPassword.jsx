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
import { useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { inputFocus, changeInput } from "../muiTheme/OnFilledBorderStyle";
// import arrowIcon from "../image/arrowIcon.png";
import { ReactComponent as ArrowIcon } from "../image/svg/arrowIcon.svg";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { passwordResetLink } from "../redux/Slices/PasswordResetLinkSendSlice";

const schema = yup.object().shape({
  email: yup.string().required("Email is required").email("Invalid email"),
});
const ResetPassword = () => {
  const [emailError, setemailError] = useState(null);
  const [errorType, seterrorType] = useState(null);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const data = useSelector((state) => state.default.value);
  console.log(data, "defultDataa");
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const submitForm = (data) => {
    console.log(data, "oooo");
    dispatch(passwordResetLink(data))
      .unwrap()
      .then((res) => {
        if (res?.success) {
          console.log(res, "ress");
          navigate("/emailsend");
        }
        if (!res?.success) {
          console.log(res, "res");
          seterrorType(res.type);

          if (res.type == "email") {
            setemailError(res.message);
          }
        }
        console.log(res, "ress");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const text = "Don't have an account?";
  const join = "Join";
  const text2 = "";

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="setProjectBg">
      <TopBar Text={text} joinButton={join} />
      <form onSubmit={handleSubmit(submitForm)}>
        <div className="pt-[96px] bg-[#fbfbfb] hidden md:block pl-[43px]">
          <ArrowIcon
            className=" goBackIcon cursor-pointer hover:bg-[#F5F5F5]"
            onClick={() => navigate(-1)}
          />
        </div>
        <div className="h-[100%] bg-[#fbfbfb]">
          <div className="mainDiv !pt-[211px] md:!pt-[100px] ">
            <div className="formBox !h-auto !mt-[0px]">
              <div className="formHeader  ">
                <h5 className=" headline">Reset password</h5>
                <p className="title flex flex-col sm:flex-row  ">
                  <p>The reset link</p>
                  <p>will be sent to your email</p>
                </p>
              </div>
              <div className="singleTextBoxDiv">
                <p className="text_label">Email</p>
                <ThemeTextField
                  autoFocus={"true"}
                  // size="small"
                  fullWidth
                  defaultValue={data}
                  name="email"
                  placeholder="Enter your email"
                  {...register("email")}
                  onFocus={(event) => inputFocus(event)}
                  onBlur={(event) => changeInput(event)}
                  error={errors.email}
                />
                {errors.email ? (
                  <p className="error_messge">{errors.email?.message}</p>
                ) : (
                  <p className="error_messge">
                    {errorType == "email" && emailError}
                  </p>
                )}
              </div>

              <div className="w-full mt-[8px] ">
                <ThemeButton type="submit" fullWidth variant="contained">
                  Submit
                </ThemeButton>
              </div>
              <div>
                <p
                  onClick={() => navigate(-1)}
                  className="  block md:hidden textButton text-[#2E8028] hover:text-[#266E20] hover:underline underline-offset-[2px] cursor-pointer"
                >
                  Go Back
                </p>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ResetPassword;
