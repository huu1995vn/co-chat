import CoreTemplate from "./core.template"

class ClientDAL {
    controllerName = "";
    get (urlSearchParams, actionName = "") {
        if (!actionName || actionName.length < 1) {
            actionName = this.controllerName
        } else {
            actionName = this.controllerName + "/" + actionName;

        }
      
        return CoreTemplate.getDaiLyXe(actionName, urlSearchParams);
    }

    update (data, urlSearchParams= null, actionName = "") {
        if (!actionName || actionName.length < 1) {
            actionName = this.controllerName
        } else {
            actionName = this.controllerName + "/" + actionName;

        }
        return CoreTemplate.updateDaiLyXe(actionName, data, urlSearchParams);
    }

    insert (data, urlSearchParams= null, actionName = "") {
        if (!actionName || actionName.length < 1) {
            actionName = this.controllerName
        } else {
            actionName = this.controllerName + "/" + actionName;

        }
        
        return CoreTemplate.insertDaiLyXe(actionName, data, urlSearchParams);
    }

    delete (id, urlSearchParams= null, actionName = "") {
        if (!actionName || actionName.length < 1) {
            actionName = this.controllerName
        } else {
            actionName = this.controllerName + "/" + actionName;

        }

        return CoreTemplate.deleteDaiLyXe(actionName, id, urlSearchParams);
    }
}

export default ClientDAL