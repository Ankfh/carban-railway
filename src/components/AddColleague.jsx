import React from "react";
import { ThemeAutoComplete, ThemeTextField } from "../muiTheme/Theme";
import {
  inputFocus,
  changeInput,
  passwordFocus,
  passwordBlur,
} from "../muiTheme/OnFilledBorderStyle";
import { useState } from "react";
import {
  ThemeAddColleagueDialogAddButton,
  ThemeAddColleagueTextField,
  ThemeAddColleagueTextFieldMenu,
  ThemeAddColleagueTextFieldMenuItem,
} from "../muiTheme/ProfileTheme";
import {
  Autocomplete,
  IconButton,
  InputAdornment,
  Menu,
  MenuItem,
  TextField,
} from "@mui/material";
import { Box } from "@mui/system";
import { ReactComponent as SelectIcon } from "../image/svg/AddColleagueIcon.svg";
import { TagsInput } from "react-tag-input-component";
import "../css/AddColleagueModel.css";
import { ReactComponent as ArrowDown } from "../image/svg/ArrowDown.svg";
import { Anchor, ContactEmergency } from "@mui/icons-material";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { addColleague } from "../redux/Slices/AddColleagueSlice";
import { colleagueAdd } from "../redux/Slices/AddColleagueBackendSlice";
import { getAllColleague } from "../redux/Slices/GetAllColleagueSlice";

const schema = yup.object().shape({
  email: yup.string().required("Email is required").email("Invalid email"),
});

const emailRegex =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
var tagsArray = [];
const validateEmail = (email) => {
  if (String(email).toLowerCase().match(emailRegex)) {
    return true;
  } else return false;
};

