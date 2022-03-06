import request from "axios"
import router from "./router"
import { message } from "ant-design-vue"

const service = request.create({
    baseURL: "http://localhost:8011/api",
    timeout: 10000,
});


service.interceptors.request.use(
    config => {
        config.headers = {
            "Content-Type": "application/json"
        }
        if (localStorage.getItem("token")) {
            config.headers.Authorization = localStorage.getItem("token")
        }
        return config
    },
    error => {
        return Promise.reject(error)
    }
)

service.interceptors.response.use(
    response => {
        const res = response.data
        if (!res.status) {
            if (res.code === 401) {
                message.error(res.msg)
                router.push("/login")
            } else if (res.code === 403) {
                message.error("权限不足")
            } else {
                message.error("请求错误" + res.msg)
            }

        }
        return res
    },
    error => {
        message.error(error)
        router.push("/500")
        return Promise.reject(error)
    }
);

export default service