import React from "react";
import { useEffect } from "react";
import TopBar from "../components/TopBar";
import { ReactComponent as ArrowIcon } from "../image/svg/arrowIcon.svg";

import CompanyInfo from "../components/CompanyInfo";
import ContactInfo from "../components/ContactInfo";
import { Link, useNavigate } from "react-router-dom";
import {
  ThemeAddColleague,
  ThemeAddColleagueDialog,
  ThemeAddColleagueDialogContent,
  ThemeAddColleagueDialogTitle,
  ThemeProfileViewSnackbar,
} from "../muiTheme/ProfileTheme";
import { useState } from "react";
import { Box, IconButton, Snackbar, Tab, Tabs } from "@mui/material";
import TabPanel from "@mui/lab/TabPanel";
import { TabContext, TabList } from "@mui/lab";
import AddColleague from "../components/AddColleague";
import { ReactComponent as CrossIcon } from "../image/svg/CrossIcon.svg";
import Certificate from "../pages/Certificate";
import CertificateView from "../components/CertificateView";
import { useDispatch } from "react-redux";
import GetCompanySlice, { getCompany } from "../redux/Slices/GetCompanySlice";
import { getUser } from "../redux/Slices/getUserSlice";
// import Snackbar from "../components/Snackbar";

const ProfileView = () => {
  const [show, setshow] = useState(true);
  const navigate = useNavigate();
  const [value, setValue] = React.useState("1");
  const [accountFocus, setaccountFocus] = useState(true);
  const [certificateFocus, setcertificateFocus] = useState(false);
  const [companyInfoFocus, setcompanyInfoFocus] = useState(true);
  const [contactInfoFocus, setcontactInfoFocus] = useState(false);
  const [billingFocus, setbillingFocus] = useState(false);
  const [dialogClose, setdialogClose] = useState(false);
  const [acountCertificateShow, setacountCertificateShow] = useState(false);
  const [snackbarOpen, setsnackbarOpen] = useState(false);


  const companyId = JSON.parse(localStorage.getItem("companyId"));
  const id = JSON.parse(localStorage.getItem("userId"));
  const dispatch = useDispatch()
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const trialText = "30 days left in trial";
  const text = " ";
  const iconText = "L";
  const joinButton = " ";
  

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSnackbarClose = () => {
    setsnackbarOpen(false);
  };

  const handleSnackbarOpen = () => {
    setsnackbarOpen(true);
  };

  const certificateLinkClick = () => {
    setshow(false);
    setaccountFocus(false);
    setcertificateFocus(true);
    setbillingFocus(false);
    // navigate('/certificate')
    setacountCertificateShow(true);
  };
  const accountLinkClick = () => {
    setshow(true);
    setaccountFocus(true);
    setcertificateFocus(false);
    setbillingFocus(false);
    setacountCertificateShow(false);
  };

  const CompanyInfoClick = () => {
    setshow(true);
    setcompanyInfoFocus(true);
    setcontactInfoFocus(false);
  };

  const contactInfoClick = () => {
    setshow(false);
    setcompanyInfoFocus(false);
    setcontactInfoFocus(true);
  };

  const billlingClick = () => {
    setaccountFocus(false);
    setcertificateFocus(false);
    setbillingFocus(true);
  };

  const handleClose = () => {
    setdialogClose(false);
    // navigate("/raf");
    // imagesAdded =[];
  };

  const handleClickDialogOpen = () => {
    setdialogClose(true);
  };

  const action = (
    <React.Fragment>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleSnackbarClose}
      >
        <CrossIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );

  useEffect(() => {
    dispatch(getCompany(companyId))
    dispatch(getUser(id))
  }, [dispatch,companyId , id])
  
  return (
    <div className="pb-16">
      <div className="hidden md:block">
        <TopBar
          Text={text}
          joinButton={joinButton}
          iconText={iconText}
          trialText={trialText}
        />
      </div>
      <div className="flex profileViewMobiTopBar items-center justify-between">
        <div className="w-[90px]">
          <p
            onClick={() => navigate(-1)}
            className="profileMobi_topbarTextButton  hover:text-[#266E20] hover:underline underline-offset-[2px] cursor-pointer"
          >
            Back
          </p>
        </div>
        <div>
          <p className="profileViewMobiTopbartxt">Profile</p>
        </div>
        {!acountCertificateShow ? (
          <div>
            <p
              onClick={handleClickDialogOpen}
              className="profileMobi_topbarTextButton  hover:text-[#266E20] hover:underline underline-offset-[2px] cursor-pointer"
            >
              Add colleague
            </p>
          </div>
        ) : (
          <div className="w-[73px]"></div>
        )}
      </div>
      {!acountCertificateShow && (
        <div className="w-full block md:hidden pt-[28px]">
          <div className="flex justify-center  gap-[18px]">
            <div className="navigationCompanyInfo-button-Mobi flex flex-col gap-[12px]">
              <span
                className={companyInfoFocus ? "text-[#2c2c2c]" : ""}
                onClick={CompanyInfoClick}
              >
                Company info
              </span>{" "}
              {companyInfoFocus && <span className="accountFocus_bar "></span>}
            </div>
            <div className="navigationContactInfo-button-Mobi flex flex-col gap-[12px] ">
              <span
                className={contactInfoFocus ? "text-[#2c2c2c]" : ""}
                onClick={contactInfoClick}
              >
                Contact info
              </span>
              {contactInfoFocus && (
                <span className="certificateFocus_Bar"></span>
              )}
            </div>
          </div>
        </div>
      )}
      <div className="w-full  md:px-[41px]">
        <div className="hidden md:block">
          <div className="flex justify-between justify-items-center items-center  md:pt-[52px]  ">
            <div className=" md:w-[156px]">
              <ArrowIcon
                // onClick = {onArrowCick}
                onClick={() => navigate(-1)}
                className="goBackIcon cursor-pointer  hover:bg-[#F5F5F5]"
              />
            </div>
            <div className="flex   gap-[18px]">
              {/* <TabContext value={value}>
                <TabList
                  onChange={handleChange}
                  aria-label="lab API tabs example"
                >
                  <Tab label="Item One" value="1" />
                  <Tab label="Item Two" value="2" />
                </TabList>

                <TabPanel value="1">Item One</TabPanel>
                <TabPanel value="2">Item Two</TabPanel>
              </TabContext> */}
              <div className="profileAccount_nvigation cursor-pointer flex flex-col gap-[4px]">
                <span
                  onClick={accountLinkClick}
                  className={accountFocus ? "text-[#2c2c2c]" : ""}
                >
                  Account
                </span>{" "}
                {accountFocus && <span className="accountFocus_bar"></span>}
              </div>
              <div className="profileCertificate_nvigation cursor-pointer flex flex-col gap-[4px] ">
                {" "}
                <span
                  onClick={certificateLinkClick}
                  className={certificateFocus ? "text-[#2c2c2c]" : ""}
                >
                  Certificate
                </span>{" "}
                {certificateFocus && (
                  <span className="certificateFocus_Bar "></span>
                )}
              </div>
            </div>
            {!acountCertificateShow ? (
              <div className="w-[144px]  addProductMobileStyleDiv h-[44px]">
                {" "}
                <ThemeAddColleague
                  //   onClick={handleClickOpen}
                  type="submit"
                  onClick={handleClickDialogOpen}
                  //   sx={productMuiButton}
                  fullWidth
                  variant="contained"
                >
                  Add colleague
                </ThemeAddColleague>
              </div>
            ) : (
              <div className="w-[144px] h-[44px]"></div>
            )}
            <ThemeAddColleagueDialog
              open={dialogClose}
              id="addCollegueModal"
              scroll="paper"
              keepMounted
              // onClose={handleClose}
              aria-describedby="alert-dialog-slide-description"
            >
              <ThemeAddColleagueDialogTitle>
                <div className="flex justify-between rounded-[8px 8px 0px 0px]  items-center py-[12px] pl-[20px] pr-[20px] ">
                  <span className="font-medium text-[16px] text-[#707070]">
                    Add Colleague
                  </span>
                  <div>
                    <span
                      onClick={() => handleClose()}
                      className="w-[14px] cursor-pointer "
                    >
                      <CrossIcon className="goBackIcon cursor-pointer hover:bg-[#F5F5F5]" />
                    </span>
                  </div>
                </div>
              </ThemeAddColleagueDialogTitle>
              <ThemeAddColleagueDialogContent>
                <AddColleague dialogClose={dialogClose} />
              </ThemeAddColleagueDialogContent>
            </ThemeAddColleagueDialog>
          </div>
        </div>
        {!acountCertificateShow && (
          <div className="flex justify-center  gap-[40px] pt-[44px]">
            <div
              className={show ? "block w-full" : "profileShowAndHide w-full"}
            >
              <CompanyInfo handleSnackbarOpen={handleSnackbarOpen} />
            </div>
            <div
              className={show ? "profileShowAndHide w-full" : "block w-full"}
            >
              <ContactInfo handleSnackbarOpen={handleSnackbarOpen} />
            </div>
          </div>
        )}
        <div>
          {" "}
          <ThemeProfileViewSnackbar
            open={snackbarOpen}
            autoHideDuration={6000}
            onClose={handleSnackbarClose}
            message="Changes saved"
            action={action}
            // className={classes.root}
            anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
          />
        </div>
        {acountCertificateShow && (
          <div>
            <CertificateView />
          </div>
        )}
      </div>
      <div className="fixed bottom-0 w-full ">
        <div className="block md:hidden">
          <div className="pt-[90px] mobiBottomTabMainDiv  ">
            <div
              onClick={accountLinkClick}
              className={
                accountFocus
                  ? "mobiBottomTabInnerDiv pr-[26px] flex flex-col justify-around   items-center !text-[#2C2C2C]"
                  : "mobiBottomTabInnerDiv pr-[26px]  flex flex-col justify-around items-center"
              }
            >
              <span
                className={
                  accountFocus
                    ? "accountFocus_bar visible "
                    : "accountFocus_bar invisible "
                }
              ></span>
              Account
            </div>
            {/* <div
              onClick={billlingClick}
              className={
                billingFocus
                  ? "mobiBottomTabInnerDiv flex flex-col justify-around   items-center !text-[#2C2C2C]"
                  : "mobiBottomTabInnerDiv  flex flex-col justify-around items-center"
              }
            >
              <span
                className={
                  billingFocus
                    ? "accountFocus_bar visible "
                    : "accountFocus_bar invisible "
                }
              ></span>
              Billing
            </div> */}

            <div
              onClick={certificateLinkClick}
              className={
                certificateFocus
                  ? "mobiBottomTabInnerDiv  flex flex-col justify-around  items-center  !text-[#2C2C2C]"
                  : "mobiBottomTabInnerDiv  flex flex-col justify-around  items-center"
              }
            >
              <span
                className={
                  certificateFocus
                    ? "accountFocus_bar visible "
                    : "accountFocus_bar invisible "
                }
              ></span>
              Certificate
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileView;
