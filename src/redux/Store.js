import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import RestPasswordDefultValueReducer from "./Slices/RestPasswordDefultValueSlice";
import UploadPhotoReducer from "./Slices/UploadPhotoSlice";
import GoodsBillsReducer from "./Slices/GoodsBillsSlice";
import AddColleagueReducer from "./Slices/AddColleagueSlice";
import CompanySignupReducer from "./Slices/CompanySignupSlice";
import AddProductReducer from "./Slices/AddProductSlice";
import UploadPhotoProductReducer from "./Slices/UploadPhotoProductSlice";
import getAllProductReducer from "./Slices/GetAllProductSlice";
import getSingleProductReducer from "./Slices/GetSingleProductSlice";
import addTransferReducer from "./Slices/AddTransferSlice";
import addTransferPhotoReducer from "./Slices/AddTransferPhoto";
import { apiSlice } from "./Slices/ApiSlice";
import getAllTransferReducer from "./Slices/GetAllTransferSlice";
import getCompanyReducer from "./Slices/GetCompanySlice";
import getUserReducer from "./Slices/getUserSlice";
import updatecompanyReducer from "./Slices/UpdateCompanySlice";
import updateUserReducer from "./Slices/UpdateUserSlice";
import AddColleagueBackendReducer from "./Slices/AddColleagueBackendSlice";
import verifyInvitationReducer from "./Slices/VarifyInvitationSlice";
import userLinkSignupReducer from "./Slices/UserLinkSignupSlice";
import gerSingleTransferReducer from "./Slices/GetSingleTransferSlice";
import getAllColleagueReducer from "./Slices/GetAllColleagueSlice";
import updateTransferPhotoReducer from "./Slices/UpdateTransferPhotoSlice";
import errorsDataReducer from "./Slices/ErrorsDataSlice";
import getSingleAdminPhotoReducer from "./Slices/getSingleAdminPhoto";
import AddDownloadPopDataReducer from "./Slices/AddDownloadPopDataSlice";
import updateProductReducer from "./Slices/UpdateProductSlice";
import passwordResetLinkReducer from "./Slices/PasswordResetLinkSendSlice";
import  passwordChangeReducer  from "./Slices/PasswordChangeSlice";

export const store = configureStore({
  reducer: {
    default: RestPasswordDefultValueReducer,
    photo: UploadPhotoReducer,
    bills: GoodsBillsReducer,
    colleague: AddColleagueReducer,
    companySignup: CompanySignupReducer,
    addProduct: AddProductReducer,
    photoPro: UploadPhotoProductReducer,
    allProduct: getAllProductReducer,
    singleProduct: getSingleProductReducer,
    transfer: addTransferReducer,
    transferPhoto: addTransferPhotoReducer,
    allTransfer: getAllTransferReducer,
    getCompany: getCompanyReducer,
    getUser: getUserReducer,
    updateCompany: updatecompanyReducer,
    updateUser: updateUserReducer,
    colleagueAdd: AddColleagueBackendReducer,
    invitation: verifyInvitationReducer,
    userLinkSignup: userLinkSignupReducer,
    singleTransfer: gerSingleTransferReducer,
    allColleaguue: getAllColleagueReducer,
    updateTransferPhoto: updateTransferPhotoReducer,
    error: errorsDataReducer,
    adminPhoto: getSingleAdminPhotoReducer,
    addAdminPhoto: AddDownloadPopDataReducer,
    updateProduct: updateProductReducer,
    passwordResetLink: passwordResetLinkReducer,
    passwordChange:passwordChangeReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (gDM) => gDM().concat(apiSlice.middleware),
});

// setupListeners(store.dispatch);
