import React from "react";
import { Link, Outlet } from "react-router-dom";
import Footer from "../work/Footer";
import Header from "../work/Header";

export default function Admin() {
  return (
    <div>
      <div className="container">
        <Header />

        {/* tai khoan cua admin */}
        <div className="cart">
          <h1>ADMIN</h1>
          <br></br>
          <Outlet />
        </div>

        {/* tai khoan cua admin */}
        <Footer />
      </div>
    </div>
  );
}
