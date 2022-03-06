import service from "@/request"

export function checkToken(){
    return service({
        url: "admin/checkToken",
        method: "get",
        params: {
            token: localStorage.getItem("token")
        }   
    })
}

export function hasInit() {
    return service({
        url: "/admin/basics/hasInit",
        method: "get",
    })
}

export function init(data) {
    return service({
        url: "/admin/basics/init",
        method: "post",
        data: data
    })
}

export function login(type, data) {
    return service({
        url: "/admin/basics/login?type=" + type,
        method: "post",
        data: data
    })
}

export function sendEmail(data) {
    return service({
        url: "/admin/basics/sendEmail",
        method: "post",
        data: data
    })
}