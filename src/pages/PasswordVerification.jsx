import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { passwordResetVerify } from "../redux/Slices/PasswordResetLinkVerifySlice";
import { verifyInvitation } from "../redux/Slices/VarifyInvitationSlice";

const PasswordVerification = () => {
  const navigate = useNavigate();

  const { token } = useParams();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(passwordResetVerify(token))
      .unwrap()
      .then((res) => {
        if (res?.success) {
          console.log(res, "ressss");
          navigate(`/resetpassword2nd/${res.userInfo._id}`);
        } else {
          <div>
            <h2>Something wrong...</h2>
          </div>;
        }
        console.log(res, "ressss");
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return <div></div>;
};

export default PasswordVerification;
