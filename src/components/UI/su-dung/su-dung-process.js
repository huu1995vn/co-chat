import apolloClient from "../../../utils/apollo-client"
import { gql } from "@apollo/client"


const GET_TAILIEU_NHOMFILES = gql`
query MyQuery {
  TaiLieu_NhomFiles(where: {IdTaiLieu: {_in: 2}}) {
    Id
    IdNhomFiles
    IdTaiLieu
    NhomFiles_Files {
      Files {
        Id
        TieuDe
        ThuTu
      }
    }
    NhomFiles {
      Id
      TenNhomFiles
      ThuTu
    }
  }
}
`;
export default class SuDungProcess {


  static async get() {
    let res = await apolloClient.query({
      query: GET_TAILIEU_NHOMFILES,
     
    })
    return res.data?.TaiLieu_NhomFiles??[]
  }
  
  
}
