import { styled } from "@mui/material/styles";
import {
  Menu,
  Divider,
  MenuItem,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  Avatar,
  Snackbar,
} from "@mui/material";

export const ThemeProfileMenu = styled(Menu)(({ theme }) => ({
  //   height: "186px",
  // left: "1091px",

  ".MuiPaper-root": {
    marginTop: "8px",
    // top: '61px !important',
    // left: '995px !important',
    width: "auto",
    background: "#FFFFFF",
    borderRadius: "4px",

    boxShadow: "0px 0px 3px rgba(0, 0, 0, 0.3)",
  },
  ".MuiList-root": {
    paddingTop: "0px",
    paddingBottom: "5px",
  },

  ".MuiButtonBase-root": {
    //styleName: material-theme/body/medium;
    fontFamily: "Source Sans Pro",
    fontSize: "16px",
    fontWeight: "400",
    lineHeight: "20px",
    letterSpacing: "0.25px",
  },
}));

export const ThemeProfileMenuDivider = styled(Divider)(({ theme }) => ({
  width: "157px",
  borderBottom: "1px solid #F5F5F5",
  marginLeft: "4px",
  "&.MuiDivider-root": {
    marginTop: "5px !important",
    marginBottom: "5px !important",
  },
}));

export const ThemeProfileMenuDivider2 = styled(Divider)(({ theme }) => ({
  width: "157px",
  border: "1px solid #F5F5F5",
  marginLeft: "4px",
  "&.MuiDivider-root": {
    margin: "2px 0px 2px 2px",
  },
}));

export const ThemeProfileMenuItem = styled(MenuItem)(({ theme }) => ({
  height: "42px",

  //styleName: material-theme/body/medium;
  fontFamily: "Source Sans Pro",
  fontSize: "14px",
  fontWeight: "400",
  lineHeight: "20px",
  letterSpacing: "0.25px",
  textAlign: "left",
  color: "#2C2C2C",

  "&.MuiButtonBase-root": {
    padding: "22px 0px 20px 22px",
  },
}));

export const ThemeProfileMenuItemDeletAcount = styled(MenuItem)(
  ({ theme }) => ({
    height: "42px",
    padding: "4px 20px 4px 20px",
    //styleName: material-theme/body/medium;
    fontFamily: "Source Sans Pro",

    fontSize: "14px",
    fontWeight: "400",
    lineHeight: "20px",
    letterSpacing: "0.25px",
    textAlign: "left",
    color: "#9D9D9D",
    "&.MuiButtonBase-root": {
      "&:hover": {
        color: "#5B5B5B",
      },
    },
  })
);

