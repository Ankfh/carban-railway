import React, { useState } from "react";
import { ThemeAdorment, ThemePhoneNumberTextfield } from "../muiTheme/Theme";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { changeInput, inputFocus } from "../muiTheme/OnFilledBorderStyle";
import { formatPhoneNumber } from "../numberFormat/Numberformat";
import { updateCompany } from "../redux/Slices/UpdateCompanySlice";
import { useDispatch } from "react-redux";
var changesMade = false;
const schema = yup.object().shape({
  phoneNumber: yup
    .string()
    .required("Phone number is required")
    .min(15, "Invalid phone number"),
});

const PhoneNumberTextBox = (props) => {
  const [edit, setedit] = useState(false);
  const [textboxShow, settextboxShow] = useState(false);
  const [nameHide, setnameHide] = useState(true);
  const [buttonsShow, setbuttonsShow] = useState(false);
  const [inputValue, setinputValue] = useState(props.name);
  const [name, setname] = useState();

  const dispatch = useDispatch();

  const onNameClick = () => {
    setedit(true);

    setbuttonsShow(true);

    settextboxShow(true);
    setnameHide(false);
  };

  const oneditClick = () => {
    //   changesMade = false;
    //  const target = document.getElementsByClassName('profileEditCancelButton');
    //   if(target[0]){
    //     target[0].click()
    //   }
    settextboxShow(true);

    setbuttonsShow(true);
    setedit(true);
  };

  const onSave = (e) => {
    console.log(changesMade);
    if (changesMade != true) {
      return false;
    }
    if (props.text === "tel") {
      console.log(inputValue.length);
      // console.log(inputValue.length, '????????')
      if (inputValue.length > 0 && inputValue.length < 15) {
        console.log(inputValue.length, "????????");
        setname(props.text);
        return false;
      }
    }
    if (inputValue !== "") {
      dispatch(updateCompany({ phoneNumber: inputValue }));

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
      onSave(e);
    }
  };

  const onCancel = () => {
    setedit(false);
    settextboxShow(false);
    setnameHide(true);
    setbuttonsShow(false);
    setinputValue(props.name);
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
    console.log(data, "oooo");
  };

  const handleInput = (e) => {
    changesMade = true;
    // this is where we'll call the phoneNumberFormatter function
    const formattedPhoneNumber = formatPhoneNumber(e.target.value);
    // we'll set the input value using our setInputValue
    setinputValue(formattedPhoneNumber);
    // phoneNumberOnchnage(e)
  };
  console.log(inputValue.length);
  return (
    <form onSubmit={handleSubmit(submitForm)}>
      <div>
        <div
          className={
            textboxShow ? "flex flex-col " : "flex flex-col gap-[18px]"
          }
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
            <ThemePhoneNumberTextfield
              name="phoneNumber"
              // value={'+86'}
              // defaultValue={'+86'}
              placeholder={props.placeholder}
              InputProps={{
                startAdornment: (
                  <ThemeAdorment position="start">+86 </ThemeAdorment>
                ),
              }}
              onInput={(e) => handleInput(e)}
              autoFocus={"true"}
              type={props.type}
              // size="small"
              onChange={(e) => setinputValue(e.target.value)}
              fullWidth
              defaultValue={props.name}
              value={inputValue}
              {...register("phoneNumber")}
              onFocus={(event) => inputFocus(event)}
              onBlur={(event) => changeInput(event)}
              onKeyPress={onEnterSave}
            />
          )}

          <div>
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
                      : name === "tel"
                      ? "Phone number is required"
                      : "Password is require"}
                  </p>
                )}
                {inputValue && (
                  <p className="error_messge !pt-0">
                    {name === "tel" && inputValue.length != 15
                      ? "Invalid phone number"
                      : ""}
                  </p>
                )}
              </div>
            ) : (
              ""
            )}
          </div>
        </div>

        {buttonsShow && (
          <div className="w-full flex pt-[16px] gap-[16px]">
            <button
              onClick={onSave}
              className="profileEditSaveButton pt-[16px]"
            >
              Save
            </button>
            <button onClick={onCancel} className="profileEditCancelButton">
              Cancel
            </button>
          </div>
        )}
      </div>
    </form>
  );
};

export default PhoneNumberTextBox;
