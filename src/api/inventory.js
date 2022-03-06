import service from "@/request";

export function analyzeCommodity(type) {
    return service({
        url: '/inventory/analyzeCommodity?type=' + type,
        method: 'get'
    })
}

export function findAllByStorageId(id) {
    return service({
        url: '/inventory/findAllByStorageId?storageId=' + id,
        method: 'get'
    })
}

export function InAndOut(type, data) {
    return service({
        url: '/inventory/' + type,
        method: 'post',
        data: data
    })
}

export function findAllRecoedByStorageId(id) {
    return service({
        url: '/inventory/record/findAllRecordByStorageId?storageId=' + id,
        method: 'get'
    })
}

export function deleteInventoryById(id) {
    return service({
        url: '/deleteInventoryById?id=' + id,
        method: 'delete'
    })
}