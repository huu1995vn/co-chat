import React, { Component } from "react"
import View from "../../View"
import CommonMethods from "../../../core/common-methods"
import FilesProcess from "./files-process"
import { uploadFileMarkdown, getFileMarkdown } from "../../../utils/firebase"
export default class CMSFiles extends Component {
  constructor(props) {
    super(props)
    this.loadData = this.loadData.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.delete = this.delete.bind(this)
    this.onSave = this.onSave.bind(this)
    this.state = { id: Number.parseInt(props.id ?? -1), description: "" }
  }

  componentDidMount() {
    this.loadData()
  }
  async loadData() {
    let data = await FilesProcess.getIndex(this.state.id)
    let description = await getFileMarkdown(this.state.id)
    this.setState({
      data: Object.assign({ ThuTu: 1, TrangThai: 1 }, data ?? {}),
      description: description,
    })
  }
  handleChange(e) {
    e.preventDefault()
    let data = Object.assign({}, this.state.data ?? {})
    try {
      const attribute = e.target.name
      if (attribute === "Description") {
        this.setState({
          description: e.target.value,
        })
      } else {
        data[attribute] = e.target.value
        this.setState({
          data: data,
        })
      }
    } catch (error) {
      console.log(error)
    }
  }
  async delete(e) {
    e.preventDefault()
    try {
      let res = await FilesProcess.delete(this.state.id)
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
      dataClone.TieuDe = this.state.data.TieuDe
      dataClone.MoTaNgan = this.state.data.MoTaNgan
      if (this.state.id && this.state.id > 0) {
        dataClone.Id = this.state.id

        let res = await FilesProcess.update(dataClone)
        if (res.data.update_Files.affected_rows > 0) {
          alert("Cập nhật thành công")
          uploadFileMarkdown(this.state.description, this.state.data.Id)
        }
      } else {
        let res = await FilesProcess.create(dataClone)
        if (res.data.insert_Files.affected_rows > 0) {
          alert("Tạo mới thành công")
          
          uploadFileMarkdown(
            this.state.description,
            res.data.insert_Files.returning[0].Id
          )
        }
      }
    } catch (error) {
      alert(error)
    }
  }
  render() {
    return (
      <View title="Chi tiết Files">
        {this.state.data && (
          <form id="insertForm" className="form-horizontal">
            <div className="form-group">
              <label>
                Tiêu đề
                <input
                  className="form-control"
                  type="text"
                  placeholder="Nhập tiêu đề"
                  name="TieuDe"
                  defaultValue={this.state.data.TieuDe || ""}
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
                Nội dung
                <input
                  className="form-control"
                  type="text"
                  placeholder="Nhập nội dung"
                  name="Description"
                  defaultValue={this.state.description}
                  onChange={this.handleChange}
                  multiple
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
          </form>
        )}
      </View>
    )
  }
}
