import { Drawer } from "@mui/material";
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import Certificate from "../components/Certificate";
import QrFrame from "../components/QrFrame";
import TopBar from "../components/TopBar";
import { ReactComponent as ArrowIcon } from "../image/svg/arrowIcon.svg";
import ProductTransferForm from "../components/ProductTransferForm";
import {
  ThemeDrawer,
  ThemeTransferDialog,
} from "../muiTheme/SingleProductTheme";
import {
  ThemeDialog,
  ThemeDialogContent,
  ThemeDialogTitle,
} from "../muiTheme/Theme";
import { ReactComponent as CrossIcon } from "../image/svg/CrossIcon.svg";
import ProductTransferDialogBox from "../components/ProductTransferDialogBox";
import { useEffect } from "react";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSingleProduct } from "../redux/Slices/GetSingleProductSlice";

const SingleProductDetail = () => {
  const navigate = useNavigate();
  const inputReference = useRef(null);

  const [open, setOpen] = useState(false);
  const [dialogOpen, setdialogOpen] = useState(false);

  const dispatch = useDispatch();

  const product = useSelector((state) => state.singleProduct.data.products);

  const handleClickOpen = () => {
    setdialogOpen(true);
  };

  const handleClose = () => {
    document
      .getElementsByClassName("qrSubTitle")[0]
      .classList.remove("blurEffect");
    document
      .getElementsByClassName("qrTitle")[0]
      .classList.remove("blurEffect");
    setdialogOpen(false);
  };
  const trialText = "30 days left in trial";
  const text = " ";
  const iconText = "L";
  const joinButton = " ";
  const { id } = useParams();
  useEffect(() => {
    window.scrollTo(0, 0);
    // if (dialogOpen) {
    //   drawerOpen();
    // }
  }, []);



  return (
    <div>
      <TopBar
        Text={text}
        joinButton={joinButton}
        iconText={iconText}
        trialText={trialText}
      />

      <ThemeDrawer
        // variant='permanent'
        // variant={variant}
        // {...props}
        anchor="right"
        disableScrollLock={true}
        open={open}
        onClose={() => setOpen(false)}
        PaperProps={{}}
      >
        <ProductTransferForm setOpen={setOpen} setdialogOpen={setdialogOpen} />
      </ThemeDrawer>
      <ThemeTransferDialog
        open={dialogOpen}
        scroll="paper"
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <ThemeDialogTitle>
          <div className="flex justify-end rounded-[8px 8px 0px 0px]  items-center py-[12px] px-[20px] ">
            <div>
              <span
                onClick={() => handleClose()}
                className="w-[14px] cursor-pointer"
              >
                <CrossIcon />
              </span>
            </div>
          </div>
        </ThemeDialogTitle>
        <ThemeDialogContent>
          <ProductTransferDialogBox />
        </ThemeDialogContent>
      </ThemeTransferDialog>
      <div className="mt-[106px] pl-[30px] pb-[43px]">
        <ArrowIcon
          className="goBackIcon cursor-pointer hover:bg-[#F5F5F5]"
          onClick={() => navigate(-1)}
        />
      </div>
      <div className="flex flex-col-reverse md:flex-row justify-center gap-[28px] xl:gap-[114px] lg:gap-[80px] px-[34px] xl:px-[72px] lg:px-[28px] md:px-[34px] pb-[71px]  ">
        <div>
          <Certificate product={product} />
        </div>
        <div>
          <QrFrame setOpen={setOpen} />
        </div>
      </div>
    </div>
  );
};

export default SingleProductDetail;
