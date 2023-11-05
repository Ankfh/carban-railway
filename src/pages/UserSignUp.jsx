import { Box, Button, IconButton, InputAdornment } from "@mui/material";
import React, { useState } from "react";
import TopBar from "../components/TopBar";
import "../css/font.css";
import TextField from "@mui/material/TextField";
import {
  textFieldStyle,
  selectField,
  muiButton,
  boxStyleforlogin,
} from "../css/style";
import { ReactComponent as EyeIcon } from "../image/svg/closeEyeIcon.svg";
import { ReactComponent as OpenEyeIcon } from "../image/svg/openEyeIcon.svg";
import { useNavigate, useParams } from "react-router-dom";
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
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { verifyInvitation } from "../redux/Slices/VarifyInvitationSlice";
import { userLinkSignup } from "../redux/Slices/UserLinkSignupSlice";

const schema = yup.object().shape({
  userName: yup.string().required("Name is required"),
  email: yup.string().required("Email is required").email("Invalid email"),
  password: yup
    .string()
    .required("Password is required")
    .min(6, "Enter at least 6 characters"),
});

const UserSignUp = () => {
  const navigate = useNavigate();
  const [age, setAge] = React.useState("");
  const [clickKValue, setclickkValue] = useState(false);
  const [errorsEmail, seterrorsEmail] = useState(null);
  const [errorType, seterrorType] = useState(null);
  const { id, companyId } = useParams();
  const dispatch = useDispatch();
  // setEmailValue(localStorage.getItem('verifyemail'))

  const emailValue = localStorage.getItem('verifyemail');
  const companyName = localStorage.getItem('companyName');

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
    console.log(data);
    data = { ...data, companyId, id, userType: "user" };
    dispatch(userLinkSignup(data))
      .unwrap()
      .then((res) => {
        if (res?.success) {
          // console.log(res, "resssssssssssssss");
          localStorage.setItem("token", JSON.stringify(res.token));
          localStorage.setItem("user", JSON.stringify(res.user.userName));
          localStorage.setItem("companyId", JSON.stringify(res.user.companyId));
          localStorage.setItem("userId", JSON.stringify(res.user._id));
          navigate("/products");
        }
        if (!res?.success) {
          // console.log(res, "res");
          seterrorType(res.type);
          if (res.type == "email") {
            seterrorsEmail(res.message);
          }
        }
        
        // console.log(res, "ressss");
      })
      .catch((error) => {
        console.log(error);
      });
    // console.log(data, "oooo");
  };

  const valuee = watch("password", false);
  useEffect(() => {
    window.scrollTo(0, 0);
   
  }, []);
  return (
    <div>
      <TopBar />
      <form onSubmit={handleSubmit(submitForm)}>
        <div className="mainDiv">
          <div className=" formBox !my-[153px]  md:!my-[216px]">
            <div className="formHeader  ">
              <h5 className=" headline">Signing up for</h5>
              <p className="title ">
                <p className="mr-1">{companyName}</p>
              </p>
            </div>
            <div className="inputsTextBoxesDiv">
              <div className="singleTextBoxDiv">
                <p className="text_label">Name</p>
                <ThemeTextField
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
                  value={emailValue}
                  ref={emailValue}
                  // disabled ="disabled"
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
                  <p
                    onClick={() => navigate("/resetpassword")}
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
                  ""
                )}
              </div>
            </div>
            <div className="w-full mt-[20px]">
              <ThemeButton type="submit" fullWidth variant="contained">
                Next
              </ThemeButton>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default UserSignUp;
