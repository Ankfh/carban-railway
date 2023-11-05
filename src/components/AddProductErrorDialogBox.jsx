import React, { useState } from "react";
import { useRef } from "react";
import { ReactComponent as InfoIcon } from "../image/svg/InfoIcon.svg";
import { ReactComponent as PdfIcon } from "../image/svg/AddProductErrorDialogIcon.svg";
import { ReactComponent as CrossIcon } from "../image/svg/BillCrossIcon.svg";
import { useDispatch, useSelector } from "react-redux";

import "../css/addProductForm.css";
import { ThemeAddProductErrorDialogProcessButton } from "../muiTheme/AddProductErrordialog";
import { deleteBills, uploadBill } from "../redux/Slices/GoodsBillsSlice";
import { ThemeLinearProgress } from "../muiTheme/Theme";

const AddProductErrorDialogBox = () => {
  const inputFile = useRef(null);
  const goodsInput = useRef(null);
  const dispatch = useDispatch();
  const [progress, setProgress] = React.useState(0);
  const [pdf, setpdf] = useState();
  const [fileError, setfileError] = useState();
  const [sizeMb, setsizeMb] = useState();
  const [pdftype, setpdftype] = useState();

  const billsData = useSelector((state) => state.bills);

  const billsDataLenght = billsData.Bills.length - 1;
  //       const AttachGoodsClick = () => {
  //     // `current` points to the mounted file input element
  //     if (!pdf) {
  //       setProgress(0);
  //     }
  //     goodsInput.current.click();
  //   };

  const pdfDeleteFunc = (item) => {
    const otarget = document.getElementById("addBillError");
    otarget.classList.add("noDisplay");
    // setpdf();
    dispatch(deleteBills(item));
    // setProgress(0);
  };

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

          setfileError(null);
        }
        if (fileSize > 2) {
          otarget.innerHTML = "File size exceeds 2MB. Try a smaller file";
          otarget.classList.remove("noDisplay");
          Erortarget.classList.add("noDisplay");

          return;
        } else {
          dispatch(uploadBill({ file, fileSize }));
          setProgress(0);
          otarget.classList.add("noDisplay");
          Erortarget.classList.add("noDisplay");
          setpdf(null);
        }
      }
    
  };
  const AttachGoodsClick = () => {
   
   

    // `current` points to the mounted file input element
    if (!pdf) {
      // setProgress(0);
    }
    goodsInput.current.click();
  };
  React.useEffect(() => {
   
    const timer = setInterval(() => {
      setProgress((prevProgress) =>
        prevProgress >= 100 ? 100 : prevProgress + 10
      );
    }, 1500);
    return () => {
      clearInterval(timer);
    };
  
}, [setpdf, ]);
  return (
    <div className="flex flex-col gap-[16px] p-[20px]">
      <div>
        <p className="addProductErrorText">
          The bill of goods you provided doesn't match. Upload it again.
        </p>
      </div>
      <div className="flex gap-[8px] items-center">
        <p>
          <PdfIcon />
        </p>
        <p className="addProductErrorFileName">filename.pdf</p>
        <p className="pdfSize">1.8 mb</p>
      </div>
      <div>
        <p
          onClick={AttachGoodsClick}
          className="addForm_label flex items-center cursor-pointer !justify-start gap-2    !font-semibold !text-[#5B5B5B] "
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
                    <div className="flex gap-[9px] border-[1px solid #F5F5F5]">
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
                    </div>
                  </div>
                ))}
      </div>
      <div className="w-full flex justify-end">
        <ThemeAddProductErrorDialogProcessButton
          fullWidth
          variant="contained"
          type="submit"
        >
          Procceed
        </ThemeAddProductErrorDialogProcessButton>
      </div>
    </div>
  );
};

export default AddProductErrorDialogBox;
