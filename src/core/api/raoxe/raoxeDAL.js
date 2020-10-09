import CoreTemplate from "../core.template"

class RaoXeDAL {
    controllerName = "";
    get (urlSearchParams, actionName = "") {
        if (!actionName || actionName.length < 1) {
            actionName = this.controllerName
        } else {
            actionName = this.controllerName + "/" + actionName;

        }
      
        return CoreTemplate.getRaoXe(actionName, urlSearchParams);
    }

    update (data, urlSearchParams= null, actionName = "") {
        if (!actionName || actionName.length < 1) {
            actionName = this.controllerName
        } else {
            actionName = this.controllerName + "/" + actionName;

        }
        return CoreTemplate.updateRaoXe(actionName, data, urlSearchParams);
    }

    insert (data, urlSearchParams= null, actionName = "") {
        if (!actionName || actionName.length < 1) {
            actionName = this.controllerName
        } else {
            actionName = this.controllerName + "/" + actionName;

        }
        
        return CoreTemplate.insertRaoXe(actionName, data, urlSearchParams);
    }

    delete (id, urlSearchParams= null, actionName = "") {
        if (!actionName || actionName.length < 1) {
            actionName = this.controllerName
        } else {
            actionName = this.controllerName + "/" + actionName;

        }

        return CoreTemplate.deleteRaoXe(actionName, id, urlSearchParams);
    }
}

export default RaoXeDAL