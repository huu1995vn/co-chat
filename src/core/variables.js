export var environment = process.env.ENV; //dev|prod 
export var apiHost = environment === "dev" ? "https://stgapidlxad02.dailyxe.com.vn" : "https://api.dailyxe.com.vn"; //http://office.1onnet.com:5005 | http://192.168.11.3 | http://localhost:5005 | https://api.dailyxe.com.vn | https://stgapidlxad02.dailyxe.com.vn
export var apiCdn = environment === "dev" ? "https://stgapidlxad02.dailyxe.com.vn" : "https://cdn.dailyxe.com.vn"; //http://office.1onnet.com:5005 | http://192.168.11.3 | http://localhost:5005 | https://cdn.dailyxe.com.vn | https://stgcdndlxad02.dailyxe.com.vn
export var apiApollo = "https://humble-teal-95.hasura.app/v1/graphql"; //'https://backend-gastby-2020.herokuapp.com'
export var isBrowser = typeof window === 'object'
export var apiDaiLyXe = "https://stgapidlxad02.dailyxe.com.vn"; 
export var apiDaiLyXe_Sufix_DB = "/api/dailyxe/";

export var apiRaoXe = "https://stgapirv01.dailyxe.com.vn"; 
export var apiRaoXe_Sufix_DB = "/api/raoxe/";
export var appVerificationDisabledForTesting = environment === "dev"
export const commonParams = {
  cat: 'at',
  cuk: 'uk',
  username: 'sn',
  password: 'aw',
  token_roleThanhVien: "hv",
  token_requireRole: "er",
  token_accessToken: "ct",
  token_expiresIn: "xi",
  token_refreshToken: 'eft',
  token_admin64: 'dm64',
  access: "access",
  common: "common",
  nameStore: "coChat",
  dienThoai: "dienThoai",
  email: "email",
  checkEmailExist: "checkEmailExist",
  maXacNhan:"maXacNhan",
  orderString: "orderString",
  id: "id",
  trangThai: "trangThai",
  idTinhThanh: "idTinhThanh",
  idQuanHuyen: "idQuanHuyen",
  displayItems: "displayItems",
  displayPage: "displayPage"


}

export const commonAttr = {
  TenDangNhap:"TenDangNhap",
  MatKhau:"MatKhau",
  HoTen:"HoTen",
  GioiTinh:"GioiTinh",
  NgaySinh:"NgaySinh",

  IntResult: "IntResult",
  StrResult: "StrResult",
  DataResult:"DataResult",
  Pagination: "Pagination",
  Message:"Message",
}

export const commonAPICorebll = {
  workspaceController: 'http://localhost:8080/api/cochat/workspace',
  websiteController: 'http://localhost:8080/api/cochat/website',
  workspaceThanhvienController: 'http://localhost:8080/api/cochat/workspacethanhvien'
}

export const keyDes = {
  // key để giải mã các thông tin được đóng gói từ ruk
  rrk: `
  MIICXQIBAAKBgQCAxhFc9tk9SJ8H2dyG9IJf5sfeojG3tpbUE/Jvks1nK+B+8eWm
  SO4c+jXpgW1k+HK42/gc8jf1tl6ay2lWybF2C65Jef7oJztCPrZy0ZU1WNB/mpI8
  617d8AsCLH8NJnDhHEk3f6L9Wx4xHtlDUzyOJWJ3tU9FTISSMaQRVw8+JQIDAQAB
  AoGACLFWKrhfIcvtMFJ8mH+Y7XBevaClSomA1QAjtXRreTN1DBy4K+lwaXRaf1DF
  WbOLyv7OWOXg8S1GZZyll741xHGW1+QtaUsN1KRhY5LrZXdk5hczvwjkqUBlm2pg
  jPQtFjZDXaE/8QEeTCg4ht3Eva9lpcOQ65N8O2GfoqVjNQECQQDHR46FKexzWc2k
  Svy0Ap5OWxDcPbgfHVsSrrLCiR4DCo/wPfYf+TkvRyKbAbX5t4Q30h/w0G7b7ZW0
  kUA65mh5AkEApW0gKcMTSP6jOyuUa2eD5jaepp1M+lXBh8jgxlErgi6gmiFALkUu
  HusezaPBwmVcFwjeaOlcbzZMsw/KzR9wDQJBAKf2khN/IIKhIIjng1MeGdwlOXLI
  upXPImH+yUDaXWdm0adGMlsErsRAitRnfr/5hAGgo7dPlwDboaDOBHsglNECQH98
  8TueHl+z9oJkXJbFiQ5Da9NGCQwoSOTnd+r+pURHwPfnxjmikR+83dlnaazyRp1t
  9VHu/pCqzUN2WTnqD4UCQQCMLe+CRPwc5hpa+bXJBAmy4kukt6dh2OVKUKPGacSX
  ymuh3YjjDNqhzdINl1Rs3K6LvnwUJfX2B4W8gjmNgmw/
  `,
  // key để cung cấp cho các server đóng gói
  ruk: `
  MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCAxhFc9tk9SJ8H2dyG9IJf5sfe
  ojG3tpbUE/Jvks1nK+B+8eWmSO4c+jXpgW1k+HK42/gc8jf1tl6ay2lWybF2C65J
  ef7oJztCPrZy0ZU1WNB/mpI8617d8AsCLH8NJnDhHEk3f6L9Wx4xHtlDUzyOJWJ3
  tU9FTISSMaQRVw8+JQIDAQAB
  `,
  tdk: `--@Đại lý xe 2018@--`, //`-Đại lý XE @@2018@@-`,
  // key để đóng gói gửi tới server cung cấp key này
  rukForApi: `MIGeMA0GCSqGSIb3DQEBAQUAA4GMADCBiAKBgHCIiepJqVZwdN+ERYLWUU0+Vte1fHFJvfzbmonAluZxg3A5ETHh2CshAbKSQxwdcGZ4z81kFpCOPX/3ppATjftHNI1jvB84BbG70psjFR/C1SWrswea8YE4Qn801KqJzEWiu7t0IdsAjsXfXKouWxmrfR5F6rn5BpvterfHAmUxAgMBAAE=`,
}

export const commonNavigate = {
  cms_admin: "/admin",
  cms_dashboard: "/admin/cms-dashboard",
  cms_dang_nhap: "/admin/cms-dang-nhap",
  cms_dang_ky: "/admin/cms-dang-ky",
  cms_thongTinCaNhan: "/admin/cms-thong-tin-ca-nhan",
  cms_menu: "/admin/cms-menu",
  cms_lien_he: "/admin/cms-lien-he",

  cms_files: "/admin/cms-files",
  cms_nhom_tai_lieu: "/admin/cms-nhom-files",
  cms_tai_lieu:"/admin/cms-tai-lieu",
  cms_goi: "/admin/cms-goi",

  f_bang_gia: "/bang-gia",
  f_ho_tro: "/ho-tro",
  f_lien_he: "/lien-he",


}