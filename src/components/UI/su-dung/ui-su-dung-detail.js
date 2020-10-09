import React, { Component } from "react"
import { getFileMarkdown } from "../../../utils/firebase"
import CommonMethods from "../../../core/common-methods"
import { Link } from "gatsby"
import SuDungProcess from "./su-dung-process"

export default class UISuDungDetail extends Component {
  constructor({ ...props }) {
    super()
    let match = window.location.pathname.match(/.*-(\d+)md/);
    let id = match[1];
    this.state = { id: id, props: props, filename: props.filename, html: "", fromRouter: props.uri.replace("/" + props.filename, "") }
    this.loadData = this.loadData.bind(this)
    this.loadContent = this.loadContent.bind(this)

  }
  componentDidMount() {
    this.loadData()
  }
  async loadData() {
    this.loadContent();
    let data = await SuDungProcess.get();
    this.setState({
      data: data ?? []
    })
  }
  async loadContent(id = null) {
    id = id ?? this.state.id;
    try {
      let res = await getFileMarkdown(id)
      this.setState({
        markdown: res,
      })
    } catch (error) {
      alert(error)
    }
  }

  render() {
    return (
      <div className="row flex-xl-nowrap">
        <div className="col-xl-3">
          <div className="support-menu-left">
            {this.state.data && this.state.data.map((item, index) => {
              return (<ul className="support-menu-list collapse show" id="collapseMenu" style={{}}>
                <li className="support-menu-item">
                  <h3>{item.NhomFiles?.TenNhomFiles ?? ""}</h3>
                  {
                    item && item.NhomFiles_Files.map((f, i) => {
                      return <ul className="support-menu-sub">
                        <li className="support-menu-item active">
                          <Link onClick={(e) => this.loadContent(f.Files.Id)} to={this.state.fromRouter + `/${CommonMethods.convertUrlFiles(f.Files.TieuDe)}-${f.Files.Id}md.html`}> <span className="support-img"></span> {f.Files.TieuDe}</Link>
                        </li>
                      </ul>
                    })
                  }


                </li>
              </ul>)
            })}
          </div>
        </div>
        <div className="col-xl-6">
          <div className="container">
            <div className="box-detail">
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to="/ho-tro"> <span className="support-img"></span> Hỗ trợ</Link>
                  </li>
                  <li className="breadcrumb-item">
                    <Link to="/su-dung"> <span className="support-img"></span> Sử dụng CoChat</Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Archives section overview
            </li>
                </ol>
              </nav>
              <h1 className="box-detail-title">{this.state.name}</h1>
              <p className="box-detail-desc">
                <i className="far fa-sync-alt" /> Cập nhật: Mar 25, 2020
        </p>
              <div
                className="detail-content"
                data-spy="scroll"
                data-target="#navbar-scroll"
                data-offset={100}
              >
                <div>
                  {
                    <div
                      dangerouslySetInnerHTML={{
                        __html: CommonMethods.rawMarkup(this.state.markdown),
                      }}
                    />
                  }{" "}
                </div>
              </div>
            </div>

          </div>
        </div>
        <div className="col-xl-3 col-right d-none d-xl-block">
          <div className="support-menu-right">
            <div className="support-menu-title">Nội dung</div>

          </div>
        </div>
      </div>


    )
  }
}
