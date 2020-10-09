import {
  DaiLyXeBLLInterfaceData
} from "../../core/api/dailyxe/dailyxeBLL"

import {
  RaoXeBLLEmail,
  RaoXeBLLInterfaceData
} from "../../core/api/raoxe/raoxeBLL"
import {
  commonAttr
} from "../../core/variables";

export const isExistEmail = async (email) => {
  var response = await new DaiLyXeBLLInterfaceData().isExistEmailThanhVien(email);
  var data = response.data;
  var result = data.StrResult === "True";
  if (!result) {
    throw data.Message;
  }
}
export const isExistDienThoai = async (dienthoai) => {
  var response = await new DaiLyXeBLLInterfaceData().isExistPhoneNumberThanhVien(dienthoai);
  var data = response.data;
  var result = data[commonAttr.StrResult] === "True";
  if (!result) {
    throw data.Message;
  }
}
export const sendOTPemail = async (email) => {
  var response = await new RaoXeBLLEmail().sendVerifyEmail(email);
  var data = response.data;
  var result = data[commonAttr.IntResult] === 1;
  if (!result) {
    throw data[commonAttr.Message];
  }
}
export const verifyOTPemail = async (email, code) => {
  var response = await new RaoXeBLLInterfaceData().xacThucByMaXacThuc(email, code);
  var data = response.data;
  var result = data[commonAttr.IntResult] === 1;
  if (!result) {
    throw data[commonAttr.Message];
  }
}
export const postThanhVienByAnonymous = async (body) => {
  var response = await new DaiLyXeBLLInterfaceData().postThanhVienByAnonymous(body);
  var data = response.data;
  var result = data.StrResult === "True";
  if (!result) {
    throw data.Message;
  }
}