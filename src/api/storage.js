import service from "@/request";

export function findAll() {
    return service({
        url: "/storage/findAll",
        method: "get"
    })
}

export function save(data) {
    return service({
        url: "/storage/save",
        method: "post",
        data: data
    })
}

export function deleteById(id) {
    return service({
        url: "/storage/deleteById",
        method: "delete",
        params: {
            id
        }
    })
}

export function findAllEmployee() {
    return service({
        url: "/storage/findAllEmployee",
        method: "get"
    })
}
