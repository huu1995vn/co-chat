import apolloClient from "../../../utils/apollo-client"
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
query GetNhomFiles($id: bigint) {
  NhomFiles(where: { Id: { _eq: $id }, TrangThai: { _lte: 2 } }) {
    ${LISTPROSNHOMFILES}
  }
}

`

const LISTPROS = `
  Id
  TenGoi
  MoTaNgan
  Gia
  GiaKhuyenMai
  ThuTu
  TrangThai
  TuKhoaTimKiem
  IdAdminCapNhat
  IdAdminTao
  NgayCapNhat
  NgayTao
  NhomFiles
  {
    Id
    TenNhomFiles
    MoTaNgan
    ThuTu
    TrangThai
    TuKhoaTimKiem
    IdAdminCapNhat
    IdAdminTao
    NgayCapNhat
    NgayTao
  }`

const GET_GOI = gql`
query GetGoi($id: bigint) {
  Goi(where: { Id: { _eq: $id }, TrangThai: { _lte: 2 } }) {
    ${LISTPROS}
  }
}

`
//Cập nhật trạng thái 3
const DEL_GOI = gql`
  mutation UpdateTrangThaiGoi($id: bigint!) {
    update_Goi(_set: { TrangThai: 3 }, where: { Id: { _eq: $id } }) {
      affected_rows
      returning
      {
        ${LISTPROS}
      }
    }
  }
`

const UPDATE_GOI = gql`
  mutation UpdateGoi($id: bigint!, $objects: Goi_set_input) {
    update_Goi(_set: $objects, where: { Id: { _eq: $id } }) {
      affected_rows
      returning
      {
        ${LISTPROS}
      }
    }
  }
`
const CREATE_GOI = gql`
  mutation CreateGoi($objects: [Goi_insert_input!]!) {
    insert_Goi(objects: $objects) {
      affected_rows
      returning
      {
        ${LISTPROS}
      }
    }
  }
`
export default class GoiProcess {
  static async get() {
    let res = await apolloClient.query({
      query: GET_GOI,
    })
    return res.data.Goi
  }
  static async getNhomFiles() {
    let res = await apolloClient.query({
      query: GET_NHOMFILES,
      
    })
    return res.data.NhomFiles
  }
  
  static async getIndex(id) {
    let res = await apolloClient.query({
      query: GET_GOI,
      variables: {
        id: id,
      },
    })
    return res.data.Goi[0]
  }
  static async delete(id) {
    let res = await apolloClient.mutate({
      mutation: DEL_GOI,
      variables: {
        id: id,
      },
    })
    return res.data.update_Goi.affected_rows > 0
  }

  static async create(obj) {
    let res = await apolloClient.mutate({
      mutation: CREATE_GOI,
      variables: {
        objects: obj,
      },
    })
    return res
  }
  static async update(obj) {
    let res = await apolloClient.mutate({
      mutation: UPDATE_GOI,
      variables: {
        objects: obj,
        id: obj.Id,
      },
    })
    return res
  }
}
