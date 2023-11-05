import React, { useEffect } from "react";
import "../css/productDetail.css";
import { ReactComponent as CertificateOfEmmision } from "../image/svg/certificateOfemission.svg";
import pic from "../image/cardImg.png";
import DetailData from "../data/productDetailData";
import { useDispatch, useSelector } from "react-redux";
import { getSingleProduct } from "../redux/Slices/GetSingleProductSlice";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { BaseUrl } from "../BaseURL/BaseUrl";

const CertificateTransferDetail = () => {
    const [createdDate, setcreatedDate] = useState("");
  const { id } = useParams();
  const dispatch = useDispatch();

  const product = useSelector((state) => state.singleProduct.data.products);

  let photo = [];
  if (product !== undefined) {
    photo = JSON.parse(product.productPhoto);
    console.log(photo, "productssss");
  }
  
  return (
    <div className="certificateMaiDiv w-auto md:w-[350px]  flex flex-col gap-[41px] items-center">
    <div className="certifiacteDiv pt-[41px] ">
      <CertificateOfEmmision />
    </div>
    <div>
      <div className="flex w-full pt-[41px] justify-center gap-6 items-center">
        <span className="certifiactePictureCards">
          <img 
           className="h-[98px] w-[99px] m-[10px]"
           src={
             product !== undefined &&
             `${BaseUrl}/public/productImages/${photo[0].path}`
           }
          alt="" />
        </span>
        <span className="certifiactePictureCards">
          <img 
           className="h-[98px] w-[99px] m-[10px]"
           src={
             product !== undefined &&
             `${BaseUrl}/public/productImages/${photo[0].path}`
           }
          alt="" />
        </span>
      </div>
      <div className="hidden sm:block">
        <div className="productDetailViewDiv flex flex-col w-full  mt-[40px] items-center">
          {/* {DetailData?.map((items) => ( */}
          <p className="productDetailRow rounded-t-[5px] flex   ">
            <span className="productDetailRow1stPart">Date of issue</span>
            <span className="productDetailRow2ndPart">
              {product !== undefined ? product.createdDate : ""}
            </span>
          </p>
          <p className="productDetailRow  flex  ">
            <span className="productDetailRow1stPart">
              Product description
            </span>
            <span className="productDetailRow2ndPart">
              {product !== undefined ? product.serialNumber : ""}
            </span>
          </p>
          <p className="productDetailRow  flex  ">
            <span className="productDetailRow1stPart">Weight</span>
            <span className="productDetailRow2ndPart">2 kg</span>
          </p>
          <p className="productDetailRow  flex  ">
            <span className="productDetailRow1stPart">Materials</span>
            <span className="productDetailRow2ndPart">Plastic</span>
          </p>
          <p className="productDetailRow  flex  ">
            <span className="productDetailRow1stPart">Serial number</span>
            <span className="productDetailRow2ndPart">
              {product !== undefined ? product.serialNumber : ""}
            </span>
          </p>
          <p className="productDetailRow productDetailRowBorder rounded-b-[5px] flex  ">
            <span className="productDetailRow1stPart productDetailRow1stPartBorder">
              Manufacturer name
            </span>
            <span className="productDetailRow2ndPart productDetailRow2ndPartBorder ">
              {product !== undefined ? product.productName : ""}
            </span>
          </p>
          {/* ))} */}
        </div>
      </div>

      <div className="productDetailViewDivMobi block sm:hidden mt-[28px]  mb-[20px] ">
        <div className="productDetailViewChildDivMobi">
          <p className="productDetailLabelMobi">Date of issue</p>
          <p className="productDetailText">Sun 14 Aug 2022</p>
        </div>
        <div className="productDetailViewChildDivMobi">
          <p className="productDetailLabelMobi">Product name</p>
          <p className="productDetailText">42” Smart TV</p>
        </div>
        <div className="productDetailViewChildDivMobi">
          <p className="productDetailLabelMobi">Product description</p>
          <p className="productDetailText">Smart TV</p>
        </div>
        <div className="productDetailViewChildDivMobi">
          <p className="productDetailLabelMobi">Weight</p>
          <p className="productDetailText">2 kg</p>
        </div>
        <div className="productDetailViewChildDivMobi">
          <p className="productDetailLabelMobi">Materials</p>
          <p className="productDetailText">Plastic</p>
        </div>
        <div className="productDetailViewChildDivMobi">
          <p className="productDetailLabelMobi">Serial number</p>
          <p className="productDetailText">Y0139836</p>
        </div>
        <div className="productDetailViewChildDivMobi !border-0">
          <p className="productDetailLabelMobi">Manufacturer name</p>
          <p className="productDetailText">Amv</p>
        </div>
      </div>
    </div>
  </div>
  )
}

export default CertificateTransferDetail
