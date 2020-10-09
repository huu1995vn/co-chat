import React, { Component } from "react"
import View from "../../View"
import CommonMethods from "../../../core/common-methods"
import NhomFilesProcess from "./nhom-files-process"
import CMSNhomFiles_Files from "./nhom-files_files/cms-nhom-files_files-detail"
export default class CMSNhomFiles extends Component {
  constructor(props) {
    super(props)
    this.loadData = this.loadData.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.delete = this.delete.bind(this)
    this.onSave = this.onSave.bind(this)
    this.state = { id: Number.parseInt(props.id ?? -1) }
  }

  componentDidMount() {
    this.loadData()
  }
  async loadData() {
    let data = await NhomFilesProcess.getIndex(this.state.id)
    this.setState({
      data: Object.assign({ ThuTu: 1, TrangThai: 1 }, data ?? {}),
    })
  }
  handleChange(e) {
    e.preventDefault()
    let data = Object.assign({}, this.state.data ?? {})
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
      let res = await NhomFilesProcess.delete(this.state.id)
      if (res) {
        alert("Xóa thành công")
        CommonMethods.navigateToPage_goBack()
      }
    } catch (error) {
      alert(error)
    }
  }
  async onSave(e) {
    e.preventDefault()
    try {
      let dataClone = {}
      dataClone.ThuTu = this.state.data.ThuTu
      dataClone.TrangThai = this.state.data.TrangThai
      dataClone.TenNhomFiles = this.state.data.TenNhomFiles
      dataClone.MoTaNgan = this.state.data.MoTaNgan
      if (this.state.id && this.state.id > 0) {
        dataClone.Id = this.state.id

        let res = await NhomFilesProcess.update(dataClone)
        if (res.data.update_NhomFiles.affected_rows > 0) {
          alert("Cập nhật thành công")
        }
      } else {
        let res = await NhomFilesProcess.create(dataClone)
        if (res.data.insert_NhomFiles.affected_rows > 0) {
          alert("Tạo mới thành công")

        }
      }
    } catch (error) {
      alert(error)
    }
  }
  render() {
    return (
      <View title="Chi tiết Nhóm files">
        {this.state.data && (
          <form id="insertForm" className="form-horizontal">
            <div className="form-group">
              <button
                type="submit"
                color="red"
                className="btn btn-outline-primary"
                onClick={e => this.delete(e)}
              >
                Xóa
              </button>
              <button
                type="submit"
                color="yellow"
                className="btn btn-outline-primary"
                onClick={e => this.onSave(e)}
              >
                Lưu
              </button>
            </div>
            <div className="form-group">
              <label>
                Tên nhóm tài liệu
                <input
                  className="form-control"
                  type="text"
                  placeholder="Nhập tiêu đề"
                  name="TenNhomFiles"
                  defaultValue={this.state.data.TenNhomFiles || ""}
                  onChange={this.handleChange}
                />
              </label>
            </div>
            <div className="form-group">
              <label>
                Mô tả ngắn
                <input
                  className="form-control"
                  type="text"
                  placeholder="Nhập mô tả"
                  name="MoTaNgan"
                  defaultValue={this.state.data.MoTaNgan}
                  onChange={this.handleChange}
                />
              </label>
            </div>
            <div className="form-group">
              <label>
                Thứ tự
                <input
                  className="form-control"
                  type="number"
                  placeholder="Thứ tự"
                  name="ThuTu"
                  defaultValue={this.state.data.ThuTu}
                  onChange={this.handleChange}
                />
              </label>
            </div>
            <div className="form-group">
              <label>
                Trạng thái
                <input
                  className="form-control"
                  type="number"
                  placeholder="Trạng thái"
                  name="TrangThai"
                  defaultValue={this.state.data.TrangThai}
                  onChange={this.handleChange}
                />
              </label>
            </div>
            <CMSNhomFiles_Files id={this.state.id}></CMSNhomFiles_Files>
           </form>
        )}
      </View>
    )
  }
}
