import React from "react";
import "../css/productDetail.css";
import { ReactComponent as TransferIcon } from "../image/svg/TransferDoneIcon.svg";

const ProductTransferDialogBox = () => {
  return (
    <div>
      <div className="transferDialogMianDiv">
        <div>
          <TransferIcon />
        </div>
        <div>
          <p className="transferDialogTitle">Product transfered</p>
          <p className="transferDialogSubTitle pt-[8px] ">
            Within 24 hours it will be transfered to the company name
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductTransferDialogBox;
