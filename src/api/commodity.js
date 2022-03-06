import service from "@/request"


export function findAll() {
    return service({
        url: "/commodity/findAll",
        method: "get"
    })
}
export function findById(id) {
    return service({
        url: "/commodity/findById",
        method: "get",
        params: {
            id
        }
    })
}

export function findLikeByName(name) {
    return service({
        url: "/commodity/findLikeByName",
        method: "get",
        params: {
            name
        }
    })
}

export function save(data){
    return service({
        url: "/commodity/save",
        method: "post",
        data
    })
}

export function update(data){
    return service({
        url: "/commodity/update",
        method: "post",
        data
    })
}


export function deleteById(id){
    return service({
        url: "/commodity/deleteById",
        method: "delete",
        params: {
            id
        }
    })
}

