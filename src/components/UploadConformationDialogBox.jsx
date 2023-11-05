import React, { useState } from "react";

import { ReactComponent as DownloadPhoto } from "../image/svg/AddProductErrorDialogIcon.svg";
import p1 from "../image/cardImg.png";
import p2 from "../image/DownloadPhotoArrow.png";

import "../css/addProductForm.css";
import "../css/AddProductDialogBox.css";
import DownloadPhotoDialogCompo from "./DownloadPhotoDialogCompo";
import { useDispatch, useSelector } from "react-redux";
import {
  ThemeAddProductErrorDialogDownloadButton,
  ThemeAddProductErrorDialogProcessButton,
  ThemeConfirmationError,
  ThemeUploadConfirmationError,
} from "../muiTheme/AddProductErrordialog";

import { ReactComponent as PdfIcon } from "../image/svg/AddProductErrorDialogIcon.svg";
import { ReactComponent as DownloadIcon } from "../image/svg/DownloadIcon.svg";
import { BaseUrl } from "../BaseURL/BaseUrl";
import { updateProduct } from "../redux/Slices/UpdateProductSlice";

const UploadConformationDialogBox = () => {
  const [array, setarray] = useState(["1"]);
  const [firstText, setfirstText] = useState();
  const [secondText, setsecondText] = useState();
  const [thirdText, setthirdText] = useState();
  const errorData = useSelector((state) => state.addAdminPhoto);

  const dispatch = useDispatch();
  var newData = [];
  if (errorData.dataError.length > 0) {
    newData = JSON.parse(errorData.dataError[0].photos);
    console.log(errorData, "download Datayy");
  }
  const newLinkClick = () => {
    // array.push('1')
    setarray([...array, "2"]);
  };
  const downloadPhoto = (data) => {
    // const url = document.getElementById("certificatePhoto").getAttribute("src");
    const url = `${BaseUrl}/public/AdminPhotos/${data}`;
    const a = document.createElement("a");
    a.href = url;
    a.download = "Certificate.png";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  const firstChange = (e) => {
    setfirstText(e.target.value);
  };

  const secondChange = (e) => {
    setsecondText(e.target.value);
  };

  const thirdChange = (e) => {
    setthirdText(e.target.value);
  };

  let url = [];

  const proceedClick = () => {
    if (firstText) {
      url.push({ url: firstText, status: "pending" });
    }
    if (secondText) {
      url.push({ url: secondText, status: "pending" });
    }
    if (thirdText) {
      url.push({ url: thirdText, status: "pending" });
    }

    console.log(url, "yrll");
    if (url.length > 0) {
      dispatch(updateProduct({ url: url, id: errorData.dataError[0].id }));
    }
  };
  return (
    <div>
      <div className="flex flex-col justify-start  gap-[16px] p-[20px]">
        <div>
          <p className="AddProductErrorDownloadPhotoLabel  pb-[16px]">
            You can still dowload the photos{" "}
          </p>
          {newData?.map((item) => (
            <div className="flex justify-between">
              <div className="flex gap-[8px] items-center">
                <p>
                  <PdfIcon />
                </p>
                <p className="addProductErrorFileName">{item.path}</p>
                <p className="pdfSize">1.8 mb</p>
              </div>
              <p>
                <DownloadIcon
                  onClick={() => downloadPhoto(item.path)}
                  className=" cursor-pointer  hover:bg-[#F5F5F5]"
                />
              </p>
            </div>
          ))}
        </div>
        <div className=" ">
          <p className=" downloadPhotosText !text-start">
            Share the link of the product page, you uploaded photos to (up to 3
            links)
          </p>
        </div>
        <div>
          <p className="AddProducturlLabel">URL of your product</p>
          <ThemeUploadConfirmationError
            autoFocus={"true"}
            // size="small"
            fullWidth
            value={firstText}
            onChange={(e) => firstChange(e)}
            // defaultValue={''}
            name="URL"
            placeholder="URL"
            // {...register("email")}
            // onFocus={(event) => inputFocus(event)}
            // onBlur={(event) => changeInput(event)}
            // error={errors.email}
          />
        </div>

        {array.length > 1 && (
          <div>
            <p className="AddProducturlLabel">URL of your product</p>
            <ThemeUploadConfirmationError
              autoFocus={"true"}
              // size="small"
              fullWidth
              onChange={(e) => secondChange(e)}
              value={secondText}
              // defaultValue={''}
              name="URL"
              placeholder="URL"
              // {...register("email")}
              // onFocus={(event) => inputFocus(event)}
              // onBlur={(event) => changeInput(event)}
              // error={errors.email}
            />
          </div>
        )}

        {array.length > 2 && (
          <div>
            <p className="AddProducturlLabel">URL of your product</p>
            <ThemeUploadConfirmationError
              autoFocus={"true"}
              // size="small"
              fullWidth
              onChange={(e) => thirdChange(e)}
              value={thirdText}
              // defaultValue={''}
              name="URL"
              placeholder="URL"
              // {...register("email")}
              // onFocus={(event) => inputFocus(event)}
              // onBlur={(event) => changeInput(event)}
              // error={errors.email}
            />
          </div>
        )}

        {array.length > 3 && (
          <div>
            <p className="AddProducturlLabel">URL of your product</p>
            <ThemeUploadConfirmationError
              autoFocus={"true"}
              // size="small"
              fullWidth
              value={""}
              // defaultValue={''}
              name="URL"
              placeholder="URL"
              // {...register("email")}
              // onFocus={(event) => inputFocus(event)}
              // onBlur={(event) => changeInput(event)}
              // error={errors.email}
            />
          </div>
        )}

        {array.length < 3 && (
          <p
            onClick={newLinkClick}
            className="addForm_label mt-[8px]  cursor-pointer !justify-start    !font-semibold !text-[#5B5B5B] "
          >
            + Add another link
          </p>
        )}

        <div className="w-full flex justify-end">
          <ThemeAddProductErrorDialogProcessButton
            onClick={() => proceedClick()}
            fullWidth
            variant="contained"
            type="submit"
          >
            Procceed
          </ThemeAddProductErrorDialogProcessButton>
        </div>
      </div>
    </div>
  );
};

export default UploadConformationDialogBox;
