import TripleDESService from "./tripple-des.service"
import { commonParams} from "../variables"
import CoreService from "./core.service";
class LocalStoreService {
    static init() {
        
    }
    //Lưu data local
    static setData(data) {
        try {
            var strData = JSON.stringify(data);
            strData = TripleDESService.encrypt(strData);
            localStorage[commonParams.nameStore] = strData;
            return true;
        } catch (e) {
            // print(e.toString());
        }
        return false;
    }
    //Lấy data local
    static getData() {
        try {
            var strData =
                TripleDESService.decrypt(localStorage[commonParams.nameStore]);
            if (strData.isEmpty) {
                return {};
            }
            var data = JSON.parse(strData);
            return data;
        } catch (e) {
            // print(e.toString());
        }
        return {};

    }

    static getToken() {
        try {
            var data = LocalStoreService.getData();
            if (data[commonParams.access] == null) return null;
            return data[commonParams.access][commonParams.token_accessToken];
        } catch (e) { }
        return null;
    }
    static getRefeshToken() {
        try {
            var data = LocalStoreService.getData();
            return data[commonParams.access][commonParams.token_refreshToken];
        } catch (e) { }
        return null;
    }
    static getUser(atrr=null) {
        if (LocalStoreService.getToken() == null) {
            return {};
        }
        var data;
        try {
            data = LocalStoreService.getData();
            var dm64 = data[commonParams.common][commonParams.token_admin64];
            var data64 = CoreService.b64DecodeUnicode(dm64);
            data = JSON.parse(data64);
            if (atrr != null) {
                return data[atrr];
            }
            return data;
        } catch (e) {
            // print(e);
        }
        if (atrr != null) {
            return data[atrr];
        } else {
            return {};
        }
    }
    static setDataLogin(dataJson) {
        var dataS = LocalStoreService.getData();
        dataS[commonParams.access] = dataS[commonParams.access] || {};
        dataS[commonParams.access][commonParams.token_accessToken] =
            dataJson[commonParams.token_accessToken];
        dataS[commonParams.access][commonParams.token_expiresIn] =
            dataJson[commonParams.token_expiresIn];
        var refresh_token = dataJson[commonParams.token_refreshToken] ||
            LocalStoreService.getRefeshToken();
        dataS[commonParams.access][commonParams.token_refreshToken] = refresh_token;
        var dm64 = dataJson[commonParams.token_admin64];
        dataS[commonParams.common] = dataS[commonParams.common] || {};
        dataS[commonParams.common][commonParams.token_admin64] = dm64;
        LocalStoreService.setData(dataS);
        LocalStoreService.init();

    }
    
    static getSystem(key) {

    }

    static setSystem(key, data) {

    }
}

export default LocalStoreService
