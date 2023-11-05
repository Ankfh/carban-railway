import React, { useState } from "react";

import { ReactComponent as DownloadPhoto } from "../image/svg/AddProductErrorDialogIcon.svg";
import p1 from "../image/cardImg.png";
import p2 from "../image/DownloadPhotoArrow.png";

import "../css/addProductForm.css";
import "../css/AddProductDialogBox.css";
import DownloadPhotoDialogCompo from "./DownloadPhotoDialogCompo";
import { useSelector } from "react-redux";
import {
  ThemeAddProductErrorDialogDownloadButton,
  ThemeAddProductErrorDialogProcessButton,
} from "../muiTheme/AddProductErrordialog";
const DownloadPhotoCardsDialogBox = ({
  downloadPhoto,
  setuploadConfirmation,
}) => {
  console.log(downloadPhoto, "downloadddddddd");

  const errorData = useSelector((state) => state.addAdminPhoto);
  return (
    <div>
      <div className="flex flex-col justify-center gap-[16px] p-[20px]">
        <div>
          <p className="downloadPhotosName">
            {errorData.dataError.length > 0 && errorData.dataError[0].name}
          </p>
        </div>
        <div className="">
          <p className=" downloadPhotosText">
            To get access to the certificate,
            <br /> upload photos to your product page
          </p>
        </div>
        <div className=" grid grid-flow-col gap-[30px] pl-[22px] ">
          <DownloadPhotoDialogCompo downloadPhoto={downloadPhoto} />

          <DownloadPhotoDialogCompo />
        </div>

        <div className="mt-[122px] w-full flex justify-center">
          <ThemeAddProductErrorDialogDownloadButton
            fullWidth
            variant="contained"
            type="submit"
            onClick={() => setuploadConfirmation(true)}
          >
            Photos dowloaded
          </ThemeAddProductErrorDialogDownloadButton>
        </div>
      </div>
    </div>
  );
};

export default DownloadPhotoCardsDialogBox;
