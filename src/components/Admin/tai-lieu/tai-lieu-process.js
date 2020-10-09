import apolloClient from "../../../utils/apollo-client"
import { gql } from "@apollo/client"
const LISTPROS = `
Id
TenTaiLieu
MoTaNgan
ThuTu
TrangThai
TuKhoaTimKiem
IdAdminCapNhat
IdAdminTao
NgayCapNhat
NgayTao`
const GET_THONGTINS = gql`
query GetTaiLieu($id: bigint) {
  TaiLieu(where: { Id: { _eq: $id }, TrangThai: { _lte: 2 } }) {
    ${LISTPROS}
  }
}

`
//Cập nhật trạng thái 3
const DEL_THONGTIN = gql`
  mutation UpdateTrangThaiTaiLieu($id: bigint!) {
    update_TaiLieu(_set: { TrangThai: 3 }, where: { Id: { _eq: $id } }) {
      affected_rows
      returning
      {
        ${LISTPROS}
      }
    }
  }
`

const UPDATE_THONGTIN = gql`
  mutation UpdateTaiLieu($id: bigint!, $objects: TaiLieu_set_input) {
    update_TaiLieu(_set: $objects, where: { Id: { _eq: $id } }) {
      affected_rows
      returning
      {
        ${LISTPROS}
      }
    }
  }
`
const CREATE_THONGTIN = gql`
  mutation CreateTaiLieu($objects: [TaiLieu_insert_input!]!) {
    insert_TaiLieu(objects: $objects) {
      affected_rows
      returning
      {
        ${LISTPROS}
      }
    }
  }
`
export default class TaiLieuProcess {
  static async get() {
    let res = await apolloClient.query({
      query: GET_THONGTINS,
    })
    return res.data.TaiLieu
  }
  static async getIndex(id) {
    let res = await apolloClient.query({
      query: GET_THONGTINS,
      variables: {
        id: id,
      },
    })
    return res.data.TaiLieu[0]
  }
  static async delete(id) {
    let res = await apolloClient.mutate({
      mutation: DEL_THONGTIN,
      variables: {
        id: id,
      },
    })
    return res.data.update_TaiLieu.affected_rows > 0
  }

  static async create(obj) {
    let res = await apolloClient.mutate({
      mutation: CREATE_THONGTIN,
      variables: {
        objects: obj,
      },
    })
    return res
  }
  static async update(obj) {
    let res = await apolloClient.mutate({
      mutation: UPDATE_THONGTIN,
      variables: {
        objects: obj,
        id: obj.Id,
      },
    })
    return res
  }
}
