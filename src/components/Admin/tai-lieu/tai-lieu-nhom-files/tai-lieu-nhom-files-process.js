import apolloClient from "../../../../utils/apollo-client"
import { gql } from "@apollo/client"


const LISTPROSNHOMFILES = `
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
query GetNhomFiles($id: [bigint!], $notId: [bigint!]) {
  NhomFiles(where: { Id: {_in: $id, _nin: $notId }, TrangThai: { _lte: 2 } }) {
    ${LISTPROSNHOMFILES}
  }
}

`
const LISTPROS = `
  Id
  IdTaiLieu
  IdNhomFiles
  TaiLieu{
    Id
    MoTaNgan
    TenTaiLieu
  }
  NhomFiles{
    Id
    TenNhomFiles
    MoTaNgan
  }`

const GET_NHOMFILES_BY_IDNHOM = gql`
query GetTaiLieu_NhomFiles($id: Int) {
  TaiLieu_NhomFiles(where: { IdTaiLieu: { _eq: $id } }) {
    ${LISTPROS}
  }
}
`

//Cập nhật trạng thái 3
const DEL_TAILIEU_NHOMFILES = gql`
  mutation Delete_TaiLieu_NhomFiles($id: bigint) {
    delete_TaiLieu_NhomFiles(where: { Id: { _eq: $id } }) {
      affected_rows
      returning
      {
        ${LISTPROS}
      }
    }
  }
`

const ADD_TAILIEU_NHOMFILES = gql`
  mutation CreateTaiLieu_NhomFiles($objects: [TaiLieu_NhomFiles_insert_input!]!) {
    insert_TaiLieu_NhomFiles(objects: $objects) {
      affected_rows
      returning
      {
        ${LISTPROS}
      }
    }
  }
`
export default class TaiLieu_NhomFilesProcess {


  static async getNhomFilesByNotId(notId) {
    let res = await apolloClient.query({
      query: GET_NHOMFILES,
      variables:{
        notId,
        id: null
      }
    })
    return res.data?.NhomFiles??[]
  }
  static async getIdTaiLieu(id) {
    let res = await apolloClient.query({
      query: GET_NHOMFILES_BY_IDNHOM,
      variables:{
        id
      }
    })
    return res.data?.TaiLieu_NhomFiles ?? []
  }
  

  
  static async delete(id) {
    let res = await apolloClient.mutate({
      mutation: DEL_TAILIEU_NHOMFILES,
      variables: {
        id: id
      },
    })
    return res.data.delete_TaiLieu_NhomFiles.affected_rows > 0
  }

  static async add(idTaiLieu, idNhomFiles) {
    let res = await apolloClient.mutate({
      mutation: ADD_TAILIEU_NHOMFILES,
      variables: {
        objects: {IdTaiLieu: idTaiLieu, IdNhomFiles: idNhomFiles},
      },
    })
    return res
  }
  
}
