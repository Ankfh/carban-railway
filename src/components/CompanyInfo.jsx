import React, { useState } from "react";
import "../css/profile.css";
import { ThemeTextField } from "../muiTheme/Theme";
import { inputFocus, changeInput } from "../muiTheme/OnFilledBorderStyle";
import Rafce from "./CompanyInfoEdit";
import PhoneNumberTextBox from "./PhoneNumberTextBox";
import ProvinceTextBox from "./ProvinceTextBox";
import CountyTextBox from "./CountyTextBox";
import CityTextBox from "./CityTextBox";
import { useSelector } from "react-redux";
const CompanyInfo = ({ handleSnackbarOpen }) => {
  const [edit, setedit] = useState(false);
  const [textboxShow, settextboxShow] = useState(false);
  const [nameHide, setnameHide] = useState(true);
  const [getProvience, setProvienceName] = useState("Chongqing");
  const [cityValue, setcityValue] = useState("Mingguang");

  const data = useSelector((state) => state.getCompany);

  const onNameClick = () => {
    settextboxShow(true);
    setnameHide(false);
  };
  return (
    <div className="companyInfo_mainDiv w-full ">
      <div className="comanyInfo_titleBar hidden md:block">
        <p>Company info</p>
      </div>

      {data.loading === true ? (
        <div>
          {/* <h2>loading........</h2> */}
        </div>
      ) : data.error ? (
        <div>
          <h2>Page not Found</h2>
        </div>
      ) : (
        <div className="pt-[24px] companyInfoInnerDiv pl-[20px] pb-[20px] pr-[30px] ">
          <Rafce
            title={"Company name"}
            name={
              data.data.company !== undefined && data.data.company.companyName
            }
            placeholder={"Company name"}
            type={"text"}
            handleSnackbarOpen={handleSnackbarOpen}
            text={"CompanyName"}
          />
          <div className="profileDivider mt-[22px] mb-[12px] px-[24px]"></div>
          <ProvinceTextBox
            setProvienceName={setProvienceName}
            title={"Province"}
            name={data.data.company !== undefined && data.data.company.province}
            placeholder={"Province name"}
            type={"text"}
            handleSnackbarOpen={handleSnackbarOpen}
            text={"province"}
          />

          <div className="profileDivider mt-[22px] mb-[12px] px-[24px]"></div>
          <CityTextBox
            title={"City"}
            type={"text"}
            handleSnackbarOpen={handleSnackbarOpen}
            setcityValue={setcityValue}
            getProvience={getProvience}
            name={data.data.company !== undefined && data.data.company.city}
            placeholder={"City name"}
            text={"City"}
          />

          <div className="profileDivider mt-[22px] mb-[12px] px-[24px]"></div>

          <CountyTextBox
            title={"County"}
            name={data.data.company !== undefined && data.data.company.county}
            placeholder={"County name"}
            type={"text"}
            handleSnackbarOpen={handleSnackbarOpen}
            cityValue={cityValue}
            getProvience={getProvience}
            text={"County"}
          />
          <div className="profileDivider mt-[22px] mb-[12px] px-[24px]"></div>

          <Rafce
            title={"Address"}
            name={data.data.company !== undefined && data.data.company.address}
            placeholder={"Address name"}
            type={"text"}
            handleSnackbarOpen={handleSnackbarOpen}
            text={"Address"}
          />
          <div className="profileDivider mt-[22px] mb-[12px] px-[24px]"></div>

          <PhoneNumberTextBox
            title={"Phone"}
            name={
              data.data.company !== undefined && data.data.company.phoneNumber
            }
            placeholder={"Phone number"}
            type={"tel"}
            handleSnackbarOpen={handleSnackbarOpen}
            text={"tel"}
          />
        </div>
      )}
    </div>
  );
};

export default CompanyInfo;
