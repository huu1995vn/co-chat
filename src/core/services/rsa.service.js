import { keyDes } from "../variables";
const JsEncryptModule = require("js-encrypt");


class RSAService {
  static encrypt(plaintext, publicKey) {
    var encrypt = new JsEncryptModule.JSEncrypt()
    encrypt.setPublicKey(publicKey)
    let encrypted = ""
    try {
      encrypted = encrypt.encrypt(plaintext)
    } catch {}
    return encrypted
  }

  static decrypt(encrypted) {
    var decrypt = new JsEncryptModule.JSEncrypt()
    decrypt.setPrivateKey(keyDes.rrk)
    let plaintext = ""
    try {
      plaintext = decrypt.decrypt(encrypted)
    } catch {}

    return plaintext
  }

  static getKeyDES() {
    try {
      return this.encrypt(keyDes.tdk, keyDes.rukForApi)
    } catch (e) {
      console.log("error:", e)
    }
  }
}

export default RSAService
