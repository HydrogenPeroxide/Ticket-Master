import axios from '../config/axios'


export const setCustomer = (customer)=>{
    return {type : 'SET_CUSTOMER' ,payload:customer}
}

export const showCustomer = (customer)=>{
    return {type : 'SHOW_CUSTOMER' ,payload:customer}
}

export const editCustomer = (customer)=>{
    return {type : 'EDIT_CUSTOMER' ,payload:customer }
}

export const deleteCustomer = (customer)=>{
    return {type : 'DELETE_CUSTOMER' ,payload:customer}
}

export const startGetCustomer = ()=>{
    return (dispatch)=>{
        axios.get('/customers',{
            headers : {
                "x-auth":localStorage.getItem('authToken')
            }
        })
        .then((response)=>{
            const customers = response.data
             dispatch(setCustomer(customers))
        })
        .catch((err)=>{
            console.log(err)
        })
    }
}

export const startAddCustomer = (formData,redirect)=>{
    console.log(localStorage.getItem('authToken'))
    return (dispatch)=>{
        axios.post('/customers',formData,{
            headers :{
                "x-auth":localStorage.getItem('authToken')
            }
        })
        .then((response)=>{
            const cust = response.data
            dispatch(setCustomer(cust))
        })
        .catch((err)=>{
            console.log(err)
        })
    }
}

export const startGetShowCustomer = (id)=>{
    return (dispatch)=>{
        axios.get(`/customers/${id}`,{
            headers : {
                "x-auth":localStorage.getItem('authToken')
            }
        })
        .then((response)=>{
            const customer = response.data
            dispatch(showCustomer(customer))
            
        })
        .catch((err)=>{
            console.log(err)
        })
    }
}

export const startEditCustomer = (id,formData,redirect)=>{
    console.log(formData,id)
    return (dispatch)=>{
        axios.put(`/customers/${id}`,formData,{
            headers :{
                "x-auth":localStorage.getItem('authToken')
            }
        })
        .then((response)=>{
            const customer = response.data
            
            dispatch(editCustomer(customer))
        })
        .catch((err)=>{
            console.log(err)
        })
        redirect()
    }
}