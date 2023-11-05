import React, { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import TopBar from "../components/TopBar";
import { ReactComponent as ArrowIcon } from "../image/svg/arrowIcon.svg";
import p1 from "../image/Certificate";
import p2 from "../image/cardImg.png";

const Certificate = () => {
  const [accountFocus, setaccountFocus] = useState(false);
  const [certificateFocus, setcertificateFocus] = useState(true);
  const [show, setshow] = useState(true);
  const navigate = useNavigate();
  const certificateLinkClick = () => {
    // setshow(false);
    // setaccountFocus(false);
    // setcertificateFocus(true);
  };
  const accountLinkClick = () => {
    setshow(true);
    setaccountFocus(true);
    setcertificateFocus(false);
    navigate("/profileview");
  };

  const trialText = "30 days left in trial";
  const text = " ";
  const iconText = "L";
  const joinButton = " ";

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      {/* <div className="hidden md:block">
        <TopBar
          Text={text}
          joinButton={joinButton}
          iconText={iconText}
          trialText={trialText}
        />
      </div> */}
      <div className="hidden md:block">
        <div className="flex justify-between justify-items-center items-center pl-[41px] pr-[62px]  md:pt-[106px]  ">
          <div className=" md:w-[156px]">
            <ArrowIcon
              // onClick = {onArrowCick}
              onClick={() => navigate(-1)}
              className="goBackIcon cursor-pointer  hover:bg-[#F5F5F5]"
            />
          </div>
          <div className="flex   gap-[18px]">
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
          <div className="w-[144px]"></div>
        </div>
      </div>

      <div className="block md:hidden">
        <div className="mobiCertificateTopBar flex justify-between ">
          <div onClick={() => navigate(-1)}>
            <p className="CertificateMobiBackButton cursor-pointer">Back</p>
          </div>
          <div>
            <p className="certificateMobiTitle">Profile</p>
          </div>
          <div></div>
        </div>
      </div>

      <div className="mt-[71px] md:ml-[41px] mr-[62px] w-full flex justify-center md:justify-start ">
        <div className="">
          <div>
            {/* <img src={p1} alt="" /> */}
          </div>

          <div className="  ">
            <img src={p2} alt="" />
            <p>hjhjhjhcjhjchxjcjxhjchjkxhjkcxjchjxhdfdfdfdfdfdfdfdfdfdfdf</p>
          </div>
        </div>
      </div>
      <div className="fixed bottom-0 w-full ">
        <div className="block md:hidden">
          <div className="pt-[90px] mobiBottomTabMainDiv  ">
            <div
              onClick={accountLinkClick}
              className={
                accountFocus
                  ? "mobiBottomTabInnerDiv  flex flex-col justify-around   items-center !text-[#2C2C2C]"
                  : "mobiBottomTabInnerDiv  flex flex-col justify-around items-center"
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

export default Certificate;
