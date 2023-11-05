import { Diversity1Rounded, Diversity1Sharp } from "@mui/icons-material";
import { Box, Button, Paper } from "@mui/material";
import { makeStyles } from "@material-ui/styles";
import React from "react";
import TopBar from "../components/TopBar";
import {
  textFieldStyle,
  selectField,
  productMuiButton,
  dialogTile,
  boxStyleforlogin,
  noProductBox,
  dialogcontent,
  mobiScreen,
} from "../css/style";
import noProduct from "../image/NoProductLogo.png";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import AddProductForm from "../components/AddProductForm";
import { ReactComponent as CrossIcon } from "../image/svg/CrossIcon.svg";
import { ReactComponent as ErrorCrossIcon } from "../image/svg/AddProductErrorCrossIcon.svg";
import Stack from "@mui/material/Stack";
import {
  ThemeTextField,
  ThemeDialogContent,
  ThemeDialogTitle,
  ThemeProductButtton,
  ThemeDialog,
} from "../muiTheme/Theme";
import ProductsCards from "../components/ProductsCards";
import data from "../data/data";
import "../css/style.css";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteAll } from "../redux/Slices/GoodsBillsSlice";

import AddProductErrorDialogBox from "../components/AddProductErrorDialogBox";
import {
  ThemeAddProductErrorDialog,
  ThemeAddProductErrorDialogContent,
  ThemeAddProductErrorDialogTitle,
  ThemeDownloadPhotoDialog,
  ThemeDownloadPhotoDialogContent,
  ThemeDownloadPhotoDialogTitle,
  ThemeUploadConfirmationDialog,
} from "../muiTheme/AddProductErrordialog";
import DownloadPhotoCardsDialogBox from "../components/DownloadPhotoCardsDialogBox";
import AddProductConfirmationError from "../components/AddProductConfirmationError";
import { deleteAllPhoto } from "../redux/Slices/UploadPhotoProductSlice";
import { getAllProduct } from "../redux/Slices/GetAllProductSlice";
import UploadConformationDialogBox from "../components/UploadConformationDialogBox";

