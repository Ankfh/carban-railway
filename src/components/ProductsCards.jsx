import React from "react";
import Grid from "@mui/material/Grid";
import {
  ThemeTextField,
  ThemeCameraIcon,
  ThemeButton,
  ThemeGrid,
  ThemeGridItem,
} from "../muiTheme/Theme";
import data from "../data/data";
import img from "../image/cardImg.png";
import "../css/productCardStyle.css";
import { useNavigate } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import { breakpointsTheme } from "../breakpoints/MuiBreakPoints";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BaseUrl } from "../BaseURL/BaseUrl";
import { useState } from "react";
import { addDataError } from "../redux/Slices/ErrorsDataSlice";
import { getAdminPhoto } from "../redux/Slices/getSingleAdminPhoto";
import { addDataphoto } from "../redux/Slices/AddDownloadPopDataSlice";
var dataAdded = false;

var products = [];

const ProductsCards = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const productData = useSelector((state) => state.allProduct);
  const [progressPdf, setProgressPdf] = useState([]);

  const loadProducts = () => {
    const targetM = document.getElementById("mainProductsDiv");
    const targetP = document.getElementsByClassName("productCarding")[0];
    if (targetM && targetP) {
      const mainDivW = document.getElementById("mainProductsDiv").offsetWidth;
      const proDivW =
        document.getElementsByClassName("productCarding")[0].offsetWidth;
      const inRow = Math.trunc(mainDivW / proDivW);
      const lastRow = data.length / inRow;

      const remaining = inRow - lastRow;
      console.log(lastRow, inRow, data.length, remaining, "remaining .....");
      for (let i = 0; i < remaining; i++) {
        products.push({ name: "", photos: "", serialNum: "", status: "empty" });
      }
      dataAdded = true;
    }
  };
  products = [];

  if (productData && productData.data.allProduct.length > 0) {
    for (let i = 0; i < productData.data.allProduct.length; i++) {
      const product = productData.data.allProduct[i];

      const pPhoto = JSON.parse(product.productPhoto);
      const pBills = JSON.parse(product.goodsBill);

      const pObject = {
        id: product._id,
        name: product.productName,
        serialNum: product.serialNumber,
        photos: pPhoto,
        bills: pBills,
        status: product.status,
        UrlStatus: product.urlStatus,
        Url: product.productUrl,
      };
      products.push(pObject);
    }
    loadProducts();
  }
  // console.log(products, "checkk");

  const openCardError = ({ data1, data2, data3,data4 }) => {
    dispatch(addDataError({ data1, data2, data3,data4 }));
    console.log(data3, "typeeeeeeeloo");
    if (data1 === "download") {
      dispatch(getAdminPhoto(data3))
        .unwrap()
        .then((res) => {
          if (res.success) {
            console.log(res, "resss");
            dispatch(
              addDataphoto({
                photos: res.products.photos,
                id: res.products.productId,
                name: res.products.productName,
              })
            );
            props.setdownloadPhoto({ photo: data2 });
            props.setDownloadPhotoOpen(true);
            console.log(res, "ress d");
          }
        });
    } else if (data1 === "error") {
      props.setconfirmationErrorPhoto({ data2: data2, url: data3 });
      console.log("kdfkdjfkdjfkdjfkjd");
      props.setConfirmationErrorOpen(true);
    } else if (data1 === "process") {
      props.seterrorDialogOpen(true);
    } else if (data1 === "review") {
    }
  };

  const pdfProgress = (value) => {
    if (value) {
      setProgressPdf([value]);
    }
  };

  // useEffect(() => {
  //   if (dataAdded != true) {
  //     loadProducts();
  //   }
  // }, []);

  return (
    <div>
      <ThemeProvider theme={breakpointsTheme}>
        <ThemeGrid
          id="mainProductsDiv"
          container
          //  display={'grid'}
          direction="row"
          justifyContent="start"
          alignItems="flex-start"
          rowSpacing={"40px"}
          columnSpacing={{
            xs: 6,
            sm: 6,
            md: "13px",
            lg: "30px",
            xl: "29px",
            xxl: "29px",
          }}
          // columnSpacing={'30px'}
        >
          {productData.loading === true ? (
            <div></div>
          ) : (
            products?.map((item) => (
              <ThemeGridItem
                // display={"block"}
                // justifyContent={"start"}

                item
                xs={12}
                sm={6}
                md={4}
                lg={3}
                xl={3}
                xxl={2.4}
                className="productCarding"
              >
                <div
                  className={`${
                    item.status == "empty" && "emptyProduct"
                  } product_cardDiv cursor-pointer hover:scale-105`}
                >
                  <div
                    className="flex relative  -z-10 items-center pb-[16px] "
                    onClick={() =>
                      item.status == "done"
                        ? navigate(`/singleproductdetail/${item.id}`)
                        : item.status == "error"
                        ? openCardError("error")
                        : item.status == "download" && openCardError("download")
                    }
                  >
                    <div className="w-full  flex justify-center">
                      <p
                        className={`${
                          item.status == "empty" && "emptyProSub"
                        } product_cardSubTitle`}
                      >
                        {item.serialNum}
                      </p>
                    </div>
                    {item.status === "error" ? (
                      <div className="right-[16px] top-[4px] absolute dotDiv">
                        <p className="cardDotIcon  bg-[#DE3730]"></p>
                      </div>
                    ) : item.status === "done" ? (
                      <div className="right-[16px] top-[4px] absolute dotDiv">
                        <p className="cardDotIcon  bg-[#40A63A] "></p>
                      </div>
                    ) : (
                      <div className="right-[16px] top-[4px] absolute dotDiv">
                        <p className="cardDotIcon"></p>
                      </div>
                    )}
                  </div>
                  {item.status === "done" ? (
                    <div
                      className="p-[7px] w-full flex justify-center "
                      onClick={() =>
                        navigate(`/singleproductdetail/${item.id}`)
                      }
                    >
                      <img
                        className="cardsImage"
                        src={`${BaseUrl}/public/productImages/${item.photos[0].path}`}
                        alt=""
                      />
                    </div>
                  ) : item.status == "error" ? (
                    <div
                      className="p-[7px] w-full flex justify-center "
                      onClick={() =>
                        openCardError({
                          data1: "error",
                          data2: item.photos[0].path,
                          data3: item.Url,
                          data4: item.id,
                        })
                      }
                    >
                      <img
                        className="cardsImage"
                        src={`${BaseUrl}/public/productImages/${item.photos[0].path}`}
                        alt=""
                      />
                    </div>
                  ) : item.status == "download" ? (
                    <div
                      className="p-[7px] w-full flex justify-center "
                      onClick={() =>
                        openCardError({
                          data1: "download",
                          data2: item.photos[0].path,
                          data3: item.id,
                        })
                      }
                    >
                      <img
                        className="cardsImage"
                        src={`${BaseUrl}/public/productImages/${item.photos[0].path}`}
                        alt=""
                      />
                    </div>
                  ) : (
                    item.status != "empty" && (
                      <div className="p-[7px] w-full flex justify-center ">
                        <img
                          className="cardsImage"
                          src={`${BaseUrl}/public/productImages/${item.photos[0].path}`}
                          alt=""
                        />
                      </div>
                    )
                  )}
                  <div
                    className="w-full flex flex-col justify-center items-center "
                    onClick={() =>
                      item.status == "done"
                        ? navigate(`/singleproductdetail/${item.id}`)
                        : item.status == "error"
                        ? openCardError("error")
                        : item.status == "download" && openCardError("download")
                    }
                  >
                    <p className="product_cardTitle">{item.name}</p>
                  </div>
                  <div
                    className="flex justify-center pt-[23px] pb-[16px] "
                    onClick={() =>
                      item.status == "done"
                        ? navigate(`/singleproductdetail/${item.id}`)
                        : item.status == "error"
                        ? openCardError("error")
                        : item.status == "download" && openCardError("download")
                    }
                  >
                    {item.status === "download" ? (
                      <div className="cardDownloadButtonDiv w-auto flex justify-center">
                        <button
                          className="cardDownloadButton"
                          onClick={(e) =>
                            openCardError({
                              data1: "download",
                              data2: item.photos[0].path,
                              data3: item.id,
                            })
                          }
                        >
                          Download photos
                        </button>
                      </div>
                    ) : item.status === "error" ? (
                      <div className="cardErrorButtonDiv w-auto flex justify-center">
                        <button
                          className="cardErrorButton"
                          onClick={(e) =>
                            openCardError({
                              data1: "error",
                              data2: item.photos[0].path,
                              data3: item.Url,
                              data4: item.id
                            })
                          }
                        >
                          Error
                        </button>
                      </div>
                    ) : item.status === "process" ? (
                      <div className="cardProcessButtonDiv w-auto flex justify-center">
                        <button
                          className="cardProcessButton"
                          onClick={(e) => openCardError("process")}
                        >
                          Processing...
                        </button>
                      </div>
                    ) : item.status === "review" ? (
                      <div className="cardUnderReviewButtonDiv w-auto flex justify-center ">
                        <button
                          className="cardUnderReviewButton"
                          // onClick={(e) => openCardError("review")}
                        >
                          Under Review
                        </button>
                      </div>
                    ) : (
                      <div className=" h-[45px] w-auto flex justify-center"></div>
                    )}
                  </div>
                </div>
              </ThemeGridItem>
            ))
          )}
        </ThemeGrid>
      </ThemeProvider>
    </div>
  );
};

export default ProductsCards;
