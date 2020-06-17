import React from 'react'
import {BrowserRouter , Route , Link , Switch} from 'react-router-dom'
import Home from './components/static/home'
import Register from './components/auth/Register'
import Login from './components/auth/Login'
import {connect} from 'react-redux'
import {startUserLogout} from './actions/userAction'
import CustomerDetails from './components/customer/customerDetails'
import AddCustomer from './components/customer/addCustomer'
import ShowCustomer from './components/customer/showCustomer'
import EditCustomer from './components/customer/editCustomer'
import DepartmentDetails from './components/departments/departmentDetails'


function App(props){
    const handleLogout = () =>{
        props.dispatch(startUserLogout())
    }
    return(
        <BrowserRouter>
            <div>
                <h1>Ticket master</h1>
                <Link to='/' >Home</Link>
                {
                    Object.keys(props.user).length !=0 ? (
                        <div>
                            <Link to='/account' >Account</Link>-
                            <Link to='/customer' >Customer Details</Link>-
                            <Link to='/department' >Department</Link>-
                            
                            <Link to='#' onClick={handleLogout} >Logout</Link>
                        </div>
                    ): (
                        <div>
                            <Link to='/users/register' >Register</Link>-
                            <Link to='/users/login' >Login</Link>
                            
                            
                        </div>
                    )
                }
                


                <Switch>
                    <Route path='/' component={Home} exact={true}/>
                    <Route path='/users/register' component={Register} />
                    <Route path='/users/login' component={Login} />
                    <Route path='/customer' component={CustomerDetails} exact ={true} />
                    <Route path='/customer/addcustomer'  component={AddCustomer} />
                    <Route path='/customer/:id'  component={ShowCustomer} />
                    <Route path='/customeredit/:id'  component={EditCustomer} />
                    <Route path='/department'  component={DepartmentDetails} exact={true} />

                    
                </Switch>
            </div>
        </BrowserRouter>
    )
}

const mapStateToProps = (state)=>{
    return {
        user:state.user
    }
}


export default connect(mapStateToProps)(App)