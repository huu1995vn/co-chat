import React, { Component } from "react"
import View from "../../View"
import CommonMethods from "../../../core/common-methods"
import LienHeProcess from "./lien-he-process"

export default class CMSLienHe extends Component {
  constructor(props) {
    super(props)
    this.loadData = this.loadData.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.delete = this.delete.bind(this)

    this.state = { id: Number.parseInt(props.id ?? -1) }
  }

  componentDidMount() {
    this.loadData()
  }
  async loadData() {
    let data = await LienHeProcess.getIndex(this.state.id)
    this.setState({
      data: data,
    })
  }
  handleChange(e) {
    e.preventDefault()
    let data = this.state.data ?? {}
    try {
      const attribute = e.target.name
      data[attribute] = e.target.value
      this.setState({
        data: data,
      })
    } catch (error) {
      console.log(error)
    }
  }
  async delete(e) {
    e.preventDefault()
    try {
      let res = await LienHeProcess.delete(this.state.id)
      if (res) {
        alert("Xóa thành công")
        CommonMethods.navigateToPage_goBack()
      }
    } catch (error) {
      alert(error)
    }
  }

  render() {
    return (
      <View title="Chi tiết Liên Hệ">
        {this.state.data && (
          <div>
            <form id="insertForm" className="form-horizontal">
              <div className="form-group">
                <label>
                  Tiêu đề
                  <input
                    className="form-control"
                    type="text"
                    placeholder="text"
                    name="TieuDe"
                    defaultValue={this.state.data.TieuDe}
                    onChange={this.handleChange}
                  />
                </label>
              </div>
              <div className="form-group">
                <label>
                  Họ tên
                  <input
                    className="form-control"
                    type="text"
                    placeholder="text"
                    name="HoTen"
                    defaultValue={this.state.data.HoTen}
                    onChange={this.handleChange}
                  />
                </label>
              </div>
              <div className="form-group">
                <label>
                  Email
                  <input
                    className="form-control"
                    type="text"
                    placeholder="text"
                    defaultValue={this.state.data.Email}
                    name="Email"
                    onChange={this.handleChange}
                  />
                </label>
              </div>
              <div className="form-group">
                <label>
                  Điện thoại
                  <input
                    className="form-control"
                    type="text"
                    placeholder="text"
                    defaultValue={this.state.data.DienThoai}
                    name="DienThoai"
                    onChange={this.handleChange}
                  />
                </label>
              </div>
              <div className="form-group">
                <label>
                  Địa chỉ
                  <input
                    className="form-control"
                    type="text"
                    placeholder="text"
                    defaultValue={this.state.data.DiaChi}
                    name="DiaChi"
                    onChange={this.handleChange}
                  />
                </label>
              </div>
              <div className="form-group">
                <label>
                  Nội dung
                  <input
                    className="form-control"
                    type="text"
                    placeholder="text"
                    defaultValue={this.state.data.NoiDung}
                    name="NoiDung"
                    onChange={this.handleChange}
                    multiple
                  />
                </label>
              </div>
              <label>
                Trạng thái
                <input
                  className="form-control"
                  type="number"
                  placeholder="integer"
                  name="TrangThai"
                  defaultValue={this.state.data.TrangThai}
                  onChange={this.handleChange}
                />
              </label>
              {this.state.id > 0 && (
                <div className="form-group">
                  <button
                    type="submit"
                    color="red"
                    className="btn btn-outline-primary"
                    onClick={this.delete}
                  >
                    Xóa
                  </button>
                </div>
              )}
            </form>
          </div>
        )}
      </View>
    )
  }
}
