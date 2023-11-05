import React, { useEffect } from "react";
import { useState } from "react";
import { changeInput, inputFocus } from "../muiTheme/OnFilledBorderStyle";
import { ThemeAutoComplete, ThemeTextField } from "../muiTheme/Theme";
import { Country, State, City } from "country-state-city";
import locData from "../data/location.json";
import { updateCompany } from "../redux/Slices/UpdateCompanySlice";
import { useDispatch } from "react-redux";
var proName = null;
var cityName = null;
var changesMade = false;
const ProvinceTextBox = (props) => {
  const [province, setprovince] = React.useState("");
  const [County, setCounty] = React.useState();
  const [citydata, setcitydata] = React.useState();
  const [cities, setcities] = React.useState();
  const [edit, setedit] = useState(false);
  const [textboxShow, settextboxShow] = useState(false);
  const [nameHide, setnameHide] = useState(true);
  const [buttonsShow, setbuttonsShow] = useState(false);
  const [inputValue, setinputValue] = useState(props.name);
  const [name, setname] = useState();
 const dispatch=useDispatch()
  const onNameClick = () => {
    setedit(true);

    setbuttonsShow(true);

    settextboxShow(true);
    setnameHide(false);
  };

  const oneditClick = () => {
    // setinputValue("")
    changesMade = false;
    // const target = document.getElementsByClassName('profileEditCancelButton');
    // if(target[0]){
    //   target[0].click()
    // }
    settextboxShow(true);

    setbuttonsShow(true);
    setedit(true);
    // console.log(document.getElementById('combo-box-demo-province'))
  };

  const onSave = (e) => {
    if(changesMade != true){
      return false;
    }
    if (props.text === "province") {
      if (inputValue === "") {
        setname(props.text);
        return false;
      }

    }
    
    if (inputValue !== "") {
        dispatch(updateCompany({province: inputValue}))
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

  const onCancel = () => {
    setedit(false);
    settextboxShow(false);
    setnameHide(true);
    setbuttonsShow(false);
    setinputValue(props.name);
  };
  const getCities = () => {
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
  const provienceChangeMode = () => {
    changesMade = true;
  }
  const provinceChange = (event, value) => {
    // console.log(value);
    setprovince(value);
    setinputValue(value);
    props.setProvienceName(value)
    proName = value;
    // setinputValue(value);
    setname(props.text);
    // setTimeout(() => {
    //   document.getElementById("combo-box-demo-city").click();
    // }, 500);
    // getCities();
  };
  const contries = Country.getCountryByCode("CN");
  const staties = State.getStatesOfCountry(contries.isoCode);
  const citiess = City.getAllCities(contries.isoCode);
  const newStaties = staties.map((e) => {
    return { label: e.name, value: e.isoCode };
  });
  useEffect(() => {
    props.setProvienceName(inputValue)
}, [setprovince ])
  
  return (
    <div>
      <div>
        <div
          className={
            textboxShow ? "flex flex-col " : "flex flex-col gap-[18px]"
          }
        >
          <p className=" profileInputsLabel">{props.title}</p>
          <div className="flex justify-between">
            {!textboxShow && (
              <p onClick={oneditClick} className="profileInputs cursor-pointer">
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
            <ThemeAutoComplete
              disablePortal
              id="combo-box-demo-province"
              defaultValue={inputValue}
              options={newStaties}
              sx={{ width: 300 }}
              onInputChange={provinceChange}
              onChange={provienceChangeMode}
              onBlur={(event) => changeInput(event)}
              renderInput={(params) => (
                <ThemeTextField
                  autoCorrect="false"
                  {...params}
                  placeholder="Select province"
                  name="province"
                  onKeyPress={onEnterSave}
                />
              )}
            />
          )}
            {/* {name ? (
            <div> */}
              {!inputValue && (
                <p className="error_messge !pt-0">
                  {name === "province" ? "Province is required" : ""}
                </p>
              )}
            {/* </div>
            ) : (
              ""
            )} */}
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
    </div>
  );
};

export default ProvinceTextBox;
