import React, { Component } from 'react';
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom'

class ThirdPage extends Component {
    state = {
        support: ''
    }

    //This function will dispatch the users response to index.js
    //The dispatch type here is 'SET_SUPPORT'
    submitData=(event) => {
        event.preventDefault();
        this.props.dispatch({type: 'SET_SUPPORT', payload: this.state})
    }

    //This function will update the local state with the users response
    handleChange= (event) => {
        this.setState({
            support: event.target.value
        })
    }

    //This function will change the current url when a button is clicked
    changeLocation= ()=> {
        this.props.history.push('/fourthPage')
    }

    render(){
        return(
            <div>
                <form onSubmit={this.submitData}>
                    <input onChange={this.handleChange} placeholder='How supported do you feel' value={this.state.support} />
                </form>
                <button onClick={this.changeLocation} />
            </div>
        )
    }
}

//this export connects the component to the reduxStore as well as allowing us to use the history props
export default connect()(withRouter(ThirdPage));