export const ThemeAddColleague = styled(Button)(({ theme }) => ({
  textTransform: "none",
  backgroundColor: "#57B353",
  // marginTop: "6px",
  fontWeight: "600px",
  fontSize: "16px",
  borderRadius: "4px",
  fontFamily: "Source Sans Pro",

  fontStyle: "normal",
  lineHeight: "24px",
  boxShadow: "none",
  width: "143px",
  // width: 'auto',
  "&.MuiButtonBase-root": {
    padding: "10px 0px",
  },

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

export const ThemeAddColleagueDialogAddButton = styled(Button)(({ theme }) => ({
  textTransform: "none",
  backgroundColor: "#57B353",
  // marginTop: "6px",
  fontWeight: "600px",
  fontSize: "16px",
  borderRadius: "4px",
  fontFamily: "Source Sans Pro",

  fontStyle: "normal",
  lineHeight: "24px",
  boxShadow: "none",
  width: "143px",
  color: "#FFFFFF",
  // width: 'auto',
  "&.MuiButtonBase-root": {
    padding: "10px 0px",
    height: "42px",
  },

  textalign: "center",

  [theme.breakpoints.down("570")]: {
    width: "100%",
  },

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

export const ThemeAddColleagueTextFieldMenu = styled(Menu)(({ theme }) => ({
  //   height: "186px",
  // left: "1091px",
  // height: '100%',
  // width: '120px',
  ".MuiPaper-root": {
    background: "#FFFFFF",
    /* M3/Elevation Light/2 */

    boxShadow:
      "0px 1px 2px rgba(0, 0, 0, 0.3), 0px 2px 6px 2px rgba(0, 0, 0, 0.15)",
    borderRadius: "4px",
  },
  ".MuiList-root": {
    paddingTop: "0px",
  },
}));

export const ThemeAddColleagueTextFieldMenuItem = styled(MenuItem)(
  ({ theme }) => ({
    fontFamily: "Source Sans Pro",

    fontSize: "14px",
    fontWeight: "500",
    lineHeight: "20px",
    letterSpacing: "0.10000000149011612px",
    textAlign: "left",
    color: "#2C2C2C",
  })
);

export const ThemeAddColleagueDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialog-container": {
    "& .MuiPaper-root": {
      width: "100%",
      margin: "30px",
      // marginTop: "100px",
      maxHeight: "none",
      [theme.breakpoints.down("570")]: {
        width: "100%",
        // height: "100%",
        // maxHeight: "100%",
        // padding: "2px",
        // marginTop: "0px",
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
      paddingBottom: "468px",
      // paddingTop: "108px",
      overflow: "auto",
      height: "97%",
    },
    backdropFilter: "blur(3px)",

    backgroundColor: "rgba(255, 255, 255, 0.35)",
    // height: "95%",
    [theme.breakpoints.down("570")]: {
      height: "100%",
    },
  },
  ".MuiBackdrop-root": {
    background: "rgba(255, 255, 255, 0.35)",
  },

  [theme.breakpoints.up("570")]: {
    "&.MuiDialog-root": {
      height: "1066px ",
    },
  },
}));

export const ThemeAddColleagueDialogTitle = styled(DialogTitle)(
  ({ theme }) => ({
    height: "48px",
    padding: "0px",
    background: "#FBFBFB",
    borderRadius: "none",
    boxShadow: "none",
    [theme.breakpoints.down("sm")]: {
      marginBottom: "3px",
    },
  })
);

export const ThemeAddColleagueDialogContent = styled(DialogContent)(
  ({ theme }) => ({
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
  })
);

export const ThemeAddColleagueTextField = styled(TextField)(({ theme }) => ({
  borderWidth: "1px solid",
  borderRadius: "4px",
  backgroundColor: "#FFFFFF",

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

export const ThemeProfileMenuAvatar = styled(Avatar)(({ theme }) => ({
  height: "40px",
  width: "40px",
  color: "#FFFFFF",
  background: "#31A246",
  fontFamily: "Source Sans Pro",

  fontSize: "16px",
  fontWeight: "600",
  lineWeight: "24px",
  letterSpacing: "0.5px",

  "&.MuiAvatar-root": {
    marginRight: "0px",
    height: "40px",
    width: "40px",
  },
}));

export const ThemeProfileViewSnackbar = styled(Snackbar)(({ theme }) => ({
  "& .MuiPaper-root": {
    width: "226px",
    height: "64px",
    backgroundColor: "#FFFFFF",
    color: "#2E8028",
    minWidth: "0px",
    background: "#FFFFFF",
    // padding: "20px",
    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
    borderRadius: "8px",
  },
  [theme.breakpoints.up("770")]: {
    "&.MuiSnackbar-root": {
      bottom: "26px",
      left: "40px",
      right: "auto",
    },
  },
  [theme.breakpoints.down("770")]: {
    "& .MuiPaper-root": {
      width: "226px",
      height: "64px",
      marginBottom: "76px",
    },
    "&.MuiSnackbar-root": {
      bottom: "26px",
      left: "47px",
      right: "47px",
    },
  },

  "& .MuiSnackbarContent-message": {
    fontFamily: "Source Sans Pro",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: "16px",
    lineHeight: "24px",
  },
}));

export const ThemeContactInfoTextField = styled(TextField)(({ theme }) => ({
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
    fontSize: "16px",
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
      fontSize: "16px",
      lineHeight: "20px",
      letterSpacing: "0.25px",
      color: "#BEBEBE",
      opacity: 1,
    },

    // "& .MuiInput-inputTypeSearch": {

    fontFamily: "Source Sans Pro",

    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "16px",

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

export const ThemeCompanyInfoTextField = styled(TextField)(({ theme }) => ({
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
    fontSize: "16px",
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
      fontSize: "16px",
      lineHeight: "20px",
      letterSpacing: "0.25px",
      color: "#BEBEBE",
      opacity: 1,
    },

    // "& .MuiInput-inputTypeSearch": {

    fontFamily: "Source Sans Pro",

    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "16px",

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

export const ThemeDeleteAcountDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialog-container": {
    "& .MuiPaper-root": {
      margin: "0px",
      maxHeight: "none",
      width: "386px",
      height: "224px",
    },
    [theme.breakpoints.down("570")]: {
      margin: "0px 16px",
    },

    backdropFilter: "blur(3px)",

    backgroundColor: "rgba(255, 255, 255, 0.35)",
    // height: "95%",
  },
  ".MuiBackdrop-root": {
    background: "rgba(255, 255, 255, 0.35)",
  },
}));

export const ThemeDeleteAccounPopsCancelButton = styled(Button)(({ theme }) => ({
  textTransform: "none",
  backgroundColor: "#FFFFFF",
  // marginTop: "6px",
  //styleName: material-theme/body/large-semi;
  fontSize: "16px",
  fontWeight: "600",
  lineHeight: "24px",
  letterSpacing: "0.5px",
  textAlign: "left",
  border: " 1px solid #707070",
  borderRadius: "5px",
  boxShadow: "none",
  width: "143px",
  color: "#707070",
  // width: 'auto',
  "&.MuiButtonBase-root": {
    height: "44px",
  width: "116px",

  },

  textalign: "center",

  [theme.breakpoints.down("570")]: {
    width: "100%",
  },

  "&:hover": {
    backgroundColor: "#EFEFEF",
    boxShadow: "none",
    color: "#3D3D3D",
    border: "1px solid #5B5B5B",
  },
  "&:focus": {
    backgroundColor: "#FFFFFF",
    // boxShadow: "none",
    color: "#3D3D3D",

    border: "1px solid #3D3D3D",
  },
  "&:active": {
    // boxShadow: "none",
    // backgroundColor: "#FFFFFF",
  },
}));


export const ThemeDeleteAccountPopsDeleteButton = styled(Button)(({ theme }) => ({
  textTransform: "none",
  backgroundColor: "#DE3730",
  // marginTop: "6px",
  //styleName: material-theme/body/large-semi;
  fontSize: "16px",
  fontWeight: "600",
  lineHeight: "24px",
  letterSpacing: "0.5px",
  textAlign: "left",
  borderRadius: "5px",
  boxShadow: "none",
  color: "#FFFFFF;",
  // width: 'auto',
  "&.MuiButtonBase-root": {
    height: " 44px",
    padding: '10px 20px',
  width: "116px",

  },

  textalign: "center",

  [theme.breakpoints.down("570")]: {
    width: "100%",
  },

  "&:hover": {
    backgroundColor: "#DE3730",
    boxShadow: "none",
    color: "#FFFFFF",
  },
  "&:focus": {
    backgroundColor: "#DE3730",
    // boxShadow: "none",
    color: "#FFFFFF",

  },
  "&:active": {
    // boxShadow: "none",
    // backgroundColor: "#FFFFFF",
  },
}));


export const ThemeDeleteAccountPopsDialogTitle = styled(DialogTitle)(
  ({ theme }) => ({
    height: "48px",
    padding: "0px",
    background: "#FBFBFB",
    borderRadius: "none",
    boxShadow: "none",
    // [theme.breakpoints.down("sm")]: {
    //   marginBottom: "3px",
    // },
  })
);