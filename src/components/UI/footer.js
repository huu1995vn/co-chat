import React from "react";

export default ({ children }) => {

    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="footer-title">
                                CoChat
                        </div>
                            <div className="footer-desc">
                                <p>
                                    Văn phòng: 371 Nguyễn Kiệm, P.3, Q. Gò Vấp, TP. HCM
                            </p>
                                <p>
                                    Hotline: <a className="" href="tel:0899490407"
                                        title="Gọi ngay: 0899.49.04.07">0899.49.04.07</a>
                                </p>
                                <p>
                                    Email: <a className="" href="mailto:hotro@dailyxe.com.vn"
                                        title="hotro@dailyxe.com.vn">hotro@dailyxe.com.vn</a>
                                </p>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="footer-title">
                                Hỗ trợ khách hàng
                        </div>
                            <div className="footer-desc">
                                <p>
                                    <a className="" href="/" title="">Bảng giá dịch vụ</a>
                                </p>

                                <p>
                                    <a className="" href="/" title="">Hướng dẫn thanh toán</a>
                                </p>
                                <p>
                                    <a className="" href="/" title="">FAQ</a>
                                </p>
                                <p>
                                    <a className="" href="/" title="">Thông báo</a>
                                </p>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="footer-title">
                                Về chúng tôi
                        </div>
                            <div className="footer-desc">
                                <p>
                                    <a className="" href="/" title="">Giới thiệu</a>
                                </p>

                                <p>
                                    <a className="" href="/" title="">Quy chế hoạt động</a>
                                </p>
                                <p>
                                    <a className="" href="/" title="">Chính sách</a>
                                </p>
                                <p>
                                    <a className="" href="/" title="">Liên hệ</a>
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div className="footer-share">
                <div className="container">
                    <div className="row ">
                        <div className="col-md-6">
                            <span className="label">Bắt đầu với CoChat?</span>
                            <a className="btn btn-secondary" href="/dang-ky">Đăng ký miễn phí</a>
                        </div>
                        <div className="col-md-6">
                            <div className="share-social">
                                <ul>
                                    <li>
                                        <a href="/"><i className="fab fa-twitter"></i> </a>
                                    </li>
                                    <li>
                                        <a href="/"><i className="fab fa-linkedin-in"></i> </a>
                                    </li>
                                    <li>
                                        <a href="/"><i className="fab fa-facebook"></i> </a>
                                    </li>
                                    <li>
                                        <a href="/"><i className="fab fa-youtube"></i> </a>
                                    </li>
                                    <li>
                                        <a href="/"><i className="fab fa-instagram"></i> </a>
                                    </li>

                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="copyright">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <p>
                                Copyright © 2020 LiveChat, Inc. All rights reserved
                                We use Cookies.
                        </p>
                        </div>
                        <div className="col-md-6 d-flex align-items-center justify-content-end">
                            <div className="info-system-footer">
                                <span>
                                    Cùng hệ thống với
                            </span>
                                <div className="logo-list">
                                    <a className="logo-item" href="/" title="DailyXe"><img src="/assets/images/logo-dailyxe.png" alt="logo-dailyxe" /> </a>
                                    <a className="logo-item" href="/" title="RaoXe"><img src="/assets/images/logo-rao-xe.png" alt="logo-rao-xe" /> </a>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </footer >
    )
}
