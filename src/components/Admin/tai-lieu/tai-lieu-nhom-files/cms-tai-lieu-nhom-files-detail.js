import React, { Component } from "react"
import TaiLieu_NhomFilesProcess from "./tai-lieu-nhom-files-process"


export default class CMSTaiLieu_TaiLieu extends Component {
  constructor(props) {
    super(props)
    this.state = { id: Number.parseInt(props.id ?? -1)}
    this.onAdd = this.onAdd.bind(this)
    this.onDel = this.onDel.bind(this)

  }

  componentDidMount() {
    this.loadData()
  }
  async loadData() {
    let dataNhomFiles = await TaiLieu_NhomFilesProcess.getIdTaiLieu(this.state.id)
    let notId =[];
    if(dataNhomFiles && dataNhomFiles.length>0)
    {
      dataNhomFiles.forEach(element => {        
        notId.push(element.IdNhomFiles)
      })
    }
   
    let dataNhomFilesNotNhom = await TaiLieu_NhomFilesProcess.getNhomFilesByNotId(notId)
    this.setState({
      dataNhomFilesNotNhom: dataNhomFilesNotNhom ?? [],
      dataNhomFiles: dataNhomFiles ?? [],

    })
  }
  async onAdd(e, idNhomFiles)
  {
    e.preventDefault()

    try {
      let res = await TaiLieu_NhomFilesProcess.add(this.state.id, idNhomFiles)
      if (res) {
        alert("Thêm thành công")
        this.loadData()
      }
    } catch (error) {
      alert(error)
    }

  }
  async onDel(e, idTaiLieu_TaiLieu)
  {
    e.preventDefault()

    try {
      let res = await TaiLieu_NhomFilesProcess.delete(idTaiLieu_TaiLieu)
      if (res) {
        alert("Xóa thành công")
        this.loadData()
      }
    } catch (error) {
      alert(error)
    }

  }
  render() {
    return (
      <div className="row">
        <div className="col-md-6">
          <strong>Nhóm files của nhóm</strong>
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
                  <tr key={"Nhom"+item.Id}>
                    <td colSpan={1} rowSpan={1}>
                      <p>{item.NhomFiles.TenNhomFiles}</p>
                    </td>
                    <td colSpan={1} rowSpan={1}>
                      <p>{item.NhomFiles.MoTaNgan}</p>
                    </td>
                    <td colSpan={1} rowSpan={1}>
                      <button
                        className="btn btn-outline-primary"
                        onClick={(e) => {
                          this.onDel(e, item.Id)
                        }}
                      >
                        Xóa
                      </button>
                    </td>
                  </tr>
                )
              })}
            </tbody>}
          </table>
        </div>
        <div className="col-md-6">
          <strong>Nhóm files không thuộc nhóm</strong>
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
            {this.state.dataNhomFilesNotNhom && <tbody>
              {this.state.dataNhomFilesNotNhom.map((item, i) => {
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
                          this.onAdd(e, item.Id)
                        }}
                      >
                        Add
                      </button>
                    </td>
                  </tr>
                )
              })}
            </tbody>}
          </table>
        </div>

      </div>

    )
  }
}
