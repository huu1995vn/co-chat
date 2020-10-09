import React from "react";

export default () => {

  return (
    <section className="section section-form-register section-padding">
      <div className="container">
        <div className="section-header text-center">
          <h3 className="title">Sử dụng thử CoChat miễn phí</h3>
          <p className="desc">
            Tiếp cận và nói chuyện với khách hàng trước khi họ đặt câu hỏi</p>
        </div>
        <div className="form-register-body">
          <div className="form-inline form-email form-banner">
            <input
              type="text"
              className="form-control"
              placeholder="Nhập Email..."
            />
            <a className="btn btn-secondary" href="/" title="Đăng ký"> </a>
          </div>
          <div className="form-desc">
            <div className="form-desc-item">
              <i className="fal fa-check" />
            14 ngày sử dụng miễn phí
          </div>
            <div className="form-desc-item">
              <i className="fal fa-check" />
            Analytics
          </div>
          </div>
        </div>
      </div>
    </section>
  )
}
