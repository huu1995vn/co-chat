import axios from "axios"
import setupAxiosInterceptors from "./interceptor"
setupAxiosInterceptors()
class HttpService {
    static async get(url, options) {
        var response = await axios({
            method: "get",
            url: url,
            params: options.params,
            headers: options.headers
        })
        return response.data;

    }
    static async post(url, body, options) {
        var response =  await axios({
            method: "post",
            url: url,
            data: body,
            params: options.params,
            headers: options.headers
            
        });
        return response.data;
    }
    static async put(url, body, options) {
        var response = await axios({
            method: "put",
            url: url,
            data: body,
            params: options.params,
            headers: options.headers
        })
        return response.data;

    }

    static async delete(url, options) {
        var response =  await axios({
            method: "delete",
            url: url,
            params: options.params,
            headers: options.headers
        })
        return response.data;
    }

}

export default HttpService