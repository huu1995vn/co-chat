import apolloClient from "../../../../utils/apollo-client"
import { gql } from "@apollo/client"


const LISTPROSFILES = `
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
query GetFiles($id: [bigint!], $notId: [bigint!]) {
  Files(where: { Id: {_in: $id, _nin: $notId }, TrangThai: { _lte: 2 } }) {
    ${LISTPROSFILES}
  }
}

`


const LISTPROS = `
  Id
  IdNhomFiles
  IdFiles
  NhomFiles{
    Id
    MoTaNgan
    TenNhomFiles
  }
  Files{
    Id
    TieuDe
    MoTaNgan
  }`

const GET_FILES_BY_IDNHOM = gql`
query GetNhomFiles_Files($id: Int) {
  NhomFiles_Files(where: { IdNhomFiles: { _eq: $id } }) {
    ${LISTPROS}
  }
}
`

//Cập nhật trạng thái 3
const DEL_NHOMFILES_FILES = gql`
  mutation Delete_NhomFiles_Files($id: bigint) {
    delete_NhomFiles_Files(where: { Id: { _eq: $id } }) {
      affected_rows
      returning
      {
        ${LISTPROS}
      }
    }
  }
`

const ADD_NHOMFILES_FILES = gql`
  mutation CreateNhomFiles_Files($objects: [NhomFiles_Files_insert_input!]!) {
    insert_NhomFiles_Files(objects: $objects) {
      affected_rows
      returning
      {
        ${LISTPROS}
      }
    }
  }
`
export default class NhomFiles_FilesProcess {


  static async getFilesByNotId(notId) {
    let res = await apolloClient.query({
      query: GET_FILES,
      variables:{
        notId,
        id: null
      }
    })
    return res.data.Files
  }
  static async getIdNhomFiles(id) {
    let res = await apolloClient.query({
      query: GET_FILES_BY_IDNHOM,
      variables:{
        id
      }
    })
    return res.data.NhomFiles_Files
  }
  

  
  static async delete(id) {
    let res = await apolloClient.mutate({
      mutation: DEL_NHOMFILES_FILES,
      variables: {
        id: id
      },
    })
    return res.data.delete_NhomFiles_Files.affected_rows > 0
  }

  static async add(idNhomFiles, idFiles) {
    let res = await apolloClient.mutate({
      mutation: ADD_NHOMFILES_FILES,
      variables: {
        objects: {IdNhomFiles: idNhomFiles, IdFiles: idFiles},
      },
    })
    return res
  }
  
}
