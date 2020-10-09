import React from "react";
import Layout from "../components/UI/layout";
import Download from "../components/UI/download";
import Trial from "../components/UI/trial";
import { gql, useMutation } from '@apollo/client';
// This query is executed at run time by Apollo.
const ADD_LIENHE = gql`
  mutation CreateLienHe($objects: [LienHe_insert_input!]!) {
    insert_LienHe(objects: $objects) {
      affected_rows
    }
  }
`;

export default () => {
  const [createLienHe] = useMutation(ADD_LIENHE);
  let item = {};
  async function onSave(e) {
    var dataClone = {};
    for (var key in item) {
      if(item[key]!=null)
      {
        dataClone[key] = item[key].value;
      }
    };
    e.preventDefault()
    try {
      let res = await createLienHe({ variables: { objects: dataClone } })
        if (res.data.insert_LienHe.affected_rows > 0) {
          alert("Tạo mới thành công")
        }
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <Layout>
      <div>
        <section className="section section-contact section-padding">
          <div className="container">
            <div className="section-header text-center">
              <h3 className="title">
                Liên hệ với <span> chúng tôi</span>
              </h3>
              <p className="desc">
                Đó là tất cả về việc biến mục tiêu kinh doanh của bạn thành hiện thực.
        </p>
            </div>
            <div className="row">
              <div className="col-md-6 offset-md-3">
                <form className="form-contact"
                  onSubmit={e => {
                    e.preventDefault();
                    onSave(e)
                    
                  }}
                >
                  <div className="form-group">
                    <label htmlFor="tieuDe">
                      Tiêu đề<span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      id="tieuDe"
                      className="form-control"
                      placeholder="Nhập tiêu đề..."
                      ref={node => {
                        item.TieuDe = node;
                      }}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="hoTen">Họ tên</label>
                    <input
                      type="text"
                      id="hoTen"
                      className="form-control"
                      placeholder="Nhập họ tên..."
                      ref={node => {
                        item.HoTen = node;
                      }}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">
                      Email<span className="text-danger">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="form-control"
                      placeholder="Nhập email.."
                      ref={node => {
                        item.Email = node;
                      }}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="dienThoai">
                      Điện thoại<span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      id="dienThoai"
                      className="form-control"
                      placeholder="Nhập điện thoại..."
                      ref={node => {
                        item.DienThoai = node;
                      }}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="noiDung">
                      Nội dung<span className="text-danger">*</span>
                    </label>
                    <textarea
                      rows={4}
                      id="noiDung"
                      className="form-control"
                      placeholder="Nhập nội dung..."
                      defaultValue={""}
                      ref={node => {
                        item.NoiDung = node;
                      }}
                    />
                  </div>
                  <div className="text-center">
                    <button type="submit" className="btn btn-secondary btn-submit">
                      Gửi liên hệ
              </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
        <Trial />
        <Download />
      </div>

    </Layout>
  )
}

