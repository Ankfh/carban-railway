import {
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";
import { styled } from "@mui/material/styles";

export const ThemeAddProductErrorDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialog-container": {
    "& .MuiPaper-root": {
      margin: "0px",
      maxHeight: "none",
      width: "400px",
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

export const ThemeAddProductErrorDialogTitle = styled(DialogTitle)(
  ({ theme }) => ({
    height: "48px",
    padding: "0px",
    background: "#DE3730",
    borderRadius: "none",
    boxShadow: "none",
    // [theme.breakpoints.down("sm")]: {
    //   marginBottom: "3px",
    // },
  })
);

export const ThemeAddProductErrorDialogProcessButton = styled(Button)(
  ({ theme }) => ({
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
      padding: "10px 80px",
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
  })
);

export const ThemeAddProductErrorDialogContent = styled(DialogContent)(
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

// ////////////////////////////////////////////////////////////////////////////
export const ThemeDownloadPhotoDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialog-container": {
    "& .MuiPaper-root": {
      margin: "0px",
      maxHeight: "none",
      width: "400px",
      height: "auto",
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

export const ThemeDownloadPhotoDialogTitle = styled(DialogTitle)(
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

export const ThemeDownloadPhotoDialogContent = styled(DialogContent)(
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

export const ThemeConfirmationError = styled(TextField)(({ theme }) => ({
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

export const ThemeAddProductErrorDialogDownloadButton = styled(Button)(
  ({ theme }) => ({
    textTransform: "none",
    backgroundColor: "#57B353",
    // marginTop: "6px",
    //styleName: material-theme/body/large-bold;
    fontFamily: "Source Sans Pro",
    fontFize: "16px",
    fontWeight: "700",
    lineHeight: "24px",
    letterSpacing: "0.5px",
    textAlign: "center",

    width: "251px",
    color: "#FFFFFF",
    // width: 'auto',
    "&.MuiButtonBase-root": {
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
  })
);

// ............................
export const ThemeUploadConfirmationError = styled(TextField)(({ theme }) => ({
  borderWidth: "1px solid",
  borderRadius: "4px",
  backgroundColor: "#FFF8F7",
  marginTop: "8px",

  "& .MuiSvgIcon-root": {
    color: "#a3b4ca",
    width: "14px",
    // height: "10px",
  },
  "& .Mui-error": {
    // backgroundColor: "#FFF8F7",
    // borderColor: "#DE3730",
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
    height: "auto",
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
    height: "auto",
    // width: "256px",
    // "& .MuiInputBase-input-MuiOutlinedInput-input": {
    //   color: "red",
    // },
  },
}));


//.................
export const ThemeUploadConfirmationDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialog-container": {
    "& .MuiPaper-root": {
      margin: "0px",
      maxHeight: "none",
      width: "400px",
      height: "auto",
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