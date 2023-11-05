import { createTheme } from "@mui/material/styles";
import { styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import { Select, MenuItem, Button } from "@mui/material";
import { AppBar, Box, Toolbar } from "@mui/material";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import Autocomplete from "@mui/material/Autocomplete";
import Dialog from "@mui/material/Dialog";
import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar";
import InputAdornment from "@mui/material/InputAdornment";
import LinearProgress from "@mui/material/LinearProgress";

export const ThemeTextField = styled(TextField)(({ theme }) => ({
  borderWidth: "1px solid",
  borderRadius: "4px",
  backgroundColor: "#FFFFFF",
  marginTop: "8px",

  "& .MuiSvgIcon-root": {
    color: "#a3b4ca",
    width: "14px",
    // height: "10px",
  },
  "& .Mui-error": {
    backgroundColor: "#FFF8F7",
    borderColor: "#DE3730",
  },

  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderRadius: "4px",
      border: "1px solid #9D9D9D",
      padding: "8px 0px 8px 0px",
    },
    "&:hover fieldset": {
      borderRadius: "4px",
      border: "1px solid #9D9D9D",
    },
    "&.Mui-focused fieldset": {
      border: "1px solid #57B353",
    },
  },
  "& .MuiInputBase-root": {
    height: "40px",
    // width:{ md: "auto" , xs: '248px'}
    fontFamily: "Source Sans Pro",

    //styleName: material-theme/body/medium;
    fontSize: "14px",
    fontWeight: "400",
    lineHeight: "20px",
    letterSpacing: "0.25px",
    color: "#2C2C2C",
  },
  width: "100%",
  input: {
    padding: "8px 8px 8px 8px",

    "&::placeholder": {
      fontFamily: "Source Sans Pro",

      FontStyle: "Regular",
      fontWeight: "300",
      fontSize: "14px",
      lineHeight: "20px",
      letterSpacing: "0.25px",
      color: "#BEBEBE",
      opacity: 1,
    },

    // "& .MuiInput-inputTypeSearch": {

    fontFamily: "Source Sans Pro",

    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "14px",

    display: "flex",
    alignItems: "flex-end",
    letterSpacing: "0.25px",
    color: "#2C2C2C",
    // color: "red",
    // },
  },
  [theme.breakpoints.down("sm")]: {
    height: "40px",
    // width: "256px",
    // "& .MuiInputBase-input-MuiOutlinedInput-input": {
    //   color: "red",
    // },
  },
}));

/// singup phonne number textfield style
export const ThemePhoneNumberTextfield = styled(TextField)(({ theme }) => ({
  borderWidth: "1px solid",
  borderRadius: "4px",
  backgroundColor: "Transparrent",
  marginTop: "8px",

  "& .MuiSvgIcon-root": {
    color: "#a3b4ca",
    width: "14px",
    // height: "10px",
  },
  "& .Mui-error": {
    backgroundColor: "#FFF8F7",
    borderColor: "#DE3730",
  },

  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderRadius: "4px",
      border: "1px solid #9D9D9D",
      padding: "8px 0px 8px 0px",
    },
    "&:hover fieldset": {
      borderRadius: "4px",
      border: "1px solid #9D9D9D",
    },
    "&.Mui-focused fieldset": {
      border: "1px solid #57B353",
    },
  },
  "& .MuiInputBase-root": {
    height: "40px",
    // width:{ md: "auto" , xs: '248px'}
    fontFamily: "Source Sans Pro",

    //styleName: material-theme/body/medium;
    fontSize: "14px",
    fontWeight: "400",
    lineHeight: "20px",
    letterSpacing: "0.25px",
    color: "#2C2C2C",
    paddingLeft: 0,
    paddingTop: "2px",
  },
  width: "100%",
  input: {
    padding: "8px 8px 8px 0px",
    marginLeft: "-4px",

    "&::placeholder": {
      fontFamily: "Source Sans Pro",

      FontStyle: "Regular",
      fontWeight: "300",
      fontSize: "14px",
      lineHeight: "20px",
      letterSpacing: "0.25px",
      color: "#BEBEBE",
      opacity: 1,
    },

    // "& .MuiInput-inputTypeSearch": {

    fontFamily: "Source Sans Pro",

    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "14px",

    display: "flex",
    alignItems: "flex-end",
    letterSpacing: "0.25px",
    color: "#2C2C2C",
    // color: "red",
    // },
  },
  [theme.breakpoints.down("sm")]: {
    height: "40px",
    // width: "256px",
    // "& .MuiInputBase-input-MuiOutlinedInput-input": {
    //   color: "red",
    // },
  },
}));

