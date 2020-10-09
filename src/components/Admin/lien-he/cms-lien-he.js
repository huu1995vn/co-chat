

import React, { Component } from "react"
import View from "../../View"
import CommonMethods from "../../../core/common-methods";
import LienHeProcess from "./lien-he-process";

export default class CMSLienHe extends Component {

  constructor(props) {
    super(props);
    this.loadData = this.loadData.bind(this);
    this.onSelect = this.onSelect.bind(this);

    this.state = {};
  }

  componentDidMount() {
    this.loadData()
  }
  async loadData() {

    let data = await LienHeProcess.get();
    this.setState({
      "data": data
    })

  }

  onSelect(id) {
    CommonMethods.navigateToPage_CmsLienHe(id)
  }

  render() {
    return <View title="Danh sách Liên Hệ">
      {this.state.data &&
        <table>
          <thead>
            <tr>
              <th colSpan={1} rowSpan={1}>
                <p>Tiêu đề</p>
              </th>
              <th colSpan={1} rowSpan={1}>
                <p>Họ tên</p>
              </th>
              <th colSpan={1} rowSpan={1}>
                <p>Email</p>
              </th>
              <th colSpan={1} rowSpan={1}>
                <p>Điện thoại</p>
              </th>
              <th colSpan={1} rowSpan={1}>
                <p>Địa chỉ</p>
              </th>

              <th colSpan={1} rowSpan={1}>
                <p>Ngày tạo</p>
              </th>

              <th colSpan={1} rowSpan={1}>
                <p>Trạng thái</p>
              </th>
              <th colSpan={1} rowSpan={1}>
              </th>
            </tr>
          </thead>
          <tbody>
            {this.state.data.map((item, i) => {

              return (
                <tr key={item.Id}>
                  <td colSpan={1} rowSpan={1}>
                    <p>{item.TieuDe}</p>
                  </td>
                  <td colSpan={1} rowSpan={1}>
                    <p>{item.HoTen}</p>
                  </td>
                  <td colSpan={1} rowSpan={1}>
                    <p>{item.Email}</p>
                  </td>
                  <td colSpan={1} rowSpan={1}>
                    <p>{item.DienThoai}</p>
                  </td>
                  <td colSpan={1} rowSpan={1}>
                    <p>{item.DiaChi}</p>
                  </td>
                  <td colSpan={1} rowSpan={1}>
                    <p>{item.NgayTao}</p>
                  </td>

                  <td colSpan={1} rowSpan={1}>
                    <p>{item.TrangThai}</p>
                  </td>
                  <td colSpan={1} rowSpan={1}>
                    <button className="btn btn-outline-primary" onClick={() => { this.onSelect(item.Id) }} >Edit</button>
                  </td>
                </tr>
              )
            })}


          </tbody>
        </table>

      }

    </View>


  }

}


