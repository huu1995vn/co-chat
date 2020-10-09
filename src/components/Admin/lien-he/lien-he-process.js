import apolloClient from "../../../utils/apollo-client"
import { gql } from "@apollo/client"
const LISTPROS = `
Id
TieuDe
HoTen
Email
DienThoai
DiaChi
NoiDung
TrangThai
NgayTao
NgayCapNhat
IdAdminTao
TuKhoaTimKiem
IdAdminCapNhat
IsRead`
const GET_LIENHES = gql`
query GetLienHe($id: bigint) {
  LienHe(where: { Id: { _eq: $id }, TrangThai: { _lte: 2 } }) {
    ${LISTPROS}
  }
}

`
//Cập nhật trạng thái 3
const DEL_LIENHE = gql`
  mutation UpdateTrangThaiLienHe($id: bigint!) {
    update_LienHe(_set: { TrangThai: 3 }, where: { Id: { _eq: $id } }) {
      affected_rows
      returning
      {
        ${LISTPROS}
      }
    }
  }
`

const UPDATE_LIENHE = gql`
  mutation UpdateLienHe($id: bigint!, $objects: LienHe_set_input) {
    update_LienHe(_set: $objects, where: { Id: { _eq: $id } }) {
      affected_rows
      returning
      {
        ${LISTPROS}
      }
    }
  }
`
const CREATE_LIENHE = gql`
  mutation CreateLienHe($objects: [LienHe_insert_input!]!) {
    insert_LienHe(objects: $objects) {
      affected_rows
      returning
      {
        ${LISTPROS}
      }
    }
  }
`
export default class LienHeProcess {
  static async get() {
    let res = await apolloClient.query({
      query: GET_LIENHES,
    })
    return res.data.LienHe
  }
  static async getIndex(id) {
    let res = await apolloClient.query({
      query: GET_LIENHES,
      variables: {
        id: id,
      },
    })
    return res.data.LienHe[0]
  }
  static async delete(id) {
    let res = await apolloClient.mutate({
      mutation: DEL_LIENHE,
      variables: {
        id: id,
      },
    })
    return res.data.update_LienHe.affected_rows > 0
  }

  static async create(obj) {
    let res = await apolloClient.mutate({
      mutation: CREATE_LIENHE,
      variables: {
        objects: obj,
      },
    })
    return res
  }
  static async update(obj) {
    let res = await apolloClient.mutate({
      mutation: UPDATE_LIENHE,
      variables: {
        id: obj.Id,
        objects: obj,
      },
    })
    return res
  }
}
