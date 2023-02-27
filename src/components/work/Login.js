import axios from "axios";
import React, { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";

export default function Login() {
  const [userLogin, setUserLogin] = useState({ email: "", password: "" });
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    if (userLogin.email.trim() === "" || userLogin.password.trim() === "") {
      setErrorMessage("email và mật khẩu không được để trống");
      return;
    }
    axios
      .get(
        `http://localhost:3000/users?email=${userLogin.email}&password=${userLogin.password}`
      )
      .then((res) => {
        console.log(res.data);
        //đăng nhập thành công
        if (res.data[0].permission === 1) {
          localStorage.setItem("admin", JSON.stringify(res.data[0]));
          navigate("/admin");
        } else {
          localStorage.setItem("users", JSON.stringify(res.data[0]));
          navigate("/");
        }
      });
  };
  return (
    <div className="allForm">
      <form action="" className="register">
        <h2 className="heading-form">Đăng Nhập</h2>
        <div className="form-group">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            fill="currentColor"
            className="bi bi-envelope"
            viewBox="0 0 16 16"
          >
            <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
          </svg>{" "}
          : &nbsp;
          <input
            value={userLogin.email}
            type="text"
            onChange={(e) =>
              setUserLogin({ ...userLogin, email: e.target.value })
            }
            className="form-input"
            placeholder="Email..."
          />
        </div>
        <div className="form-group">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            fill="currentColor"
            className="bi bi-key"
            viewBox="0 0 16 16"
          >
            <path d="M0 8a4 4 0 0 1 7.465-2H14a.5.5 0 0 1 .354.146l1.5 1.5a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0L13 9.207l-.646.647a.5.5 0 0 1-.708 0L11 9.207l-.646.647a.5.5 0 0 1-.708 0L9 9.207l-.646.647A.5.5 0 0 1 8 10h-.535A4 4 0 0 1 0 8zm4-3a3 3 0 1 0 2.712 4.285A.5.5 0 0 1 7.163 9h.63l.853-.854a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.793-.793-1-1h-6.63a.5.5 0 0 1-.451-.285A3 3 0 0 0 4 5z" />
            <path d="M4 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
          </svg>{" "}
          : &nbsp;
          <input
            value={userLogin.password}
            onChange={(e) =>
              setUserLogin({ ...userLogin, password: e.target.value })
            }
            type="password"
            className="form-input"
            placeholder="Mật khẩu..."
          />
        </div>
        <p className="text-danger text-error">{errorMessage}</p>
        <p>
          Bạn chưa có tài khoản?&nbsp;
          <Link to={"/signin"}>Đăng kí</Link>
        </p>
        <button onClick={handleLogin}>Đăng nhập</button>
      </form>
    </div>
  );
}
