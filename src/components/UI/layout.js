import React from "react";
import Header from "./header";
import Footer from "./footer";
import "../../../static/assets/css/bootstrap.min.css";
import "../../../static/assets/css/all.min.css";
import "../../../static/assets/css/light.css";
import "../../../static/assets/css/style.css";
export default ({ children }) => {

  return (
    <div>
      <Header />
      <div>
        <div>{children}</div>
      </div>
      <Footer />

    </div>
  )
}