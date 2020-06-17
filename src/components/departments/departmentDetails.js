import React from 'react'
import {connect} from 'react-redux'


class DepartmentDetails extends React.Component{




    render(){
        console.log(this.props.departments,'from dept details')
        return (
            <div>
                {
                    this.props.departments.map((department)=>{
                        return (
                            <div>
                                <h1>department {department._id} </h1>
                                <h1>department {department.name} </h1>
                                <h1>department {department.user} </h1>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

const mapStateToProps = (state)=>{
    return {
        departments:state.departments
    }
}


export default connect(mapStateToProps)(DepartmentDetails)