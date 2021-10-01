export const add = (data) => {
    return{
        type : "Add",
        payload:{
            id: new Date().getTime().toString(),
            data:data
        }
    }
}

export const del = () => {
    return{
        type : "Del"
    }
}

export const remove = () => {
    return{
        type : "Remove"
    }
}