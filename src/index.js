import React from 'react'
import ReactDom from 'react-dom'
import App from './App'
import configureStore from './store/configureStore'
import {Provider} from 'react-redux'

import { startGetUser } from './actions/userAction'
import { startGetCustomer } from './actions/customerAction'
import {startGetDepartment} from './actions/departmentAction'

const store = configureStore()

console.log(store.getState())

store.subscribe(()=>{
    console.log(store.getState())
})

//handle page relode

if(localStorage.getItem('authToken')){
    store.dispatch(startGetUser())
}
if(localStorage.getItem('authToken')){
    store.dispatch(startGetCustomer())
}
if(localStorage.getItem('authToken')){
    store.dispatch(startGetDepartment())
}

ReactDom.render(<Provider store = {store} > 
                    <App/> 
                </Provider> ,
        document.getElementById('root'))