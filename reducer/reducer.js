const init = {
    index : 0,
    imgs : "",
    info : "",
    SBS : ""
}
export default function reducer(data = init, action, arg) {
    switch (action) {
        case 'GET_IMAGES':
            return {
                ...data,
                imgs : arg[0]
            }
        case 'GET_INFO':
            return {
                ...data,
                info : arg[0]
            }
        case 'GET_SBS':
            return {
                ...data,
                SBS : arg[0]
            }
        case 'index_change':
            return {
                ...data,
            index : arg[0]
            }
        default:
            return data
    }

}
