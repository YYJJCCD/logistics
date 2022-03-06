import service from "@/request";

export function findAll() {
    return service({
        url: '/sale/findAll',
        method: 'get'
    })
}

export function searchCompany(companyName) {
    return service({
        url: '/sale/findByCompanyName?companyName' + companyName,
        method: 'get'
    })
}

export function save(data) {
    return service({
        url: '/sale/save',
        method: 'post',
        data: data
    })
}