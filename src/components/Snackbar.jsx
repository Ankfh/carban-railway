import React from "react";
import { ReactComponent as CrossIcon } from "../image/svg/BillCrossIcon.svg";

const Snackbar = () => {
  return (
    <div>
      <div className="snackbarMianDiv">
        <p className="snackbarText">Changes saved</p>
        <p>
          <CrossIcon />
        </p>
      </div>
    </div>
  );
};

export default Snackbar;
