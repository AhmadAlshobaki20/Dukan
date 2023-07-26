import React, { useEffect, useState } from "react";
import "./Signin.css";
import axios from "axios";

import { useNavigate } from 'react-router-dom';
function SignIn() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [email,setEmail] = useState()

  const handleDataChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  useEffect(() => {
    getVendors();
  }, []);

  const getVendors = async () => {
    const response = await axios.get(`/api/v1/vendors`);
    console.log();
    const result = response.data.data.vendors.find((vendor)=>{
      return formData.email === vendor.email
    })
    console.log("result", result);
    if(result){
      navigate("/store");
    }  
  };

  const handleSignIn = async (event) => {
    event.preventDefault();
    try {
      getVendors()
        // You can store the token in localStorage, state, or a global state management library like Redux for future use.
    } catch (err) {
        // Handle login error here, display an error message, etc.
    }
  };

  return (
    <div>
      <h1>تسجيل دخول</h1>
      <div className="customerBody">
        <form>
          <label htmlFor="email">الايميل</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleDataChange}
          />
          <label htmlFor="password">كلمة السر</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleDataChange}
          />
          <button onClick={handleSignIn}>دخول</button>
        </form>
        <div className="img"></div>
      </div>
    </div>
  );
}

export default SignIn;
