import React from "react";
import { useState } from "react";
import p1 from "../image/Certificate";
import p2 from "../image/Frame 37150.png";
import p3 from "../image/Rectangle 1283.png";
import "../css/Certificate.css";

const CertificateView = () => {
  const [show, setshow] = useState(false);

  const certImg = document.getElementById("actualCertificate");
  const hoverImg = document.getElementById("hoverCertificate");
  const thsDevice = navigator.platform;
  if (certImg) {
    certImg.addEventListener("mouseover", function (e) {
      e.target.classList.remove("show");
      e.target.classList.add("hidden");

      hoverImg.classList.remove("hidden");
      hoverImg.classList.add("show");
    });
  }

  if (hoverImg) {
    certImg.addEventListener("mouseout", function (e) {
      e.target.classList.remove("show");
      e.target.classList.add("hidden");

      certImg.classList.remove("hidden");
      certImg.classList.add("show");
    });
  }

  const DownloadQr = () => {
    const url = document.getElementById("certificatePhoto").getAttribute("src");
    const a = document.createElement("a");
    console.log(url);
    a.href = url;
    a.download = "Certificate.png";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  const mobileBlur = (e) => {
    const deviceName = thsDevice.split(" ");
    if (e.target.classList.contains("actCertImg")) {
      if (deviceName[0] == "Linux") {
        setshow(false);
      }
    }
  };
  return (
    <div className="w-full justify-end">
      <div className="mt-[71px] md:ml-[41px]  flex justify-center md:justify-start relative ">
        <div className="w-full  flex justify-center md:justify-start">
          <div className="absolute">
            <img
              width={"262px"}
              height="322px"
              id="certificatePhoto"
              className="actCertImg"
              onMouseEnter={() => setshow(true)}
              onMouseLeave={(e) => mobileBlur(e)}
              src={p1}
              alt=""
            />
          </div>
          <div
            //  onMouseLeave={() => setshow(false)}

            onMouseLeave={() => setshow(false)}
            className="absolute"
          >
            {show && (
              <div className="hover-img ">
                {/* <img className="" src={p3} alt="" /> */}
                <img
                  onClick={DownloadQr}
                  className="cursor-pointer certificateImageDelete"
                  src={p2}
                  alt=""
                  // onMouseLeave={() => setshow(false)}
                  // onBlur={() => setshow(false)}
                />
              </div>

              // </>
            )}
          </div>
          {/* </div> */}
        </div>
      </div>
    </div>
  );
};

export default CertificateView;
