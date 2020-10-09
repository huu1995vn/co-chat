import httpService from "./http.service"
import { apiDaiLyXe, apiDaiLyXe_Sufix_DB , apiRaoXe, apiRaoXe_Sufix_DB } from "../variables"

class CoreTemplate {
    //URL DaiLyXe
    static _buildFullDBApiDaiLyXe(controllerName, addApiDaiLyXe_Sufix_DB = true ) {
        return apiDaiLyXe + (addApiDaiLyXe_Sufix_DB ?  apiDaiLyXe_Sufix_DB : "/") + controllerName; //crm/
    }

  

    static getDaiLyXe(controllerName, urlSearchParams, buildFullDBApiHostDaiLyXe) {
        if (buildFullDBApiHostDaiLyXe === undefined || buildFullDBApiHostDaiLyXe === null) {
            buildFullDBApiHostDaiLyXe = true;
        }
        var options = {};
        options.params = urlSearchParams;
        var requestString = this._buildFullDBApiDaiLyXe(controllerName, buildFullDBApiHostDaiLyXe);
        return httpService.get(requestString, options);
    }

    static updateDaiLyXe(controllerName, data, urlSearchParams, buildFullDBApiHostDaiLyXe) {
        if (buildFullDBApiHostDaiLyXe === undefined || buildFullDBApiHostDaiLyXe === null) {
            buildFullDBApiHostDaiLyXe = true;
        }
        var options = {};
        options.params = urlSearchParams;
        let id = data ? data.Id : undefined;
        let fullUrl = this._buildFullDBApiDaiLyXe(controllerName) + (id !== undefined ? "/" + id : "");
        return httpService.put(fullUrl, data, options);
    };
    static insertDaiLyXe(controllerName, data, urlSearchParams, buildFullDBApiHostDaiLyXe) {
        if (buildFullDBApiHostDaiLyXe === undefined || buildFullDBApiHostDaiLyXe === null) {
            buildFullDBApiHostDaiLyXe = true;
        }
        var options = {};
        options.params = urlSearchParams;
        let fullUrl = this._buildFullDBApiDaiLyXe(controllerName);
        return httpService.post(fullUrl, data, options);
    }
    static deleteDaiLyXe(controllerName, id, urlSearchParams, buildFullDBApiHostDaiLyXe) {
        if (buildFullDBApiHostDaiLyXe === undefined || buildFullDBApiHostDaiLyXe === null) {
            buildFullDBApiHostDaiLyXe = true;
        }
        var options = {};
        options.params = urlSearchParams;

        let fullUrl = this._buildFullDBApiDaiLyXe(controllerName) + (id !== undefined ? "/" + id : "");
        return httpService.delete(fullUrl, options);
    }
    //===============================RaoXe

    static _buildFullDBApiRaoXe(controllerName, addApiRaoXe_Sufix_DB = true ) {
        return apiRaoXe + (addApiRaoXe_Sufix_DB ? apiRaoXe_Sufix_DB : "/") + controllerName; //crm/
    }
    
    static getRaoXe(controllerName, urlSearchParams, buildFullDBApiHostRaoXe) {
        if (buildFullDBApiHostRaoXe === undefined || buildFullDBApiHostRaoXe === null) {
            buildFullDBApiHostRaoXe = true;
        }
        var options = {};
        options.params = urlSearchParams;
        var requestString = this._buildFullDBApiRaoXe(controllerName, buildFullDBApiHostRaoXe);
        return httpService.get(requestString, options);
    }

    static updateRaoXe(controllerName, data, urlSearchParams, buildFullDBApiHostRaoXe) {
        if (buildFullDBApiHostRaoXe === undefined || buildFullDBApiHostRaoXe === null) {
            buildFullDBApiHostRaoXe = true;
        }
        var options = {};
        options.params = urlSearchParams;
        let id = data ? data.Id : undefined;
        let fullUrl = this._buildFullDBApiRaoXe(controllerName) + (id !== undefined ? "/" + id : "");
        return httpService.put(fullUrl, data, options);
    };
    static insertRaoXe(controllerName, data, urlSearchParams, buildFullDBApiHostRaoXe) {
        if (buildFullDBApiHostRaoXe === undefined || buildFullDBApiHostRaoXe === null) {
            buildFullDBApiHostRaoXe = true;
        }
        var options = {};
        options.params = urlSearchParams;
        let fullUrl = this._buildFullDBApiRaoXe(controllerName);
        return httpService.post(fullUrl, data, options);
    }
    static deleteRaoXe(controllerName, id, urlSearchParams, buildFullDBApiHostRaoXe) {
        if (buildFullDBApiHostRaoXe === undefined || buildFullDBApiHostRaoXe === null) {
            buildFullDBApiHostRaoXe = true;
        }
        var options = {};
        options.params = urlSearchParams;

        let fullUrl = this._buildFullDBApiRaoXe(controllerName) + (id !== undefined ? "/" + id : "");
        return httpService.delete(fullUrl, options);
    }
}

export default CoreTemplate