////phone number text field component styleee
export const ThemeAdorment = styled(InputAdornment)(({ theme }) => ({
  ".MuiTypography-root": {
    fontFamily: "Source Sans Pro",

    fontSize: "14px",
    fontWeight: "400",
    lineHeight: "20px",
    letterSpacing: "0.25px",
    color: "#2C2C2C",
  },

  paddingLeft: "8px",
}));

////style only for password fields
export const passwordFieldStyle = {
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      border: "1px solid #e7e7e7 !important",
    },
    "&.Mui-focused fieldset": {
      border: "1px solid #57B353 !important",
    },
  },
};
///............

export const ThemeSelect = styled(Select)(({ theme }) => ({
  backgroundColor: "#FFFFFF",
  borderWidth: "1px solid",
  borderRadius: "8px",
  fontFamily: "Source Sans Pro",

  fontStyle: "normal",
  fontWeight: "400",
  fontSize: "14px",
  lineHeight: "20px",
  color: "#2C2C2C",
  marginTop: "8px",
  "&.Mui-error": {
    backgroundColor: "#FFF8F7 ",
    borderColor: "blue",
  },

  //'''''
  "& .MuiPaper-root": {
    backgroundColor: "#31A246",
  },

  ".MuiOutlinedInput-notchedOutline": {
    borderRadius: "8px",
    border: "1px solid #9D9D9D",
  },
  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
    border: "1px solid #57B353",
  },
  "&:hover .MuiOutlinedInput-notchedOutline": {
    borderRadius: "8px",
    border: "1px solid #9D9D9D",
  },
  width: "100%",
  height: "40px",

  input: {
    // padding: "8px 8px 8px 8px",
  },
  [theme.breakpoints.down("sm")]: {
    // color: "black",
    // width: "256px",
    //   ".MuiSvgIcon-root ": {
    //     fill: "white !important",
    //   },
  },
}));

export const ThemeButton = styled(Button)(({ theme }) => ({
  textTransform: "none",
  backgroundColor: "#57B353",
  // marginTop: "6px",
  fontWeight: "600px",
  fontSize: "16px",
  borderRadius: "4px",

  padding: "10px 80px 10px 80px",
  fontFamily: "Source Sans Pro",

  fontStyle: "normal",
  lineHeight: "24px",
  boxShadow: "none",

  "&:hover": {
    backgroundColor: "#31A246",
    boxShadow: "none",
  },
  "&:focus": {
    backgroundColor: "#266E20",
    boxShadow: "none",
  },
  "&:active": {
    boxShadow: "none",
    backgroundColor: "#266E20",
  },
  [theme.breakpoints.down("sm")]: {
    // width: "256px",
    height: "44px",
  },
}));

//................TOPBAR..////////////////
export const ThemeAppbar = styled(AppBar)(({ theme }) => ({
  boxShadow: "0px 1px 2px rgba(0, 0, 0, 0.3)",
  background: "#FFFFFF",
  height: "64px",
  color: "#707070",
  padding: "0px 18px 0px  18px",
}));

///ToolBarr..............///////
export const ThemeToolbar = styled(Toolbar)(({ theme }) => ({
  padding: "16px 72px",
  ".MuiToolbar-root": {
    padding: "16px 72px",
  },
}));

////product page mui button
export const ThemeProductButtton = styled(Button)(({ theme }) => ({
  textTransform: "none",
  backgroundColor: "#57B353",
  // marginTop: "6px",
  fontWeight: "600px",
  fontSize: "16px",
  borderRadius: "4px",
  height: "100%",
  fontFamily: "Source Sans Pro",

  fontStyle: "normal",
  lineHeight: "24px",
  boxShadow: "none",

  //styleName: material-theme/body/large-semi;

  textalign: "center",

  "&:hover": {
    backgroundColor: "#31A246",
    boxShadow: "none",
  },
  "&:focus": {
    backgroundColor: "#266E20",
    boxShadow: "none",
  },
  "&:active": {
    boxShadow: "none",
    backgroundColor: "#266E20",
  },
}));

///product dialog Tile style................
export const ThemeDialogTitle = styled(DialogTitle)(({ theme }) => ({
  height: "48px",
  padding: "0px",
  background: "#FBFBFB",
  borderRadius: "none",
  boxShadow: "none",
  [theme.breakpoints.down("sm")]: {
    marginBottom: "3px",
  },
}));

