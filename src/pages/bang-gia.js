import React from "react";
import Layout from "../components/UI/layout";
import Download from "../components/UI/download";
import Trial from "../components/UI/trial";
import Goi from "../components/UI/goi";

export default () => {
  return (
    <Layout>
      <div>
        <section className="section section-pricing section-padding">
          <div className="container">
            <div className="section-header text-center">
              <h3 className="title">
                Bảng giá <span>CoChat</span>
              </h3>
              <p className="desc">
                Cài đặt 5 phút - thử các tính năng trong 14 ngày.</p>
              <div className="text-center">
                <a className="btn btn-secondary" href="/dang-ky">Đăng ký miễn phí</a>
              </div>
            </div>
            <Goi></Goi>
            </div>
        </section>
        <section className="section section-pricing section-padding">
          <div className="container">
            <div className="section-header text-center">
              <h3 className="title">So sánh</h3>
              <p className="desc">
                Khám phá sự khác biệt của từng kế hoạch cá nhân và tìm hiểu thêm về
                sản phẩm.
        </p>
            </div>
            <div className="pricing-table-container">
              <div className="pricing-table pricing-table-header">
                <div className="pricing-table-row justify-content-end">
                  <div className="pricing-table-cell">Starter</div>
                  <div className="pricing-table-cell">Team</div>
                  <div className="pricing-table-cell">Business</div>
                  <div className="pricing-table-cell">Enterprice</div>
                </div>
              </div>
              <div className="pricing-table-title">Pricing (all prices in USD)</div>
              <div className="pricing-table">
                <div className="pricing-table-row">
                  <div className="pricing-table-cell pricing-table-row-header ml-auto">
                    Price / month (billed annually)
            </div>
                  <div className="pricing-table-cell">$16 per agent</div>
                  <div className="pricing-table-cell">$33 per agent</div>
                  <div className="pricing-table-cell">$50 per agent</div>
                  <div className="pricing-table-cell">
                    <a href="/" className="btn btn-outline-dark">
                      Contact US
              </a>
                  </div>
                </div>
                <div className="pricing-table-row">
                  <div className="pricing-table-cell pricing-table-row-header ml-auto">
                    Price / month (billed annually)
            </div>
                  <div className="pricing-table-cell">$16 per agent</div>
                  <div className="pricing-table-cell">$33 per agent</div>
                  <div className="pricing-table-cell">$50 per agent</div>
                  <div className="pricing-table-cell">-</div>
                </div>
              </div>
              <div className="pricing-table-title">Channels</div>
              <div className="pricing-table">
                <div className="pricing-table-row">
                  <div className="pricing-table-cell pricing-table-row-header ml-auto">
                    Website
            </div>
                  <div className="pricing-table-cell">
                    <i className="fal fa-check" />
                  </div>
                  <div className="pricing-table-cell">
                    <i className="fal fa-check" />
                  </div>
                  <div className="pricing-table-cell">
                    <i className="fal fa-check" />
                  </div>
                  <div className="pricing-table-cell">
                    <i className="fal fa-check" />
                  </div>
                </div>
                <div className="pricing-table-row">
                  <div className="pricing-table-cell pricing-table-row-header ml-auto">
                    Apps
            </div>
                  <div className="pricing-table-cell">
                    <i className="fal fa-check" />
                  </div>
                  <div className="pricing-table-cell">
                    <i className="fal fa-check" />
                  </div>
                  <div className="pricing-table-cell">
                    <i className="fal fa-check" />
                  </div>
                  <div className="pricing-table-cell">
                    <i className="fal fa-check" />
                  </div>
                </div>
                <div className="pricing-table-row">
                  <div className="pricing-table-cell pricing-table-row-header ml-auto">
                    Directs Chat Link
            </div>
                  <div className="pricing-table-cell">
                    <i className="fal fa-check" />
                  </div>
                  <div className="pricing-table-cell">
                    <i className="fal fa-check" />
                  </div>
                  <div className="pricing-table-cell">
                    <i className="fal fa-check" />
                  </div>
                  <div className="pricing-table-cell">
                    <i className="fal fa-check" />
                  </div>
                </div>
                <div className="pricing-table-row">
                  <div className="pricing-table-cell pricing-table-row-header ml-auto">
                    Messenger
            </div>
                  <div className="pricing-table-cell">
                    <i className="fal fa-check" />
                  </div>
                  <div className="pricing-table-cell">
                    <i className="fal fa-check" />
                  </div>
                  <div className="pricing-table-cell">
                    <i className="fal fa-check" />
                  </div>
                  <div className="pricing-table-cell">
                    <i className="fal fa-check" />
                  </div>
                </div>
                <div className="pricing-table-row">
                  <div className="pricing-table-cell pricing-table-row-header ml-auto">
                    Email
            </div>
                  <div className="pricing-table-cell">
                    <i className="fal fa-check" />
                  </div>
                  <div className="pricing-table-cell">
                    <i className="fal fa-check" />
                  </div>
                  <div className="pricing-table-cell">
                    <i className="fal fa-check" />
                  </div>
                  <div className="pricing-table-cell">
                    <i className="fal fa-check" />
                  </div>
                </div>
                <div className="pricing-table-row">
                  <div className="pricing-table-cell pricing-table-row-header ml-auto">
                    Apple business Chat
            </div>
                  <div className="pricing-table-cell">-</div>
                  <div className="pricing-table-cell">-</div>
                  <div className="pricing-table-cell">
                    <i className="fal fa-check" />
                  </div>
                  <div className="pricing-table-cell">
                    <i className="fal fa-check" />
                  </div>
                </div>
                <div className="pricing-table-row">
                  <div className="pricing-table-cell pricing-table-row-header ml-auto">
                    SMS
            </div>
                  <div className="pricing-table-cell">-</div>
                  <div className="pricing-table-cell">-</div>
                  <div className="pricing-table-cell">
                    <i className="fal fa-check" />
                  </div>
                  <div className="pricing-table-cell">
                    <i className="fal fa-check" />
                  </div>
                </div>
              </div>
              <div className="pricing-table-title">Chat and monitoring</div>
              <div className="pricing-table">
                <div className="pricing-table-row">
                  <div className="pricing-table-cell pricing-table-row-header ml-auto">
                    Applications
            </div>
                  <div className="pricing-table-cell">
                    <i className="fal fa-check" />
                  </div>
                  <div className="pricing-table-cell">
                    <i className="fal fa-check" />
                  </div>
                  <div className="pricing-table-cell">
                    <i className="fal fa-check" />
                  </div>
                  <div className="pricing-table-cell">
                    <i className="fal fa-check" />
                  </div>
                </div>
                <div className="pricing-table-row">
                  <div className="pricing-table-cell pricing-table-row-header ml-auto">
                    Canned responses
            </div>
                  <div className="pricing-table-cell">
                    <i className="fal fa-check" />
                  </div>
                  <div className="pricing-table-cell">
                    <i className="fal fa-check" />
                  </div>
                  <div className="pricing-table-cell">
                    <i className="fal fa-check" />
                  </div>
                  <div className="pricing-table-cell">
                    <i className="fal fa-check" />
                  </div>
                </div>
                <div className="pricing-table-row">
                  <div className="pricing-table-cell pricing-table-row-header ml-auto">
                    Pre-chat &amp; post-chat surveys
            </div>
                  <div className="pricing-table-cell">default only</div>
                  <div className="pricing-table-cell">
                    <i className="fal fa-check" />
                  </div>
                  <div className="pricing-table-cell">
                    <i className="fal fa-check" />
                  </div>
                  <div className="pricing-table-cell">
                    <i className="fal fa-check" />
                  </div>
                </div>
                <div className="pricing-table-row">
                  <div className="pricing-table-cell pricing-table-row-header ml-auto">
                    Ticket form
            </div>
                  <div className="pricing-table-cell">default only</div>
                  <div className="pricing-table-cell">
                    <i className="fal fa-check" />
                  </div>
                  <div className="pricing-table-cell">
                    <i className="fal fa-check" />
                  </div>
                  <div className="pricing-table-cell">
                    <i className="fal fa-check" />
                  </div>
                </div>
                <div className="pricing-table-row">
                  <div className="pricing-table-cell pricing-table-row-header ml-auto">
                    Agent rating
            </div>
                  <div className="pricing-table-cell">
                    <i className="fal fa-check" />
                  </div>
                  <div className="pricing-table-cell">
                    <i className="fal fa-check" />
                  </div>
                  <div className="pricing-table-cell">
                    <i className="fal fa-check" />
                  </div>
                  <div className="pricing-table-cell">
                    <i className="fal fa-check" />
                  </div>
                </div>
                <div className="pricing-table-row">
                  <div className="pricing-table-cell pricing-table-row-header ml-auto">
                    Customers detail
            </div>
                  <div className="pricing-table-cell">
                    <i className="fal fa-check" />
                  </div>
                  <div className="pricing-table-cell">
                    <i className="fal fa-check" />
                  </div>
                  <div className="pricing-table-cell">
                    <i className="fal fa-check" />
                  </div>
                  <div className="pricing-table-cell">
                    <i className="fal fa-check" />
                  </div>
                </div>
                <div className="pricing-table-row">
                  <div className="pricing-table-cell pricing-table-row-header ml-auto">
                    Multiple website support
            </div>
                  <div className="pricing-table-cell">
                    <i className="fal fa-check" />
                  </div>
                  <div className="pricing-table-cell">
                    <i className="fal fa-check" />
                  </div>
                  <div className="pricing-table-cell">
                    <i className="fal fa-check" />
                  </div>
                  <div className="pricing-table-cell">
                    <i className="fal fa-check" />
                  </div>
                </div>
                <div className="pricing-table-row">
                  <div className="pricing-table-cell pricing-table-row-header ml-auto">
                    Customers tracking
            </div>
                  <div className="pricing-table-cell">up to 100</div>
                  <div className="pricing-table-cell">up to 400</div>
                  <div className="pricing-table-cell">1000</div>
                  <div className="pricing-table-cell">1000</div>
                </div>
                <div className="pricing-table-row">
                  <div className="pricing-table-cell pricing-table-row-header ml-auto">
                    Transfers
            </div>
                  <div className="pricing-table-cell">
                    <i className="fal fa-check" />
                  </div>
                  <div className="pricing-table-cell">
                    <i className="fal fa-check" />
                  </div>
                  <div className="pricing-table-cell">
                    <i className="fal fa-check" />
                  </div>
                  <div className="pricing-table-cell">
                    <i className="fal fa-check" />
                  </div>
                </div>
                <div className="pricing-table-row">
                  <div className="pricing-table-cell pricing-table-row-header ml-auto">
                    Chat tagging
            </div>
                  <div className="pricing-table-cell">
                    <i className="fal fa-check" />
                  </div>
                  <div className="pricing-table-cell">
                    <i className="fal fa-check" />
                  </div>
                  <div className="pricing-table-cell">
                    <i className="fal fa-check" />
                  </div>
                  <div className="pricing-table-cell">
                    <i className="fal fa-check" />
                  </div>
                </div>
                <div className="pricing-table-row">
                  <div className="pricing-table-cell pricing-table-row-header ml-auto">
                    File sharing
            </div>
                  <div className="pricing-table-cell">
                    <i className="fal fa-check" />
                  </div>
                  <div className="pricing-table-cell">
                    <i className="fal fa-check" />
                  </div>
                  <div className="pricing-table-cell">
                    <i className="fal fa-check" />
                  </div>
                  <div className="pricing-table-cell">
                    <i className="fal fa-check" />
                  </div>
                </div>
                <div className="pricing-table-row">
                  <div className="pricing-table-cell pricing-table-row-header ml-auto">
                    Smart chat routing
            </div>
                  <div className="pricing-table-cell">
                    <i className="fal fa-check" />
                  </div>
                  <div className="pricing-table-cell">
                    <i className="fal fa-check" />
                  </div>
                  <div className="pricing-table-cell">
                    <i className="fal fa-check" />
                  </div>
                  <div className="pricing-table-cell">
                    <i className="fal fa-check" />
                  </div>
                </div>
                <div className="pricing-table-row">
                  <div className="pricing-table-cell pricing-table-row-header ml-auto">
                    Manual chat routing
            </div>
                  <div className="pricing-table-cell">
                    <i className="fal fa-check" />
                  </div>
                  <div className="pricing-table-cell">
                    <i className="fal fa-check" />
                  </div>
                  <div className="pricing-table-cell">
                    <i className="fal fa-check" />
                  </div>
                  <div className="pricing-table-cell">
                    <i className="fal fa-check" />
                  </div>
                </div>
                <div className="pricing-table-row">
                  <div className="pricing-table-cell pricing-table-row-header ml-auto">
                    Work scheduler
            </div>
                  <div className="pricing-table-cell">-</div>
                  <div className="pricing-table-cell">-</div>
                  <div className="pricing-table-cell">
                    <i className="fal fa-check" />
                  </div>
                  <div className="pricing-table-cell">
                    <i className="fal fa-check" />
                  </div>
                </div>
              </div>
              <div className="pricing-table-title">Channels</div>
              <div className="pricing-table">
                <div className="pricing-table-row">
                  <div className="pricing-table-cell pricing-table-row-header ml-auto">
                    Website
            </div>
                  <div className="pricing-table-cell">
                    <i className="fal fa-check" />
                  </div>
                  <div className="pricing-table-cell">
                    <i className="fal fa-check" />
                  </div>
                  <div className="pricing-table-cell">
                    <i className="fal fa-check" />
                  </div>
                  <div className="pricing-table-cell">
                    <i className="fal fa-check" />
                  </div>
                </div>
                <div className="pricing-table-row">
                  <div className="pricing-table-cell pricing-table-row-header ml-auto">
                    Apps
            </div>
                  <div className="pricing-table-cell">
                    <i className="fal fa-check" />
                  </div>
                  <div className="pricing-table-cell">
                    <i className="fal fa-check" />
                  </div>
                  <div className="pricing-table-cell">
                    <i className="fal fa-check" />
                  </div>
                  <div className="pricing-table-cell">
                    <i className="fal fa-check" />
                  </div>
                </div>
                <div className="pricing-table-row">
                  <div className="pricing-table-cell pricing-table-row-header ml-auto">
                    Directs Chat Link
            </div>
                  <div className="pricing-table-cell">
                    <i className="fal fa-check" />
                  </div>
                  <div className="pricing-table-cell">
                    <i className="fal fa-check" />
                  </div>
                  <div className="pricing-table-cell">
                    <i className="fal fa-check" />
                  </div>
                  <div className="pricing-table-cell">
                    <i className="fal fa-check" />
                  </div>
                </div>
                <div className="pricing-table-row">
                  <div className="pricing-table-cell pricing-table-row-header ml-auto">
                    Messenger
            </div>
                  <div className="pricing-table-cell">
                    <i className="fal fa-check" />
                  </div>
                  <div className="pricing-table-cell">
                    <i className="fal fa-check" />
                  </div>
                  <div className="pricing-table-cell">
                    <i className="fal fa-check" />
                  </div>
                  <div className="pricing-table-cell">
                    <i className="fal fa-check" />
                  </div>
                </div>
                <div className="pricing-table-row">
                  <div className="pricing-table-cell pricing-table-row-header ml-auto">
                    Email
            </div>
                  <div className="pricing-table-cell">
                    <i className="fal fa-check" />
                  </div>
                  <div className="pricing-table-cell">
                    <i className="fal fa-check" />
                  </div>
                  <div className="pricing-table-cell">
                    <i className="fal fa-check" />
                  </div>
                  <div className="pricing-table-cell">
                    <i className="fal fa-check" />
                  </div>
                </div>
                <div className="pricing-table-row">
                  <div className="pricing-table-cell pricing-table-row-header ml-auto">
                    Apple business Chat
            </div>
                  <div className="pricing-table-cell">-</div>
                  <div className="pricing-table-cell">-</div>
                  <div className="pricing-table-cell">
                    <i className="fal fa-check" />
                  </div>
                  <div className="pricing-table-cell">
                    <i className="fal fa-check" />
                  </div>
                </div>
                <div className="pricing-table-row">
                  <div className="pricing-table-cell pricing-table-row-header ml-auto">
                    SMS
            </div>
                  <div className="pricing-table-cell">-</div>
                  <div className="pricing-table-cell">-</div>
                  <div className="pricing-table-cell">
                    <i className="fal fa-check" />
                  </div>
                  <div className="pricing-table-cell">
                    <i className="fal fa-check" />
                  </div>
                </div>
              </div>
              <div className="pricing-table-title">Chat and monitoring</div>
              <div className="pricing-table">
                <div className="pricing-table-row">
                  <div className="pricing-table-cell pricing-table-row-header ml-auto">
                    Applications
            </div>
                  <div className="pricing-table-cell">
                    <i className="fal fa-check" />
                  </div>
                  <div className="pricing-table-cell">
                    <i className="fal fa-check" />
                  </div>
                  <div className="pricing-table-cell">
                    <i className="fal fa-check" />
                  </div>
                  <div className="pricing-table-cell">
                    <i className="fal fa-check" />
                  </div>
                </div>
                <div className="pricing-table-row">
                  <div className="pricing-table-cell pricing-table-row-header ml-auto">
                    Canned responses
            </div>
                  <div className="pricing-table-cell">
                    <i className="fal fa-check" />
                  </div>
                  <div className="pricing-table-cell">
                    <i className="fal fa-check" />
                  </div>
                  <div className="pricing-table-cell">
                    <i className="fal fa-check" />
                  </div>
                  <div className="pricing-table-cell">
                    <i className="fal fa-check" />
                  </div>
                </div>
                <div className="pricing-table-row">
                  <div className="pricing-table-cell pricing-table-row-header ml-auto">
                    Pre-chat &amp; post-chat surveys
            </div>
                  <div className="pricing-table-cell">default only</div>
                  <div className="pricing-table-cell">
                    <i className="fal fa-check" />
                  </div>
                  <div className="pricing-table-cell">
                    <i className="fal fa-check" />
                  </div>
                  <div className="pricing-table-cell">
                    <i className="fal fa-check" />
                  </div>
                </div>
                <div className="pricing-table-row">
                  <div className="pricing-table-cell pricing-table-row-header ml-auto">
                    Ticket form
            </div>
                  <div className="pricing-table-cell">default only</div>
                  <div className="pricing-table-cell">
                    <i className="fal fa-check" />
                  </div>
                  <div className="pricing-table-cell">
                    <i className="fal fa-check" />
                  </div>
                  <div className="pricing-table-cell">
                    <i className="fal fa-check" />
                  </div>
                </div>
                <div className="pricing-table-row">
                  <div className="pricing-table-cell pricing-table-row-header ml-auto">
                    Agent rating
            </div>
                  <div className="pricing-table-cell">
                    <i className="fal fa-check" />
                  </div>
                  <div className="pricing-table-cell">
                    <i className="fal fa-check" />
                  </div>
                  <div className="pricing-table-cell">
                    <i className="fal fa-check" />
                  </div>
                  <div className="pricing-table-cell">
                    <i className="fal fa-check" />
                  </div>
                </div>
                <div className="pricing-table-row">
                  <div className="pricing-table-cell pricing-table-row-header ml-auto">
                    Customers detail
            </div>
                  <div className="pricing-table-cell">
                    <i className="fal fa-check" />
                  </div>
                  <div className="pricing-table-cell">
                    <i className="fal fa-check" />
                  </div>
                  <div className="pricing-table-cell">
                    <i className="fal fa-check" />
                  </div>
                  <div className="pricing-table-cell">
                    <i className="fal fa-check" />
                  </div>
                </div>
                <div className="pricing-table-row">
                  <div className="pricing-table-cell pricing-table-row-header ml-auto">
                    Multiple website support
            </div>
                  <div className="pricing-table-cell">
                    <i className="fal fa-check" />
                  </div>
                  <div className="pricing-table-cell">
                    <i className="fal fa-check" />
                  </div>
                  <div className="pricing-table-cell">
                    <i className="fal fa-check" />
                  </div>
                  <div className="pricing-table-cell">
                    <i className="fal fa-check" />
                  </div>
                </div>
                <div className="pricing-table-row">
                  <div className="pricing-table-cell pricing-table-row-header ml-auto">
                    Customers tracking
            </div>
                  <div className="pricing-table-cell">up to 100</div>
                  <div className="pricing-table-cell">up to 400</div>
                  <div className="pricing-table-cell">1000</div>
                  <div className="pricing-table-cell">1000</div>
                </div>
                <div className="pricing-table-row">
                  <div className="pricing-table-cell pricing-table-row-header ml-auto">
                    Transfers
            </div>
                  <div className="pricing-table-cell">
                    <i className="fal fa-check" />
                  </div>
                  <div className="pricing-table-cell">
                    <i className="fal fa-check" />
                  </div>
                  <div className="pricing-table-cell">
                    <i className="fal fa-check" />
                  </div>
                  <div className="pricing-table-cell">
                    <i className="fal fa-check" />
                  </div>
                </div>
                <div className="pricing-table-row">
                  <div className="pricing-table-cell pricing-table-row-header ml-auto">
                    Chat tagging
            </div>
                  <div className="pricing-table-cell">
                    <i className="fal fa-check" />
                  </div>
                  <div className="pricing-table-cell">
                    <i className="fal fa-check" />
                  </div>
                  <div className="pricing-table-cell">
                    <i className="fal fa-check" />
                  </div>
                  <div className="pricing-table-cell">
                    <i className="fal fa-check" />
                  </div>
                </div>
                <div className="pricing-table-row">
                  <div className="pricing-table-cell pricing-table-row-header ml-auto">
                    File sharing
            </div>
                  <div className="pricing-table-cell">
                    <i className="fal fa-check" />
                  </div>
                  <div className="pricing-table-cell">
                    <i className="fal fa-check" />
                  </div>
                  <div className="pricing-table-cell">
                    <i className="fal fa-check" />
                  </div>
                  <div className="pricing-table-cell">
                    <i className="fal fa-check" />
                  </div>
                </div>
                <div className="pricing-table-row">
                  <div className="pricing-table-cell pricing-table-row-header ml-auto">
                    Smart chat routing
            </div>
                  <div className="pricing-table-cell">
                    <i className="fal fa-check" />
                  </div>
                  <div className="pricing-table-cell">
                    <i className="fal fa-check" />
                  </div>
                  <div className="pricing-table-cell">
                    <i className="fal fa-check" />
                  </div>
                  <div className="pricing-table-cell">
                    <i className="fal fa-check" />
                  </div>
                </div>
                <div className="pricing-table-row">
                  <div className="pricing-table-cell pricing-table-row-header ml-auto">
                    Manual chat routing
            </div>
                  <div className="pricing-table-cell">
                    <i className="fal fa-check" />
                  </div>
                  <div className="pricing-table-cell">
                    <i className="fal fa-check" />
                  </div>
                  <div className="pricing-table-cell">
                    <i className="fal fa-check" />
                  </div>
                  <div className="pricing-table-cell">
                    <i className="fal fa-check" />
                  </div>
                </div>
                <div className="pricing-table-row">
                  <div className="pricing-table-cell pricing-table-row-header ml-auto">
                    Work scheduler
            </div>
                  <div className="pricing-table-cell">-</div>
                  <div className="pricing-table-cell">-</div>
                  <div className="pricing-table-cell">
                    <i className="fal fa-check" />
                  </div>
                  <div className="pricing-table-cell">
                    <i className="fal fa-check" />
                  </div>
                </div>
              </div>
              <div className="pricing-table-title">Channels</div>
              <div className="pricing-table">
                <div className="pricing-table-row">
                  <div className="pricing-table-cell pricing-table-row-header ml-auto">
                    Website
            </div>
                  <div className="pricing-table-cell">
                    <i className="fal fa-check" />
                  </div>
                  <div className="pricing-table-cell">
                    <i className="fal fa-check" />
                  </div>
                  <div className="pricing-table-cell">
                    <i className="fal fa-check" />
                  </div>
                  <div className="pricing-table-cell">
                    <i className="fal fa-check" />
                  </div>
                </div>
                <div className="pricing-table-row">
                  <div className="pricing-table-cell pricing-table-row-header ml-auto">
                    Apps
            </div>
                  <div className="pricing-table-cell">
                    <i className="fal fa-check" />
                  </div>
                  <div className="pricing-table-cell">
                    <i className="fal fa-check" />
                  </div>
                  <div className="pricing-table-cell">
                    <i className="fal fa-check" />
                  </div>
                  <div className="pricing-table-cell">
                    <i className="fal fa-check" />
                  </div>
                </div>
                <div className="pricing-table-row">
                  <div className="pricing-table-cell pricing-table-row-header ml-auto">
                    Directs Chat Link
            </div>
                  <div className="pricing-table-cell">
                    <i className="fal fa-check" />
                  </div>
                  <div className="pricing-table-cell">
                    <i className="fal fa-check" />
                  </div>
                  <div className="pricing-table-cell">
                    <i className="fal fa-check" />
                  </div>
                  <div className="pricing-table-cell">
                    <i className="fal fa-check" />
                  </div>
                </div>
                <div className="pricing-table-row">
                  <div className="pricing-table-cell pricing-table-row-header ml-auto">
                    Messenger
            </div>
                  <div className="pricing-table-cell">
                    <i className="fal fa-check" />
                  </div>
                  <div className="pricing-table-cell">
                    <i className="fal fa-check" />
                  </div>
                  <div className="pricing-table-cell">
                    <i className="fal fa-check" />
                  </div>
                  <div className="pricing-table-cell">
                    <i className="fal fa-check" />
                  </div>
                </div>
                <div className="pricing-table-row">
                  <div className="pricing-table-cell pricing-table-row-header ml-auto">
                    Email
            </div>
                  <div className="pricing-table-cell">
                    <i className="fal fa-check" />
                  </div>
                  <div className="pricing-table-cell">
                    <i className="fal fa-check" />
                  </div>
                  <div className="pricing-table-cell">
                    <i className="fal fa-check" />
                  </div>
                  <div className="pricing-table-cell">
                    <i className="fal fa-check" />
                  </div>
                </div>
                <div className="pricing-table-row">
                  <div className="pricing-table-cell pricing-table-row-header ml-auto">
                    Apple business Chat
            </div>
                  <div className="pricing-table-cell">-</div>
                  <div className="pricing-table-cell">-</div>
                  <div className="pricing-table-cell">
                    <i className="fal fa-check" />
                  </div>
                  <div className="pricing-table-cell">
                    <i className="fal fa-check" />
                  </div>
                </div>
                <div className="pricing-table-row">
                  <div className="pricing-table-cell pricing-table-row-header ml-auto">
                    SMS
            </div>
                  <div className="pricing-table-cell">-</div>
                  <div className="pricing-table-cell">-</div>
                  <div className="pricing-table-cell">
                    <i className="fal fa-check" />
                  </div>
                  <div className="pricing-table-cell">
                    <i className="fal fa-check" />
                  </div>
                </div>
              </div>
              <div className="pricing-table-title">Chat and monitoring</div>
              <div className="pricing-table">
                <div className="pricing-table-row">
                  <div className="pricing-table-cell pricing-table-row-header ml-auto">
                    Applications
            </div>
                  <div className="pricing-table-cell">
                    <i className="fal fa-check" />
                  </div>
                  <div className="pricing-table-cell">
                    <i className="fal fa-check" />
                  </div>
                  <div className="pricing-table-cell">
                    <i className="fal fa-check" />
                  </div>
                  <div className="pricing-table-cell">
                    <i className="fal fa-check" />
                  </div>
                </div>
                <div className="pricing-table-row">
                  <div className="pricing-table-cell pricing-table-row-header ml-auto">
                    Canned responses
            </div>
                  <div className="pricing-table-cell">
                    <i className="fal fa-check" />
                  </div>
                  <div className="pricing-table-cell">
                    <i className="fal fa-check" />
                  </div>
                  <div className="pricing-table-cell">
                    <i className="fal fa-check" />
                  </div>
                  <div className="pricing-table-cell">
                    <i className="fal fa-check" />
                  </div>
                </div>
                <div className="pricing-table-row">
                  <div className="pricing-table-cell pricing-table-row-header ml-auto">
                    Pre-chat &amp; post-chat surveys
            </div>
                  <div className="pricing-table-cell">default only</div>
                  <div className="pricing-table-cell">
                    <i className="fal fa-check" />
                  </div>
                  <div className="pricing-table-cell">
                    <i className="fal fa-check" />
                  </div>
                  <div className="pricing-table-cell">
                    <i className="fal fa-check" />
                  </div>
                </div>
                <div className="pricing-table-row">
                  <div className="pricing-table-cell pricing-table-row-header ml-auto">
                    Ticket form
            </div>
                  <div className="pricing-table-cell">default only</div>
                  <div className="pricing-table-cell">
                    <i className="fal fa-check" />
                  </div>
                  <div className="pricing-table-cell">
                    <i className="fal fa-check" />
                  </div>
                  <div className="pricing-table-cell">
                    <i className="fal fa-check" />
                  </div>
                </div>
                <div className="pricing-table-row">
                  <div className="pricing-table-cell pricing-table-row-header ml-auto">
                    Agent rating
            </div>
                  <div className="pricing-table-cell">
                    <i className="fal fa-check" />
                  </div>
                  <div className="pricing-table-cell">
                    <i className="fal fa-check" />
                  </div>
                  <div className="pricing-table-cell">
                    <i className="fal fa-check" />
                  </div>
                  <div className="pricing-table-cell">
                    <i className="fal fa-check" />
                  </div>
                </div>
                <div className="pricing-table-row">
                  <div className="pricing-table-cell pricing-table-row-header ml-auto">
                    Customers detail
            </div>
                  <div className="pricing-table-cell">
                    <i className="fal fa-check" />
                  </div>
                  <div className="pricing-table-cell">
                    <i className="fal fa-check" />
                  </div>
                  <div className="pricing-table-cell">
                    <i className="fal fa-check" />
                  </div>
                  <div className="pricing-table-cell">
                    <i className="fal fa-check" />
                  </div>
                </div>
                <div className="pricing-table-row">
                  <div className="pricing-table-cell pricing-table-row-header ml-auto">
                    Multiple website support
            </div>
                  <div className="pricing-table-cell">
                    <i className="fal fa-check" />
                  </div>
                  <div className="pricing-table-cell">
                    <i className="fal fa-check" />
                  </div>
                  <div className="pricing-table-cell">
                    <i className="fal fa-check" />
                  </div>
                  <div className="pricing-table-cell">
                    <i className="fal fa-check" />
                  </div>
                </div>
                <div className="pricing-table-row">
                  <div className="pricing-table-cell pricing-table-row-header ml-auto">
                    Customers tracking
            </div>
                  <div className="pricing-table-cell">up to 100</div>
                  <div className="pricing-table-cell">up to 400</div>
                  <div className="pricing-table-cell">1000</div>
                  <div className="pricing-table-cell">1000</div>
                </div>
                <div className="pricing-table-row">
                  <div className="pricing-table-cell pricing-table-row-header ml-auto">
                    Transfers
            </div>
                  <div className="pricing-table-cell">
                    <i className="fal fa-check" />
                  </div>
                  <div className="pricing-table-cell">
                    <i className="fal fa-check" />
                  </div>
                  <div className="pricing-table-cell">
                    <i className="fal fa-check" />
                  </div>
                  <div className="pricing-table-cell">
                    <i className="fal fa-check" />
                  </div>
                </div>
                <div className="pricing-table-row">
                  <div className="pricing-table-cell pricing-table-row-header ml-auto">
                    Chat tagging
            </div>
                  <div className="pricing-table-cell">
                    <i className="fal fa-check" />
                  </div>
                  <div className="pricing-table-cell">
                    <i className="fal fa-check" />
                  </div>
                  <div className="pricing-table-cell">
                    <i className="fal fa-check" />
                  </div>
                  <div className="pricing-table-cell">
                    <i className="fal fa-check" />
                  </div>
                </div>
                <div className="pricing-table-row">
                  <div className="pricing-table-cell pricing-table-row-header ml-auto">
                    File sharing
            </div>
                  <div className="pricing-table-cell">
                    <i className="fal fa-check" />
                  </div>
                  <div className="pricing-table-cell">
                    <i className="fal fa-check" />
                  </div>
                  <div className="pricing-table-cell">
                    <i className="fal fa-check" />
                  </div>
                  <div className="pricing-table-cell">
                    <i className="fal fa-check" />
                  </div>
                </div>
                <div className="pricing-table-row">
                  <div className="pricing-table-cell pricing-table-row-header ml-auto">
                    Smart chat routing
            </div>
                  <div className="pricing-table-cell">
                    <i className="fal fa-check" />
                  </div>
                  <div className="pricing-table-cell">
                    <i className="fal fa-check" />
                  </div>
                  <div className="pricing-table-cell">
                    <i className="fal fa-check" />
                  </div>
                  <div className="pricing-table-cell">
                    <i className="fal fa-check" />
                  </div>
                </div>
                <div className="pricing-table-row">
                  <div className="pricing-table-cell pricing-table-row-header ml-auto">
                    Manual chat routing
            </div>
                  <div className="pricing-table-cell">
                    <i className="fal fa-check" />
                  </div>
                  <div className="pricing-table-cell">
                    <i className="fal fa-check" />
                  </div>
                  <div className="pricing-table-cell">
                    <i className="fal fa-check" />
                  </div>
                  <div className="pricing-table-cell">
                    <i className="fal fa-check" />
                  </div>
                </div>
                <div className="pricing-table-row">
                  <div className="pricing-table-cell pricing-table-row-header ml-auto">
                    Work scheduler
            </div>
                  <div className="pricing-table-cell">-</div>
                  <div className="pricing-table-cell">-</div>
                  <div className="pricing-table-cell">
                    <i className="fal fa-check" />
                  </div>
                  <div className="pricing-table-cell">
                    <i className="fal fa-check" />
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center">
              <a className="btn btn-secondary" href="/dang-ky">Đăng ký miễn phí</a>
            </div>
          </div>
        </section>
        <section className="section section-pricing-faq section-padding">
          <div className="container">
            <div className="section-header text-center">
              <h3 className="title">Frequently Asked Questions</h3>
            </div>
            <div className="row pricing-faq-list">
              <div className="pricing-faq-item col-md-4">
                <div className="pricing-faq-title">
                  Do I have to pay for each agent account?
          </div>
                <div className="pricing-faq-body">
                  Yes, we charge a fee for every agent account created, regardless of
                  whether the agent is logged in or not.
          </div>
              </div>
              <div className="pricing-faq-item col-md-4">
                <div className="pricing-faq-title">
                  Are there any additional costs?
          </div>
                <div className="pricing-faq-body">
                  No, there are no additional costs and you won’t be charged anything
                  extra.
          </div>
              </div>
              <div className="pricing-faq-item col-md-4">
                <div className="pricing-faq-title">
                  Do you provide customer service agents?
          </div>
                <div className="pricing-faq-body">
                  No, we provide the tools for your agents. See our Experts page if
                  you need help with staffing your live chat.
          </div>
              </div>
              <div className="pricing-faq-item col-md-4">
                <div className="pricing-faq-title">How can I pay?</div>
                <div className="pricing-faq-body">
                  We accept all major credit cards. The subscriptions renew
                  automatically at the end of each billing cycle. All listed prices
                  are in USD.
          </div>
              </div>
              <div className="pricing-faq-item col-md-4">
                <div className="pricing-faq-title">What is your refund policy?</div>
                <div className="pricing-faq-body">
                  We aim to provide the same kind of fair service to all our
                  customers. See what situations warrant a refund.
          </div>
              </div>
              <div className="pricing-faq-item col-md-4">
                <div className="pricing-faq-title">
                  Are there any discounts avalaible?
          </div>
                <div className="pricing-faq-body">
                  Yes, you can get a 15% discount for subscribing for 12 months.
          </div>
              </div>
              <div className="pricing-faq-item col-md-4">
                <div className="pricing-faq-title">
                  Can I use LiveChat on several websites?
          </div>
                <div className="pricing-faq-body">
                  Feel free to use your live chat on as many websites as you wish.
          </div>
              </div>
              <div className="pricing-faq-item col-md-4">
                <div className="pricing-faq-title">Other questions?</div>
                <div className="pricing-faq-body">Drop us a line on the chat.</div>
              </div>
            </div>
          </div>
        </section>
        <Trial />
        <Download /> 
     </div>;

    </Layout>
  )
}
