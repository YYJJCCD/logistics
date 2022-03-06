import service from "@/request"

export function findAll() {
    return service({
        url: "/employee/findAll",
        method: "get"
    })
}

export function save(data) {
    return service({
        url: "/employee/save",
        method: "post",
        data: data
    })
}

export function deleteById(id) {
    return service({
        url: "/employee/deleteById",
        method: "delete",
        params: {
            id
        }
    })
}

