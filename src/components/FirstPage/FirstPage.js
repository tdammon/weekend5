import React, { Component } from 'react';
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom'

class FirstPage extends Component {
    state = {
        feeling: ''
    }

    //This function will dispatch the users response to index.js
    //The dispatch type here is 'SET_FEELING'
    submitData=(event) => {
        event.preventDefault();
        this.props.dispatch({type: 'SET_FEELING', payload: this.state})
    }

    //This function will update the local state with the users response
    handleChange= (event) => {
        this.setState({
            feeling: event.target.value
        })
    }

    //This function will change the current url when a button is clicked
    changeLocation= ()=> {
        this.props.history.push('/secondPage')
    }

    render(){
        return(
            <div>
                <form onSubmit={this.submitData}>
                    <input onChange={this.handleChange} placeholder='How are you feeling' value={this.state.feeling} />
                </form>
                <button onClick={this.changeLocation} />
            </div>
        )
    }
}

//this export connects the component to the reduxStore as well as allowing us to use the history props
export default connect()(withRouter(FirstPage));