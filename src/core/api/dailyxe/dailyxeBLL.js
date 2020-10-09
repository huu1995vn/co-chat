import DaiLyXeDAL from "./dailyxeDAL"
import {
    commonParams
} from "../../variables"
export class DaiLyXeBLLBasic {
    daiLyXeDAL;
    constructor() {
        this.daiLyXeDAL = new DaiLyXeDAL();
    }
    get(urlSearchParams = null, action = "") {
        return this.daiLyXeDAL.get(urlSearchParams, action);
    }

    getIndex(id, {
        action
    }) {
        let urlSearchParams = {};
        urlSearchParams.id = id;

        return this.daiLyXeDAL.get(urlSearchParams, action);
    }

    insert(data, urlSearchParams = null, action = "") {
        // try {
        //     data.Id = undefined;
        // } catch (error) {};
        return this.daiLyXeDAL.insert(data, urlSearchParams, action);
    }

    update(data, urlSearchParams = null, action = "") {
        return this.daiLyXeDAL.update(data, urlSearchParams, action);
    }

    delete(id, urlSearchParams = null, action = "") {
        return this.daiLyXeDAL.delete(id, urlSearchParams, action);
    }
}

export class DaiLyXeBLLInterfaceData extends DaiLyXeBLLBasic {
    constructor() {
        super();
        this.daiLyXeDAL.controllerName = "InterfaceData";
    }

    isExistPhoneNumberThanhVien(dienThoai) {
        var params = {};
        params[commonParams.dienThoai] = dienThoai;
        return this.daiLyXeDAL.get(params, "IsExistPhoneNumberThanhVien");
    }
    searchDataMater(action, params) {
        var paramsDef = {};
        paramsDef[commonParams.trangThai] = 1;
        paramsDef[commonParams.displayItems] = -1;
        paramsDef[commonParams.orderString] = "ThuTu";
        params = Object.assign(paramsDef, params??{});
        return this.daiLyXeDAL.get(params, "Search"+ action);
    }

    isExistEmailThanhVien(email) {
        var params = {};
        params[commonParams.email] = email;
        return this.daiLyXeDAL.get(params, "IsExistEmailThanhVien");
    }

    postThanhVienByAnonymous(data) {
        return this.daiLyXeDAL.insert(data, null,"PostThanhVienByAnonymous");
    }
}