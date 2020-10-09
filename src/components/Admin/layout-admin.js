import React from "react";
import "../../../static/assets/css/bootstrap.min.css";
import "../../../static/assets/css/all.min.css";
import "../../../static/assets/css/light.css";
import "../../../static/assets/css/style-admin.css";

import CommonMethods from "../../core/common-methods"
import { commonNavigate } from "../../core/variables"
import { isLoggedIn, logout } from "../../utils/auth"
import Layout from "../UI/layout"
import LocalstoreService from "../../core/services/localstore.service"
import { Link } from "gatsby"

export default ({ children }) => {
  const onDangXuat = () => {
    logout();
    CommonMethods.navigateToPage_CmsDangNhap();
  };
  var infoThanhVien = LocalstoreService.getUser();

  return (

    <div>
      {!isLoggedIn() &&
        <Layout>
          {children}
        </Layout>}
      {isLoggedIn() &&
        <div>
          <div className="container">
            <nav className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0">
              <a className="navbar-brand col-sm-3 col-md-2 mr-0 navbar-brand logo" href="/"><img src="/assets/images/logo.png" alt="logo" /> </a>
              <span><img src={CommonMethods.buildUrlHinhDaiDien(infoThanhVien.IdFileDaiDien)} alt="hinh-dai-dien" className="avatar"></img>{infoThanhVien.HoTen}</span>
              <ul className="navbar-nav px-3">
                <li className="nav-item text-nowrap">
                  <button className="btn btn-outline-dark nav-link" onClick={onDangXuat}>
                    Đăng xuất

                  </button>

                </li>
              </ul>
            </nav>
          </div>
          <div className="container-fluid">
            <div className="row">
              <nav className="col-md-2 d-none d-md-block bg-light sidebar">
                <div className="sidebar-sticky">
                  <ul className="nav flex-column">
                    <li className="nav-item">
                      <Link className="nav-link active" to={commonNavigate.cms_dashboard}> Dashboard </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to={commonNavigate.cms_menu}> Quản lý Menu</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to={commonNavigate.cms_lien_he}> Quản lý Liên hệ</Link>

                    </li>

                    <li className="nav-item">
                      <Link className="nav-link" to={commonNavigate.cms_files}> Quản lý Files</Link>

                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to={commonNavigate.cms_nhom_tai_lieu}> Quản lý Nhóm Files</Link>

                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to={commonNavigate.cms_tai_lieu}> Quản lý Tài Liệu</Link>

                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to={commonNavigate.cms_goi}> Quản lý Gói</Link>

                    </li>

                  </ul>
                </div>
              </nav>
              <main role="main" className="col-md-9 ml-sm-auto col-lg-10 pt-3 px-4">
                {children}
              </main>
            </div>
          </div>
        </div>
      }
    </div>
  )
}