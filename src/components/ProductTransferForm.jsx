import {
  Box,
  Button,
  IconButton,
  InputAdornment,
  useIsFocusVisible,
} from "@mui/material";
import React, { useState } from "react";
import TopBar from "../components/TopBar";
import TextField from "@mui/material/TextField";
import {
  textFieldStyle,
  selectField,
  muiButton,
  boxStyleforlogin,
} from "../css/style";
import {
  ThemeTextField,
  ThemeCameraIcon,
  ThemeButton,
} from "../muiTheme/Theme";
import { useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import { ReactComponent as InfoIcon } from "../image/svg/InfoIcon.svg";
import { ReactComponent as CrossIcon } from "../image/svg/CrossIcon.svg";
import { ReactComponent as DeleteIcon } from "../image/svg/DeleteIcon.svg";
import {
  inputFocus,
  changeInput,
  passwordFocus,
  passwordBlur,
} from "../muiTheme/OnFilledBorderStyle";
import { useRef } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteAll,
  deletePhoto,
  uploadPhoto,
} from "../redux/Slices/UploadPhotoSlice";
import { addTransfer } from "../redux/Slices/AddTransferSlice";
import { addTransferPhoto } from "../redux/Slices/AddTransferPhoto";
import { deleteProductPhoto } from "../redux/Slices/ProductPhotoDeleteSlice";
import { deleteTransferPhoto } from "../redux/Slices/TransferPhotoDeleteSlice";

var imagesAdded = [];
var formGoActiv = false;
var activImageIndex;

