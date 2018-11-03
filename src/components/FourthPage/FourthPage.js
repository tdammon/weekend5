import React, { Component } from 'react';
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles';
import axios from 'axios'
//Material-UI imports
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import ForwardIcon from '@material-ui/icons/Forward';

const mapReduxStateToProps = (reduxState) => ({
    reduxState
})

const styles = theme =>({
    root: {
        maxWidth: 500,
    },
    cardDisplay: {
        backgroundColor: 'lightblue',
        width: 345,
        height: 200,
        padding:30,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    contentDisplay: {
        height: 80,
        display: 'flex',
        justifyContent: 'flex-end',
    },
    formDisplay: {
        backgroundColor: 'lightgrey',
        width: 150,
        height: 50,
        padding: 50,
    }
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
        const { classes } = this.props;
        return(
            <div>
                <Stepper activeStep={3}>
                    <Step key='0'>
                        <StepLabel>Feeling</StepLabel>
                    </Step>
                    <Step key='1'>
                        <StepLabel>Understanding</StepLabel>
                    </Step>
                    <Step key='2'>
                        <StepLabel>Support</StepLabel>
                    </Step>
                    <Step key='3'>
                        <StepLabel>Comments</StepLabel>
                    </Step>
                    <Step key='4'>
                        <StepLabel>Completed</StepLabel>
                    </Step>
                </Stepper >
                
                <Paper>
                    <Grid container justify="center">
                        <Card className={classes.root}>
                            <CardContent className={classes.cardDisplay}>
                                <form className={classes.formDisplay}>
                                <InputLabel>Any Comments</InputLabel>
                                <input value={this.state.comments} onChange={this.handleChange} placeholder='comments' />
                                </form>
                            </CardContent>
                            <CardActions className={classes.contentDisplay}>
                                <Button onClick={this.submitData} variant='contained' color='primary'>Submit <ForwardIcon></ForwardIcon></Button>
                            </CardActions>
                        </Card>
                    </Grid>
                </Paper>
            </div>
        )
    }
}

//this export connects the component to the reduxStore
export default withRouter(connect(mapReduxStateToProps)(withStyles(styles)(FourthPage)));