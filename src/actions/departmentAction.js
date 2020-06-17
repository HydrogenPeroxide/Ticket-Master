import axios from '../config/axios'



export const setDepartment = (departments)=>{
    return {type : 'SET_DEPARTMENT' ,payload:departments}
}

export const startGetDepartment = ()=>{
    return (dispatch)=>{
        axios.get('/departments',{
            headers : {
                "x-auth":localStorage.getItem('authToken')
            }
        })
        .then((response)=>{
            const departments = response.data
            dispatch(setDepartment(departments))
        })
        .catch((err)=>{
            console.log(err)
        })
    }
}