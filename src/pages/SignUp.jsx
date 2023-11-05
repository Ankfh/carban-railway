import {
  Box,
  Button,
  FormControl,
  InputAdornment,
  InputLabel,
  MenuItem,
  Typography,
} from "@mui/material";
import React, { useEffect, useRef } from "react";
import TopBar from "../components/TopBar";
import TextField from "@mui/material/TextField";
import {
  textFieldStyle,
  selectField,
  muiButton,
  formBoxStyle,
} from "../css/style";
import { styled } from "@mui/material/styles";

import Select from "react-select";
import Autocomplete from "@mui/material/Autocomplete";
import { useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, useWatch } from "react-hook-form";
import * as yup from "yup";
import {
  ThemeTextField,
  ThemeSelect,
  ThemeButton,
  ThemeAutoComplete,
  ThemePhoneNumberTextfield,
  ThemeAdorment,
} from "../muiTheme/Theme";
import { makeStyles } from "@material-ui/styles";
import { StyledOption } from "../muiTheme/Slect";
import "../css/font.css";
import { Country, State, City } from "country-state-city";
import { useState } from "react";
import { customStyles } from "../muiTheme/Slect";
import { inputFocus, changeInput } from "../muiTheme/OnFilledBorderStyle";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input/input";
import "../css/phoneNumberField.css";
import { formatPhoneNumber } from "../numberFormat/Numberformat";
import { ScrollRestoration } from "react-router-dom";
import OneStepSignUp from "../pages/OneStepSignUp";
import locData from "../data/location.json";
import { useDispatch } from "react-redux";
import { companySignup } from "../redux/Slices/CompanySignupSlice";
var proName = null;
var cityName = null;
const schema = yup.object().shape({
  companyName: yup.string().required("Company name is required"),
  province: yup.string().required("Province is required"),
  city: yup.string().required("City is required"),
  county: yup.string().required("County is required"),
  address: yup.string().required("Address is required"),
  phoneNumber: yup
    .string()
    .required("Phone number is required")
    .min(15, "Invalid phone number"),
});

//..................................
const usePlaceholderStyles = makeStyles((theme) => ({
  placeholder: {
    fontFamily: "Noto Sans",
    FontStyle: "Regular",
    fontWeight: "300",
    fontSize: "14px",
    lineHeight: "20px",
    letterSpacing: "0.25px",
    color: "#BEBEBE",
  },
}));

const Placeholder = ({ children }) => {
  const classes = usePlaceholderStyles();
  return <div className={classes.placeholder}>{children}</div>;
};
///......

const useStyles = makeStyles((theme) => ({
  //other part of the code//
  paper: {
    height: "164px",
    background: "#FFFFFF",
    color: "#2C2C2C !important",
    width: "190px",
    // height: "144px",
    borderRadius: "4px !important",
    boxShadow:
      "0px 1px 2px rgba(0, 0, 0, 0.3), 0px 2px 6px 2px rgba(0, 0, 0, 0.15)!important",
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    padding: "8px 0px",
    gap: "10px",
    // fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "16px",
    lineHeight: "24px",
    "&.MuiList-root-MuiMenu-list": {
      background: "red",
    },
  },
  list: {
    width: "100%",
    color: "#2C2C2C",
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "16px",
    "& .MuiMenuItem-root.Mui-selected": {
      backgroundColor: "#FFFFFF",
    },
    "& .MuiMenuItem-root:hover": {
      backgroundColor: "#FBFBFB",
    },
    "& .MuiMenuItem-root.Mui-selected:hover": {
      backgroundColor: "#FFFFFF",
    },
    "& .MuiMenuItem-root.Mui-focus": {
      backgroundColor: "#FFFFFF",
    },

    "& .MuiMenuItem-root": {
      // fontFamily: 'Roboto',
      fontStyle: "normal",
      fontWeight: "400",
      fontSize: "16px",
      lineHeight: "24px",
      background: "#FFFFFF",
    },
  },

  cak: {
    borderColor: "blue",
  },
}));

