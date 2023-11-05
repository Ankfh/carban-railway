import { Box, Button, IconButton, InputAdornment } from "@mui/material";
import React, { useState } from "react";
import TopBar from "../components/TopBar";
import TextField from "@mui/material/TextField";
import { ReactComponent as EyeIcon } from "../image/svg/closeEyeIcon.svg";
import { ReactComponent as OpenEyeIcon } from "../image/svg/openEyeIcon.svg";
import {
  textFieldStyle,
  selectField,
  muiButton,
  boxStyleforlogin,
} from "../css/style";
import { ThemeTextField, ThemeSelect, ThemeButton, passwordFieldStyle } from "../muiTheme/Theme";
import { useNavigate, useParams } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { inputFocus, changeInput } from "../muiTheme/OnFilledBorderStyle";
// import arrowIcon from "../image/arrowIcon.png";
import { ReactComponent as ArrowIcon } from "../image/svg/arrowIcon.svg";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { passwordResetLink } from "../redux/Slices/PasswordResetLinkSendSlice";
import { passwordChange } from "../redux/Slices/PasswordChangeSlice";

const schema = yup.object().shape({
  password: yup.string().required("password is required").min(6, "Enter at least 6 characters"),
  passwordConfirmation: yup.string()
  .oneOf([yup.ref('password'), null], 'Passwords must match')
});
const ResetPassword2nd = () => {

  const [clickKValue, setclickkValue] = useState(false);
  const [email, setemail] = useState();

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {id}= useParams()
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
  const valuee = watch("password", false);
  console.log(valuee, "valueeeeeeee");
  const loginEmailChange = (e) => {
    setemail(e.target.value);
  };

  const submitForm = (data) => {
    console.log(data, "oooo");
    dispatch(passwordChange({...data, id: id}))
      .unwrap()
      .then((res) => {
        if (res?.success) {
          console.log(res, "ress");
          navigate("/login");
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
  const handleCClickShowPassword = () => {
    setclickkValue(!clickKValue);
  };
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
                  <p>Enter your new Password.</p>
                </p>
              </div>
              <div className="singleTextBoxDiv">
                <div className="text_label">
                  <p>Password</p>
                 
                </div>
                <ThemeTextField
                  name="password"
                  type={!clickKValue ? "password" : "text"}
                  size="small"
                  fullWidth
                  sx={valuee && passwordFieldStyle}
                  placeholder="At least 6 characters"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          size="small"
                          aria-label="toggle password visibility"
                          onClick={handleCClickShowPassword}
                          // onMouseDown={handleMouseDownPassword}
                          edge="end"
                        >
                          {valuee &&
                            (!clickKValue ? <EyeIcon /> : <OpenEyeIcon />)}
                          {/* <Visibility/> */}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                  {...register("password")}
                  // onFocus={(event) => passwordFocus(event,'a')}
                  // onBlur={(event) => passwordBlur(event)}
                  error={errors.password}
                />
                {errors.password ? (
                  <p className="w-full error_messge">
                    {errors.password?.message}
                  </p>
                ) : (
                  ""
                )}
              </div>

              <div className="singleTextBoxDiv">
                <div className="text_label">
                  <p>Confirm Password</p>
                 
                </div>
                <ThemeTextField
                  name="passwordConfirmation"
                  type={!clickKValue ? "password" : "text"}
                  size="small"
                  fullWidth
                  sx={valuee && passwordFieldStyle}
                  placeholder="At least 6 characters"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          size="small"
                          aria-label="toggle password visibility"
                          onClick={handleCClickShowPassword}
                          // onMouseDown={handleMouseDownPassword}
                          edge="end"
                        >
                          {valuee &&
                            (!clickKValue ? <EyeIcon /> : <OpenEyeIcon />)}
                          {/* <Visibility/> */}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                  {...register("passwordConfirmation")}
                  error={errors.passwordConfirmation}
                />
                {errors.passwordConfirmation ? (
                  <p className="w-full error_messge">
                    {errors.passwordConfirmation?.message}
                  </p>
                ) : (
                  ""
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

export default ResetPassword2nd;
