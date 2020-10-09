import React, { Component } from "react"
import NhomFiles_FilesProcess from "./nhom-files_files-process"


export default class CMSNhomFiles_Files extends Component {
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
    let dataFiles = await NhomFiles_FilesProcess.getIdNhomFiles(this.state.id)
    console.log("====================:", dataFiles);
    let notId =[];
    if(dataFiles && dataFiles.length>0)
    {
      dataFiles.forEach(element => {        
        notId.push(element.IdFiles)
      })
    }
   
    let dataFilesNotNhom = await NhomFiles_FilesProcess.getFilesByNotId(notId)
    this.setState({
      dataFilesNotNhom: dataFilesNotNhom ?? [],
      dataFiles: dataFiles ?? [],

    })
  }
  async onAdd(e, idFiles)
  {
    e.preventDefault()

    try {
      let res = await NhomFiles_FilesProcess.add(this.state.id, idFiles)
      if (res) {
        alert("Thêm thành công")
        this.loadData()
      }
    } catch (error) {
      alert(error)
    }

  }
  async onDel(e, idNhomFiles_Files)
  {
    e.preventDefault()

    try {
      let res = await NhomFiles_FilesProcess.delete(idNhomFiles_Files)
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
          <strong>Files của nhóm</strong>
          <table>
            <thead>
              <tr>
                <th colSpan={1} rowSpan={1}>
                  <p>Tiêu đề</p>
                </th>
                <th colSpan={1} rowSpan={1}>
                  <p>Mô tả ngắn</p>
                </th>
                <th colSpan={1} rowSpan={1}>
                  <p></p>
                </th>
              </tr>
            </thead>
            {this.state.dataFiles && <tbody>
              {this.state.dataFiles.map((item, i) => {
                return (
                  <tr key={"Nhom"+item.Id}>
                    <td colSpan={1} rowSpan={1}>
                      <p>{item.Files.TieuDe}</p>
                    </td>
                    <td colSpan={1} rowSpan={1}>
                      <p>{item.Files.MoTaNgan}</p>
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
          <strong>Files không thuộc nhóm</strong>
          <table>
            <thead>
              <tr>
                <th colSpan={1} rowSpan={1}>
                  <p>Tiêu đề</p>
                </th>
                <th colSpan={1} rowSpan={1}>
                  <p>Mô tả ngắn</p>
                </th>
                <th colSpan={1} rowSpan={1}>
                  <p></p>
                </th>
              </tr>
            </thead>
            {this.state.dataFilesNotNhom && <tbody>
              {this.state.dataFilesNotNhom.map((item, i) => {
                return (
                  <tr key={item.Id}>
                    <td colSpan={1} rowSpan={1}>
                      <p>{item.TieuDe}</p>
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