const styleButton = makeStyles((theme) => ({
  button: {
    backgroundColor: "red",
  },
}));
const Product = () => {
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(false);
  const [errorDialogOpen, seterrorDialogOpen] = React.useState(false);
  const [DownloadPhotoOpen, setDownloadPhotoOpen] = React.useState(false);
  const [ConfirmationErrorOpen, setConfirmationErrorOpen] =
    React.useState(false);
  const [show, setShow] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [confirmationErrorPhoto, setconfirmationErrorPhoto] = useState();
  const [downloadPhoto, setdownloadPhoto] = useState()
  const [uploadConfirmation, setuploadConfirmation] = useState(false)
  const dispatch = useDispatch();

  const productData2 = useSelector((state) => state.allProduct.data.allProduct);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    dispatch(deleteAll());
    setOpen(false);
    navigate("/raf");
    // imagesAdded =[];
  };

  const ErrorDialogClose = () => {
    seterrorDialogOpen(false);
  };

  const ConfirmationErrorDialogClose = () => {
    setConfirmationErrorOpen(false);
  };

  const DownloadphotoClose = () => {
    setDownloadPhotoOpen(false);
  };

  const uploadConfirmationClose = () => {
    setuploadConfirmation(false);
  };
  const controlNavbar = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY > lastScrollY) {
        // if scroll down hide the navbar
        setShow(true);
      } else {
        // if scroll up show the navbar
        setShow(false);
      }

      // remember current page location to use in the next move
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar);

      // cleanup function
      return () => {
        window.removeEventListener("scroll", controlNavbar);
      };
    }
  }, [lastScrollY]);

  const classes = styleButton();
  const trialText = "30 days left in trial";
  const text = " ";
  const iconText = "L";
  const joinButton = " ";
  useEffect(() => {
    window.scrollTo(0, 0);
    // window.scrollTo(0, 1);
    dispatch(getAllProduct());
  }, []);

  const closeProductDialogBox = () => {
    handleClose();
    dispatch(deleteAllPhoto());
  };
  return (
    <div>
      <div className={`active ${show && "navclass"}`}>
        <TopBar
          Text={text}
          joinButton={joinButton}
          iconText={iconText}
          trialText={trialText}
        />
      </div>
      <div className=" px-[42px]  ">
        <div className=" flex items-center  pt-[64px] sm:mt-[32px] justify-between">
          <div
            onClick={() => seterrorDialogOpen(true)}
            className="text-[#2C2C2C] hidden sm:block text-[28px] font-semibold"
          >
            Products
          </div>
          <div className="w-[144px] z-50 addProductMobileStyleDiv h-[44px]">
            {" "}
            <ThemeProductButtton
              onClick={handleClickOpen}
              type="submit"
              sx={productMuiButton}
              fullWidth
              variant="contained"
            >
              Add product
            </ThemeProductButtton>
          </div>
          <ThemeDialog
            open={open}
            scroll="paper"
            keepMounted
            // onClose={handleClose}
            aria-describedby="alert-dialog-slide-description"
          >
            <ThemeDialogTitle>
              <div className="flex justify-between rounded-[8px 8px 0px 0px]  items-center py-[12px] pl-[20px] pr-[28px] ">
                <span
                  onClick={() => handleClose()}
                  className="font-bold text-[16px] block sm:hidden text-[#31A246]"
                >
                  Back
                </span>
                <span className="font-medium text-[16px] text-[#707070]">
                  Add product
                </span>
                <div>
                  <span
                    onClick={closeProductDialogBox}
                    className="w-[14px] cursor-pointer hidden sm:block"
                  >
                    <CrossIcon className="goBackIcon cursor-pointer hover:bg-[#F5F5F5]" />
                  </span>
                </div>
              </div>
            </ThemeDialogTitle>
            <ThemeDialogContent>
              <AddProductForm handleClose={handleClose} open={open} />
            </ThemeDialogContent>
          </ThemeDialog>
        </div>
        {productData2?.length ? (
          <div className="pt-[54px]">
            <ProductsCards
              setconfirmationErrorPhoto={setconfirmationErrorPhoto}
              setdownloadPhoto={setdownloadPhoto}
              setConfirmationErrorOpen={setConfirmationErrorOpen}
              setDownloadPhotoOpen={setDownloadPhotoOpen}
              seterrorDialogOpen={seterrorDialogOpen}
            />
          </div>
        ) : (
          <Box
            display={"grid"}
            justifyContent={"center"}
            justifyItems={"center"}
            alignItems={"center"}
            // border={3}
            pt={"210px"}
            gap={"20px"}
          >
            <div>
              <img className="w-[86px] h-[80px]" src={noProduct} alt="" />
            </div>
            <p className="text-[#9D9D9D] mb-[29px] font-medium text-[16px] md:text-[24px]">
              No products to display
            </p>
          </Box>
        )}

        <ThemeAddProductErrorDialog
          open={errorDialogOpen}
          scroll="paper"
          keepMounted
          // onClose={handleClose}
          aria-describedby="alert-dialog-slide-description"
        >
          <ThemeAddProductErrorDialogTitle>
            <div className="flex justify-between rounded-[8px 8px 0px 0px]  items-center py-[12px] pl-[20px] pr-[28px] ">
              <div>
                <p className="addProductErrorDialogTile">Add Product Error</p>
              </div>
              <div>
                <span
                  onClick={ErrorDialogClose}
                  className="w-[14px] cursor-pointer hidden sm:block"
                >
                  <ErrorCrossIcon className=" cursor-pointer " />
                </span>
              </div>
            </div>
          </ThemeAddProductErrorDialogTitle>
          <ThemeAddProductErrorDialogContent>
            <AddProductErrorDialogBox />
          </ThemeAddProductErrorDialogContent>
        </ThemeAddProductErrorDialog>

        {/* ............................................................................................................................ */}

        <ThemeDownloadPhotoDialog
          open={DownloadPhotoOpen}
          scroll="paper"
          keepMounted
          // onClose={handleClose}
          aria-describedby="alert-dialog-slide-description"
        >
          <ThemeDownloadPhotoDialogTitle>
            <div className="flex justify-between rounded-[8px 8px 0px 0px]  items-center py-[12px] pl-[20px] pr-[28px] ">
              <div>
                <p className="addProductErrorDialogTile !text-[#707070]">
                  Download photos
                </p>
              </div>
              <div>
                <span
                  onClick={() => DownloadphotoClose()}
                  className="w-[14px] cursor-pointer hidden sm:block"
                >
                  <CrossIcon className=" cursor-pointer hover:bg-[#F5F5F5]" />
                </span>
              </div>
            </div>
          </ThemeDownloadPhotoDialogTitle>
          <ThemeDownloadPhotoDialogContent>
            <DownloadPhotoCardsDialogBox setuploadConfirmation={setuploadConfirmation} downloadPhoto={downloadPhoto}/>
          </ThemeDownloadPhotoDialogContent>
        </ThemeDownloadPhotoDialog>

        {/* ................................................................................................................. */}

        <ThemeAddProductErrorDialog
          open={ConfirmationErrorOpen}
          scroll="paper"
          keepMounted
          // onClose={handleClose}
          aria-describedby="alert-dialog-slide-description"
        >
          <ThemeAddProductErrorDialogTitle>
            <div className="flex justify-between rounded-[8px 8px 0px 0px]  items-center py-[12px] pl-[20px] pr-[28px] ">
              <div>
                <p className="addProductErrorDialogTile">Confirmation Error</p>
              </div>
              <div>
                <span
                  onClick={() => ConfirmationErrorDialogClose()}
                  className="w-[14px] cursor-pointer hidden sm:block"
                >
                  <ErrorCrossIcon className=" cursor-pointer " />
                </span>
              </div>
            </div>
          </ThemeAddProductErrorDialogTitle>
          <ThemeAddProductErrorDialogContent>
            <AddProductConfirmationError confirmationErrorPhoto={confirmationErrorPhoto} />
          </ThemeAddProductErrorDialogContent>
        </ThemeAddProductErrorDialog>


        {/* ................................................. */}
        <ThemeUploadConfirmationDialog
          open={uploadConfirmation}
          scroll="paper"
          keepMounted
          // onClose={handleClose}
          aria-describedby="alert-dialog-slide-description"
        >
          <ThemeDownloadPhotoDialogTitle>
            <div className="flex justify-between rounded-[8px 8px 0px 0px]  items-center py-[12px] pl-[20px] pr-[28px] ">
              <div>
                <p className="addProductErrorDialogTile !text-[#707070]">
                Upload Confirmation
                </p>
              </div>
              <div>
                <span
                  onClick={() => uploadConfirmationClose()}
                  className="w-[14px] cursor-pointer hidden sm:block"
                >
                  <CrossIcon className=" cursor-pointer hover:bg-[#F5F5F5]" />
                </span>
              </div>
            </div>
          </ThemeDownloadPhotoDialogTitle>
          <ThemeDownloadPhotoDialogContent>
            <UploadConformationDialogBox  downloadPhoto={downloadPhoto}/>
          </ThemeDownloadPhotoDialogContent>
        </ThemeUploadConfirmationDialog>
      </div>
    </div>
  );
};

export default Product;
