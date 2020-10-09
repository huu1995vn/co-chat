import { keyDes } from "../variables";
import CoreService from "./core.service";


const CryptoJS = require("crypto-js");
const options = {
  mode: CryptoJS.mode.ECB,
}

class TripleDESService {
  
  static convertKeyBase(keybase) {
    var key64 = keybase
      ? CoreService.b64EncodeUnicode(keybase)
      : CoreService.b64EncodeUnicode(keyDes.tdk);

    return CryptoJS.enc.Base64.parse(key64)
  }
  
  static encrypt(plaintext) {
    var encrypted = ""
    try {
      encrypted = CryptoJS.TripleDES.encrypt(
        plaintext,
        this.convertKeyBase(),
        options
      ).toString()
    } catch (error) {
      console.log("encrypted :", error)
      return ""
    }
    return encrypted
  }

  static decrypt(encrypted, keyBase) {
    var ct = {
      ciphertext: CryptoJS.enc.Base64.parse(encrypted),
    }
    var decrypted = ""
    try {
      decrypted = CryptoJS.TripleDES.decrypt(
        ct,
        this.convertKeyBase(keyBase),
        options
      ).toString(CryptoJS.enc.Utf8)
    } catch (error) {
      console.log("decryptTripleDES :", error)
      return ""
    }
    return decrypted
  }
}

export default TripleDESService
