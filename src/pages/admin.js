import React from "react"
import { Router } from "@reach/router"
import LayoutAdmin from "../components/Admin/layout-admin"
import CMSThongTinCaNhan from "../components/Admin/cms-thong-tin-ca-nhan"
import CMSDasboard from "../components/Admin/cms-dasboard"

import CMSMenu from "../components/Admin/menu/cms-menu"
import CMSMenuDetail from "../components/Admin/menu/cms-menu-detail"

import CMSLienHe from "../components/Admin/lien-he/cms-lien-he"
import CMSLienHeDetail from "../components/Admin/lien-he/cms-lien-he-detail"


import CMSFiles from "../components/Admin/files/cms-files"
import CMSFilesDetail from "../components/Admin/files/cms-files-detail"

import CMSNhomFiles from "../components/Admin/nhom-files/cms-nhom-files"
import CMSNhomFilesDetail from "../components/Admin/nhom-files/cms-nhom-files-detail"


import CMSGoi from "../components/Admin/goi/cms-goi"
import CMSGoiDetail from "../components/Admin/goi/cms-goi-detail"

import CMSTaiLieu from "../components/Admin/tai-lieu/cms-tai-lieu"
import CMSTaiLieuDetail from "../components/Admin/tai-lieu/cms-tai-lieu-detail"

import CMSDangNhap from "../components/Admin/dang-nhap/cms-dang-nhap"
import CMSDangKy from "../components/Admin/dang-ky/cms-dang-ky"

import GuardAdmin from "../components/Admin/guard-admin.js"
import GuardLogin from "../components/Admin/guard-login.js"
import {commonNavigate} from "../core/variables";
const Admin = () => (

  <LayoutAdmin>
    <Router>
      <GuardAdmin path={commonNavigate.cms_menu} component={CMSMenu} />
      <GuardAdmin path={commonNavigate.cms_menu+"/:id"} component={CMSMenuDetail} />

      <GuardAdmin path={commonNavigate.cms_lien_he} component={CMSLienHe} />
      <GuardAdmin path={commonNavigate.cms_lien_he+"/:id"} component={CMSLienHeDetail} />

      <GuardAdmin path={commonNavigate.cms_files} component={CMSFiles} />
      <GuardAdmin path={commonNavigate.cms_files+"/:id"} component={CMSFilesDetail} />

      <GuardAdmin path={commonNavigate.cms_nhom_tai_lieu} component={CMSNhomFiles} />
      <GuardAdmin path={commonNavigate.cms_nhom_tai_lieu+"/:id"} component={CMSNhomFilesDetail} />

      <GuardAdmin path={commonNavigate.cms_goi} component={CMSGoi} />
      <GuardAdmin path={commonNavigate.cms_goi+"/:id"} component={CMSGoiDetail} />

      <GuardAdmin path={commonNavigate.cms_tai_lieu} component={CMSTaiLieu} />
      <GuardAdmin path={commonNavigate.cms_tai_lieu+"/:id"} component={CMSTaiLieuDetail} />

      <GuardAdmin path={commonNavigate.cms_admin} component={CMSDasboard} />
      <GuardAdmin path={commonNavigate.cms_dashboard} component={CMSDasboard} />
      <GuardAdmin path={commonNavigate.cms_thongTinCaNhan} component={CMSThongTinCaNhan} />
      
      <GuardLogin path={commonNavigate.cms_dang_nhap} component={CMSDangNhap}/>
      <GuardLogin path={commonNavigate.cms_dang_ky} component={CMSDangKy}/>

    </Router>
  </LayoutAdmin>
)

export default Admin
