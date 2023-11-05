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

const CityTextBox = (props) => {
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
  const [city, setcity] = useState("");

  const dispatch = useDispatch();

  const onNameClick = () => {
    setedit(true);

    setbuttonsShow(true);

    settextboxShow(true);
    setnameHide(false);
  };

  const oneditClick = () => {
    console.log(inputValue);
    // setinputValue("")
    // changesMade = false;
    // const target = document.getElementsByClassName('profileEditCancelButton');
    // if(target[0]){
    //   target[0].click()
    // }
    getCities();
    settextboxShow(true);

    setbuttonsShow(true);
    setedit(true);
  };

  const onSave = (e) => {
    if (changesMade != true) {
      return false;
    }
    // console.log(props, '>>>>>>>>>>>>>>>>>>>>>>>')
    if (props.text === "City") {
      if (inputValue === "") {
        setname(props.text);
        return false;
      }
    }

    if (inputValue !== "") {
      dispatch(updateCompany({ city: inputValue }));

      console.log(citydata);
      // console.log('?????????????????????')
      setinputValue(inputValue);
      setedit(false);
      settextboxShow(false);
      setnameHide(true);
      setbuttonsShow(false);
      props.handleSnackbarOpen();
    } else {
      // console.log('>>>>>><><><><><>')
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

  const getCities = () => {
    console.log(props.getProvience, "??????????????????????????????");
    let citiesArray = [];
    Object.keys(locData).forEach(function (key, index) {
      const target = locData[key];
      const provience = target.name;
      let pRegex = new RegExp(props.getProvience, "g");
      if (provience.match(pRegex)) {
        console.log(target.cities);
        Object.keys(target.cities).forEach(function (key, index) {
          const city = target.cities[key];
          console.log(city.name, "cityy nameeeeeeeee");
          citiesArray.push(city.name);
          setcitydata(citiesArray);
        });
      }
    });
  };
  const provinceChange = (event, value) => {
    setprovince(value);
    setinputValue(value);
    proName = value;
    setTimeout(() => {
      document.getElementById("combo-box-demo-city").click();
    }, 500);
    getCities();
  };
  const contries = Country.getCountryByCode("CN");
  const staties = State.getStatesOfCountry(contries.isoCode);
  const citiess = City.getAllCities(contries.isoCode);
  const newStaties = staties.map((e) => {
    return { label: e.name, value: e.isoCode };
  });

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

  useEffect(() => {
    const Newcitiess = newStaties.filter((e) => e.label === province);
    if (province) {
      setcities(City.getCitiesOfState(contries.isoCode, Newcitiess[0].value));
    }
  }, [contries.isoCode, province]);

  const newcity = cities?.map((e) => {
    return e.name;
  });
  // useEffect(() => {
  //   getCounty();
  // }, []);
  const cityChange = (e, value) => {
    changesMade = true;
    setcity(value);

    props.setcityValue(value);
    setinputValue(value);
  };

  useEffect(() => {
    props.setcityValue(inputValue);
  }, []);
  useEffect(() => {
    getCities();
  }, [props.getProvience]);

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
              id="combo-box-demo-city"
              defaultValue={inputValue}
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
                  onKeyPress={onEnterSave}
                />
              )}
            />
          )}

          {!inputValue && (
            <p className="error_messge !pt-0">
              {name === "City" ? "City is required" : ""}
            </p>
          )}
        </div>

        {buttonsShow && (
          <div className="w-full flex pt-[16px] gap-[16px]">
            <button
              onClick={(e) => onSave(e)}
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

export default CityTextBox;
