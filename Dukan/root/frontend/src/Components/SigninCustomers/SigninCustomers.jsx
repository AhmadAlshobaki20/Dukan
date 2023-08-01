import React from "react";
import { useState } from "react";
import "./Signin.css";
import { Link, useNavigate } from "react-router-dom";

// import axios from "axios";

function LoginCutoumers() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  async function checkUser() {
    try {
      const response = await fetch("/api/v1/customer/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const data = await response.json();
        sessionStorage.setItem("id", data.id); // Assuming the response contains the user ID
        navigate("/Products");
      } else {
        console.log("Login failed.");
      }
    } catch (error) {
      console.error("Error during login:", error);
    }
  }

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
                    تسجيل دخول
                  </h2>

                  <div className="form-outline mb-4">
                    <input
                      type="email"
                      placeholder="البريد الإلكتروني"
                      className="email style"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="form-outline mb-4">
                    <input
                      type="password"
                      id="inputPassword5"
                      placeholder="كلمة المرور"
                      aria-describedby="passwordHelpBlock"
                      onChange={(e) => setPassword(e.target.value)}
                      className="password style"
                    />
                  </div>
                  <div className="d-flex justify-content-center">
                    <button
                      className="btn"
                      onClick={checkUser}
                      variant="success"
                    >
                      تسجيل دخول
                    </button>
                  </div>
                  <br />
                  <p>
                    ليس لديك حساب؟
                    <Link to="/Customers" className="text-1">
                      سجل من هنا
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LoginCutoumers;
