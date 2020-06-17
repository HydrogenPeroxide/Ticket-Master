const initialDepart = []


const departmentsReducer = (state = initialDepart,action)=>{
    switch(action.type){

        case 'SET_DEPARTMENT' : {
            return state.concat(action.payload)
        }


        default : {
            return state.concat([])
        }
    }
}

export default departmentsReducer