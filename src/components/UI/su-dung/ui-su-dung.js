import React, { Component } from "react"
import CommonMethods from "../../../core/common-methods"
import { Link } from "gatsby"
import SuDungProcess from "./su-dung-process"

export default class UISuDungDetail extends Component {
  constructor({ ...props }) {
    super()
    this.state = { props: props, filename: props.filename, html: "", fromRouter: props.uri.replace("/" + props.filename, "") }
    this.loadData = this.loadData.bind(this)

  }
  componentDidMount() {
    this.loadData()
  }
  async loadData() {

    let data = await SuDungProcess.get();
    this.setState({
      data: data ?? []
    })
  }

  render() {
    return <section className="section section-support section-padding">
      <div className="container">
        <div className="section-header text-center">
          <h3 className="title">
            Sử dụng<span>CoChat</span>
          </h3>
          <p className="desc">
            Nhận câu trả lời và khám phá những các để sử dụng CoChat dễ dàng.
      </p>
        </div>
        <div className="support-list-container">
          <div className="support-list">
            {this.state.data && this.state.data.map((item, index) => {
              return (<div key={"TaiLieu_NhomFiles-" + index} className="support-list-item">
                <div className="support-list-item-header">
                  <i className="fal fa-history" />
                  <h3 className="title">{item.NhomFiles?.TenNhomFiles ?? ""}</h3>
                </div>
                <div className="support-body">
                  <div className="support-title">Tất cả</div>
                  <div className="row support-item-link-list">

                    {
                      item && item.NhomFiles_Files.map((f, i) => {
                        return <div key={"file-" + i} className="col-md-6">
                          <div className="support-item-link-item">
                            <Link className="support-item-link" to={this.state.props.path + `/${CommonMethods.convertUrlFiles(f.Files.TieuDe)}-${f.Files.Id}md.html`}> <span className="support-img"></span> {f.Files.TieuDe}</Link>
                          </div>
                        </div>
                      })
                    }

                  </div>
                </div>
              </div>)
            })
            }
          </div>
        </div>
      </div>
    </section>
  }
}
