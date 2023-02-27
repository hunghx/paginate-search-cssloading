import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { act_post_user } from "../../redux/action";
const initUser = {
  fullname: "",
  email: "",
  password: "",
  rePassword: "",
};

export default function Signin() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [newUser, setNewUser] = useState(initUser);
  const [errMessage, setErrMessage] = useState(initUser);
  const [isExistEmail, setIsExistEmail] = useState(false);
  console.log(errMessage);
  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setNewUser({ ...newUser, [name]: value });
    validateUser(name, value);
  };
  const validateUser = (name, value) => {
    if (name === "fullname") {
      if (value.trim() === "") {
        setErrMessage({ ...errMessage, [name]: "không được để trống" });
      } else if (value.trim().length <= 4) {
        setErrMessage({
          ...errMessage,
          [name]: "Đó không phải là  tên đầy đủ",
        });
      } else {
        setErrMessage({ ...errMessage, [name]: "" });
      }
    }
    if (name === "email") {
      const pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

      if (value.trim() === "") {
        setErrMessage({ ...errMessage, [name]: "không được để trống" });
      } else if (!pattern.test(value)) {
        setErrMessage({ ...errMessage, [name]: "Không đúng định dạng" });
      } else {
        checkEmailExist(value).then((res) => {
          if (res) {
            setErrMessage({ ...errMessage, [name]: "Email đã tồn tại" });
          } else {
            setErrMessage({ ...errMessage, [name]: "" });
          }
        });
      }
    }
    if (name === "password") {
      if (value.trim() === "") {
        setErrMessage({ ...errMessage, [name]: "không được để trống" });
      } else if (value.trim().length < 6) {
        setErrMessage({
          ...errMessage,
          [name]: "Mật khẩu phải ít nhất 6 kí tự",
        });
      } else {
        setErrMessage({ ...errMessage, [name]: "" });
      }
    }
    if (name === "rePassword") {
      if (newUser.password !== value) {
        setErrMessage({ ...errMessage, [name]: "Mật khẩu không trùng khớp" });
      } else {
        setErrMessage({ ...errMessage, [name]: "" });
      }
    }
  };

  const checkEmailExist = (email) => {
    return axios
      .get(`http://localhost:3000/users?email=${email}`)
      .then((res) => res.data.length > 0)

      .catch((err) => console.log(err));
  };
  const handleRegister = (e) => {
    let condition_1 =
      newUser.fullname !== "" &&
      newUser.email !== "" &&
      newUser.password !== "" &&
      newUser.rePassword !== "";
    let condition_2 =
      errMessage.fullname === "" &&
      errMessage.email === "" &&
      errMessage.password === "" &&
      errMessage.rePassword === "";

    console.log(condition_1, condition_2);
    if (condition_1 && condition_2) {
      axios
        .post("http://localhost:3000/users", newUser)
        .then(() => {
          dispatch(act_post_user(newUser));
          navigate("/login");
        })
        .catch((err) => console.log(err));
    }
    e.preventDefault();
  };
  return (
    <div className="allForm">
      <form action="" className="register">
        <h2 className="heading-form">Đăng kí</h2>
        <div className="form-group">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            fill="currentColor"
            className="bi bi-person-lines-fill"
            viewBox="0 0 16 16"
          >
            <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-5 6s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zM11 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5zm.5 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4zm2 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2zm0 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2z" />
          </svg>{" "}
          : &nbsp;
          <input
            name="fullname"
            value={newUser.fullname}
            type="text"
            className="form-input"
            placeholder="Họ & Tên..."
            onChange={handleChange}
          />
          <p className="text-danger text-error">{errMessage.fullname}</p>
        </div>
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
            name="email"
            value={newUser.email}
            type="text"
            className="form-input"
            placeholder="Email..."
            onChange={handleChange}
          />
          <p className="text-danger text-error">{errMessage.email}</p>
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
            name="password"
            value={newUser.password}
            type="password"
            className="form-input"
            placeholder="Mật khẩu..."
            onChange={handleChange}
          />
          <p className="text-danger text-error">{errMessage.password}</p>
        </div>
        <div className="form-group">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            fill="currentColor"
            className="bi bi-key-fill"
            viewBox="0 0 16 16"
          >
            <path d="M3.5 11.5a3.5 3.5 0 1 1 3.163-5H14L15.5 8 14 9.5l-1-1-1 1-1-1-1 1-1-1-1 1H6.663a3.5 3.5 0 0 1-3.163 2zM2.5 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
          </svg>{" "}
          : &nbsp;
          <input
            name="rePassword"
            value={newUser.rePassword}
            type="password"
            className="form-input"
            placeholder="Nhập lại mật khẩu..."
            onChange={handleChange}
          />
          <p className="text-danger text-error">{errMessage.rePassword}</p>
        </div>
        <p>
          Bạn đã có tài khoản?&nbsp;
          <Link to={"/login"}>Đăng nhập</Link>
        </p>
        <button onClick={handleRegister}>Đăng kí</button>
      </form>
    </div>
  );
}
