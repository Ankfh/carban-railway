import { Box, Button, IconButton, InputAdornment } from "@mui/material";
import { ReactComponent as EyeIcon } from "../image/svg/closeEyeIcon.svg";
import { ReactComponent as OpenEyeIcon } from "../image/svg/openEyeIcon.svg";
import React, { useRef, useState } from "react";
import TopBar from "../components/TopBar";
import "../css/font.css";
import TextField from "@mui/material/TextField";
import {
  textFieldStyle,
  selectField,
  muiButton,
  boxStyleforlogin,
} from "../css/style";
import { useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
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
import { ReactComponent as ArrowIcon } from "../image/svg/arrowIcon.svg";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { userSignup, userSignupSlice } from "../redux/Slices/UserSignupSlice";

const schema = yup.object().shape({
  userName: yup.string().required("Name is required"),
  email: yup.string().required("Email is required").email("Invalid email"),
  password: yup
    .string()
    .required("Password is required")
    .min(6, "Enter at least 6 characters"),
  companyId: yup.string(),
});

const OneStepSignUp = ({ setshow, companyId }) => {
  const navigate = useNavigate();
  const [age, setAge] = React.useState("");
  const [clickKValue, setclickkValue] = useState(false);
  const [errorsEmail, seterrorsEmail] = useState(null);
  const [errorType, seterrorType] = useState(null)
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
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const submitForm = (data) => {
    data = { ...data, companyId, userType: "admin" };
    dispatch(userSignup(data))
      .unwrap()
      .then((res) => {
        if (res?.success) {
          console.log(res, "ressss");

          localStorage.setItem("token", JSON.stringify(res.token));
          localStorage.setItem("user", JSON.stringify(res.user.userName));
          localStorage.setItem("companyId", JSON.stringify(res.user.companyId));
          localStorage.setItem("userId", JSON.stringify(res.user._id));

          navigate("/products");
        }
        if (!res?.success) {
          seterrorType(res.type)
          if (res.type == "email") {
            seterrorsEmail(res.message);
          }
        }
        console.log(res, "ressss");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const onArrowCick = () => {
    const newElement = document.getElementById("one-step-form");
    const singupElement = document.getElementById("singup-from");
    console.log(singupElement);
    newElement.classList.add("noDisplay");
    singupElement.classList.remove("noDisplay");
    document.getElementById("companyNameTextfield").focus();
  };

  const valuee = watch("password", false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      {/* <TopBar /> */}
      <form onSubmit={handleSubmit(submitForm)}>
        <div className="pt-[96px] bg-[#fbfbfb] hidden md:block pl-[43px]">
          <ArrowIcon
            onClick={onArrowCick}
            className="goBackIcon cursor-pointer hover:bg-[#F5F5F5]"
          />
        </div>
        <div className="mainDiv">
          <div className=" formBox md:!mt-[62px] !mt-[187px] ">
            <div className="formHeader  ">
              <h5 className=" headline">Just one step away</h5>
              <p className="title ">
                <p className="mr-1">Have an account?</p>
                <p
                  onClick={() => navigate("/login")}
                  className="textButton cursor-pointer text-[#31A246] hover:text-[#266E20] hover:underline underline-offset-[2px]"
                >
                  Sign in
                </p>
              </p>
            </div>
            <div className="inputsTextBoxesDiv">
              <div className="singleTextBoxDiv">
                <p className="text_label">Name</p>
                <ThemeTextField
                  id="first-textfield"
                  autoFocus={"true"}
                  name="userName"
                  type={"text"}
                  size="small"
                  fullWidth
                  // sx={textFieldStyle}
                  style={{
                    borderColor: `${errors.userName}` ? `red` : `green`,
                  }}
                  placeholder="Name"
                  {...register("userName")}
                  onBlur={(event) => changeInput(event)}
                  onFocus={(event) => inputFocus(event)}
                  error={errors.userName}
                />
                {errors.userName ? (
                  <p className="error_messge">{errors.userName?.message}</p>
                ) : (
                  ""
                )}
              </div>
              <div className="singleTextBoxDiv">
                <p className="text_label">Email</p>
                <ThemeTextField
                  name="email"
                  type={"text"}
                  size="small"
                  fullWidth
                  // sx={textFieldStyle}
                  style={{ borderColor: `${errors.email}` ? `red` : `green` }}
                  placeholder="Enter your email"
                  {...register("email")}
                  onBlur={(event) => changeInput(event)}
                  onFocus={(event) => inputFocus(event)}
                  error={errors.email}
                />
                {errors.email ? (
                  <p className="error_messge">{errors.email?.message}</p>
                ) : (
                  <p className="error_messge">
                  {errorType == "email" && errorsEmail}
                </p>
                )}
              </div>

              <div className="singleTextBoxDiv">
                <div className="text_label">
                  <p>Password</p>
                  {/* <p
                    onClick={() => navigate("/resetpassword")}
                    className=" cursor-pointer text-[#31A246] hover:text-[#266E20] hover:underline underline-offset-[2px]"
                  >
                    Forgot password?
                  </p> */}
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
            </div>
            <div className="w-full mt-[20px]">
              <ThemeButton type="submit" fullWidth variant="contained">
                Next
              </ThemeButton>
            </div>
            <div>
              <p
                onClick={onArrowCick}
                className="  block md:hidden textButton text-[#31A246] hover:text-[#266E20] hover:underline underline-offset-[2px] cursor-pointer"
              >
                Go Back
              </p>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default OneStepSignUp;
