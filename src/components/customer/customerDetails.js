import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import axios from '../../config/axios'
import {deleteCustomer} from '../../actions/customerAction'
class CustomerDetails extends React.Component{


    handleDelete = (id)=>{
        axios.delete(`/customers/${id}`,{
            headers : {
                "x-auth":localStorage.getItem('authToken')
            }
        })
        .then((response)=>{
            const deleteCust = response.data
            console.log(deleteCust,'delete')
            this.props.dispatch(deleteCustomer(deleteCust))
        })
        .catch((err)=>{
            console.log(err)
        })
    }
    

    render(){
        console.log(localStorage.getItem('authToken'))
        return (
            <div>
                {
                    this.props.customer && 
                    <div>
                <table>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>name</th>
                            <th>Email</th>
                            <th>Mobile</th>
                            <th>Actions</th>
                            <th>Remove</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.props.customer.map((customer)=>{
                                return(
                                    <tr>
                                        <td>{customer._id} </td>
                                        <td>{customer.name}  </td>
                                        <td>{customer.email}  </td>
                                        <td>{customer.mobile}  </td>
                                        <td><Link to={`/customer/${customer._id}`} >show Customer</Link></td>
                                        <td><button onClick = {()=>{this.handleDelete(customer._id)}} >remove</button> </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
                <Link to='/customer/addcustomer' >Add Customer</Link>
            </div>
                }
            </div>
        )
    }
}

const mapStateToProps = (state)=>{
    return {
        customer:state.customer,
        user:state.user
    }
}

export default connect(mapStateToProps)(CustomerDetails)