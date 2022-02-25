import service from '@/request'


export function findAll() {
    console.log('findAll')
    return service({
        url: '/commodity/findAll',
        method: 'get'
    })
    console.log(s)
    return s
}
export function findById(id) {
    return service({
        url: '/commodity/findById',
        method: 'get',
        params: {
            id
        }
    })
}

export function save(data){
    return service({
        url: '/commodity/save',
        method: 'post',
        data
    })
}

export function update(data){
    return service({
        url: '/commodity/update',
        method: 'post',
        data
    })
}


export function deleteById(id){
    return service({
        url: '/commodity/deleteById',
        method: 'get',
        params: {
            id
        }
    })
}

