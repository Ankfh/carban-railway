import { Routes, Route, BrowserRouter } from "react-router-dom";
import AddColleague from "./components/AddColleague";
import Example from "./components/AddColleagueTextField";
import AddProductDialogBox from "./components/AddProductErrorDialogBox";
import CompanyInfo from "./components/CompanyInfo";
import ContactInfo from "./components/ContactInfo";
import Raf from "./components/Raf";
import SimpleSelect from "./muiTheme/Slect";
import Certificate from "./pages/Certificate";
import EmailSendResetPass from "./pages/EmailSendResetPass";
import Home from "./pages/Home";
import LogIn from "./pages/LogIn";
import OneStepSignUp from "./pages/OneStepSignUp";
import Product from "./pages/Product";
import ProfileView from "./pages/ProfileView";
import ResetPassword from "./pages/ResetPassword";
import SignUp from "./pages/SignUp";
import SingleProductDetail from "./pages/SingleProductDetail";
import TransfersList from "./pages/TransfersList";
import UserSignUp from "./pages/UserSignUp";
import React from "react";
import PhoneNumberTextBox from "./components/PhoneNumberTextBox";
import ProRoutes from "./ProtectedRoutes/ProRoute";
import PublicRoute from "./ProtectedRoutes/PublicRoutes";
import TransferDetial from "./pages/TransferDetail";
import InvitationVerification from "./pages/InvitationVerification";
import PasswordVerification from "./pages/PasswordVerification";
import ResetPassword2nd from "./pages/ResetPassword2ndPage";
function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Routes>
          <Route element={<ProRoutes />}>
            <Route path="/products" element={<Product />} />
            <Route path="/raf" element={<Raf />} />
            <Route path="/transferlist" element={<TransfersList />} />
            <Route path="/companyinfo" element={<CompanyInfo />} />
            <Route path="/transferdetial/:data" element={<TransferDetial />} />
            <Route
              path="/singleproductdetail/:id"
              element={<SingleProductDetail />}
            />
            <Route path="/profileview" element={<ProfileView />} />
            <Route path="/addcolleague" element={<AddColleague />} />
            <Route path="/certificate" element={<Certificate />} />
            <Route
              path="/addproductbialogbox"
              element={<AddProductDialogBox />}
            />
            <Route path="/phone" element={<PhoneNumberTextBox />} />
            <Route path="/test" element={<Example />} />
          </Route>
          <Route element={<PublicRoute />}>
            <Route path="/login" element={<Home />} />
            {/* <Route path="/onestepsignup" element={<OneStepSignUp />} /> */}
            <Route path="/emailsend" element={<EmailSendResetPass />} />
            <Route path="/resetpassword" element={<ResetPassword />} />
            <Route path="/resetpassword2nd/:id" element={<ResetPassword2nd />} />
            <Route path="/login" element={<LogIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/usersignup/:id/:companyId" element={<UserSignUp />} />
            <Route path="/varification/:token" element={<InvitationVerification />} />
            <Route path="/passwordvarification/:token" element={<PasswordVerification />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
