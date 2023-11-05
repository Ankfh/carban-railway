import React, { useState } from "react";

import { ReactComponent as DownloadPhoto } from "../image/svg/AddProductErrorDialogIcon.svg";
import p1 from "../image/cardImg.png";
import p2 from "../image/DownloadPhotoArrow.png";
import { BaseUrl } from "../BaseURL/BaseUrl";
import { useSelector } from "react-redux";

const DownloadPhotoDialogCompo = (props) => {
  const [show, setshow] = useState(false);
  const thsDevice = navigator.platform;
  const [image, setimage] = useState();

  const errorData = useSelector((state) => state.addAdminPhoto);
  var newData = [];
  if (errorData.dataError.length > 0) {
    newData = JSON.parse(errorData.dataError[0].photos);
    console.log(newData, "download Datayy");
  }
  // const newData = errorData.dataError.filter((item) => item.type == "download");
  const mobileBlur = (e) => {
    const deviceName = thsDevice.split(" ");
    if (e.target.classList.contains("actCertImg")) {
      if (deviceName[0] == "Linux") {
        setshow(false);
      }
    }
  };

  const downloadPhoto = () => {
    // const url = document.getElementById("certificatePhoto").getAttribute("src");
    const url = `${BaseUrl}/public/AdminPhotos/${newData[0].path}`;
    const a = document.createElement("a");
    console.log(url);
    a.href = url;
    a.download = "Certificate.png";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };
  return (
    <div>
      <div className="absolute">
        <img
          width={"138px"}
          height="114px"
          id="certificatePhoto"
          className="actCertImg pt-[19px] h-[114px]  pl-[18px]"
          onMouseEnter={() => setshow(true)}
          onMouseLeave={(e) => mobileBlur(e)}
          src={
            newData.length > 0 &&
            `${BaseUrl}/public/AdminPhotos/${newData[0].path}`
          }
          alt=""
        />
      </div>

      <div onMouseLeave={() => setshow(false)} className="absolute">
        {show && (
          <div className="hoverDownload-img ">
            <img
              onClick={downloadPhoto}
              className="cursor-pointer "
              src={p2}
              alt=""
              onMouseLeave={() => setshow(false)}
            />
          </div>

          // </>
        )}
      </div>
    </div>
  );
};

export default DownloadPhotoDialogCompo;
