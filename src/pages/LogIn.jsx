import React, { useState } from "react";
import TopBar from "../components/TopBar";
import "../css/font.css";
import { Box, Button, IconButton, InputAdornment } from "@mui/material";
import { ReactComponent as EyeIcon } from "../image/svg/closeEyeIcon.svg";
import { ReactComponent as OpenEyeIcon } from "../image/svg/openEyeIcon.svg";
import TextField from "@mui/material/TextField";
import {
  textFieldStyle,
  selectField,
  muiButton,
  boxStyleforlogin,
} from "../css/style";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, useWatch } from "react-hook-form";
import * as yup from "yup";
import {
  ThemeTextField,
  ThemeSelect,
  ThemeButton,
  passwordFieldStyle,
} from "../muiTheme/Theme";
import {
  inputFocus,
  changeInput,
  passwordFocus,
  passwordBlur,
} from "../muiTheme/OnFilledBorderStyle";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addDefaultValue } from "../redux/Slices/RestPasswordDefultValueSlice";
import { useSelector } from "react-redux";
import { userLogin } from "../redux/Slices/LoginSlice";

const schema = yup.object().shape({
  email: yup.string().required("Email is required").email("Invalid email"),
  password: yup
    .string()
    .required("Password is required")
    .min(6, "Enter at least 6 characters"),
});

const LogIn = () => {
  const navigate = useNavigate();
  const [age, setAge] = React.useState("");
  const [clickKValue, setclickkValue] = useState(false);
  const [passwordValue, setpasswordValue] = useState();
  const [email, setemail] = useState();
  const [passwordError, setpasswordError] = useState(null);
  const [errorType, seterrorType] = useState(null);
const [emailError, setemailError] = useState(null)
  const data = useSelector((state) => state.default.value);

  const dispatch = useDispatch();
  const handleChange = (event) => {
    setAge(event.target.value);
  };
  const handleCClickShowPassword = () => {
    setclickkValue(!clickKValue);
  };
  const {
    register,
    handleSubmit,
    watch,
    getValues,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const submitForm = (data) => {
    dispatch(userLogin(data))
      .unwrap()
      .then((res) => {
        if (res?.success) {
          localStorage.setItem("token", JSON.stringify(res.token));
          localStorage.setItem("user", JSON.stringify(res.user.userName));
          localStorage.setItem("userId", JSON.stringify(res.user._id));
          localStorage.setItem("companyId", JSON.stringify(res.user.companyId));

          navigate("/products");
        }
        if (!res?.success) {
          console.log(res, "res");
          seterrorType(res.type);
          if (res.type == "password") {
            setpasswordError(res.message);
          }
          if(res.type== 'email'){
            setemailError(res.message)
          }
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const text = "Don't have an account?";
  const join = "Join";

  const valuee = watch("password", false);
  console.log(valuee, "valueeeeeeee");
  const loginEmailChange = (e) => {
    setemail(e.target.value);
  };

  const forgetPasswordClick = () => {
    dispatch(addDefaultValue(email));
    navigate("/resetpassword");
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="setProjectBg">
      <TopBar Text={text} joinButton={join} />
      <form onSubmit={handleSubmit(submitForm)}>
        <div className="mainDiv">
          <div className=" formBox !mt-[221px]">
            <div className="formHeader  ">
              <h5 className=" headline">Standardize your products</h5>
              <p className="title ">
                <p className="mr-1">New here?</p>
                <p
                  onClick={() => navigate("/signup")}
                  className="textButton cursor-pointer text-[#31A246] hover:text-[#266E20] hover:underline underline-offset-[2px]"
                >
                  Sign up
                </p>
              </p>
            </div>
            <div className="inputsTextBoxesDiv">
              <div className="singleTextBoxDiv">
                <p className="text_label">Email</p>
                <ThemeTextField
                  autoFocus={"true"}
                  name="email"
                  type={"text"}
                  size="small"
                  fullWidth
                  defaultValue={data}
                  // sx={textFieldStyle}
                  placeholder="Enter your email"
                  {...register("email", {
                    onChange: (e) => loginEmailChange(e),
                  })}
                  onBlur={(event) => changeInput(event)}
                  onFocus={(event) => inputFocus(event)}
                  error={errors.email}
                  // sx={{ ${errors.email}? backgroundColor: "red" }}
                />
                {errors.email ? (
                  <p className="error_messge">{errors.email?.message}</p>
                ) : (
                  <p className="error_messge">
                  {errorType == "email" && emailError}
                </p>
                )}
              </div>

              <div className="singleTextBoxDiv">
                <div className="text_label">
                  <p>Password</p>
                  <p
                    onClick={forgetPasswordClick}
                    className="textButton cursor-pointer text-[#31A246] hover:text-[#266E20] hover:underline underline-offset-[2px]"
                  >
                    Forgot password?
                  </p>
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
                  <p className="error_messge">
                    {errorType == "password" && passwordError}
                  </p>
                )}
              </div>
            </div>
            <div className="w-full mt-[20px]">
              <ThemeButton type="submit" fullWidth variant="contained">
                Sign in
              </ThemeButton>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default LogIn;
