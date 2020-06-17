const showCustomerInitialState = {}

const showCustomerReducer = (state =showCustomerInitialState , action ) =>{

    switch(action.type){
        case 'SHOW_CUSTOMER' : {
            return Object.assign(state,action.payload)
        }
        

        default : {
            return Object.assign(state,{})
        }
    }
}
export default showCustomerReducer