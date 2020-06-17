import React from 'react'
import {connect} from 'react-redux'
import {startAddCustomer} from '../../actions/customerAction'

class AddCustomer extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            name:'',
            email:'',
            mobile:''
        }
    }


    handleChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    handleSubmit =(e)=>{
        e.preventDefault()
        const formData = {
            name : this.state.name,
            email: this.state.email,
            mobile : this.state.mobile
        }
        const redirect = () =>{
            return this.props.history.push('/')
        }
        this.props.dispatch(startAddCustomer(formData,redirect))
    }

    render(){
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                <label htmlFor='name'>name</label>
                < input type='text' id='name' value = {this.state.name} name='name' onChange={this.handleChange} /> <br/>
                <label htmlFor='email'>email</label>
                < input type='text' id='email' value = {this.state.email} name='email' onChange={this.handleChange} /> <br/>
                <label htmlFor='mobile'>mobile</label>
                < input type='text' id='mobile' value = {this.state.mobile} name='mobile' onChange={this.handleChange} /> <br/>
                <input type='submit' value='login'/>
                </form>
            </div>
        )
    }
}

export default connect()(AddCustomer)