const serilaRegex = /^(?=.*?\d)(?=.*?[a-zA-Z])[a-zA-Z\d]+$/;
const schema = yup.object().shape({
  customerCompanyName: yup
    .string()
    .required("Company name is required")
    .test("len", "Enter up to 60 characters", (val) => val.length < 61),
  customerEmail: yup
    .string()
    .required("Email is required")
    .email("Invalid email"),
  customerProductName: yup.string().required("Product name is required"),
  serialNumber: yup
    .string()
    .required("Serial number is required")
    .matches(serilaRegex, "Serial number must include numbers and letters"),
  customerProductDescription: yup
    .string()
    .required("Product description is required"),
});
const ProductTransferForm = ({ setOpen, setdialogOpen, inputReference }) => {
  const inputFile = useRef(null);
  const [iconOne, seticonOne] = useState(null);
  const [iconTwo, seticonTwo] = useState(null);
  const [transferFile, settransferFile] = useState([]);
  const [errorMessage, seterrorMessage] = useState("");
  const [show, setshow] = useState(false);
  const [type, settype] = useState();
  const [photo, setphoto] = useState();
  const [photo2, setphoto2] = useState();
  const [photo3, setphoto3] = useState();
  const [photo4, setphoto4] = useState();
  const [sizeMb, setsizeMb] = useState();
  const [hoverShow1, sethoverShow1] = useState(false);
  const [hoverShow2, sethoverShow2] = useState(false);
  const [hoverShow3, sethoverShow3] = useState(false);
  const [hoverShow4, sethoverShow4] = useState(false);
  const [photosName, setphotosName] = useState([]);

  const dispatch = useDispatch();
  const result = useSelector((state) => state.photo.photo);
  console.log(result, "result photoo");
const url =  document.URL
console.log(url,'urllll')
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const submitForm = (data) => {
    const companyId = JSON.parse(localStorage.getItem("companyId"));

    data = { ...data, photosName, companyId, url };
    if (result.length >= 2) {
      dispatch(addTransfer(data))
        .unwrap()
        .then((res) => {
          if (res?.success) {
            setdialogOpen(true);
            setOpen(false);
            dispatch(deleteAll());
            console.log(res, "ress");
          }
          console.log(res, "ressss");
        })
        .catch((error) => {
          console.log(error);
        });
    }
    console.log(data, "oooo");
    document
      .getElementsByClassName("qrSubTitle")[0]
      .classList.add("blurEffect");
    document.getElementsByClassName("qrTitle")[0].classList.add("blurEffect");
  };

  const formGoActive = (val) => {
    console.log(imagesAdded);
    formGoActiv = val;

    if (imagesAdded.length >= 2) {
    } else if (imagesAdded.length == 1) {
      const target = document.getElementById("pImgError");
      target.innerHTML = "Minimum of 2 photos are required";
      target.classList.remove("noDisplay");
      const boxes = target.parentNode.getElementsByClassName(
        "addProductCameraIconBox"
      );
      console.log(boxes);
      for (let i = 0; i < boxes.length; i++) {
        if (i == 0) {
          boxes[i].classList.add("errorImgBorder");
        }
      }
    } else {
      const target = document.getElementById("pImgError");
      target.innerHTML = "Minimum of 2 photos are required";
      target.classList.remove("noDisplay");
      const boxes = target.parentNode.getElementsByClassName(
        "addProductCameraIconBox"
      );
      console.log(boxes);
      for (let i = 0; i < boxes.length; i++) {
        if (i == 0 || i == 1) {
          const find = imagesAdded.find((a) => a.btn == i + 1);
          if (!find) {
            boxes[i].classList.add("errorImgBorder");
          }
        }
      }
    }
  };

  const transferPhotoOnClick = (val) => {
    console.log(val, "vallllle");
    activImageIndex = val;
    settype(val);
    // imagesAdded.forEach((item) => {
    //   item.active = false;
    // });
    // imagesAdded = imagesAdded.filter((a) => a.btn != val);

    // `current` points to the mounted file input element
    inputFile.current.click();
  };

  const uploadPhotoOnChange = (e) => {
    const filess = e.target.files;
    const file = filess[0];

    const target = document.getElementById("pImgError");
    if (!file) {
      imagesAdded = imagesAdded.filter((a) => a.active != true);
    } else {
      imagesAdded.push({ btn: activImageIndex, active: true });
      const fileType = file.type.split("/")[1];
      const fileSize = (file.size / 1024 / 1024).toFixed(2);
      if (fileType !== "png" && fileType !== "jpeg") {
        target.innerHTML = "Unsupported format. Try another format";
        target.classList.remove("noDisplay");
        return;
      } else {
        target.classList.add("noDisplay");
      }

      if (fileSize > 2) {
        target.innerHTML = "File size exceeds 2MB. Try a smaller file";
        target.classList.remove("noDisplay");
        return;
      } else {
        target.classList.add("noDisplay");
        dispatch(uploadPhoto({ file }));
        if (type === 1) {
          dispatch(addTransferPhoto({ file, type }))
            .unwrap()
            .then((res) => {
              if (res?.success) {
                setphotosName([
                  ...photosName,
                  { path: res.uploadPath, status: "review", type: res.type },
                ]);

                console.log(res, "ressss");
              }
              console.log(res, "ressss");
            })
            .catch((error) => {
              console.log(error);
            });
          setphoto(URL.createObjectURL(file));
        }
        if (type === 2) {
          dispatch(addTransferPhoto({ file, type }))
            .unwrap()
            .then((res) => {
              if (res?.success) {
                setphotosName([
                  ...photosName,
                  { path: res.uploadPath, status: "review", type: res.type },
                ]);
                console.log(res, "ressss");
              }
              console.log(res, "ressss");
            })
            .catch((error) => {
              console.log(error);
            });
          setphoto2(URL.createObjectURL(file));
        }
        if (type === 3) {
          dispatch(addTransferPhoto({ file, type }))
            .unwrap()
            .then((res) => {
              if (res?.success) {
                setphotosName([
                  ...photosName,
                  { path: res.uploadPath, status: "review", type: res.type },
                ]);
                console.log(res, "ressss");
              }
              console.log(res, "ressss");
            })
            .catch((error) => {
              console.log(error);
            });
          setphoto3(URL.createObjectURL(file));
        }
        if (type === 4) {
          dispatch(addTransferPhoto({ file, type }))
            .unwrap()
            .then((res) => {
              if (res?.success) {
                setphotosName([
                  ...photosName,
                  { path: res.uploadPath, status: "review", type: res.type },
                ]);
                console.log(res, "ressss");
              }
              console.log(res, "ressss");
            })
            .catch((error) => {
              console.log(error);
            });
          setphoto4(URL.createObjectURL(file));
        }
      }
    }

    const boxes = target.parentNode.getElementsByClassName(
      "addProductCameraIconBox"
    );
    console.log(imagesAdded);

    if (imagesAdded.length >= 2) {
      target.classList.add("noDisplay");
      console.log(boxes, "boxessssszs");
      for (let i = 0; i < boxes.length; i++) {
        boxes[i].classList.remove("errorImgBorder");
      }
    } else if (imagesAdded.length == 1) {
      if (formGoActiv === true) {
        target.classList.remove("noDisplay");
      } else {
        target.classList.add("noDisplay");
      }
      for (let i = 0; i < boxes.length; i++) {
        if (i == 0 || i == 1) {
          const find = imagesAdded.find((a) => a.btn == i + 1);
          if (find) {
            boxes[i].classList.remove("errorImgBorder");
          }
        }
      }
    } else {
      if (formGoActiv == true) {
        target.innerHTML = "Minimum of 2 photos are required";
        target.classList.remove("noDisplay");
        for (let i = 0; i < boxes.length; i++) {
          if (i == 0 || i == 1) {
            console.log(i);
            const find = imagesAdded.find((a) => a.btn == i);
            console.log(find);
            if (!find) {
              boxes[i].classList.remove("errorImgBorder");
            }
          }
        }
      }
    }
    e.currentTarget.value = null;
  };

  const transferButtonClick = () => {
    console.log(transferFile, "fileeeeeee");
    // if (result.length === 1) {
    //   seticonOne(true);
    //   seticonTwo(true);
    //   seterrorMessage("Minimum of 2 photos is required");

    //   return;
    // }
    if (result.length < 2) {
      seterrorMessage("Minimum of 2 photos is required");
      seticonOne(true);
      seticonTwo(true);
      return setshow(true);
    } else {
      seticonOne(false);
      seticonTwo(false);

      return setshow(false);
    }
  };

  const clickDeleteIcon = (typee) => {
    const type = photosName.filter((item) => item.type === typee);
    const index = photosName.findIndex((item) => item.type === typee);

    // console.log(type, 'typeeefilter')
    dispatch(deletePhoto());
    dispatch(deleteTransferPhoto({typee: type[0].path ,id: false}))
      .unwrap()
      .then((res) => {
        if (res?.success) {
          console.log(res, "ressss");
          photosName.splice(index, 1);
          if (typee === '1') {
            setphoto(null);
          }
          if (typee === '2') {
            setphoto2(null);
          }
          if (typee === '3') {
            setphoto3(null);
          }
          if (typee === '4') {
            setphoto4(null);
          }
          sethoverShow1(false);
          sethoverShow2(false);
          sethoverShow3(false);
          sethoverShow4(false);
          imagesAdded = imagesAdded.filter((p) => p.btn !== typee);
        }
        console.log(res, "ressss");
      })
      .catch((error) => {
        console.log(error);
      });

  };
  console.log(iconOne, "oneee");
  console.log(show, "iconTwooo");
  const drawerOpen = () => {
    const targett = document.getElementById("transferProduct_companyName");
    targett.focus();
    console.log(targett, "targettt");
  };
  useEffect(() => {
    drawerOpen();
  }, [setdialogOpen]);

  const crossIconClick = () => {
    setOpen(false);
    dispatch(deleteAll());
  };

  console.log(photosName, "nameeeee");
  return (
    <div>
      <form onSubmit={handleSubmit(submitForm)}>
        <div className="mainDiv ">
          <div className="w-full">
            <div className=" tranferFormTopbar w-full flex justify-between">
              <p>Transfer product</p>
              <p>
                <CrossIcon onClick={crossIconClick} />
              </p>
            </div>

            <div className=" productTransferFormDiv !mt-0 !m-0 !py-6  !px-5 !w-full   ">
              <div className="singleTextBoxDiv !w-full">
                <p className="text_label">Customer's company name</p>
                <ThemeTextField
                  id="transferProduct_companyName"
                  // size="small"
                  fullWidth
                  name="customerCompanyName"
                  ref={inputReference}
                  placeholder="Write the customer's company name"
                  {...register("customerCompanyName")}
                  onBlur={(event) => changeInput(event)}
                  onFocus={(event) => inputFocus(event)}
                  error={errors.customerCompanyName}
                />
                {errors.customerCompanyName ? (
                  <p className="error_messge !-mb-[6px]">
                    {errors.customerCompanyName?.message}
                  </p>
                ) : (
                  ""
                )}
              </div>
              <div className="singleTextBoxDiv !w-full">
                <p className="text_label">Customer's email</p>
                <ThemeTextField
                  autoFocus={"true"}
                  name="customerEmail"
                  type={"text"}
                  size="small"
                  fullWidth
                  // sx={textFieldStyle}
                  placeholder="Enter customer's email"
                  {...register("customerEmail")}
                  onBlur={(event) => changeInput(event)}
                  onFocus={(event) => inputFocus(event)}
                  error={errors.customerEmail}
                  // sx={{ ${errors.customerEmail}? backgroundColor: "red" }}
                />
                {errors.customerEmail ? (
                  <p className="error_messge !-mb-[6px]">
                    {errors.customerEmail?.message}
                  </p>
                ) : (
                  ""
                )}
              </div>
              <div className="singleTextBoxDiv !w-full">
                <p className="text_label">Customer's product name</p>
                <ThemeTextField
                  // size="small"
                  fullWidth
                  name="customerProductName"
                  placeholder="Write the customer's product name"
                  {...register("customerProductName")}
                  onBlur={(event) => changeInput(event)}
                  onFocus={(event) => inputFocus(event)}
                  error={errors.customerProductName}
                />
                {errors.customerProductName ? (
                  <p className="error_messge !-mb-[6px]">
                    {errors.customerProductName?.message}
                  </p>
                ) : (
                  ""
                )}
              </div>
              <div className="singleTextBoxDiv  !w-full">
                <p className="text_label !justify-start gap-2">Serial number</p>
                <ThemeTextField
                  // size="small"
                  fullWidth
                  name="serialNumber"
                  placeholder="Write serial number"
                  {...register("serialNumber")}
                  onBlur={(event) => changeInput(event)}
                  onFocus={(event) => inputFocus(event)}
                  error={errors.serialNumber}
                />
                {errors.serialNumber ? (
                  <p className="error_messge !-mb-[6px]">
                    {errors.serialNumber?.message}
                  </p>
                ) : (
                  ""
                )}
              </div>
              <div className="singleTextBoxDiv  !w-full">
                <p className="text_label !justify-start gap-2">
                  Customer's product description
                </p>
                <ThemeTextField
                  // size="small"
                  fullWidth
                  name="customerProductDescription"
                  placeholder="Write customer's product description"
                  {...register("customerProductDescription")}
                  onBlur={(event) => changeInput(event)}
                  onFocus={(event) => inputFocus(event)}
                  error={errors.customerProductDescription}
                />
                {errors.customerProductDescription ? (
                  <p className="error_messge !-mb-[6px]">
                    {errors.customerProductDescription?.message}
                  </p>
                ) : (
                  ""
                )}
              </div>
              <div className="singleTextBoxDiv  !w-full">
                <p className="text_label !justify-start gap-2">
                  Product weight
                </p>
                <p className="addForm_label flex items-center !justify-start  mt-[8px]  font-medium text-[#2C2C2C]">
                  {" "}
                  2 kg
                </p>
              </div>
              <div className="singleTextBoxDiv  !w-full">
                <p className="text_label  !justify-start gap-2">
                  Material type
                </p>
                <p className="addForm_label flex items-center !justify-start  mt-[8px]   font-medium text-[#2C2C2C]">
                  {" "}
                  Plastic, Aluminium
                </p>
              </div>
              <div className="w-full">
                <p className="addForm_label flex items-center  !justify-start gap-2   mb-[12px] font-medium text-[#2C2C2C] ">
                  Upload photos <InfoIcon />
                </p>

                <div className=" w-full flex gap-[21px]  ">
                  <input
                    type="file"
                    id="file"
                    ref={inputFile}
                    onChange={(e) => uploadPhotoOnChange(e)}
                    class="noDisplay"
                  />
                  {!photo ? (
                    <span
                      onClick={() => transferPhotoOnClick(1)}
                      className="addProductCameraIconBox"
                    >
                      <ThemeCameraIcon />
                    </span>
                  ) : (
                    <div
                      onMouseEnter={() => sethoverShow1(true)}
                      onMouseLeave={(e) => sethoverShow1(false)}
                      className="relative addProductPhotoDiv"
                    >
                      <span className="  ">
                        <img
                          className="addProductImageTag absolute "
                          src={photo}
                          alt=""
                        />
                      </span>
                      {hoverShow1 && (
                        <span className="imageHoverPro">
                          <span className=" addProductImageDelete  cursor-pointer ">
                            <DeleteIcon
                              onClick={() => clickDeleteIcon("1")}
                              className=" fill-white "
                            />
                          </span>
                        </span>
                      )}
                    </div>
                  )}
                  {!photo2 ? (
                    <span
                      onClick={() => transferPhotoOnClick(2)}
                      className="addProductCameraIconBox"
                    >
                      <ThemeCameraIcon />
                    </span>
                  ) : (
                    <div
                      onMouseEnter={() => sethoverShow2(true)}
                      onMouseLeave={(e) => sethoverShow2(false)}
                      className="relative addProductPhotoDiv"
                    >
                      <span className="  ">
                        <img
                          className="addProductImageTag absolute "
                          src={photo2}
                          alt=""
                        />
                      </span>
                      {hoverShow2 && (
                        <span className="imageHoverPro">
                          <span className=" addProductImageDelete cursor-pointer ">
                            <DeleteIcon
                              onClick={() => clickDeleteIcon("2")}
                              className=" fill-white "
                            />
                          </span>
                        </span>
                      )}
                    </div>
                  )}
                  {!photo3 ? (
                    <span
                      onClick={() => transferPhotoOnClick(3)}
                      className="addProductCameraIconBox"
                    >
                      <ThemeCameraIcon />
                    </span>
                  ) : (
                    <div className="relative addProductPhotoDiv">
                      <span className="  ">
                        <img
                          className="addProductImageTag absolute "
                          src={photo3}
                          alt=""
                        />
                      </span>
                      {hoverShow3 && (
                        <span className="imageHoverPro">
                          <span className=" addProductImageDelete cursor-pointer ">
                            <DeleteIcon
                              onClick={() => clickDeleteIcon("3")}
                              className=" fill-white "
                            />
                          </span>
                        </span>
                      )}
                    </div>
                  )}
                  {!photo4 ? (
                    <span
                      onClick={() => transferPhotoOnClick(4)}
                      className="addProductCameraIconBox"
                    >
                      <ThemeCameraIcon />
                    </span>
                  ) : (
                    <div
                      onMouseEnter={() => sethoverShow4(true)}
                      onMouseLeave={(e) => sethoverShow4(false)}
                      className="relative addProductPhotoDiv"
                    >
                      <span className="  ">
                        <img
                          className="addProductImageTag absolute "
                          src={photo4}
                          alt=""
                        />
                      </span>
                      {hoverShow4 && (
                        <span className="imageHoverPro">
                          <span className=" addProductImageDelete cursor-pointer ">
                            <DeleteIcon
                              onClick={() => clickDeleteIcon("4")}
                              className=" fill-white "
                            />
                          </span>
                        </span>
                      )}
                    </div>
                  )}
                </div>

                <p id="pImgError" className="error_messge noDisplay"></p>
              </div>
              <div className="w-full mt-[24px] ">
                <ThemeButton
                  onClick={() => formGoActive(true)}
                  type="submit"
                  fullWidth
                  variant="contained"
                >
                  Transfer Product
                </ThemeButton>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ProductTransferForm;
