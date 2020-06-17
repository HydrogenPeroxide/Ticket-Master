const customerInitialState = []



const customerReducer = (state =customerInitialState , action ) =>{

    switch(action.type){
        case 'SET_CUSTOMER' : {
            return state.concat(action.payload)
        }

        case 'DELETE_CUSTOMER' : {
            return state.filter((customer)=>{
                return customer._id !=action.payload._id
            })
        }

        case 'EDIT_CUSTOMER' : {
            
            return state.map(customer =>(customer._id ===action.payload._id ? Object.assign({},customer,action.payload) : customer ))
        }
        

        default : {
            return state.concat([])
        }
    }
}
export default customerReducer