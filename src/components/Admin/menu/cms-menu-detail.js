import React from "react"
import View from "../../View"
import { gql, useQuery, useMutation } from "@apollo/client"

const GET_MENUS = gql`
  query GetMenu($id: bigint!) {
    Menu(where: { Id: { _eq: $id }, TrangThai: { _lte: 2 } }) {
      Id
      IdAdminCapNhat
      PathPrefix
      TenMenu
      TenMenu
      TrangThai
      NgayTao
      NgayCapNhat
      IdAdminTao
      IdMenuParent
      TuKhoaTimKiem
      ThuTu
    }
  }
`
//Cập nhật trạng thái 3
const UPDATE_TRANGTHAI_MENU = gql`
  mutation UpdateTrangThaiMenu($id: bigint!, $trangThai: Int!) {
    update_Menu(_set: { TrangThai: $trangThai }, where: { Id: { _eq: $id } }) {
      affected_rows
    }
  }
`

const UPDATE_MENU = gql`
  mutation UpdateMenu($id: bigint!, $objects: Menu_set_input) {
    update_Menu(_set: $objects, where: { Id: { _eq: $id } }) {
      affected_rows
    }
  }
`
const CREATE_MENU = gql`
  mutation CreateMenu($objects: [Menu_insert_input!]!) {
    insert_Menu(objects: $objects) {
      affected_rows
    }
  }
`

export default ({ ...props }) => {
  const id = props.id
  const { loading, data } = useQuery(GET_MENUS, {
    variables: { id },
  })
  const [update_trangthai_Menu] = useMutation(UPDATE_TRANGTHAI_MENU)
  const [create_Menu] = useMutation(CREATE_MENU)
  const [update_Menu] = useMutation(UPDATE_MENU)
  let item = Object.assign(
    { ThuTu: 1, TrangThai: 1 },
    data && data.Menu && data.Menu.length > 0 ? data.Menu[0] : {}
  )
  function handleChange(event) {
    event.preventDefault()
    try {
      const attribute = event.target.name
      item[attribute] = event.target.value
    } catch (error) {
      console.log(error)
    }
  }
  async function onSave(e) {
    e.preventDefault()

    try {
      let dataClone = {}
      dataClone.IdMenuParent = item.IdMenuParent
      dataClone.ThuTu = item.ThuTu
      dataClone.TrangThai = item.TrangThai
      dataClone.TenMenu = item.TenMenu
      dataClone.PathPrefix = item.PathPrefix
      if (item.Id && item.Id > 0) {
        let res = await update_Menu({
          variables: { id: item.Id, objects: dataClone },
        })
        if (res.data.update_Menu.affected_rows > 0) {
          alert("Cập nhật thành công")
        }
      } else {
        let res = await create_Menu({ variables: { objects: dataClone } })
        if (res.data.insert_Menu.affected_rows > 0) {
          alert("Tạo mới thành công")
        }
      }
    } catch (error) {
      console.log(error)
    }
  }

  async function onDel(e) {
    e.preventDefault()

    let res = await update_trangthai_Menu({
      variables: { id, trangThai: 3 },
    })
    if (res.data.update_Menu.affected_rows > 0) {
      alert("Xóa thành công")
    }
  }
  return (
    <View title="Chi tiết menu">
      {!loading && (
        <form id="insertForm" className="form-horizontal">
          <div className="form-group">
            <label>
              IdMenuParent
                <input
                className="form-control"
                type="number"
                placeholder="integer"
                name="IdMenuParent"
                defaultValue={item.IdMenuParent || ""}
                onChange={handleChange}
              />
            </label>

          </div>
          <div className="form-group">
            <label>
              PathPrefix

                  <input
                className="form-control"
                type="text"
                placeholder="text"
                name="PathPrefix"
                defaultValue={item.PathPrefix}
                onChange={handleChange}
              />
            </label>

          </div>
          <div className="form-group">
            <label>
              Tên Menu
                  <input
                className="form-control"
                type="text"
                placeholder="text"
                defaultValue={item.TenMenu}
                name="TenMenu"
                onChange={handleChange}
              />
            </label>
          </div>
          <div className="form-group">
            <label>
              Thứ tự
              <input
                className="form-control"
                type="number"
                placeholder="integer"
                name="ThuTu"
                defaultValue={item.ThuTu}
                onChange={handleChange}
              />
            </label>

          </div>
          <div className="form-group">
            <label>
              Trạng thái
              <input
                className="form-control"
                type="number"
                placeholder="integer"
                name="TrangThai"
                defaultValue={item.TrangThai}
                onChange={handleChange}
              />
            </label>
          </div>
          <div className="form-group">
            <button
              type="submit"
              color="red"
              className="btn btn-outline-primary"
              onClick={e => onDel(e)}
            >
              Xóa
            </button>
            <button
              type="submit"
              color="yellow"
              className="btn btn-outline-primary"
              onClick={e => onSave(e)}
            >
              Lưu
            </button>
          </div>

        </form>

      )}
    </View>
  )
}