export const ThemeDialogContent = styled(DialogContent)(({ theme }) => ({
  padding: "0px 0px 0px 0px",
  borderRadius: "none",
  boxShadow: "none",

  [theme.breakpoints.up("sm")]: {
    overflow: "hidden",
  },
  [theme.breakpoints.down("sm")]: {
    padding: "0px 0px 0px 0px",
    overflow: "auto",
  },
}));

export const ThemeCameraIcon = styled(CameraAltIcon)(({ theme }) => ({
  height: "18px",
  width: "20px",
  left: "2px",
  top: "2px",
  borderRadius: "0px",
  color: "#E7E7E7",
}));

//////Auto complete styleee
export const ThemeAutoComplete = styled(Autocomplete)(({ theme }) => ({
  backgroundColor: "#FFFFFF",
  borderWidth: "1px solid",
  borderRadius: "8px",
  fontFamily: "Source Sans Pro",

  fontStyle: "normal",
  fontWeight: "400",
  fontSize: "14px",
  lineHeight: "20px",
  color: "#2C2C2C",
  "&.Mui-error": {
    backgroundColor: "#FFF8F7 ",
    borderColor: "blue",
  },

  button: {
    float: "right",
    width: "28px",
  },
  ".MuiSvgIcon-root": {
    width: "100% !important",
    color: "#707070 !important",
  },
  ".MuiAutocomplete-input": {
    padding: "0px important",
  },
  //'''''

  ".MuiAutocomplete-clearIndicator": {
    display: "none !important",
  },
  ".MuiOutlinedInput-root": {
    padding: "0px !important",
    paddingLeft: "4px !important",
    // "& .MuiAutocomplete-endAdornment": {
    //   backgroundColor: "red",
    // },
  },

  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
    border: "1px solid #57B353",
  },
  "&:hover .MuiOutlinedInput-notchedOutline": {
    borderRadius: "8px",
    border: "1px solid #9D9D9D",
  },
  width: "100% !important",
  height: "100%",
}));

export const ThemeDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialog-container": {
    "& .MuiPaper-root": {
      margin: "0px",
      // marginTop: "100px",
      maxHeight: "none",
      [theme.breakpoints.down("570")]: {
        width: "100%",
        height: "100%",
        maxHeight: "100%",
        padding: "2px",
        marginTop: "0px",
      },

      // maxHeight: { xs: "100%", sm: "calc(100% - 64px)" },
      // width: {
      //   xs: "100%",
      //   sm: "auto",
      // },
      // height: {
      //   xs: "100%",
      //   sm: "auto",
      // },
    },
    [theme.breakpoints.up("570")]: {
      // paddingBottom: "445px",
      // paddingTop: "108px",
      // overflow: "auto",
      // height: "97%",
    },

    backgroundColor: "rgba(255, 255, 255, 0.35)",
    // height: "95%",
    [theme.breakpoints.down("570")]: {
      height: "100%",
    },
  },
  ".MuiBackdrop-root": {
    background: "rgba(255, 255, 255, 0.35)",
    backdropFilter: "blur(3px)",
  },

  [theme.breakpoints.up("570")]: {
    "&.MuiDialog-root": {
      top: "calc(50% - 306px)",
      left: "calc(50% - 220px)",
      right: "auto",
      bottom: "auto",
    },
  },
}));

export const ThemeGrid = styled(Grid)(({ theme }) => ({
  padding: "0px",
  width: "auto",
  paddingBottom: "55px",
  [theme.breakpoints.up("570")]: {
    "&.MuiGrid-container": {
      display: "flex ",
      justifyContent: "space-between",
      flexDirection: "row",
      flexWrap: "wrap",
    },
  },
}));

export const ThemeGridItem = styled(Grid)(({ theme }) => ({
  [theme.breakpoints.up("570")]: {
    "&.MuiGrid-root": {
      flexBasis: "0",
    },
  },
  [theme.breakpoints.down("570")]: {
    display: "flex",
    justifyContent: "center",
  },
}));

export const ThemeAvatar = styled(Avatar)(({ theme }) => ({
  height: "40px",
  width: "40px",
  color: "#FFFFFF",
  backgroundColor: "#31A246",
  marginLeft: "24px",

  fontFamily: "Source Sans Pro",

  fontSize: "16px",
  fontWeight: "600",
  lineWeight: "24px",
  letterSpacing: "0.5px",
  textAlign: "right",
}));

export const ThemeLinearProgress = styled(LinearProgress)(({ theme }) => ({
  ".MuiLinearProgress-bar": {
    backgroundColor: "#57B353",
  },
  borderRadius: "10px",
  backgroundColor: "white",
  marginTop: "-3px",
  [theme.breakpoints.up("570")]: {
    width: "335px",
  },
}));
