import React from 'react'
import {Link } from 'react-router-dom'
import {connect} from 'react-redux'
import {startGetShowCustomer} from '../../actions/customerAction'


class ShowCustomer extends React.Component {

    componentDidMount () {
        
            this.props.dispatch(startGetShowCustomer(this.props.match.params.id))
        
    }

    render(){
        console.log(this.props.showCustomer,'from show')
        return (
            
                    <div>
                        <Link to={`/customeredit/${this.props.showCustomer._id}`} >edit</Link>
                        <h2> {this.props.showCustomer.name} </h2>
                    </div>
                
        )
    }
}
const mapStateToProps =(state)=>{
    return {
        showCustomer : state.showCustomer
    }
}


export default connect(mapStateToProps)(ShowCustomer)