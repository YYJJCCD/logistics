import request from "axios"
import router from "./router"
import {message} from "ant-design-vue"

const token = localStorage.getItem("token")

const service = request.create({
    baseURL: "http://localhost:8011/api",
    timeout: 10000,
    headers: {
        'Authorization': token
    }
});

service.interceptors.response.use(
    response => {
        const res = response.data;
        if(!res.status){
            message.error('请求错误: ' + res.msg)
        }
        if(res.code === 403){
            message.error('没有访问权限')
            router.push("/403")
        }
        return res
    },
    error => {
        message.error(error)
        router.push('/500')
        return Promise.reject(error)
    }
);

export default service