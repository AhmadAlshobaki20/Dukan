import "./App.css";
import { HeaderMegaMenu } from "./Components/Nav/Nav";
import { FooterSocial } from "./Components/Footer/Footer";
// import { GetInTouchSimple } from "./Components/Contactus/Contactus";
// import { ArticlesCardsGrid } from "./Components/Home/Aboutus/Aboutus";
// import SignIn from "./Components/SigninVendor/SigninVendor";
import LoginVendor from "./Components/SigninVendor/SigninVendor";
import LoginCutoumers from "./Components/SigninCustomers/SigninCustomers";
import SignUpVendor from "./Components/Signup/Vendor/Vendor";
import SignUpCustomers from "./Components/Signup/Customers/Customers";

import Cart from "./Components/Cart/Cart";
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className="App">
      {/* <HeaderMegaMenu />
      <GetInTouchSimple />
      <ArticlesCardsGrid />
      <FooterSocial /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/Vendor/Login" element={<LoginVendor />} />
          <Route path="/Vendor/SiginUp" element={<SignUpVendor />} />
          <Route path="/Cutoumers/Login" element={<LoginCutoumers />} />
          <Route path="/Cutoumers/SiginUp" element={<SignUpCustomers />} />
          <Route path="/Cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </div>

    //aaaaaaaaaaaaa
  );
}

export default App;
