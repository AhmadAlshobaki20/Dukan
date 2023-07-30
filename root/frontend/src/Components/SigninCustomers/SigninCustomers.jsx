import React, { useEffect, useState } from "react";
import "./Signin.css";
// import axios from "axios";
const LoginCutoumers = () => {
  // const [Alldata, setAllData] = useState({
  //   fname: "",
  //   lname: "",
  //   phone: "",
  //   storeName: "",
  //   email: "",
  //   password: "",
  //   address: "",
  // });

  // const handlerData = (event) => {
  //   const { name, value } = event.target;
  //   setAllData((prevData) => ({
  //     ...prevData,
  //     [name]: value,
  //   }));
  // };
  // useEffect(() => {
  //   getVendorData();
  // }, []);

  // const getVendorData = async () => {
  //   try {
  //     const response = await axios.get(`/api/v1/vendors`);
  //     console.log(response.data.data);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };
  // const postVendorData = async () => {
  //   try {
  //     const response = await axios.post(`/api/v1/vendors/register`, Alldata);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  // // handlerSubmit
  // const handlerSubmit = (event) => {
  //   event.preventDefault();
  //   postVendorData();
  //   console.log("done");
  //   console.log(Alldata);
  // };
  return (
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
            <div className="col-12 col-md-9  col-xl-6">
              <div className="card" style={{ borderRadius: "15px" }}>
                <div className="card-body p-5">
                  <h2 className="text-uppercase text-center mb-5">
                    قم بتسجيل الدخول
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
};

export default LoginCutoumers;
