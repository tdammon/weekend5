import React, { Component } from 'react';
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom'

class SecondPage extends Component {
    state = {
        understand: ''
    }

    //This function dispatches the users response to the reducer in index.js
    //The dispatch type will be 'SET_UNDERSTAND
    submitData=(event) => {
        event.preventDefault();
        this.props.dispatch({type: 'SET_UNDERSTAND', payload: this.state})
        this.changeLocation();
    }

    //This function will update the local state with the users response
    handleChange= (event) => {
        this.setState({
            understand: event.target.value
        })
    }

    //This function will change the current url when a button is clicked
    changeLocation= ()=> {
        this.props.history.push('/thirdPage')
    }

    render(){
        return(
            <div>
                <form>
                    <input onChange={this.handleChange} placeholder='How well do you understand' value={this.state.understand} />
                </form>
                <button onClick={this.submitData} />
            </div>
        )
    }
}

//this export connects the component to the reduxStore as well as allowing us to use the history props
export default connect()(withRouter(SecondPage));