import React from "react";
import { Link } from "gatsby"
import { gql, useQuery } from '@apollo/client';
import { commonNavigate } from "../../core/variables";
import { isLoggedIn } from "../../utils/auth"
const GET_MENUS = gql`
query MyQuery {
    Menu(where: {TrangThai: {_in: [1,2]}, IdMenuParent: {_is_null: true}}, order_by: {ThuTu: asc}) {
      Id
      IdAdminCapNhat
      PathPrefix
      TenMenu
      Icon
      MoTaNgan
      TrangThai
      NgayTao
      NgayCapNhat
      IdAdminTao
      IdMenuParent
      TuKhoaTimKiem
      ThuTu
      MenuChilds (where: {TrangThai: {_in: [1,2]}}, order_by: {ThuTu: asc}) {
        Id
        IdAdminCapNhat
        PathPrefix
        TenMenu
        Icon
        MoTaNgan
        TrangThai
        NgayTao
        NgayCapNhat
        IdAdminTao
        IdMenuParent
        TuKhoaTimKiem
        ThuTu
      }
    }
  }
`;
export default () => {

  const { loading, data } = useQuery(GET_MENUS);
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <a className="navbar-brand logo" href="/"><img src="/assets/images/logo.png" alt="logo" /> </a>
        <a className="navbar-toggler" href="/" data-toggle="collapse" data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </a>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            {/* {error && <div>error</div>} */}
            {!loading && data &&

              data.Menu.map((node, i) => {
                if (node.IdMenuChilds != null) return null;
                return (node.MenuChilds === null || node.MenuChilds.length === 0) ? <li key={node.Id} className="nav-item"><Link className="nav-link" to={node.PathPrefix}>{node.TenMenu}</Link></li> :
                  <li key={node.Id} className="nav-item dropdown">
                    <Link className="nav-link dropdown-toggle" to={node.PathPrefix}>{node.TenMenu}</Link>

                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                      {node.MenuChilds.map((item, index) => (<Link key={"child-" + index} className="dropdown-item" to={node.PathPrefix + item.PathPrefix}>{item.TenMenu}</Link>))}
                    </div>
                  </li>;
              })

            }
          </ul>
          {!isLoggedIn() && <div className="btn-header">
            <Link className="btn btn-outline-dark" to={commonNavigate.cms_dang_nhap} title="Đăng nhập">Đăng nhập</Link>
            <Link className="btn btn-secondary" to={commonNavigate.cms_dang_ky} title="Đăng ký">Đăng ký</Link>
          </div>}
          {isLoggedIn() && <div className="btn-header">
            <Link className="btn btn-outline-secondary" to={commonNavigate.cms_dashboard} title="Admin">Admin</Link>
          </div>}

        </div>
      </div>
    </nav>


  )
}