const AddColleague =  (props) => {
  const [email, setemail] = useState();
  const [role, setrole] = useState("Editor");
  const [emailarray, setemailarray] = useState();
  const [tags, settags] = useState([]);
  const [ErrorMessage, setErrorMessage] = useState();
  const [placeHolder, setplaceHolder] = useState("Enter email");
 const [length, setlength] = useState('')
  const [anchorEl, setAnchorEl] = React.useState(false);
  const dispatch = useDispatch();
  const result = useSelector((state) => state.colleague.colleague);
  const data = useSelector((state) => state.allColleaguue.data.allColleague);
  const addedData = useSelector((state) => state.colleagueAdd.data.colleagues);
  const [mergeColleague, setmergeColleague] = useState([]);
  const resultLength = result.length;
  console.log(mergeColleague, "resultyttttttttt");
  
  // if(data){
  //   setaddedCol(data);
  // }
  // else{
  //   setaddedCol(addedData);
  // }
  
  useEffect(()=> {
    // if(data && data.length>0){
      console.log(addedData, data, '>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>')
      if(addedData && addedData.length>0)
      setmergeColleague(addedData)
      else if(data && data.length>0)
      setmergeColleague(data)
      setlength(mergeColleague.length)
    
  }, [addedData, data, mergeColleague]);
console.log(data, addedData, mergeColleague ,'++++++++++++++++++++++++++++++++++++++++');
  const onClickAddButton = async () => {
    // var getTags = document.getElementsByClassName('rti--tag');
    // // console.log(getTags)
    // if(getTags.length>0){
    //   while(getTags.length > 0){
    //     getTags[0].remove();
    // }
    // }
    console.log(tags)
    if (tags.length > 0) {
      var ckvalue = 0;
      for (let i = 0; i < tags.length; i++) {
        const status = validateEmail(tags[i]);
        if (status) {
          if (ckvalue != 1) {
            ckvalue = 0;
          }
        } else {
          ckvalue = 1;
        }
      }
    } else {
      setErrorMessage("Email is required");
      document
        .getElementsByClassName("rti--container")[0]
        .classList.add("addColleagueErrorClass");
      return false;
    }
    if (ckvalue != 1) {
      dispatch(colleagueAdd(tags))
      // dispatch(addColleague(tags));
      // const response = await dispatch(colleagueAdd(tags));
      // console.log(response.payload.colleagues)
      // settags(response.payload.colleagues)
      // setlength(response.payload.colleagues.length)
      console.log(tags);
      setemail(tags);
      const target = document.getElementsByClassName("addColleagueErrorClass");
      if (target.length > 0) {
        target[0].classList.remove("addColleagueErrorClass");
      }
      settags([]);
      // setmergeColleague(tags);
    }
  };

  // const modalBody = document.getElementsByClassName('MuiDialogContent-root');
  // console.log(modalBody,'>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>')
  // if(modalBody.length>0){
  //   modalBody[1].addEventListener('click', function(){
  //     console.log(document.getElementsByClassName('addcolleagueRolDiv'))
  //     document.getElementsByClassName('addcolleagueRolDiv')[0].click();
  //   });
  // }

  const tagClick = document.getElementsByClassName("rti--tag");
  if (tagClick.length > 0) {
    for (let i = 0; i < tagClick.length; i++) {
      tagClick[i].addEventListener("click", function () {
        if (this.classList.contains("addColleagueErrorClass")) {
          const target = document.getElementsByClassName("tagErrorSelected");
          const target2 = document.getElementsByClassName("tagRightSelected");
          if (target.length > 0) {
            target[0].classList.remove("tagErrorSelected");
          }
          if (target2.length > 0) {
            target2[0].classList.remove("tagRightSelected");
          }

          this.classList.add("tagErrorSelected");
        } else {
          const target = document.getElementsByClassName("tagErrorSelected");
          const target2 = document.getElementsByClassName("tagRightSelected");
          if (target.length > 0) {
            target[0].classList.remove("tagErrorSelected");
          }
          if (target2.length > 0) {
            target2[0].classList.remove("tagRightSelected");
          }

          this.classList.add("tagRightSelected");
        }
      });
    }
  }

  const collegueMod = document.getElementById("addCollegueModal");
  if (collegueMod) {
    collegueMod.addEventListener("click", function (e) {
      if (e.target.classList.contains("colTypeMenu")) {
        console.log("selected");
      } else {
        setAnchorEl(false);
      }
    });
  }

  // console.log(emailarray, "email arrayyyy");
  const onSelectIconClick = (e) => {
    // console.log('???????????????????????', e)
    if (anchorEl === false) {
      setAnchorEl(true);
    } else {
      setAnchorEl(false);
    }
  };

  const onMenuListClick = (data) => {
    console.log("????");
    setrole(data);
    setAnchorEl(false);
  };

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const submitForm = (data) => {
    console.log(data, "oooo0000000");
  };

  useEffect(() => {
    // settags([]);
    setemail(null);
    setErrorMessage();
  }, [props.dialogClose]);

  const tagsOnchange = (e) => {
    // console.log(e);
    const tagIndex = e.length - 1;

    if (tagIndex >= 0) {
      const target2 = document.getElementsByClassName("rti--container")[0];
      const target3 = document.getElementsByClassName("rti--tag")[tagIndex];

      const value = validateEmail(e[tagIndex]);
      // console.log(value, '>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>')
      if (value === true) {
        // setErrorMessage();

        target2.classList.remove("addColleagueErrorClass");
        target3.classList.remove("addColleagueErrorClass");
        target3.classList.add("addColleagueRightClass");
        setErrorMessage();
      } else {
        setErrorMessage("Invalid email");
        target2.classList.add("addColleagueErrorClass");
        target3.classList.add("addColleagueErrorClass");
      }
      tagsArray = e;
      settags(e);
    } else {
      setErrorMessage();
      // target2.classList.remove("addColleagueErrorClass");
      // target3.classList.remove("addColleagueErrorClass");
    }
  };

  const checkInputValue = (e) => {
    if (e.key == " " || e.key == "," || e.key == "Enter") {
      const available = document.getElementsByClassName("rti--tag");
      let width = 0;
      // const contwidth = document.getElementsByClassName('rti--container')[0].offsetWidth - 16;
      const inputwidth = e.target.clientWidth;
      // const inputpercent = inputwidth/contwidth * 100;
      for (let i = 0; i < available.length; i++) {
        width += available[i].offsetWidth;
        width += 7;
      }

      // const acwidth = width / inputwidth * 100;
      const widthrequire = inputwidth - width;

      if (widthrequire > 60) {
        e.target.style.width = widthrequire + "px";
      } else {
        e.target.style.width = "100%";
      }

      console.log(widthrequire);
    }
  };

  // console.log(tags)

  const removeTagsChange = (e) => {
    const index = tagsArray.indexOf(e);
    const target2 = document.getElementsByClassName("rti--container")[0];
    const target3 = document.getElementsByClassName("rti--tag")[index];
    target2.classList.remove("addColleagueErrorClass");
    target3.classList.remove("addColleagueErrorClass");
    // console.log(e)
    tagsArray = tagsArray.filter((p) => p !== e);
    // console.log(tagsArray)
    settags(tagsArray);
  };

  useEffect(() => {
    dispatch(getAllColleague())
      .unwrap()
      .then((res) => {
        console.log(res)
        if (res?.success) {
          console.log(res, "ressss");
          setlength(res.allColleague.length)
        }
        console.log(res, "ressss");
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="px-[20px] py-[28px]">
      <form onSubmit={handleSubmit(submitForm)}>
        <div className="flex flex-col sm:flex-row gap-[20px] justify-center items-center">
          {" "}
          {/* {errors.email ? (
          <p className="error_messge">{errors.email?.message}</p>
                ) : (
                  ""
                )} */}
          <div className="relative w-full">
            <TagsInput
              id="tagsInput"
              name="email"
              onBlur={(event) => changeInput(event)}
              value={tags}
              onRemoved={(e) => e && removeTagsChange(e)}
              onChange={(e) => e && tagsOnchange(e)}
              onKeyUp={(e) => checkInputValue(e)}
              placeHolder={placeHolder}
              separators={["Enter", ",", " "]}
              // {...register("email")}
              // error={errors.email}
            />

            {ErrorMessage && <p className="error_messge">{ErrorMessage}</p>}

            <div
              onClick={(e) => onSelectIconClick(e)}
              className="flex justify-center addcolleagueRolDiv cursor-pointer"
            >
              <p>{role}</p>
              <p>
                <ArrowDown />
              </p>
            </div>

            {anchorEl && (
              <div className="absolute z-10  addColleagueMenuMainDiv">
                <ul className="addColleagueMenuUL  flex flex-col  ">
                  <li
                    className="colTypeMenu cursor-pointer pt-[3px] h-[32px] !pl-[16px] w-full "
                    onClick={() => onMenuListClick("Admin")}
                  >
                    Admin
                  </li>
                  <li
                    className="colTypeMenu cursor-pointer pt-[3px] h-[32px] !pl-[16px] "
                    onClick={() => onMenuListClick("Editor")}
                  >
                    Editor
                  </li>
                  <li
                    className="colTypeMenu cursor-pointer pt-[3px] h-[32px] !pl-[16px]"
                    onClick={() => onMenuListClick("Viewer")}
                  >
                    Viewer
                  </li>
                </ul>
              </div>
            )}
          </div>
          <ThemeAddColleagueDialogAddButton
            onClick={onClickAddButton}
            fullWidth
            variant="contained"
            type="submit"
          >
            Add
          </ThemeAddColleagueDialogAddButton>
        </div>
      </form>
      <div className="addColleagueDilogDevider mb-[16px] mt-[28px]"></div>
      <div className="flex flex-col gap-[12px]">
        <p className="addColleagueLabelDialog">Added colleagues</p>
        {length <= '0' ? (
          <p className="addColleagueEmailHelpText">
            Here you'll see the list of added colleagues with their rights
          </p>
        ) : (
          <div>
            
             {mergeColleague && mergeColleague.length>0 && mergeColleague?.map((item, i) => (
                <p key={i} className="addColleagueDilogEmail">
                  {item.email}
                </p>
              ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AddColleague;
