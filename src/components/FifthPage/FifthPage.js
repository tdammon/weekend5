import React, { Component } from 'react';
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom'



class FifthPage extends Component {
    
    //This function returns us to the home page after a button is clicked
    //The button will not need to clear the redux state since the redux object does not store past data
    changeLocation= ()=> {
        this.props.history.push('/')
    }

    render(){
        return(
            <div>
                <button onClick={this.changeLocation}>Return to Homepage</button>
            </div>
        )
    }
}

//this export connects the component to the reduxStore
export default connect()(withRouter(FifthPage));