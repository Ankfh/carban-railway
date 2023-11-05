import React from "react";
import { ThemeAddProductErrorDialogProcessButton } from "../muiTheme/AddProductErrordialog";
import { ThemeDeleteAccounPopsCancelButton, ThemeDeleteAccountPopsDeleteButton, ThemeDeletePopsCancelButton, ThemeDeletePopsDeleteButton } from "../muiTheme/ProfileTheme";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { BaseUrl } from "../BaseURL/BaseUrl";
const DeleteAccountDialogBox = () => {
  const navigate = useNavigate();
  const deleteAccount = () => {
    
    const userId = JSON.parse(localStorage.getItem("userId"));
    if(userId){
      axios.post(BaseUrl + '/api/user/deluser', {userId})
      .then(response => {
        localStorage.clear()
        navigate("/");
      })
      .catch(error => console.log(error));
    }
    
  };

  return (
    <div className="flex  flex-col justify-center gap-[38px] pb-[24px] px-[24px] h-[224px] ">
      <div>
        <p className="deletePopsText">
          Are you sure you want to delete your account?
        </p>
      </div>
      <div className="w-full flex justify-end gap-[20px]">
        <ThemeDeleteAccounPopsCancelButton
          fullWidth
          variant="contained"
          type="submit"
        >
          Cancel
        </ThemeDeleteAccounPopsCancelButton>
        <ThemeDeleteAccountPopsDeleteButton
          fullWidth
          variant="contained"
          type="submit"
          onClick={deleteAccount}
        >
          Delete
        </ThemeDeleteAccountPopsDeleteButton>
      </div>
    </div>
  );
};

export default DeleteAccountDialogBox;
