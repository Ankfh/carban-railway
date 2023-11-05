import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { verifyInvitation } from "../redux/Slices/VarifyInvitationSlice";

const InvitationVerification = () => {
  const navigate = useNavigate();

  const { token } = useParams();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(verifyInvitation(token))
      .unwrap()
      .then((res) => {
        if (res?.success) {
          console.log(res, "ressss");
          localStorage.setItem('verifyemail', res.userInfo.email);
          localStorage.setItem('companyName', res.message);
          navigate(`/usersignup/${res.userInfo._id}/${res.userInfo.companyId}`);
        } else {
          <div>
            <h2>Something wrong...</h2>
          </div>;
        }
        // console.log(res, "ressss");
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return <div></div>;
};

export default InvitationVerification;
