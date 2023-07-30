import React, { useEffect, useState } from "react";
import "./Vendor.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const SignUpVendor = () => {
  const navigate = useNavigate();
  const [Alldata, setAllData] = useState({
    fname: "",
    lname: "",
    phone: "",
    storeName: "",
    email: "",
    password: "",
    address: "",
  });

  const handlerData = (event) => {
    const { name, value } = event.target;
    setAllData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  useEffect(() => {
    getVendorData();
  }, []);

  const getVendorData = async () => {
    try {
      const response = await axios.get(`/api/v1/vendors`);
      console.log(response.data.data);
    } catch (err) {
      console.log(err);
    }
  };
  const postVendorData = async () => {
    try {
      const response = await axios.post(`/api/v1/vendors/register`, Alldata);
      navigate("/store");
    } catch (err) {
      console.log(err);
    }
  };

  // handlerSubmit
  const handlerSubmit = (event) => {
    event.preventDefault();
    postVendorData();
    console.log("done");
    console.log(Alldata);
  };
  return (
    <section className="vh-100 bg-image">
      <div className="mask d-flex align-items-center h-100 gradient-custom-3">
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-9 col-xl-6">
              <div className="card" style={{ borderRadius: "15px" }}>
                <div className="card-body p-5">
                  <h2 className="text-uppercase text-center mb-5">
                    باشر بأنشاء متجرك مع دكان
                  </h2>
                  <form className="vendor-form">
                    <div className="form-outline mb-4">
                      <input
                        type="text"
                        id="form3Example1cg"
                        className="form-control-lg"
                        placeholder="اسمك الاول"
                        name="fname"
                        value={Alldata.fname}
                        onChange={(e) => {
                          handlerData(e);
                        }}
                      />
                    </div>
                    <div className="form-outline mb-4">
                      <input
                        type="text"
                        id="form3Example4cdg"
                        className="form-control-lg"
                        placeholder="اسمك الثاني"
                        name="lname"
                        onChange={(e) => {
                          handlerData(e);
                        }}
                        value={Alldata.lname}
                      />
                    </div>
                    <div className="form-outline mb-4">
                      <input
                        type="text"
                        id="form3Example4cdg"
                        className="form-control-lg"
                        placeholder="اسم المتجر"
                        name="storeName"
                        onChange={(e) => {
                          handlerData(e);
                        }}
                        value={Alldata.storeName}
                      />
                    </div>
                    <div className="form-outline mb-4">
                      <input
                        type="phone"
                        id="form3Example4cdg"
                        className="form-control-lg"
                        placeholder="رقم الهاتف"
                        name="phone"
                        onChange={handlerData}
                        value={Alldata.phone}
                      />
                    </div>
                    <div className="form-outline mb-4">
                      <input
                        type="email"
                        id="form3Example3cg"
                        className="form-control-lg"
                        placeholder="بريدك الإلكتروني"
                        name="email"
                        onChange={handlerData}
                        value={Alldata.email}
                      />
                    </div>
                    <div className="form-outline mb-4">
                      <input
                        type="text"
                        id="form3Example3cg"
                        className="form-control-lg"
                        placeholder="العنوان"
                        name="address"
                        onChange={handlerData}
                        value={Alldata.address}
                      />
                    </div>
                    <div className="form-outline mb-4">
                      <input
                        type="password"
                        id="form3Example4cg"
                        className="form-control-lg"
                        placeholder="كلمة المرور"
                        name="password"
                        onChange={handlerData}
                        value={Alldata.password}
                      />
                    </div>
                    <div className="d-flex justify-content-center">
                      <button className="btn" onClick={handlerSubmit}>
                        انشاء
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

export default SignUpVendor;
