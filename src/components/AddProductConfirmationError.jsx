import React, { useState } from "react";
import {
  ThemeAddProductErrorDialogProcessButton,
  ThemeConfirmationError,
} from "../muiTheme/AddProductErrordialog";
import { changeInput, inputFocus } from "../muiTheme/OnFilledBorderStyle";
import { ThemeTextField } from "../muiTheme/Theme";
import { ReactComponent as PdfIcon } from "../image/svg/AddProductErrorDialogIcon.svg";
import { ReactComponent as DownloadIcon } from "../image/svg/DownloadIcon.svg";
import { useSelect } from "@mui/base";
import { useDispatch, useSelector } from "react-redux";
import { BaseUrl } from "../BaseURL/BaseUrl";
import { updateProduct } from "../redux/Slices/UpdateProductSlice";

const AddProductConfirmationError = (props) => {
  const [value, setvalue] = useState();
  const [mb, setmb] = useState()

  const dispatch = useDispatch();
  // console.log(props.confirmationErrorPhoto, "confirmationn");
  const errorData = useSelector((state) => state.error);
  const newData = errorData.dataError.filter((item) => item.type == "error");
  // console.log(newData[0]._id, "errorDataaaaae");

  fetch( newData.length > 0 && `${BaseUrl}/public/productImages/${newData[0].id}`)
  .then(response => {
    const fileSize = response.headers.get('Content-Length');
    const megabytes = fileSize / (1024 * 1024);
    const mbSize=  megabytes.toFixed(2) 
    setmb(mbSize)
  });


  const downloadPhoto = () => {
    // const url = document.getElementById("certificatePhoto").getAttribute("src");
    const url = `${BaseUrl}/public/productImages/${newData[0].id}`;
    const a = document.createElement("a");
    a.href = url;
    a.download = "file.pdf";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };
  const data =
    "alibaba.com/product-detail/Tv-Smart-Tv-Full-HD-Televisions_1600110452017.html?spm=a2700.7735675.topad_classic.d_title.3b615fa14jRr1B";

  // console.log(value , 'vluee')
  return (
    <div>
      <div className="flex flex-col gap-[16px] p-[20px]">
        <div>
          <p className="addProductErrorText">
            The URL you provided doesn't comply.
            <br /> Upload photos again or try another link.
          </p>
        </div>

        <div>
          <p className="AddProducturlLabel">URL of your product</p>
          <ThemeConfirmationError
            autoFocus={"true"}
            // size="small"
            fullWidth
            // value={(e)=>sete.target.value}
            onChange={(e) => setvalue(e.target.value)}
            // defaultValue={newData.length > 0 && newData[0].url}
            name="URL"
            placeholder={newData.length > 0 && newData[0].url}
            // {...register("email")}
            // onFocus={(event) => inputFocus(event)}
            // onBlur={(event) => changeInput(event)}
            error={!value && true}
          />
          {!value && <p className="error_messge">Link doesn't comply</p>}
        </div>

        <div>
          <p className="AddProductErrorDownloadPhotoLabel pt-[20px] pb-[16px]">
            You can still dowload the photos{" "}
          </p>
          <div className="flex justify-between">
            <div className="flex gap-[8px] items-center">
              <p>
                <PdfIcon />
              </p>
              <p className="addProductErrorFileName">
                {newData.length > 0 && newData[0].id}
              </p>
              <p className="pdfSize">{mb} mb</p>
            </div>
            <p>
              <DownloadIcon
                onClick={downloadPhoto}
                className=" cursor-pointer  hover:bg-[#F5F5F5]"
              />
            </p>
          </div>
        </div>

        <div className="w-full flex justify-end">
          <ThemeAddProductErrorDialogProcessButton
            onClick={() =>
              newData.length > 0 &&
              dispatch(updateProduct({ url: value, id: newData[0]._id }))
            }
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

export default AddProductConfirmationError;
