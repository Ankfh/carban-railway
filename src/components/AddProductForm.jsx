import { Box, Button, IconButton, InputAdornment } from "@mui/material";
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
  ThemeLinearProgress,
} from "../muiTheme/Theme";
import { useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import { ReactComponent as InfoIcon } from "../image/svg/InfoIcon.svg";
import { ReactComponent as PdfIcon } from "../image/svg/PdfIcon.svg";
import { ReactComponent as DeleteIcon } from "../image/svg/DeleteIcon.svg";

import { useRef } from "react";
import "../css/addProductForm.css";
import LinearProgress from "@mui/material/LinearProgress";
import { useEffect } from "react";
import { ReactComponent as CrossIcon } from "../image/svg/BillCrossIcon.svg";
import { inputFocus, changeInput } from "../muiTheme/OnFilledBorderStyle";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteAllPhoto,
  uploadPhoto,
} from "../redux/Slices/UploadPhotoProductSlice";
import { width } from "dom7";
import { deleteBills, uploadBill } from "../redux/Slices/GoodsBillsSlice";
import LinearProgressForBills from "./LinearProgressForBills";
import { addProduct } from "../redux/Slices/AddProductSlice";
import { deletePhoto } from "../redux/Slices/UploadPhotoProductSlice";
import { addPhoto } from "../redux/Slices/AddPhotoSlice";
import { deleteProductPhoto } from "../redux/Slices/ProductPhotoDeleteSlice";
import { addBills } from "../redux/Slices/AddBillsSlice";

const serilaRegex = /^(?=.*?\d)(?=.*?[a-zA-Z])[a-zA-Z\d]+$/;

const schema = yup.object().shape({
  productName: yup.string().required("Product name is required"),
  serialNumber: yup
    .string()
    .required("Serial number is required")
    .matches(serilaRegex, "Serial number must include numbers and letters"),
  productDiscription: yup.string().required("Product description is required"),
  // pdf: yup
  //   .mixed()
  //   .nullable()
  //   .notRequired()
  //   .test("required", "photo is required", (value) => value.length > 0)
  //   .test(
  //     "FILE_SIZE",
  //     "Uploaded file is too big.",
  //     (value) => !value || (value && value.size <= 1000000000)
  //   ),
  // .test("FILE_FORMAT", "Uploaded file has unsupported format.",
  //     value => !value || (value && pdf.includes(value.type)))
});

var imagesAdded = [];
var formGoActiv = false;
var activImageIndex;

const thsDevice = navigator.platform;

