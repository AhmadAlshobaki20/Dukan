import React, { useEffect, useState } from "react";
import "./Signin.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
// import axios from "axios";
const LoginCutoumers = () => {
  const token = sessionStorage.getItem("customer-token");

  const Navigate = useNavigate();
  const [Alldata, setAllData] = useState({
    email: "",
    password: "",
  });

  const handlerData = (event) => {
    const { name, value } = event.target;
    setAllData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  // useEffect(() => {
  //   getVendorData();
  // }, []);

  const handlerSendData = async () => {
    try {
      const response = await axios.post("/api/v1/customer/login", Alldata);
      sessionStorage.setItem("customer-token", JSON.stringify(response.data));
      console.log(JSON.parse(sessionStorage.getItem("customer-token")));
      // Navigate(`/`);
    } catch (err) {
      console.log("err", err);
    }
  };

  // // handlerSubmit
  const handlerSubmit = (event) => {
    event.preventDefault();
    handlerSendData();
    console.log("done");
  };
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
                        name="email"
                        onChange={handlerData}
                      />
                    </div>
                    <div className="form-outline mb-4">
                      <input
                        type="password"
                        id="form3Example4cdg"
                        className="form-control-lg"
                        placeholder="كلمة المرور"
                        name="password"
                        onChange={handlerData}
                      />
                    </div>
                    <div className="d-flex justify-content-center">
                      <button className="btn" onClick={handlerSubmit}>
                        تسجيل دخول
                      </button>
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
