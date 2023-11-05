import React from "react";
import { useSelector } from "react-redux";
import ContactInfoEdit from "./ContactInfoEdit";

const ContactInfo = ({ handleSnackbarOpen }) => {
  const data = useSelector((state) => state.getUser);
  console.log(data, "###########");
  return (
    <div className="companyInfo_mainDiv w-full ">
      <div className="comanyInfo_titleBar hidden md:block">
        <p>Contact info</p>
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
        <div className="pt-[24px] companyInfoInnerDiv pl-[20px] pb-[20px] pr-[30px]">
          <ContactInfoEdit
            title={"Name"}
            name={data.data.user !== undefined && data.data.user.userName}
            placeholder={"Name"}
            handleSnackbarOpen={handleSnackbarOpen}
            type="text"
            text="name"
          />
          <div className="profileDivider mt-[22px] mb-[12px] px-[24px]"></div>

          <ContactInfoEdit
            title={"Email"}
            name={data.data.user !== undefined && data.data.user.email}
            placeholder={"Email"}
            handleSnackbarOpen={handleSnackbarOpen}
            type="email"
            text="email"
          />
          <div className="profileDivider mt-[22px] mb-[12px] px-[24px]"></div>

          <ContactInfoEdit
            title={"Password"}
            name={"********"}
            placeholder={"***********"}
            handleSnackbarOpen={handleSnackbarOpen}
            type="password"
            text="password"
          />
        </div>
      )}
    </div>
  );
};

export default ContactInfo;
