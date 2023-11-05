import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from '@mui/material/styles';
import { breakpointsTheme } from "./breakpoints/MuiBreakPoints";
import  {store}  from "./redux/Store";
// import  {mainTheme } from "./muiTheme/Theme";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <ThemeProvider theme={breakpointsTheme}> */}
    <Provider store={store}>
    <App />
    </Provider>
    {/* </ThemeProvider> */}
  </React.StrictMode>
);