const AddProductForm = ({ open, handleClose }) => {
  const navigate = useNavigate();
  const [photo1, setphoto1] = useState();

  const [pdf, setpdf] = useState();
  const [fileError, setfileError] = useState();
  const [uploadPhotoError, setuploadPhotoError] = useState();
  const inputFile = useRef(null);
  const goodsInput = useRef(null);
  const [progress, setProgress] = React.useState(0);
  const [refresh, setrefresh] = useState(false);
  const [pdfProgress, setPdfProgress] = useState(0);
  const [type, settype] = useState();
  const [photo, setphoto] = useState();
  const [photo2, setphoto2] = useState();
  const [photo3, setphoto3] = useState();
  const [photo4, setphoto4] = useState();
  const [sizeMb, setsizeMb] = useState();
  const [pdftype, setpdftype] = useState();
  const [hoverShow1, sethoverShow1] = useState(false);
  const [hoverShow2, sethoverShow2] = useState(false);
  const [hoverShow3, sethoverShow3] = useState(false);
  const [hoverShow4, sethoverShow4] = useState(false);
  const [progressState, setprogressState] = useState(false);
  const [photosName, setphotosName] = useState([]);
  const [billsName, setbillsName] = useState([]);
  const data = useSelector((state) => state.photo);
  const billsData = useSelector((state) => state.bills);
  // const newPhoto = photo?.slice('5')
  const dispatch = useDispatch();
  const billsDataLenght = billsData.Bills.length - 1;
  const result = useSelector((state) => state.photoPro.photo);

  console.log(pdfProgress);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const submitForm = (data) => {
    const companyId = JSON.parse(localStorage.getItem("companyId"));
    console.log(billsData);
    if (
      (billsData && billsData.Bills.length < 1) ||
      (imagesAdded && imagesAdded.length < 2)
    ) {
      return false;
    }
    data = { ...data, photosName, billsName, companyId };
    if (result.length >= 1) {
      console.log(data, "dataaaa");

      dispatch(addProduct(data))
        .unwrap()
        .then((res) => {
          if (res?.success) {
            dispatch(deleteAllPhoto());
            handleClose();
            console.log("product added");
          }
          console.log(res, "ressss");
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };
  const formGoActive = (val) => {
    console.log(imagesAdded);
    formGoActiv = val;
    if (billsData?.Bills.length < 1) {
      const otarget = document.getElementById("addGoodsError");
      const billtarget = document.getElementById("addBillError");
      otarget.classList.remove("noDisplay");
      otarget.innerHTML = "Bill of goods is required";
      billtarget.classList.add("noDisplay");
    }
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
  const onButtonClick = (val) => {
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
  const AttachGoodsClick = () => {
    // `current` points to the mounted file input element
    if (!pdf) {
      // setProgress(0);
    }
    goodsInput.current.click();
  };

  // React.useEffect(() => {
  //   const timer = setInterval(() => {
  //     setProgress((prevProgress) =>
  //       prevProgress >= 100 ? 100 : prevProgress + 10
  //     );
  //   }, 1500);
  //   return () => {
  //     clearInterval(timer);
  //   };
  // }, [setpdf]);

  const addGoodBill = (event) => {
    const files = event.target.files;
    const file = files[0];
    const typeType = file.type.split("/")[1];
    const fileSize = (file.size / 1024 / 1024).toFixed(2);
    const newType = typeType.replace(/\s/g, "");
    // if (progress > 0) {
    //   setprogressState(true);
    //   return;
    // }

    if (files) {
      setprogressState(true);
      setsizeMb(fileSize);
      setpdftype(typeType);

      const otarget = document.getElementById("addBillError");
      const Erortarget = document.getElementById("addGoodsError");
      if (newType !== "pdf" && newType !== "png") {
        setfileError("File not supported");
        otarget.innerHTML = "File not supported";
        otarget.classList.remove("noDisplay");
        Erortarget.classList.add("noDisplay");
        return;
      } else {
        otarget.classList.add("noDisplay");
        Erortarget.classList.add("noDisplay");
        setpdf(files);
        //         const otarget = document.getElementById("addBillError");
        //         const Erortarget = document.getElementById("addGoodsError");
        //         if (newType !== "pdf" && newType !== "png") {
        //           setfileError("File not supported");
        //           otarget.innerHTML = "File not supported";
        //           otarget.classList.remove("noDisplay");
        //           Erortarget.classList.add("noDisplay");
        //           return;
        //         } else {
        //           otarget.classList.add("noDisplay");
        //           Erortarget.classList.add("noDisplay");
        //           setpdf(files);
        //           console.log(pdf)
        //           setfileError(null);
        //         }
        //         if (fileSize > 2) {
        //           otarget.innerHTML = "File size exceeds 2MB. Try a smaller file";
        //           otarget.classList.remove("noDisplay");
        //           Erortarget.classList.add("noDisplay");
        // >>>>>>> 69bdc0338da89d6aa732d9c184a0e56981be6630

        setfileError(null);
      }
      if (fileSize > 2) {
        otarget.innerHTML = "File size exceeds 2MB. Try a smaller file";
        otarget.classList.remove("noDisplay");
        Erortarget.classList.add("noDisplay");

        return;
      } else {
        dispatch(uploadBill({ file, fileSize, typeType }));
        dispatch(addBills({ file, setPdfProgress }))
          .unwrap()
          .then((res) => {
            if (res?.success) {
              setbillsName([
                ...billsName,
                { path: res.uploadPath, status: "review" },
              ]);

              console.log(res, "ressss");
            }
            console.log(res, "ressss");
          })
          .catch((error) => {
            console.log(error);
          });
        setProgress(0);
        otarget.classList.add("noDisplay");
        Erortarget.classList.add("noDisplay");
        setpdf(null);
      }
    }
  };

  const uploadPhotoOnChange = (e) => {
    console.log(e, "eveeeent");
    const filess = e.target.files;
    const file = filess[0];

    const target = document.getElementById("pImgError");
    if (!file) {
      // console.log("removing the file");
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
          dispatch(addPhoto({ file, type }))
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
          dispatch(addPhoto({ file, type }))
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
          dispatch(addPhoto({ file, type }))
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
          dispatch(addPhoto({ file, type }))
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
      console.log(fileType);
    }
    // console.log("imagesAddedddddd", imagesAdded.length);
    // setphoto([...photo, file]);

    const boxes = target.parentNode.getElementsByClassName(
      "addProductCameraIconBox"
    );

    if (imagesAdded.length >= 2) {
      target.classList.add("noDisplay");
      console.log(boxes, "boxessssszs");
      for (let i = 0; i < boxes.length; i++) {
        // if (i == 0 || i == 1) {
        // console.log(i + 1);
        // const find = imagesAdded.find((a) => a.btn == i + 1);
        // console.log(find);
        // if (find) {
        boxes[i].classList.remove("errorImgBorder");
        // }
        // }
      }
      // setuploadPhotoError("Minimum of 2 photos is required");
    } else if (imagesAdded.length == 1) {
      console.log(formGoActiv, "formGoActivvvvvvvvvvvv");
      if (formGoActiv === true) {
        target.classList.remove("noDisplay");
      } else {
        target.classList.add("noDisplay");
      }
      for (let i = 0; i < boxes.length; i++) {
        if (i == 0 || i == 1) {
          console.log(i + 1);
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
    document.getElementsByClassName("mainDiv")[0].click();
  };
  useEffect(() => {
    imagesAdded = [];
  }, [open]);

  const pdfDeleteFunc = (item) => {
    const otarget = document.getElementById("addBillError");
    otarget.classList.add("noDisplay");
    // setpdf();
    dispatch(deleteBills(item));
    // setProgress(0);
  };

  const clickDeleteIcon = (typee) => {
    const type = photosName.filter((item) => item.type === typee);
    const index = photosName.findIndex((item) => item.type === typee);

    dispatch(deletePhoto());
    dispatch(deleteProductPhoto(type[0].path))
      .unwrap()
      .then((res) => {
        if (res?.success) {
          console.log(res, "ressss");
          photosName.splice(index, 1);
        }
        console.log(res, "ressss");
      })
      .catch((error) => {
        console.log(error);
      });

    if (typee === "1") {
      setphoto(null);
    }
    if (typee === "2") {
      setphoto2(null);
    }
    if (typee === "3") {
      setphoto3(null);
    }
    if (typee === "4") {
      setphoto4(null);
    }
    sethoverShow1(false);
    sethoverShow2(false);
    sethoverShow3(false);
    sethoverShow4(false);
    imagesAdded = imagesAdded.filter((p) => p.btn !== typee);
  };
  const dialogopenFocus = () => {
    const targett = document.getElementById("productNameFocusClass");
    targett.focus();
  };
  useEffect(() => {
    window.scrollTo(0, 0);
    dialogopenFocus();
  }, [open]);

  useEffect(() => {
    formGoActiv = false;
  }, [handleClose]);

  const mobileHover = (e) => {
    const deviceName = thsDevice.split(" ");
    if (e.target.classList.contains("actCertImg")) {
      if (deviceName[0] == "Linux") {
        sethoverShow1(false);
      }
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit(submitForm)}>
        <div className="mainDiv ">
          <div className="addProductFormBox !mt-0 !m-0 !py-6  !px-5 w-full sm:!w-[440px]  ">
            <div className="singleTextBoxDiv !w-full">
              <p className="text_label">Product name</p>
              <ThemeTextField
                // size="small"
                id="productNameFocusClass"
                fullWidth
                name="productName"
                placeholder="Write the product name"
                {...register("productName")}
                onFocus={(event) => inputFocus(event)}
                onBlur={(event) => changeInput(event)}
                error={errors.productName}
              />
              {errors.productName ? (
                <p className="error_messge">{errors.productName?.message}</p>
              ) : (
                ""
              )}
            </div>
            <div className="singleTextBoxDiv !w-full">
              <p className="text_label">Serial number</p>
              <ThemeTextField
                // size="small"
                fullWidth
                name="serialNumber"
                placeholder="Write serial number"
                {...register("serialNumber")}
                onFocus={(event) => inputFocus(event)}
                onBlur={(event) => changeInput(event)}
                error={errors.serialNumber}
              />
              {errors.serialNumber ? (
                <p className="error_messge">{errors.serialNumber?.message}</p>
              ) : (
                ""
              )}
            </div>
            <div className="singleTextBoxDiv !w-full">
              <p className="text_label">Product description</p>
              <ThemeTextField
                // size="small"
                fullWidth
                name="productDiscription"
                placeholder="Write product description"
                {...register("productDiscription")}
                onFocus={(event) => inputFocus(event)}
                onBlur={(event) => changeInput(event)}
                error={errors.productDiscription}
              />
              {errors.productDiscription ? (
                <p className="error_messge">
                  {errors.productDiscription?.message}
                </p>
              ) : (
                ""
              )}
            </div>
            {/* <div className="singleTextBoxDiv  !w-full">
              <p className="text_label !justify-start gap-2">
                URL of your product <InfoIcon />
              </p>
              <ThemeTextField
                // size="small"
                fullWidth
                name="URL"
                placeholder="https://"
                {...register("URL")}
                error={errors.URL}
              />
              {errors.URL ? (
                <p className="error_messge">{errors.URL?.message}</p>
              ) : (
                ""
              )}
            </div> */}
            <div className="w-full">
              <p className="addForm_label flex items-center  !justify-start gap-[8px]  mb-[8px] font-medium text-[#2C2C2C] ">
                Upload photos <InfoIcon />
              </p>

              <div className=" w-full flex justify-start gap-[16px]  ">
                <input
                  type="file"
                  id="file"
                  ref={inputFile}
                  onChange={(e) => uploadPhotoOnChange(e)}
                  class="noDisplay"
                />
                {!photo ? (
                  <span
                    className="  addProductCameraIconBox "
                    onClick={() => onButtonClick(1)}
                  >
                    <ThemeCameraIcon />
                  </span>
                ) : (
                  <div
                    onMouseEnter={() => sethoverShow1(true)}
                    onMouseLeave={(e) => sethoverShow1(false)}
                    className="relative addProductPhotoDiv actCertImg"
                  >
                    <div className="  ">
                      <img
                        // onMouseLeave={() => sethoverShow(false)}
                        className="addProductImageTag absolute "
                        src={photo}
                        alt=""
                      />

                      {hoverShow1 && (
                        <div className="imageHoverPro">
                          <div className=" addProductImageDelete  cursor-pointer ">
                            <DeleteIcon
                              onClick={() => clickDeleteIcon("1")}
                              className=" fill-white "
                            />
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                )}
                {!photo2 ? (
                  <span
                    onClick={() => onButtonClick(2)}
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
                        <span
                          onClick={() => clickDeleteIcon("2")}
                          className=" addProductImageDelete cursor-pointer "
                        >
                          <DeleteIcon className=" fill-white " />
                        </span>
                      </span>
                    )}
                  </div>
                )}
                {!photo3 ? (
                  <span
                    onClick={() => onButtonClick(3)}
                    className="addProductCameraIconBox"
                  >
                    <ThemeCameraIcon />
                  </span>
                ) : (
                  <div
                    onMouseEnter={() => sethoverShow3(true)}
                    onMouseLeave={(e) => sethoverShow3(false)}
                    className="relative addProductPhotoDiv"
                  >
                    <span className="  ">
                      <img
                        className="addProductImageTag absolute "
                        src={photo3}
                        alt=""
                      />
                    </span>
                    {hoverShow3 && (
                      <span className="imageHoverPro">
                        <span
                          onClick={() => clickDeleteIcon("3")}
                          className=" addProductImageDelete cursor-pointer "
                        >
                          <DeleteIcon className=" fill-white " />
                        </span>
                      </span>
                    )}
                  </div>
                )}
                {!photo4 ? (
                  <span
                    onClick={() => onButtonClick(4)}
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
                        <span
                          onClick={() => clickDeleteIcon("4")}
                          className=" addProductImageDelete cursor-pointer "
                        >
                          <DeleteIcon className=" fill-white " />
                        </span>
                      </span>
                    )}
                  </div>
                )}
              </div>
              <p id="pImgError" className="error_messge noDisplay"></p>
            </div>
            <div className="w-full flex flex-col ">
              <p
                onClick={AttachGoodsClick}
                className="addForm_label flex items-center cursor-pointer !justify-start gap-2    !font-semibold !text-[#5B5B5B] hover:!text-[#266E20] "
              >
                + Attach the bill of goods <InfoIcon />
                <input
                  type="file"
                  ref={goodsInput}
                  // {...register("pdf")}
                  name="pdf"
                  // accept=""
                  onChange={(e) => addGoodBill(e)}
                  style={{ display: "none" }}
                  // error={errors.pdf}
                />
              </p>
              {billsData && billsData.Bills.length > 0 && (
                <div className="addProductformBillDivider"></div>
              )}

              {billsData &&
                billsData?.Bills.map((item, i, arr) => (
                  <div className="mt-[32px]">
                    <LinearProgressForBills
                      billsDataLenght={billsDataLenght}
                      item={item}
                      i={i}
                      pdfProgress={pdfProgress}
                      pdftype={pdftype}
                    />
                    {/* <div className="flex gap-[9px] border-[1px solid #F5F5F5]">
                      <p>
                        <PdfIcon />
                      </p>
                      <div className="flex w-full flex-col gap-[4px]">
                        <div className="flex justify-between w-full">
                          <div className="flex ">
                            <span className="pdfName truncate">
                              {item.file.name.split(".")[0] + "."}
                            </span>
                            <span className="pdfType">
                              {item.file.type.split("/")[1]}
                            </span>

                            <span className="pdfSize pl-[8px]">
                              {item.fileSize} mb
                            </span>
                          </div>
                          <div>
                            <CrossIcon
                              onClick={() => pdfDeleteFunc(item)}
                              className="billsCrossIcon cursor-pointer hover:bg-[#F5F5F5]"
                            />
                          </div>
                        </div>
                        {billsDataLenght === i && (
                          <div>
                            {progress === 100 ? (
                              ""
                            ) : (
                              <div className="w-[100%]">
                                {" "}
                                <ThemeLinearProgress
                                  variant="determinate"
                                  value={progress}
                                />
                              </div>
                            )}
                          </div>
                        )}

                        <div
                          className={
                            progress >= 100
                              ? " uploadTextMargin pdfUploadPercantage"
                              : "pdfUploadPercantage"
                          }
                        >
                          {progress >= 100 ? (
                            <p
                              className={
                                billsDataLenght === i
                                  ? "!mt-[4px]"
                                  : "!mt-[7px]"
                              }
                            >
                              {"Uploaded"}
                            </p>
                          ) : (
                            <p>
                              {billsDataLenght === i ? (
                                progress + " % done"
                              ) : (
                                <div className="-mt-[10px]">Uploaded</div>
                              )}
                            </p>
                          )}
                        </div>
                      </div>
                    </div> */}
                  </div>
                ))}
              <p
                className="error_messge pl-[1px]  noDisplay"
                id="addGoodsError"
              ></p>
              <p className="error_messge  noDisplay" id="addBillError"></p>
            </div>
            <div className="w-full mt-[150px] sm:mt-[16px] addproductMobilePosition">
              <ThemeButton
                onClick={() => formGoActive(true)}
                type="submit"
                fullWidth
                variant="contained"
              >
                Add product
              </ThemeButton>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddProductForm;
