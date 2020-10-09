import React from "react"
import View from "../View"
export default () => {
  return (
    <View title="Danh sách tài liệu">
      Danh sách tài liệu
      <ul className="nav flex-column">
       
        <li className="nav-item">
          <a className="nav-link" href="tai-lieu/bao-mat">

            Chính sách bảo mật
                      </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="tai-lieu/lien-he">
            Cách liên hệ
          </a>
        </li>
        

      </ul>

    </View>
  )
}

