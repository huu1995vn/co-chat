
import apolloClient from  "../../../utils/apollo-client"
import { gql } from "@apollo/client"

const GET_MENUS  = gql`
query MyQuery {
  Menu(where: {TrangThai: {_lte: 2}}) {
    Id
    IdAdminCapNhat
    IdAdminTao
    IdMenuParent
    NgayCapNhat
    NgayTao
    PathPrefix
    TenMenu
    ThuTu
    TrangThai
    TuKhoaTimKiem
    MenuChilds (where: {TrangThai: {_lte: 2}}) {
      Id
      IdAdminCapNhat
      IdAdminTao
      IdMenuParent
      NgayTao
      NgayCapNhat
      PathPrefix
      TenMenu
      ThuTu
      TrangThai
      TuKhoaTimKiem
    }
    MenuParent {
      Id
      IdAdminCapNhat
      IdAdminTao
      IdMenuParent
      NgayCapNhat
      NgayTao
      PathPrefix
      TenMenu
      ThuTu
      TrangThai
      TuKhoaTimKiem
    }
  }
}

`
export default class MenuProcess {
    static async getListData() {
        let res = await apolloClient
        .query({
          query: GET_MENUS
        });
        return res.data.Menu
      }
}
