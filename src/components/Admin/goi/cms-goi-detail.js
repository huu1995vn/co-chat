import React, { Component } from "react"
import View from "../../View"
import CommonMethods from "../../../core/common-methods"
import GoiProcess from "./goi-process"
export default class CMSGoi extends Component {
  constructor(props) {
    super(props)
    this.loadData = this.loadData.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.delete = this.delete.bind(this)
    this.onSave = this.onSave.bind(this)
    this.onChosseNhomFiles = this.onChosseNhomFiles.bind(this)
    this.state = { id: Number.parseInt(props.id ?? -1) }
  }

  componentDidMount() {
    this.loadData()
  }
  async loadData() {
    let data = await GoiProcess.getIndex(this.state.id)
    this.setState({
      data: Object.assign({ ThuTu: 1, TrangThai: 1, IsDefault: false }, data ?? {}),
    })
    this.loadNhomFiles()
  }

  async loadNhomFiles() {
    let data = await GoiProcess.getNhomFiles()
    this.setState({
      dataNhomFiles: data??[],
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
      let res = await GoiProcess.delete(this.state.id)
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
      dataClone.TenGoi = this.state.data.TenGoi
      dataClone.MoTaNgan = this.state.data.MoTaNgan
      dataClone.Gia = this.state.data.Gia
      dataClone.GiaKhuyenMai = this.state.data.GiaKhuyenMai
      dataClone.IdNhomFiles =  this.state.data.IdNhomFiles

      if (this.state.id && this.state.id > 0) {
        dataClone.Id = this.state.id

        let res = await GoiProcess.update(dataClone)
        if (res.data.update_Goi.affected_rows > 0) {
          alert("Cập nhật thành công")
        }
      } else {
        let res = await GoiProcess.create(dataClone)
        if (res.data.insert_Goi.affected_rows > 0) {
          alert("Tạo mới thành công")

        }
      }
    } catch (error) {
      alert(error)
    }
  }

  async onChosseNhomFiles(e, nhomFiles)
  {
    e.preventDefault()

    let data = Object.assign({}, this.state.data ?? {})
    try {
      data["IdNhomFiles"] = nhomFiles.Id
      data["NhomFiles"] = nhomFiles
      this.setState({
        data: data,
      })
    } catch (error) {
      console.log(error)
    }
  }
  render() {
    return (
      <View title="Chi tiết Gói">
        {this.state.data && (
          <form id="insertForm" className="form-horizontal">
            <div className="form-group">
              <label>
                Tên gói
                <input
                  className="form-control"
                  type="text"
                  placeholder="Nhập tên gói"
                  name="TenGoi"
                  defaultValue={this.state.data.TenGoi || ""}
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
                Giá
                <input
                  className="form-control"
                  type="number"
                  placeholder="Nhập giá bán"
                  name="Gia"
                  defaultValue={this.state.data.Gia}
                  onChange={this.handleChange}
                />
              </label>
            </div>
            <div className="form-group">
              <label>
                Giá khuyến mãi
                <input
                  className="form-control"
                  type="number"
                  placeholder="Nhập giá khuyến mãi"
                  name="GiaKhuyenMai"
                  defaultValue={this.state.data.GiaKhuyenMai}
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
            <div className="form-group">
            <strong>Nhóm files: {this.state.data?.NhomFiles?.TenNhomFiles}</strong>
              <table>
                <thead>
                  <tr>
                    <th colSpan={1} rowSpan={1}>
                      <p>Tên nhóm files</p>
                    </th>
                    <th colSpan={1} rowSpan={1}>
                      <p>Mô tả ngắn</p>
                    </th>
                    <th colSpan={1} rowSpan={1}>
                      <p></p>
                    </th>
                  </tr>
                </thead>
                {this.state.dataNhomFiles && <tbody>
                  {this.state.dataNhomFiles.map((item, i) => {
                    return (
                      <tr key={item.Id}>
                        <td colSpan={1} rowSpan={1}>
                          <p>{item.TenNhomFiles}</p>
                        </td>
                        <td colSpan={1} rowSpan={1}>
                          <p>{item.MoTaNgan}</p>
                        </td>
                        <td colSpan={1} rowSpan={1}>
                          <button
                            className="btn btn-outline-primary"
                            onClick={(e) => {
                              this.onChosseNhomFiles(e, item)
                            }}
                          >
                            Chọn
                      </button>
                        </td>
                      </tr>
                    )
                  })}
                </tbody>}
              </table>
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
