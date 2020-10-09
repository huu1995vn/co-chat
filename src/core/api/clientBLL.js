import ClientDAL from "./clientDAL"
import {
    commonParams
} from "../variables"
export class ClientBLLBasic {
    clientDAL;
    constructor() {
        this.clientDAL = new ClientDAL();
    }
    get(action = "") {
        return this.clientDAL.get(null, action);
    }

    getIndex(id, {
        action
    }) {
        let urlSearchParams = {};
        urlSearchParams.id = id;

        return this.clientDAL.get(urlSearchParams, action);
    }

    insert(data, urlSearchParams = null, action = "") {
        // try {
        //     data.Id = undefined;
        // } catch (error) {};
        return this.clientDAL.insert(data, urlSearchParams, action);
    }

    update(data, urlSearchParams = null, action = "") {
        return this.clientDAL.update(data, urlSearchParams, action);
    }

    delete(id, urlSearchParams = null, action = "") {
        return this.clientDAL.delete(id, urlSearchParams, action);
    }
}

export class ClientBLLInterfaceData extends ClientBLLBasic {
    constructor() {
        super();
        this.clientDAL.controllerName = "InterfaceData";
    }

    isExistPhoneNumberThanhVien(dienThoai) {
        var params = {};
        params[commonParams.dienThoai] = dienThoai;
        return this.clientDAL.get(params);
    }

    postThanhVienByAnonymous(data) {
        return this.clientDAL.insert(data);
    }
}