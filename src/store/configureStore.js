import {createStore , combineReducers,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import userReducer from '../reducers/userReducer'
import customerReducer from '../reducers/customerReducer'
import showCustomerReducer from '../reducers/showCustomerReducer'
import departmentsReducer from '../reducers/departmentsReducer'

const configureStore = ()=>{
    const store = createStore(combineReducers({
            user:userReducer,
            customer:customerReducer,
            showCustomer : showCustomerReducer,
            departments : departmentsReducer,
    }),applyMiddleware(thunk))
    return store
}
export default configureStore