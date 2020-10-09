import React from "react";
import { gql, useQuery } from '@apollo/client';
const GET_GOIS = gql`
query MyQuery {
    Goi(where: {TrangThai: {_in: [1]}}, order_by: {ThuTu: asc}) {
      Id
      TenGoi
      MoTaNgan
      Gia
      GiaKhuyenMai
      IsDefault
      Icon
      ThuTu
      TrangThai
      TuKhoaTimKiem
      IdAdminCapNhat
      IdAdminTao
      NgayCapNhat
      NgayTao
      IdNhomFiles
      NhomFiles
      {
        Id
        TenNhomFiles
        MoTaNgan
        ThuTu
        TrangThai
        TuKhoaTimKiem
        IdAdminCapNhat
        IdAdminTao
        NgayCapNhat
        NgayTao
      }
      NhomFiles_Files
      {
        Files
        {
          Id
          TieuDe
          MoTaNgan
          ThuTu
          TrangThai
          TuKhoaTimKiem
          IdAdminCapNhat
          IdAdminTao
          NgayCapNhat
          NgayTao
        }
      }
    }
  }

`;
export default () => {

  const { loading, data } = useQuery(GET_GOIS);
  return (
    <div className="row">
      {!loading && data &&

        data.Goi.map((node, i) => {
          return <div key={"Goi" + i} className="col-md-3">
            <div className={"pricing-box"+ (node.IsDefault? " pricing-box-most":"")}>
              <div className="pricing-header">
                <div className="pricing-title">{node.TenGoi}</div>
                <div className="pricing-desc">{node.MoTaNgan}</div>
                <div className="pricing-img">
                  <i className={node.Icon??"fal fa-comments-alt"} />
                </div>
                {node.Gia > 0 ? <div className="pricing-info">
                  <div className="price">{node.Gia}</div>
                  <div className="price-unit">VND/tháng</div>
                  <div className="price-info">per agent billed annually</div>
                  <div className="price-info-or">
                    or <b>59$</b> month-to-month
                  </div>
                </div>
                  : <div className="pricing-info">
                    <div className="price">
                      <div className="price-contact">
                        <button className="btn btn-outline-dark mb-4" title="Liên hệ">Liên hệ ngay</button>
                      </div>
                    </div>
                    <div className="price-info">
                      individual contract with annual billing
              </div>
                    <div className="price-info-or">

                    </div>
                  </div>}


              </div>
              <div className="pricing-body">
                <ul className="pricing-info-list">
                  {
                    node.NhomFiles_Files &&
                    node.NhomFiles_Files.map((item, i) => {
                      return <li key={"Files" + i} className="pricing-info-item">
                        <p>
                          <i className="fal fa-check" />
                          {item.Files.TieuDe}
                        </p>
                      </li>
                    })
                  }
                </ul>

              </div>
            </div>
          </div>
            ;
        })

      }
    </div>



  )
}