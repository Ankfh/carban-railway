import { AppBar, Box, Divider, Menu, MenuItem, Toolbar } from "@mui/material";
import React from "react";
import "../css/style.css";
import "../css/profile.css";
import { ReactComponent as ErrorCrossIcon } from "../image/svg/AddProductErrorCrossIcon.svg";
import { ReactComponent as Certified } from "../image/svg/Certified.svg";
import { ReactComponent as Logo } from "../image/svg/Frame 9165.svg";
import { useNavigate } from "react-router-dom";
import { ThemeAppbar, ThemeAvatar } from "../muiTheme/Theme";
import Avatar from "@mui/material/Avatar";
import {
  ThemeDeleteAccountPopsDialogTitle,
  ThemeDeleteAcountDialog,
  ThemeProfileMenu,
  ThemeProfileMenuAvatar,
  ThemeProfileMenuDivider,
  ThemeProfileMenuDivider2,
  ThemeProfileMenuItem,
  ThemeProfileMenuItemDeletAcount,
} from "../muiTheme/ProfileTheme";
import {
  ThemeAddProductErrorDialog,
  ThemeAddProductErrorDialogContent,
  ThemeAddProductErrorDialogTitle,
} from "../muiTheme/AddProductErrordialog";
import DeleteAccountDialogBox from "./DeleteAccountDialogBox";
import { ReactComponent as CrossIcon } from "../image/svg/CrossIcon.svg";

const TopBar = ({ Text, joinButton, iconText, trialText }) => {
  const navigate = useNavigate();
  const [deleteDialogOpen, setdeleteDialogOpen] =
    React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    // navigate("/profileview");

    setAnchorEl(null);
  };
  const openProfile = () => {
    navigate("/profileview");

    setAnchorEl(null);
  };
  const handleSignOut = () => {
    localStorage.clear()
    navigate("/");

    setAnchorEl(null);
  };
  const deletePopClose = () => {
    setdeleteDialogOpen(false);
  };

  const deletePopsOpen = () => {
    setdeleteDialogOpen(true);
    setAnchorEl(null);

  };
  const items = JSON.parse(localStorage.getItem("user"));

    // const data= Array.from(items)[0];
  return (
    <>
    <Box>
      <ThemeAppbar>
        <Toolbar>
          <Box
            display={"flex"}
            justifyContent={"space-between"}
            className="Box"
          >
            <div
              onClick={() => navigate("/")}
              className="flex justify-center cursor-pointer items-center justify-items-center gap-[2px]"
            >
              <Certified />
              <Logo />
            </div>
            <div className="flex items-center  ">
              <span
                onClick={() =>
                  joinButton ? navigate("/signup") : navigate("/login")
                }
                className="hidden pr-2 navbrtext sm:block"
              >
                {Text ? Text : "Have an account?"}
              </span>
              <span
                onClick={() =>
                  joinButton ? navigate("/signup") : navigate("/login")
                }
                className=" textButton text-[#31A246] hover:text-[#266E20] hover:underline underline-offset-[2px] cursor-pointer"
              >
                {joinButton ? joinButton : "Sign in"}
              </span>
              {/* {trialText && (
                <span className=" hidden sm:block textButton text-[#31A246] ">
                  {trialText}
                </span>
              )} */}
              {iconText && (
                <div className="relative">
                  <span className="cursor-pointer">
                    <ThemeAvatar
                      onClick={handleClick}
                      alt={items}
                      src="/broken-image.jpg"
                    >
                    </ThemeAvatar>
                  </span>
                  <ThemeProfileMenu
                    id="demo-positioned-menu"
                    aria-labelledby="demo-positioned-button"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    PaperProps={{
                      sx: {
                        overflow: "visible",
                        mt: 1.5,
                        "& .MuiAvatar-root": {
                          width: 32,
                          height: 32,
                          ml: -0.5,
                          mr: 7,
                        },
                      },
                    }}
                    elevation={0}
                    anchorOrigin={{
                      vertical: "bottom",
                      horizontal: "right",
                    }}
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                  >
                    <div className="profile_menu_div flex gap-[10px]">
                      <div>
                        <ThemeProfileMenuAvatar
                          // onClick={handleClick}
                          alt={items}
                          src="/broken-image.jpg"
                        >
                          {
                          // data.toUpperCase()
                          
                          }
                        </ThemeProfileMenuAvatar>
                      </div>
                      <div>
                        <p className="profile_menu_userName">{items}</p>
                        <p className="user_role">Admin</p>
                      </div>
                    </div>
                    <ThemeProfileMenuDivider />

                    <ThemeProfileMenuItem
                      className="cursor-pointer"
                      onClick={openProfile}
                    >
                      Profile
                    </ThemeProfileMenuItem>
                    <ThemeProfileMenuDivider />

                    <ThemeProfileMenuItem onClick={handleSignOut}>
                      Sign out
                    </ThemeProfileMenuItem>
                    <ThemeProfileMenuDivider />

                    <ThemeProfileMenuItemDeletAcount onClick={deletePopsOpen}>
                      Delete Account
                    </ThemeProfileMenuItemDeletAcount>
                  </ThemeProfileMenu>
                </div>
              )}
            </div>

            {/* ******************************** */}
          </Box>
        </Toolbar>
      </ThemeAppbar>
      
    </Box>
    <div>
        <ThemeDeleteAcountDialog
          open={deleteDialogOpen}
          scroll="paper"
          keepMounted
          // onClose={handleClose}
          aria-describedby="alert-dialog-slide-description"
        >
          <ThemeDeleteAccountPopsDialogTitle>
          <div className="flex justify-between rounded-[8px 8px 0px 0px]  items-center py-[12px] pl-[20px] pr-[28px] ">
              <div>
                <p className="addProductErrorDialogTile !text-[#707070]">
                Delete Account
                </p>
              </div>
              <div>
                <span
                  onClick={() => deletePopClose()}
                  className="w-[14px] cursor-pointer hidden sm:block"
                >
                  <CrossIcon className=" cursor-pointer hover:bg-[#F5F5F5]" />
                </span>
              </div>
            </div>
          </ThemeDeleteAccountPopsDialogTitle>
          <ThemeAddProductErrorDialogContent>
            <DeleteAccountDialogBox />
          </ThemeAddProductErrorDialogContent>
        </ThemeDeleteAcountDialog>
      </div>
    </>
  );
};

export default TopBar;
