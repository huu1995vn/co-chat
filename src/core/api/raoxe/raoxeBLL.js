import RaoXeDAL from "./raoxeDAL"
import {
    commonParams
} from "../../variables"
export class RaoXeBLLBasic {
    clientDAL;
    constructor() {
        this.clientDAL = new RaoXeDAL();
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

export class RaoXeBLLInterfaceData extends RaoXeBLLBasic {
    constructor() {
        super();
        this.clientDAL.controllerName = "InterfaceData";
    }
    xacThucByMaXacThuc(email, maXacNhan) {
        var params = {};
        params[commonParams.email] = email;
        params[commonParams.maXacNhan] = maXacNhan;
        return this.clientDAL.insert(params, "xacThucByMaXacThuc");
    }
   
}

export class RaoXeBLLEmail extends RaoXeBLLBasic {
    constructor() {
        super();
        this.clientDAL.controllerName = "Email";
    }

    sendVerifyEmail(email) {
        var params = {};
        params[commonParams.email] = email;
        params[commonParams.checkEmailExist] = false;
        return this.clientDAL.insert(params, "sendverifyemail");
    }

}