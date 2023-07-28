import React, { useEffect, useState } from "react";
import "./Signin.css";
import axios from "axios";

import { useNavigate } from "react-router-dom";
function LoginVendor() {
  // const navigate = useNavigate();
  // const [formData, setFormData] = useState({
  //   email: "",
  //   password: "",
  // });
  // const [email, setEmail] = useState();

  // const handleDataChange = (event) => {
  //   const { name, value } = event.target;
  //   setFormData((prevData) => ({
  //     ...prevData,
  //     [name]: value,
  //   }));
  // };

  // useEffect(() => {
  //   getVendors();
  // }, []);

  // const getVendors = async () => {
  //   const response = await axios.get(`/api/v1/vendors`);
  //   console.log();
  //   const result = response.data.data.vendors.find((vendor) => {
  //     return formData.email === vendor.email;
  //   });
  //   console.log("result", result);
  //   if (result) {
  //     navigate("/store");
  //   }
  // };

  // const handleSignIn = async (event) => {
  //   event.preventDefault();
  //   try {
  //     getVendors();
  //     // You can store the token in localStorage, state, or a global state management library like Redux for future use.
  //   } catch (err) {
  //     // Handle login error here, display an error message, etc.
  //   }
  // };

  return (
    // <div>
    //   <h1>تسجيل دخول</h1>
    //   <div className="customerBody">
    //     <form>
    //       <label htmlFor="email">الايميل</label>
    //       <input
    //         type="email"
    //         name="email"
    //         value={formData.email}
    //         onChange={handleDataChange}
    //       />
    //       <label htmlFor="password">كلمة السر</label>
    //       <input
    //         type="password"
    //         name="password"
    //         value={formData.password}
    //         onChange={handleDataChange}
    //       />
    //       <button onClick={handleSignIn}>دخول</button>
    //     </form>
    //     <div className="img"></div>
    //   </div>
    // </div>
    <section
      className="vh-100 bg-image"
      style={{
        backgroundImage:
          "url('https://media.discordapp.net/attachments/1125716795635027988/1133657069308887190/0-ostrich-eggs-credit-jordan-jewel-web.webp?width=993&height=662')",
      }}
    >
      <div className="mask d-flex align-items-center h-100 gradient-custom-3">
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-9 col-lg-7 col-xl-6">
              <div className="card" style={{ borderRadius: "15px" }}>
                <div className="card-body p-5">
                  <h2 className="text-uppercase text-center mb-5">
                    الدخول إلى المتجر
                  </h2>
                  <form>
                    <div className="form-outline mb-4">
                      <input
                        type="text"
                        id="form3Example1cg"
                        className="form-control-lg"
                        placeholder="الإيميل"
                        name="fname"
                        // value={Alldata.fname}
                        // onChange={(e) => {
                        //   handlerData(e);
                        // }}
                      />
                    </div>
                    <div className="form-outline mb-4">
                      <input
                        type="text"
                        id="form3Example4cdg"
                        className="form-control-lg"
                        placeholder="كلمة المرور"
                        name="lname"
                        // onChange={(e) => {
                        //   handlerData(e);
                        // }}
                        // value={Alldata.lname}
                      />
                    </div>
                    <div className="d-flex justify-content-center">
                      <button className="btn">تسجيل دخول</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LoginVendor;
