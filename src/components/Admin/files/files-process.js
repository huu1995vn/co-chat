import apolloClient from "../../../utils/apollo-client"
import { gql } from "@apollo/client"
const LISTPROS = `
Id
TieuDe
MoTaNgan
ThuTu
TrangThai
TuKhoaTimKiem
IdAdminCapNhat
IdAdminTao
NgayCapNhat
NgayTao`
const GET_FILES = gql`
query GetFiles($id: bigint) {
  Files(where: { Id: { _eq: $id }, TrangThai: { _lte: 2 } }) {
    ${LISTPROS}
  }
}

`
//Cập nhật trạng thái 3
const DEL_FILE = gql`
  mutation UpdateTrangThaiFiles($id: bigint!) {
    update_Files(_set: { TrangThai: 3 }, where: { Id: { _eq: $id } }) {
      affected_rows
      returning
      {
        ${LISTPROS}
      }
    }
  }
`

const UPDATE_FILE = gql`
  mutation UpdateFiles($id: bigint!, $objects: Files_set_input) {
    update_Files(_set: $objects, where: { Id: { _eq: $id } }) {
      affected_rows
      returning
      {
        ${LISTPROS}
      }
    }
  }
`
const CREATE_FILE = gql`
  mutation CreateFiles($objects: [Files_insert_input!]!) {
    insert_Files(objects: $objects) {
      affected_rows
      returning
      {
        ${LISTPROS}
      }
    }
  }
`
export default class FilesProcess {
  static async get() {
    let res = await apolloClient.query({
      query: GET_FILES,
    })
    return res.data.Files
  }
  static async getIndex(id) {
    let res = await apolloClient.query({
      query: GET_FILES,
      variables: {
        id: id,
      },
    })
    return res.data.Files[0]
  }
  static async delete(id) {
    let res = await apolloClient.mutate({
      mutation: DEL_FILE,
      variables: {
        id: id,
      },
    })
    return res.data.update_Files.affected_rows > 0
  }

  static async create(obj) {
    let res = await apolloClient.mutate({
      mutation: CREATE_FILE,
      variables: {
        objects: obj,
      },
    })
    return res
  }
  static async update(obj) {
    let res = await apolloClient.mutate({
      mutation: UPDATE_FILE,
      variables: {
        objects: obj,
        id: obj.Id,
      },
    })
    return res
  }
}
