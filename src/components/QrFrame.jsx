import React from "react";
import { ReactComponent as Qrcode } from "../image/svg/QrCode.svg";
import { ReactComponent as DownloadIcon } from "../image/svg/DownloadArowIcon.svg";
import { ReactComponent as SelectIcon } from "../image/svg/SelectFarwardIcon.svg";
import p1 from "../image/qrMobi.png";
import QRCode from 'qrcode.react';

import {
  ThemeAccordion,
  ThemeAccordionSummary,
  ThemeDownloadButton,
  ThemeTransferButton,
} from "../muiTheme/SingleProductTheme";
import { useNavigate } from "react-router-dom";
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useState } from "react";
import { useSelector } from "react-redux";

const QrFrame = ({ setOpen }) => {
  const navigate = useNavigate();
  const pageUrl = window.location.href;
  const product = useSelector((state) => state.singleProduct.data.products);

  const DownloadQr = () => {
    const canvas = document.getElementById('productQrCode')
    const url = canvas.toDataURL('image/png');
    const a = document.createElement("a");
    a.href = url;
    a.download = "qrcode.png";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  const transferButtonClick = () => {
    const targett = document.getElementById("transferProduct_companyName");
    console.log(targett, "targettt");
    setOpen(true);
  };
  return (
    <div className=" qrMainDiv w-auto  xl:w-[556px] lg:w-[460px] md:w-[315px] flex flex-col gap-[41px] items-center">
      <div className="hidden md:block">
        <div className="">
          <p className="qrSubTitle">QR code for</p>
          <p className="qrTitle">
            {product !== undefined ? product.productName : ""}
          </p>
        </div>
        <div>
          {/* <Qrcode /> */}
          <QRCode value={pageUrl} id="productQrCode" size={276} bgColor="#949494" fgColor="#ffffff" className="productQr" />
        </div>
      </div>
      <div className="block w-full md:hidden ">
        <ThemeAccordion defaultExpanded={"true"}>
          <ThemeAccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <div className="">
              <p className="qrSubTitleMobi">QR code for</p>
              <p className="qrTitleMobi">42” Smart TV</p>
            </div>
          </ThemeAccordionSummary>
          <AccordionDetails>
            <div>
              <div className="w-full flex justify-center">
                <img id="imageQR" width={180} src={p1} alt="" />
              </div>
              <div className="flex justify-center pt-[20px] items-center gap-[20px] w-full ">
                <ThemeTransferButton onClick={transferButtonClick}>
                  Transfer
                </ThemeTransferButton>
                <ThemeDownloadButton onClick={DownloadQr}>
                  Download
                </ThemeDownloadButton>
              </div>
            </div>
          </AccordionDetails>
        </ThemeAccordion>
      </div>
      <div className="hidden md:block">
        <div className="flex   items-center gap-[20px] w-[300px] ">
          <ThemeTransferButton onClick={transferButtonClick}>
            Transfer
          </ThemeTransferButton>
          <ThemeDownloadButton onClick={DownloadQr} endIcon={<DownloadIcon />}>
            Download
          </ThemeDownloadButton>
        </div>
      </div>
      <div
        onClick={() => navigate("/transferlist")}
        className=" cursor-pointer viewAllTransferText  sm:mt-[52px] lg:mt-[407px] md:mt-[347px] flex w-full pt-[22px] justify-between px-2 border-t-[1px] border-[#E7E7E7]"
      >
        <p>View all transfers</p>
        <p>
          <SelectIcon />
        </p>
      </div>
    </div>
  );
};

export default QrFrame;
