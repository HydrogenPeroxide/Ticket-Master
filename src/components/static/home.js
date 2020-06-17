import React from 'react'
import {connect} from 'react-redux'

function Home(props){
    return(
        <div>
            <h1>welcome to ticket master app</h1>
            
        </div>
    )
}


export default connect()(Home)