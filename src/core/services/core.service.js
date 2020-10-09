class CoreService {
  
  static b64EncodeUnicode(str) {
    if (window && "btoa" in window && "encodeURIComponent" in window) {
      return btoa(
        encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, (match, p1) => {
          return String.fromCharCode("0x" + p1)
        })
      )
    } else {
      console.warn(
        "b64EncodeUnicode requirements: window.btoa and window.encodeURIComponent functions"
      )
      return ""
    }
  }
  static b64DecodeUnicode(str) {
    // Going backwards: from bytestream, to percent-encoding, to original string.
    return decodeURIComponent(atob(str)?.split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
}
 
}

export default CoreService
