import React from "react";
import { ThemeLinearProgress } from "../muiTheme/Theme";
import { ReactComponent as CrossIcon } from "../image/svg/BillCrossIcon.svg";
import { ReactComponent as PdfIcon } from "../image/svg/PdfIcon.svg";
import { ReactComponent as PhotoIcon } from "../image/svg/PhotoIcon.svg";
import { deleteBills } from "../redux/Slices/GoodsBillsSlice";
import { useDispatch } from "react-redux";

const LinearProgressForBills = (props) => {
  const [progress, setProgress] = React.useState(0);
  const dispatch = useDispatch();

  const pdfDeleteFunc = (item) => {
    const otarget = document.getElementById("addBillError");
    otarget.classList.add("noDisplay");
    // setpdf();
    dispatch(deleteBills(item));
    // setProgress(0);
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
  }, [props.setpdf]);

  return (
    <div className="flex gap-[9px] border-[1px solid #F5F5F5]">
      <p>{props.item.typeType == "pdf" ? <PdfIcon /> : <PhotoIcon />}</p>
      <div className="flex w-full flex-col gap-[4px]">
        <div className="flex justify-between w-full">
          <div className="flex ">
            <span className="pdfName truncate">
              {props.item.file.name.split(".")[0] + "."}
            </span>
            <span className="pdfType">
              {props.item.file.type.split("/")[1]}
            </span>

            <span className="pdfSize pl-[8px]">{props.item.fileSize} mb</span>
          </div>
          <div>
            <CrossIcon
              onClick={() => pdfDeleteFunc(props.item)}
              className="billsCrossIcon cursor-pointer hover:bg-[#F5F5F5]"
            />
          </div>
        </div>
        {props.billsDataLenght === props.i && (
          <div>
            {props.pdfProgress === 100 ? (
              ""
            ) : (
              <div className="w-[100%]">
                {" "}
                <ThemeLinearProgress
                  variant="determinate"
                  value={props.pdfProgress}
                />
              </div>
            )}
          </div>
        )}

        <div
          className={
            props.pdfProgress >= 100
              ? " uploadTextMargin pdfUploadPercantage"
              : "pdfUploadPercantage"
          }
        >
          {props.pdfProgress >= 100 ? (
            <p
              className={
                props.billsDataLenght === props.i ? "!mt-[4px]" : "!mt-[7px]"
              }
            >
              {"Uploaded"}
            </p>
          ) : (
            <p>
              {props.billsDataLenght === props.i ? (
                props.pdfProgress + " % done"
              ) : (
                <div className="-mt-[10px]">Uploaded</div>
              )}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default LinearProgressForBills;
