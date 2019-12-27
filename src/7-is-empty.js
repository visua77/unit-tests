export const isEmpty = (stringArrayOrObject) => {
    const type = typeof stringArrayOrObject

    if (type === 'string') {
        return stringArrayOrObject === ''
    }

    if (stringArrayOrObject.length > 0) {
        return false
    }

    if (stringArrayOrObject.length === 0) {
        return true
    }



    if (stringArrayOrObject.hasOwnProperty('name')) {

        return false
    }

    return true
}