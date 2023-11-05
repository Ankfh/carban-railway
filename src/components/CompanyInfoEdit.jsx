import React from "react";
import "../css/profile.css";
import { ThemeTextField } from "../muiTheme/Theme";
import { inputFocus, changeInput } from "../muiTheme/OnFilledBorderStyle";
import { useState } from "react";
import { ThemeCompanyInfoTextField } from "../muiTheme/ProfileTheme";
import { useDispatch } from "react-redux";
import { updateCompany } from "../redux/Slices/UpdateCompanySlice";
var changesMade = false;
const Rafce = (props) => {
  const [edit, setedit] = useState(false);
  const [textboxShow, settextboxShow] = useState(false);
  const [nameHide, setnameHide] = useState(true);
  const [buttonsShow, setbuttonsShow] = useState(false);
  const [inputValue, setinputValue] = useState(props.name);
  const [name, setname] = useState();
const dispatch = useDispatch()
  const onNameClick = () => {
    setedit(true);

    setbuttonsShow(true);

    settextboxShow(true);
    setnameHide(false);
  };

  const oneditClick = () => {
    // changesMade = false;
    // const target = document.getElementsByClassName('profileEditCancelButton');
    // if(target[0]){
    //   target[0].click()
    // }
    settextboxShow(true);

    setbuttonsShow(true);
    setedit(true);
  };

  const onSave = (e) => {
    if(changesMade != true){
      return false;
    }
    if (inputValue !== "") {
      console.log(props.text,'pros textttt')
      if(props.text == 'CompanyName'){
        dispatch(updateCompany({companyName: inputValue}))
      }
      if(props.text == 'Address'){
        dispatch(updateCompany({address: inputValue}))
      }
     
      setedit(false);
      settextboxShow(false);
      setnameHide(true);
      setbuttonsShow(false);
      props.handleSnackbarOpen();
    } else {
      setname(props.text);
    }
  };

  const onEnterSave = (e) => {
      if (e.key === "Enter") {
        onSave(e)
      }
  };

  const onInputChange = (value)=> {
   
    console.log(props.text)
    changesMade = true;
    setinputValue(value)
  };

  const onCancel = () => {
    setedit(false);
    settextboxShow(false);
    setnameHide(true);
    setbuttonsShow(false);
    setinputValue(props.name);
  };
  return (
    <div>
      <div
        className={textboxShow ? "flex flex-col " : "flex flex-col gap-[18px]"}
      >
        <p className=" profileInputsLabel">{props.title}</p>
        <div className="flex justify-between">
          {!textboxShow && (
            <p onClick={onNameClick} className="profileInputs cursor-pointer">
              {inputValue}
            </p>
          )}
          <div>
            {!edit && (
              <p onClick={oneditClick} className="profileEdit cursor-pointer">
                Edit
              </p>
            )}
          </div>
        </div>
        {textboxShow && (
          <ThemeCompanyInfoTextField
            autoFocus={"true"}
            type={props.type}
            // size="small"
            onChange={(e) => {
              onInputChange(e.target.value)
            }}
            fullWidth
            defaultValue={props.name}
            value={inputValue}
            name="email"
            placeholder={props.placeholder}
            // {...register("email")}

            onFocus={(event) => inputFocus(event)}
            onBlur={(event) => changeInput(event)}
            // error={errors.email}
            onKeyPress={onEnterSave}
          />
        )}
        {name ? (
          <div>
            {!inputValue && (
              <p className="error_messge !pt-0">
                {name === "CompanyName"
                  ? "Company name is required"
                  : name === "City"
                  ? "City is required"
                  : name === "Province"
                  ? "Province is required"
                  : name === "County"
                  ? "County is required"
                  : name === "Address"
                  ? "Address is required"
                  : name === "PhoneNumber"
                  ? "Phone number is required"
                  : "Password is require"}
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

export default Rafce;
