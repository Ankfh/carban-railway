import React from "react";
import TopBar from "../components/TopBar";
import { ReactComponent as ArrowIcon } from "../image/svg/arrowIcon.svg";
import transferData from "../data/transfer";
import "../css/productDetail.css";
import { ReactComponent as NextIcon } from "../image/svg/NextIcon.svg";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { usegetAllTransferQuery } from "../redux/Slices/ApiSlice";
import { useDispatch, useSelector } from "react-redux";
import { getAllTransfer } from "../redux/Slices/GetAllTransferSlice";
import { useState } from "react";
const TransfersList = () => {
  const navigate = useNavigate();
const [singleProductData, setsingleProductData] = useState()
  const dispatch = useDispatch();
  const data = useSelector((state) => state.allTransfer);
  // console.log(data,'iiiiiiiii')

  const trialText = "30 days left in trial";
  const text = " ";
  const iconText = "L";
  const joinButton = " ";
  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(getAllTransfer());
  }, [dispatch]);
  return (
    <div className="bg-[#FFFFFF]">
      <TopBar
        Text={text}
        joinButton={joinButton}
        iconText={iconText}
        trialText={trialText}
      />
      <div className="flex pt-[100px] items-center justify-between  px-[34px]">
        <p>
          <ArrowIcon
            className="goBackIcon cursor-pointer hover:bg-[#F5F5F5]"
            onClick={() => navigate(-1)}
          />
        </p>

        <p className="tranferListHeadTitle">Tarnsfers</p>
        <p className=""></p>
      </div>

      <div className="w-full transferListCardMainDiv cursor-pointer mt-[57px] px-[34px] xl:px-[140px] ">
        {data.loading === true ? (
          <div></div>
        ) : (
          data.data.transferProduct?.map((item) => (
            <div
              onClick={() => navigate(`/transferdetial/${item._id}`)}
              className="transferCardDiv w-full "
            >
              <p className="transferListDate">{item.createdAt}</p>
              <p className="transferListTitle w-full flex justify-between">
                <span className="break-all">{item.customerProductName}</span>
                <span className="ml-[29px] ">
                  <NextIcon
                    className="cursor-pointer hover:bg-[#F5F5F5]"
                    onClick={() => navigate("/transferdetial")}
                  />
                </span>
              </p>
              <p className="tranferListEmail">{item.customerEmail}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default TransfersList;