let addedlength = 0;
const dummynum = "(156) 8913-1857";
const SignUp = () => {
  const classes = useStyles();

  const navigate = useNavigate();

  const [province, setprovince] = React.useState("");
  const [County, setCounty] = React.useState();
  const [citydata, setcitydata] = React.useState();
  const [cities, setcities] = React.useState();
  const [bordercolor, setbordercolor] = useState("");
  // const [value, setValue] = useState();
  const inputRef = useRef(null);
  const [inputValue, setInputValue] = useState("");
  const [show, setshow] = useState(false);
  const [companyId, setcompanyId] = useState('')
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    getValues,

    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const submitForm = (data) => {
    if (data) {
      dispatch(companySignup(data))
        .unwrap()
        .then((res) => {
          if (res.success) {
            const cId = res.data._id
            setcompanyId(cId)
            const newElement = document.getElementById("one-step-form");
            const singupElement = document.getElementById("singup-from");
            newElement.classList.remove("noDisplay");
            singupElement.classList.add("noDisplay");
            document.getElementById("first-textfield").focus();
          }
        });
    }
  };

  const contries = Country.getCountryByCode("CN");
  const staties = State.getStatesOfCountry(contries.isoCode);
  const citiess = City.getAllCities(contries.isoCode);
  const newStaties = staties.map((e) => {
    return { label: e.name, value: e.isoCode };
  });
  const getValuesFields = getValues("province");
  const provinceOnChange = (event) => {
    console.log(event, '>?>?>?>??>?>?>?>?>?>?>??>?>???>?>?>')
  };
  const provinceChange = (event, val) => {
    var value
    if(event._reactName == "onClick"){
        value = event.target.innerText
      }else{
        value = val.label;
      }
       setprovince(value);
      proName = value;
      setTimeout(() => {
        document.getElementById("combo-box-demo-city").click();
      }, 500);
      getCities();
    
    
  };


  const cityChange = (event, value) => {
    cityName = value;
    setTimeout(() => {
      document.getElementById("combo-box-demo-county").click();
    }, 500);
    getCounty();
  };

  const countyChange = () => {
    setTimeout(() => {
      document.getElementById("combo-box-demo-address").focus();
    }, 500);

    // console.log(document.getElementById("combo-box-demo-address"), "iddddddd");
  };

  useEffect(() => {
    const Newcitiess = newStaties.filter((e) => e.label === province);
    if (province) {
      setcities(City.getCitiesOfState(contries.isoCode, Newcitiess[0].value));
    }
  }, [contries.isoCode, province]);

  const newcity = cities?.map((e) => {
    return e.name;
  });
  console.log(newcity, "cityyyyy");
  console.log(province, "prooo");
  const changeSelector = (event) => {
    if (event.target.value !== "") {
      event.currentTarget.parentNode
        .getElementsByTagName("fieldset")[0]
        .classList.add("inputDataAdded");
    }
  };

  const focusSelector = (event) => {
    event.currentTarget.parentNode
      .getElementsByTagName("fieldset")[0]
      .classList.remove("inputDataAdded");
  };

  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];

  const getDisabled = (province) => {
    if (province) return { disabled: true };
    return {};
  };

  const phoneNumberOnchnage = (event) => {
    let value = event.target.value;
    let charCode = event.which ? event.which : event.keyCode;

    if (
      value.length >= dummynum.length &&
      charCode > 31 &&
      (charCode < 48 || charCode > 57)
    ) {
      return false;
    } else {
      if (value.length > addedlength) {
        addedlength = addedlength + 1;
        const requireText = dummynum.slice(addedlength, dummynum.length);
        console.log(
          event.target.parentNode.parentNode.parentNode.getElementsByTagName(
            "p"
          )[0],
          "texttttt"
        );
        event.target.parentNode.parentNode.parentNode.getElementsByTagName(
          "p"
        )[0].innerHTML = value + requireText;
      } else {
        addedlength = addedlength - 1;
        const requireText = dummynum.slice(addedlength, dummynum.length);
        console.log(
          event.target.parentNode.parentNode.parentNode.getElementsByTagName(
            "p"
          )[0],
          "texttttt"
        );
        event.target.parentNode.parentNode.parentNode.getElementsByTagName(
          "p"
        )[0].innerHTML = value + requireText;
      }
    }
  };

  const handleInput = (e) => {
    // this is where we'll call the phoneNumberFormatter function
    const formattedPhoneNumber = formatPhoneNumber(e.target.value);
    // we'll set the input value using our setInputValue
    setInputValue(formattedPhoneNumber);
    // phoneNumberOnchnage(e)
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const getCounty = () => {
    let countyArray = [];
    Object.keys(locData).forEach(function (key, index) {
      const target = locData[key];
      const provience = target.name;
      let pRegex = new RegExp(proName, "g");
      if (provience.match(pRegex)) {
        console.log(target.cities);
        Object.keys(target.cities).forEach(function (key, index) {
          const city = target.cities[key];
          let cRegex = new RegExp(cityName, "g");
          if (city.name.match(cRegex)) {
            const districts = city.districts;
            Object.keys(districts).forEach(function (key, index) {
              countyArray.push(districts[key]);
              setCounty(countyArray);
            });
          }
        });
      }
    });
    console.log(countyArray);
  };
  const getCities = () => {
    console.log(proName)
    let citiesArray = [];
    Object.keys(locData).forEach(function (key, index) {
      const target = locData[key];
      const provience = target.name;
      let pRegex = new RegExp(proName, "g");
      if (provience.match(pRegex)) {
        console.log(target.cities);
        Object.keys(target.cities).forEach(function (key, index) {
          const city = target.cities[key];
          // console.log(city.name , 'cityy nameeeeeeeee')
          citiesArray.push(city.name);
          setcitydata(citiesArray);
        });
      }
    });
  };
  console.log(citydata, "cityyyyyyyyyyyyyyyyfuncc");
  return (
    <div>
      <TopBar />
      {/* { !show?  */}
      <form id="singup-from" onSubmit={handleSubmit(submitForm)}>
        <div className="mainDiv">
          <div className=" formBox ">
            <div className="  formHeader">
              <h5 className="headline ">Sign up for FREE</h5>
              <p className="title ">
                <p className="mr-1">Have an account?</p>
                <p
                  onClick={() => navigate("/login")}
                  className=" textButton cursor-pointer text-[#31A246] hover:text-[#266E20] hover:underline underline-offset-[2px]"
                >
                  Sign in
                </p>
              </p>
            </div>
            <div className="inputsTextBoxesDiv">
              <div className="singleTextBoxDiv">
                <p className="text_label">Company Name</p>
                <ThemeTextField
                  id="companyNameTextfield"
                  autoFocus={"true"}
                  // size="small"
                  name="companyName"
                  type={"text"}
                  // fullWidth
                  sx={bordercolor ? { borderColor: bordercolor } : ""}
                  placeholder="Company Name"
                  {...register("companyName")}
                  onFocus={(event) => inputFocus(event)}
                  onBlur={(event) => changeInput(event)}
                  error={Boolean(errors.companyName)}
                />
                {errors.companyName ? (
                  <p className="error_messge">{errors.companyName?.message}</p>
                ) : (
                  ""
                )}
              </div>
              <div className="twoSelectBoxDiv ">
                <div className="singleTextBoxDiv ">
                  <p className="text_label">Province</p>
                  <ThemeAutoComplete
                    disablePortal
                    id="combo-box-demo-province"
                    options={newStaties}
                    sx={{ width: 300 }}
                    onChange={provinceChange}
                    onBlur={(event) => changeInput(event)}
                    renderInput={(params) => (
                      <ThemeTextField
                        autoCorrect="false"
                        {...params}
                        placeholder="Select province"
                        name="province"
                        {...register("province")}
                        error={Boolean(errors.province)}
                      />
                    )}
                  />
                  {errors.province ? (
                    <p className="error_messge">{errors.province?.message}</p>
                  ) : (
                    ""
                  )}
                </div>
                <div className="singleTextBoxDiv">
                  <p className="text_label ">City</p>
                  <ThemeAutoComplete
                    disablePortal
                    id="combo-box-demo-city"
                    options={citydata}
                    sx={{ width: 700 }}
                    onChange={cityChange}
                    onBlur={(event) => changeInput(event)}
                    renderInput={(params) => (
                      <ThemeTextField
                        autoCorrect="false"
                        {...params}
                        placeholder="Select city"
                        name="city"
                        inputRef={inputRef}
                        {...register("city")}
                        error={Boolean(errors.city)}
                      />
                    )}
                  />
                  {errors.city && (
                    <p className="error_messge">{errors.city?.message}</p>
                  )}
                </div>
              </div>
              <div className="singleTextBoxDiv">
                <p className="text_label">County</p>
                <ThemeAutoComplete
                  disablePortal
                  id="combo-box-demo-county"
                  options={County}
                  onChange={countyChange}
                  // sx={{ width: 300 }}
                  onBlur={(event) => changeInput(event)}
                  renderInput={(params) => (
                    <ThemeTextField
                      autoCorrect="false"
                      {...params}
                      placeholder="Select county"
                      name="county"
                      {...register("county")}
                      error={Boolean(errors.county)}
                    />
                  )}
                />
                {errors.county && (
                  <p className="error_messge">{errors.county?.message}</p>
                )}
              </div>
              <div className="singleTextBoxDiv">
                <p className="text_label">Address</p>
                <ThemeTextField
                  // size="small"
                  id="combo-box-demo-address"
                  name="address"
                  type={"text"}
                  // fullWidth
                  placeholder="Enter detailed address"
                  {...register("address")}
                  onFocus={(event) => inputFocus(event)}
                  onBlur={(event) => changeInput(event)}
                  error={Boolean(errors.address)}
                />
                {errors.address && (
                  <p className="error_messge">{errors.address?.message}</p>
                )}
              </div>
              <div className="singleTextBoxDiv">
                <p className="text_label">Phone Number</p>
                <div className="placeholder">
                  {/* <p className="ptag">(156) 8913-1857</p> */}
                  <ThemePhoneNumberTextfield
                    name="phoneNumber"
                    type={"tel"}
                    // value={'+86'}
                    // defaultValue={'+86'}
                    placeholder="(156) 8913-1857"
                    InputProps={{
                      startAdornment: (
                        <ThemeAdorment position="start">+86 </ThemeAdorment>
                      ),
                    }}
                    // onInput={(event) => phoneNumberOnchnage(event)}
                    onInput={(e) => handleInput(e)}
                    value={inputValue}
                    {...register("phoneNumber")}
                    onFocus={(event) => inputFocus(event)}
                    onBlur={(event) => changeInput(event)}
                    error={Boolean(errors.phoneNumber)}
                  />
                </div>
                {errors.phoneNumber && (
                  <p className="error_messge">{errors.phoneNumber?.message}</p>
                )}
              </div>
            </div>
            <div className=" w-full mt-[20px] ">
              <ThemeButton type="submit" fullWidth variant="contained">
                Next
              </ThemeButton>
            </div>
          </div>
        </div>
      </form>
      {/* : */}
      <div id="one-step-form" className="noDisplay">
        <OneStepSignUp companyId={companyId}/>
      </div>
      {/* } */}
    </div>
  );
};

export default SignUp;
