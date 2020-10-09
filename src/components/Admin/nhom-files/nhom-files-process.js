import apolloClient from "../../../utils/apollo-client"
import { gql } from "@apollo/client"
const LISTPROS = `
Id
TenNhomFiles
MoTaNgan
ThuTu
TrangThai
TuKhoaTimKiem
IdAdminCapNhat
IdAdminTao
NgayCapNhat
NgayTao`
const GET_NHOMFILES = gql`
query GetNhomFiles($id: bigint) {
  NhomFiles(where: { Id: { _eq: $id }, TrangThai: { _lte: 2 } }) {
    ${LISTPROS}
  }
}

`
//Cập nhật trạng thái 3
const DEL_NHOMFILES = gql`
  mutation UpdateTrangThaiNhomFiles($id: bigint!) {
    update_NhomFiles(_set: { TrangThai: 3 }, where: { Id: { _eq: $id } }) {
      affected_rows
      returning
      {
        ${LISTPROS}
      }
    }
  }
`

const UPDATE_NHOMFILES = gql`
  mutation UpdateNhomFiles($id: bigint!, $objects: NhomFiles_set_input) {
    update_NhomFiles(_set: $objects, where: { Id: { _eq: $id } }) {
      affected_rows
      returning
      {
        ${LISTPROS}
      }
    }
  }
`
const CREATE_NHOMFILES = gql`
  mutation CreateNhomFiles($objects: [NhomFiles_insert_input!]!) {
    insert_NhomFiles(objects: $objects) {
      affected_rows
      returning
      {
        ${LISTPROS}
      }
    }
  }
`
export default class NhomFilesProcess {
  static async get() {
    let res = await apolloClient.query({
      query: GET_NHOMFILES,
    })
    return res.data.NhomFiles
  }
  static async getIndex(id) {
    let res = await apolloClient.query({
      query: GET_NHOMFILES,
      variables: {
        id: id,
      },
    })
    return res.data.NhomFiles[0]
  }
  static async delete(id) {
    let res = await apolloClient.mutate({
      mutation: DEL_NHOMFILES,
      variables: {
        id: id,
      },
    })
    return res.data.update_NhomFiles.affected_rows > 0
  }

  static async create(obj) {
    let res = await apolloClient.mutate({
      mutation: CREATE_NHOMFILES,
      variables: {
        objects: obj,
      },
    })
    return res
  }
  static async update(obj) {
    let res = await apolloClient.mutate({
      mutation: UPDATE_NHOMFILES,
      variables: {
        objects: obj,
        id: obj.Id,
      },
    })
    return res
  }
}
