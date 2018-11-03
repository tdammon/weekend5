import React, { Component } from 'react';
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles';
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
class ThirdPage extends Component {
    state = {
        support: ''
    }

    //This function will dispatch the users response to index.js
    //The dispatch type here is 'SET_SUPPORT'
    submitData=(event) => {
        event.preventDefault();
        this.props.dispatch({type: 'SET_SUPPORT', payload: this.state})
        this.changeLocation();
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
        const { classes } = this.props;
        return(
            <div>
                <Stepper activeStep={2}>
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
                                <InputLabel>How supported are you feeling today</InputLabel>
                                <Select value={this.state.support} onChange={this.handleChange}>
                                        <MenuItem value='0'>0</MenuItem>
                                        <MenuItem value='1'>1</MenuItem>
                                        <MenuItem value='2'>2</MenuItem>
                                        <MenuItem value='3'>3</MenuItem>
                                        <MenuItem value='4'>4</MenuItem>
                                        <MenuItem value='5'>5</MenuItem>
                                    </Select>
                                </form>
                            </CardContent>
                            <CardActions className={classes.contentDisplay}>
                                <Button onClick={this.submitData} variant='contained' color='primary'>Next <ForwardIcon></ForwardIcon></Button>
                            </CardActions>
                        </Card>
                    </Grid>
                </Paper>
            </div>
        )
    }
}

//this export connects the component to the reduxStore as well as allowing us to use the history props
export default withRouter(connect()(withStyles(styles)(ThirdPage)));