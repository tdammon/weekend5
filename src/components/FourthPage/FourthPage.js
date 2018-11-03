import React, { Component } from 'react';
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom'
import axios from 'axios'

const mapReduxStateToProps = (reduxState) => ({
    reduxState
})

class FourthPage extends Component {
    state = {
        comments: ''
    }

    //This function will dispatch the users response to index.js
    //The dispatch type here is 'SET_COMMENTS'
    submitData=(event) => {
        event.preventDefault();
        this.props.dispatch({type: 'SET_COMMENTS', payload: this.state})
        this.sendData();
        this.changeLocation();
    }

    //this function takes us to the fifth page
    changeLocation= ()=> {
        this.props.history.push('/fifthPage')
    }

    //This function will update the local state with the users response
    handleChange= (event) => {
        this.setState({
            comments: event.target.value
        })
    }

    //This axios request will send the users responses from the redux store to the database
    sendData= () => {
        console.log('making axios request')
        axios({
            method: 'POST',
            url: '/feedback',
            data: {
                feeling: this.props.reduxState.reducer.feeling,
                understanding: this.props.reduxState.reducer.understand,
                support: this.props.reduxState.reducer.support,
                comments: this.props.reduxState.reducer.comments,
            }
        })
    }

    render(){
        return(
            <div>
                <form>
                    <input onChange={this.handleChange} placeholder='Any comments' value={this.state.comments} />
                </form>
                <button onClick={this.submitData} />
            </div>
        )
    }
}

//this export connects the component to the reduxStore
export default connect(mapReduxStateToProps)(withRouter(FourthPage));