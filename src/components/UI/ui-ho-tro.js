import React from "react"
import { gql, useQuery } from '@apollo/client';
import { Link } from "gatsby"

const GET_MENUS = gql`
query GetMenu ($pathPrefix: String) {
    Menu(where: {PathPrefix: {_eq: $pathPrefix}, TrangThai: {_in: [1]}, IdMenuParent: {_is_null: true}}, order_by: {ThuTu: asc}) {
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
      MenuChilds (where: {TrangThai: {_in: [1]}}, order_by: {ThuTu: asc}) {
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
export default ({ ...props }) => {
  let pathname = props.uri
  const { loading, data } = useQuery(GET_MENUS, { variables: { pathPrefix: pathname } });
  return (
    <div>
      <section className="section section-support section-padding">
        <div className="container">
          <div className="section-header text-center">
            <h3 className="title">
              Chúng tôi
          <br /> có thể giúp gì cho bạn?
        </h3>
            <p className="desc">
              Nhận câu trả lời và khám phá những các để sử dụng CoChat dễ dàng.
        </p>
            <div className="support-search">
              <div className="form-inline form-search">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Nhập từ khóa..."
                />
                <button className="btn btn-secondary" title="Đăng ký">
                  Tìm kiếm
            </button>
              </div>
            </div>
          </div>
          <div className="row mb-2">
            <div className="col-md-6">
              <div className="support-item ">
                <div className="support-img">
                  <i className="fal fa-user-tie" />
                </div>
                <div className="support-title">Agent</div>
                <div className="support-desc">
                  Tìm hiểu cách sử dụng CoChat để cung cấp hỗ trợ khách hàng tuyệt
                  vời.
            </div>
                <div className="support-btn">
                  <a href="06_ho-tro-list.html" className="btn btn-outline-dark">
                    Xem hướng dẫn
              </a>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="support-item">
                <div className="support-img">
                  <i className="fal fa-user-crown" />
                </div>
                <div className="support-title">Manager</div>
                <div className="support-desc">
                  Tìm hiểu cách sử dụng CoChat để cung cấp hỗ trợ khách hàng tuyệt
                  vời.
            </div>
                <div className="support-btn">
                  <a href="06_ho-tro-list.html" className="btn btn-outline-dark">
                    Xem hướng dẫn
              </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {!loading && data && data.Menu && data.Menu[0] && <section className="section section-support section-padding">
        <div className="container">
          <div className="section-header text-center">
            <h3 className="title">Danh mục</h3>
          </div>
          <div className="row">
            {data.Menu[0].MenuChilds &&
              data.Menu[0].MenuChilds.map((node, i) => {
                return <div key={i} className={"col-md-" + (12 / data.Menu[0].MenuChilds.length)}>
                  <Link className="support-item support-border" to={data.Menu[0].PathPrefix + node.PathPrefix}> <span className="support-img">
                    <i className={node.Icon ?? "fal fa-tools"} />
                  </span>
                    <span className="support-title">{node.TenMenu}</span>
                    <span className="support-desc">
                      {node.MoTaNgan}
                    </span> </Link>
                </div>
              })
            }

          </div>
        </div>
      </section>}
    </div>
  )
}

