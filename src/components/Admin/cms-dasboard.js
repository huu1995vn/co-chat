import React from "react"
import View from "../View"
import LocalstoreService from "../../core/services/localstore.service"
LocalstoreService.init()
export default () => {
  var infoThanhVien = LocalstoreService.getUser()
  return (
    <View title="Your Dasboard">
      <p>
        Chào mừng bạn đến với app CoChat
      </p>
      <ul>
        <li>Họ tên: {infoThanhVien.HoTen}</li>
        <li>Địa chỉ: {infoThanhVien.DiaChi}</li>
        <li>Email: {infoThanhVien.Email}</li>
      </ul>
    </View>
  )
}

