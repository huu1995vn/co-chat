import {
  commonParams
} from "../core/variables";
import RSAService from "../core/services/rsa.service"
import TripleDESService from "../core/services/tripple-des.service"
import LocalStoreService from "../core/services/localstore.service"

import {
  DaiLyXeBLLBasic
} from "../core/api/dailyxe/dailyxeBLL"
var md5 = require("md5")
// var json_encode = require("json_encode")
var FormData = require("form-data")
const isBrowser = typeof window !== `undefined`
const getUser = () =>
  LocalStoreService.getUser()
const setUser = user => LocalStoreService.setDataLogin(user);

export const login = async ({
  username,
  password
}) => {
  try {
    var body = {}
    body[commonParams.username] = username
    body[commonParams.password] = md5(password)
      .toString()
      .toLocaleUpperCase()
    body[commonParams.token_requireRole] = commonParams.token_roleThanhVien
    var cat = TripleDESService.encrypt(JSON.stringify(body))
    var cuk = RSAService.getKeyDES()
    var form = new FormData()
    form.append(commonParams.cat, cat)
    form.append(commonParams.cuk, cuk)
    var resultData = await new DaiLyXeBLLBasic().insert(form, null, "token");
    doLogin(resultData);
    var tv = LocalStoreService.getUser();
    if (tv.Id > 0) {
      alert("Đăng nhập thành công");
      return tv.Id > 0;
    }


  } catch (error) {
    alert(error)
  }
  return false;
}

export const doLogin = (res) => {
  var uk = RSAService.decrypt(res[commonParams.cuk]);
  var at = TripleDESService.decrypt(res[commonParams.cat], uk);
  var dataJson = JSON.parse(at);
  // var tv =
  //     json.decode(CommonMethods().decodeBase64Utf8(data["common"]["dm64"]));
  // await ThanhVienProcess().checkBlackList(int.parse(tv["Id"].toString()));
  LocalStoreService.setDataLogin(dataJson);
  // signInWithCustomToken();
  // ThanhVienProcess().loginUserDevice();

  // var data = _convertDataLocal(dataJson);
  // var tv =
  //     json.decode(CommonMethods().decodeBase64Utf8(data["common"]["dm64"]));
  // await ThanhVienProcess().checkBlackList(int.parse(tv["Id"].toString()));
  // st.setData(data);
  // st.init();
  // signInWithCustomToken();
  // ThongBaoProcess().getNumThongBao();
  // await LocalStoreUserLogin().setLogin(); // Lưu ý cần 1 khoản thời gian
  // ThanhVienProcess().loginUserDevice();

}

export const isLoggedIn = () => {
  if (!isBrowser) return false
  const user = getUser()
  return user.Id > 0
}

export const logout = () => {
  if (!isBrowser) return

  console.log(`Ensuring the \`gatsbyUser\` property exists.`)
  setUser({})
  // callback()
}