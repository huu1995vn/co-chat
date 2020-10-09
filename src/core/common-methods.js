import { navigate } from "gatsby"
import { commonNavigate, apiCdn } from "./variables"
import marked from "marked"
var md5 = require("md5")

export default class CommonMethods {
  static buildUrlImage(idHinh, rewriteUrl = "hinh-anh", prefixSize = "") {
    return `${apiCdn}/image/${rewriteUrl}-${idHinh}j${prefixSize}.jpg`
  }

  static buildUrlHinhDaiDien(idHinh, rewriteUrl = "hinh-anh", prefixSize = 2) {
    return CommonMethods.buildUrlImage(idHinh, rewriteUrl, prefixSize)
  }
  static removeAccents(str) {
    var AccentsMap = [
      "aàảãáạăằẳẵắặâầẩẫấậ",
      "AÀẢÃÁẠĂẰẲẴẮẶÂẦẨẪẤẬ",
      "dđ",
      "DĐ",
      "eèẻẽéẹêềểễếệ",
      "EÈẺẼÉẸÊỀỂỄẾỆ",
      "iìỉĩíị",
      "IÌỈĨÍỊ",
      "oòỏõóọôồổỗốộơờởỡớợ",
      "OÒỎÕÓỌÔỒỔỖỐỘƠỜỞỠỚỢ",
      "uùủũúụưừửữứự",
      "UÙỦŨÚỤƯỪỬỮỨỰ",
      "yỳỷỹýỵ",
      "YỲỶỸÝỴ",
    ]
    for (var i = 0; i < AccentsMap.length; i++) {
      var re = new RegExp("[" + AccentsMap[i].substr(1) + "]", "g")
      var char = AccentsMap[i][0]
      str = str.replace(re, char)
    }
    return str
  }
  static removeAccentsForTimKiem(str) {
    if (!str) return ""
    return this.removeAccents(str.toLowerCase()).replace(/ /g, "")
  }
  static convertUrlFiles(str) {
    if (!str) return ""
    return this.removeAccents(str.toLowerCase()).replace(/ /g, "-")
  }
  static getData(items, attr, defaultValue = null) {
    let listProperties = attr.split(".")
    return this.getValueBylistProperties(items, listProperties, defaultValue)
  }

  static getValueBylistProperties(value, listProperties, defaultValue = null) {
    try {
      let data = Object.assign({}, value)
      listProperties.forEach(pro => {
        var regex = /(.*)\[(.*)\]/
        var matches = regex.exec(pro)
        if (!matches) {
          data = data[pro]
        } else {
          data = data[matches[1]][+matches[2]]
        }
      })
      return data || defaultValue
    } catch {
      return defaultValue
    }
  }

  static b64DecodeUnicode(str) {
    if (window && "atob" in window && "decodeURIComponent" in window) {
      return decodeURIComponent(
        Array.prototype.map
          .call(atob(str), c => {
            return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2)
          })
          .join("")
      )
    } else {
      console.warn(
        "b64DecodeUnicode requirements: window.atob and window.decodeURIComponent functions"
      )
      return ""
    }
  }

  static navigateToPage(path) {
    if (!path) return
    if (typeof window === "object") navigate(path)
  }
  static navigateToPage_Home() {
    CommonMethods.navigateToPage("/")
  }
  static navigateToPage_CmsAdmin() {
    CommonMethods.navigateToPage(commonNavigate.cms_admin)
  }
  static navigateToPage_CmsDashboard() {
    CommonMethods.navigateToPage(commonNavigate.cms_dashboard)
  }
  static navigateToPage_CmsDangNhap() {
    CommonMethods.navigateToPage(commonNavigate.cms_dang_nhap)
  }
  static navigateToPage_CmsMenu(id) {
    if (id) {
      CommonMethods.navigateToPage(commonNavigate.cms_menu + `/${id}`)
    } else {
      CommonMethods.navigateToPage(commonNavigate.cms_menu)
    }
  }
  static navigateToPage_CmsFiles(id) {
    if (id) {
      CommonMethods.navigateToPage(commonNavigate.cms_files + `/${id}`)
    } else {
      CommonMethods.navigateToPage(commonNavigate.cms_files)
    }
  }
  static navigateToPage_CmsNhomFiles(id) {
    if (id) {
      CommonMethods.navigateToPage(commonNavigate.cms_nhom_tai_lieu + `/${id}`)
    } else {
      CommonMethods.navigateToPage(commonNavigate.cms_nhom_tai_lieu)
    }
  }
  static navigateToPage_CmsLienHe(id) {
    if (id) {
      CommonMethods.navigateToPage(commonNavigate.cms_lien_he + `/${id}`)
    } else {
      CommonMethods.navigateToPage(commonNavigate.cms_lien_he)
    }
  }

  static navigateToPage_CmsTaiLieu(id) {
    if (id) {
      CommonMethods.navigateToPage(commonNavigate.cms_tai_lieu + `/${id}`)
    } else {
      CommonMethods.navigateToPage(commonNavigate.cms_tai_lieu)
    }
  }

  static navigateToPage_CmsGoi(id) {
    if (id) {
      CommonMethods.navigateToPage(commonNavigate.cms_goi + `/${id}`)
    } else {
      CommonMethods.navigateToPage(commonNavigate.cms_goi)
    }
  }

  static navigateToPage_goBack() {
    typeof window !== "undefined" &&
      typeof window.history !== "undefined" &&
      window.history.back()
  }
  static rawMarkup(markdown) {
    return marked(markdown ?? "")
    // return marked(markdown ?? "", { sanitize: true })
  }
  static validatePhoneNumber() {
    var regexp = /^\+[0-9]?()[0-9](\s|\S)(\d[0-9]{8,16})$/
    return regexp.test(this.state.phone)
  }
  static sleep(delay = 0) {
    return new Promise((resolve) => {
      setTimeout(resolve, delay);
    });
  }

  static convertNumber(val, valDefault = -1) {
    try {
      return Number.parseInt(val)
    } catch (error) {

    }
    return valDefault
  }
  static convertMd5(val, valDefault ="") {
    try {
      return md5(val)

    } catch (error) {

    }
    return valDefault
  }
  static cloneObject(val, valDefault = {}) {
    try {
      return Object.assign({},val)
    } catch (error) {

    }
    return valDefault
  }

}
