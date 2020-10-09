import React, { Component } from "react"
import View from "../../View"
import CommonMethods from "../../../core/common-methods"
import TaiLieuProcess from "./tai-lieu-process"

export default class CMSTaiLieu extends Component {
  constructor(props) {
    super(props)
    this.loadData = this.loadData.bind(this)
    this.onSelect = this.onSelect.bind(this)
    this.state = {}
  }

  componentDidMount() {
    this.loadData()
  }
  async loadData() {
    let data = await TaiLieuProcess.get()
    this.setState({
      data: data,
    })
  }

  onSelect(id) {
    CommonMethods.navigateToPage_CmsTaiLieu(id)
  }
  render() {
    return (
      <View title="Danh sách Tài liệu">
        <button
          type="submit"
          color="yellow"
          className="btn btn-outline-primary"
          onClick={event => {
            this.onSelect(-1)
          }}
        >
          Thêm
        </button>
        {this.state.data && (
          <table>
            <thead>
              <tr>
                <th colSpan={1} rowSpan={1}>
                  <p>Tên tài liệu</p>
                </th>
                <th colSpan={1} rowSpan={1}>
                  <p>Mô tả ngắn</p>
                </th>
                <th colSpan={1} rowSpan={1}>
                  <p>Thứ tự</p>
                </th>
                <th colSpan={1} rowSpan={1}>
                  <p>Trạng thái</p>
                </th>
                <th colSpan={1} rowSpan={1}>
                  <p></p>
                </th>
              </tr>
            </thead>
            <tbody>
              {this.state.data.map((item, i) => {
                return (
                  <tr key={item.Id}>
                    <td colSpan={1} rowSpan={1}>
                      <p>{item.TenTaiLieu}</p>
                    </td>
                    <td colSpan={1} rowSpan={1}>
                      <p>{item.MoTaNgan}</p>
                    </td>
                    <td colSpan={1} rowSpan={1}>
                      <p>{item.ThuTu}</p>
                    </td>
                    <td colSpan={1} rowSpan={1}>
                      <p>{item.TrangThai}</p>
                    </td>
                    <td colSpan={1} rowSpan={1}>
                      <button
                        className="btn btn-outline-primary"
                        onClick={() => {
                          this.onSelect(item.Id)
                        }}
                      >
                        Edit
                      </button>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        )}
      </View>
    )
  }
}
