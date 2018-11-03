import React, { Component } from 'react';
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom'
//Material-UI imports
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';


class FifthPage extends Component {
    
    //This function returns us to the home page after a button is clicked
    //The button will not need to clear the redux state since the redux object does not store past data
    changeLocation= ()=> {
        this.props.history.push('/')
    }

    render(){
        return(
            <div>
                <Stepper activeStep={4}>
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
                <Button onClick={this.changeLocation} variant='contained' color='primary'>Return to Homepage</Button>
            </div>
        )
    }
}

//this export connects the component to the reduxStore
export default connect()(withRouter(FifthPage));