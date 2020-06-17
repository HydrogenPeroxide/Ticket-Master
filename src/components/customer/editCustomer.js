import React from 'react'
import {connect} from 'react-redux'
import {startEditCustomer} from '../../actions/customerAction'


class EditCustomer extends React.Component{
    constructor(){
        super()
        this.state={
            email:""
        }
    }

    handleChange = (e)=>{
        this.setState({[e.target.name] : e.target.value})
    }

    handleSubmit = (e) =>{
        e.preventDefault()
        const formData = {
            "email" : this.state.email
        }
        const redirect = ()=>{
            return this.props.history.push('/customer')
        } 
        const id = this.props.match.params.id
        this.props.dispatch(startEditCustomer(id,formData,redirect))
    }

    render(){
        console.log('this, is edit',this.props)
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor='email'>email</label>
                    < input type='text' id='email' value = {this.state.email} name='email' onChange={this.handleChange} /> 
                    <input type='submit' value='edit'/>
                </form>
            </div>
        )
    }
}

export default connect()(EditCustomer)