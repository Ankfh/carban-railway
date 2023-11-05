import React from "react";
import { ReactComponent as Qrcode } from "../image/svg/QrCode.svg";
import { ReactComponent as DownloadIcon } from "../image/svg/DownloadArowIcon.svg";
import { ReactComponent as SelectIcon } from "../image/svg/SelectFarwardIcon.svg";
import p1 from "../image/qrMobi.png";

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

const QrFrameProductDetail = ({ setOpen }) => {
  const navigate = useNavigate();

  const product = useSelector((state) => state.singleProduct.data.products);

  const DownloadQr = () => {
    const url = document.getElementById("imageQR").getAttribute("src");
    const a = document.createElement("a");
    console.log(url);
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
            {" "}
            {product !== undefined ? product.serialNumber : ""}
          </p>
        </div>
        <div>
          <Qrcode />
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
                  Edit
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
            Edit
          </ThemeTransferButton>
          <ThemeDownloadButton onClick={DownloadQr} endIcon={<DownloadIcon />}>
            Download
          </ThemeDownloadButton>
        </div>
      </div>
    </div>
  );
};

export default QrFrameProductDetail;
