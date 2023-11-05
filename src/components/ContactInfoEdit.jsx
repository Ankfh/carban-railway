import React from "react";
import "../css/profile.css";
import { ThemeTextField } from "../muiTheme/Theme";
import { inputFocus, changeInput } from "../muiTheme/OnFilledBorderStyle";
import { useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { ThemeContactInfoTextField } from "../muiTheme/ProfileTheme";
import { updateCompany } from "../redux/Slices/UpdateCompanySlice";
import { useDispatch } from "react-redux";
import { updateUser } from "../redux/Slices/UpdateUserSlice";

const schema = yup.object().shape({
  email: yup.string().required("Email is required").email("Invalid email"),
});

var changesMade = false;

const ContactInfoEdit = (props) => {
  const [edit, setedit] = useState(false);
  const [textboxShow, settextboxShow] = useState(false);
  const [nameHide, setnameHide] = useState(true);
  const [buttonsShow, setbuttonsShow] = useState(false);
  const [inputValue, setinputValue] = useState(props.name);
  const [name, setname] = useState();
  const [emailcom, setemailcom] = useState();
  const [errorType, seterrorType] = useState(null);
  const [emailUpdated, setEmailUpdated] = useState(false);
  const [emailError, setemailError] = useState(null);

  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onNameClick = () => {
    setedit(true);

    setbuttonsShow(true);

    settextboxShow(true);
    setEmailUpdated(false);
    setnameHide(false);
  };

  const oneditClick = () => {
    // changesMade = false;
    // const target = document.getElementsByClassName('profileEditCancelButton');
    // if(target[0]){
    //   target[0].click()
    // }
    setEmailUpdated(false)
    settextboxShow(true);

    setbuttonsShow(true);
    setedit(true);
  };

  const onEnterSave = (e) => {
    if (e.key === "Enter") {
      onSave(e);
    }
  };

  const onSave = () => {
    if (changesMade != true) {
      return false;
    }
    if (props.text === "password") {
      if (inputValue.length < 6) {
        setname(props.text);
        return false;
      }
      dispatch(updateUser({ password: inputValue }));
      setinputValue("********");
    }
    if (props.text === "name") {
      dispatch(updateUser({ userName: inputValue }));
    }
    if (props.text === "email") {
      if (inputValue.length > 0) {
        dispatch(updateUser({ email: inputValue }))
          .unwrap()
          .then((res) => {
            if (res?.success) {
              console.log(res, "ressssc");
              setEmailUpdated(true)
              seterrorType();
              setedit(false);
              settextboxShow(false);
              setnameHide(true);
              setbuttonsShow(false);
              // console.log(inputValue)
              setinputValue(inputValue);
              props.handleSnackbarOpen();
            }
            if (!res?.success) {
              console.log(res, "res");
              seterrorType(res.type);

              if (res.type == "email") {
                setemailError(res.message);
                setname(props.text);
              }
            }
            console.log(res, "ressss");
          })
          .catch((error) => {
            console.log(error);
          });
        console.log(errorType, "eeeee");

        // const newValue = inputValue.slice(-4);
        const spliting = inputValue.split("@");
        if (spliting.length > 1) {
          const ckemail = spliting[1].split(".");
          if (ckemail.length > 1) {
            setemailcom(true);
          } else {
            setemailcom(false);
            setname(props.text);
            return false;
          }
        } else {
          setemailcom(false);
          setname(props.text);
          return false;
        }
      }
    }
    if (inputValue !== "" && props.text != "email") {
      setedit(false);
      settextboxShow(false);
      setnameHide(true);
      setbuttonsShow(false);

      props.handleSnackbarOpen();
      return;
    } else {
      setname(props.text);
    }
  };
  const onCancel = () => {
    if (props.text === "email") {
      setemailcom(true);
      seterrorType();
    }
    setedit(false);
    settextboxShow(false);
    setnameHide(true);
    setbuttonsShow(false);
    setinputValue(props.name);
  };

  const onInputChange = (value) => {
    changesMade = true;
    setinputValue(value);
  };

  const textFieldOnChange = (e) => {
    if (e.target.value === "") {
      console.log("dld");
    }
    setinputValue(e.target.value);
  };

  return (
    <div>
      <div
        className={textboxShow ? "flex flex-col " : "flex flex-col gap-[18px]"}
      >
        <p className=" profileInputsLabel">{props.title}</p>
        <div className="flex justify-between">
          {!textboxShow && (
            <p
              typeof="password"
              onClick={onNameClick}
              className="profileInputs cursor-pointer"
            >
              {inputValue}
            </p>
          )}
          <div>
            {!edit && (
              <p onClick={oneditClick} className="profileEdit cursor-pointer ">
                Edit
              </p>
            )}
          </div>
        </div>

        {textboxShow && (
          <ThemeContactInfoTextField
            autoFocus={"true"}
            type={props.type}
            // size="small"
            onChange={(e) => onInputChange(e.target.value)}
            fullWidth
            defaultValue={inputValue}
            // name={props.text}
            placeholder={props.placeholder}
            // {...register(props.text)}

            onFocus={(event) => inputFocus(event)}
            onBlur={(event) => changeInput(event)}
            // error={errors.props.text}
            onKeyPress={onEnterSave}
          />
        )}
        {}
        {name && !emailUpdated ? (
        // {name ? (
          <div>
            {!inputValue && (
              <p className="error_messge !pt-0">
                {name === "email"
                  ? "Email is required"
                  : name === "name"
                  ? "Name is required"
                  : "Password is required"}
              </p>
            )}

            {inputValue && (
              <p className="error_messge !pt-0">
                {name === "password" && inputValue.length < 6 ? (
                  "Enter at least 6 characters"
                ) : name === "email" && emailcom !== true ? (
                  "Invalid email"
                ) : (
                  <p className="error_messge !pt-0 ">
                    {errorType == "email" && emailError}
                  </p>
                )}
              </p>
            )}
          </div>
        ) : (
          ""
        )}
      </div>
      {buttonsShow && (
        <div className="w-full flex pt-[16px] gap-[16px]">
          <button onClick={onSave} className="profileEditSaveButton pt-[16px]">
            Save
          </button>
          <button onClick={onCancel} className="profileEditCancelButton">
            Cancel
          </button>
        </div>
      )}
    </div>
  );
};

export default ContactInfoEdit;
