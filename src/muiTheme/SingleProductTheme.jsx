import {
  Select,
  MenuItem,
  Button,
  Dialog,
  AccordionSummary,
  Accordion,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { Drawer } from "@mui/material";

export const ThemeDownloadButton = styled(Button)(({ theme }) => ({
  height: "44px",
  borderRadius: "4px",
  padding: "10px 44px 10px 44px",
  backgroundColor: "#57B353",
  width: "auto",
  textTransform: "none",

  fontFamily: "Source Sans Pro",

  fontSize: "16px",
  fontWeight: "600",
  lineHeight: "24px",
  letterSpacing: "0.5px",
  textAlign: "center",
  color: " #FFFFFF",
  ".MuiButton-endIcon": {
    marginLeft: "9px",
  },
  [theme.breakpoints.down("570")]: {
    width: "118px",
    //  padding: '10px 0px 10px 0px'
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

export const ThemeTransferButton = styled(Button)(({ theme }) => ({
  height: "44px",
  borderRadius: "4px",
  padding: "10px 44px 10px 44px",
  backgroundColor: "#FFFFFF",
  width: "auto",
  fontFamily: "Source Sans Pro",

  fontSize: "16px",
  fontWeight: "600",
  lineHeight: "24px",
  letterSpacing: "0.5px",
  textAlign: "center",
  color: "#5B5B5B",
  textTransform: "none",
  [theme.breakpoints.down("570")]: {
    width: "118px",
  },

  border: "1px solid #3D3D3D",

  "&:hover": {
    backgroundColor: "#EFEFEF",
    // boxShadow: "none",
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

export const ThemeDrawer = styled(Drawer)(({ theme }) => ({
  ".MuiPaper-root": {
    height: "100%",
    width: "648px",
    borderRadius: "8px",
    padding: "0px 0px 24px 0px",
    marginTop: "64px",
    boxShadow:
      "0px 1px 2px rgba(0, 0, 0, 0.3), 0px 2px 6px 2px rgba(0, 0, 0, 0.15)",
    paddingBottom: "65px",
    [theme.breakpoints.down("770")]: {
      width: "100%",
      marginTop: "64px",
      borderRadius: "0px",
    },
  },
  ".MuiBackdrop-root": {
    backgroundColor: "transparent",
  },
}));

export const ThemeTransferDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialog-container": {
    "& .MuiPaper-root": {
      margin: "0px",
      boxShadow:
        "0px 1px 2px rgba(0, 0, 0, 0.3), 0px 2px 6px 2px rgba(0, 0, 0, 0.15)",
    },
    backdropFilter: "blur(3px)",

    background: "rgba(255, 255, 255, 0.35)",
  },
  ".MuiBackdrop-root": {
    backgroundColor: "transparent",
  },
}));

export const ThemeAccordionSummary = styled(AccordionSummary)(({ theme }) => ({
  height: "64px",
}));

export const ThemeAccordion = styled(Accordion)(({ theme }) => ({
  border: "1px solid #BEBEBE",
  borderRadius: "5px",
  boxShadow: "none",
  width: "100%",
}));
