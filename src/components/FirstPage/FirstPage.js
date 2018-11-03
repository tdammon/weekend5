import React, { Component } from 'react';
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper'
import Input from '@material-ui/core/Input';

const styles = theme =>({
    root: {
        maxWidth: 500,
    },
    cardDisplay: {
        backgroundColor: 'pink',
        width: 345,
        height: 200,
        padding:30,
    }
})
class FirstPage extends Component {
    state = {
        feeling: ''
    }

    //This function will dispatch the users response to index.js
    //The dispatch type here is 'SET_FEELING'
    submitData=(event) => {
        event.preventDefault();
        this.props.dispatch({type: 'SET_FEELING', payload: this.state})
        this.changeLocation();
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
        const { classes } = this.props;

        return(
            <div>
                <Paper>
                    <Grid container justify="center">
                        <Card className={classes.root}>
                            <CardContent className={classes.cardDisplay}>
                    
                                <form>
                                <Input onChange={this.handleChange} placeholder='How are you feeling' value={this.state.feeling} />
                                </form>
                            </CardContent>
                            <CardActions>
                                <Button onClick={this.submitData}>Submit</Button>
                            </CardActions>
                        </Card>
                    </Grid>
                </Paper>
            </div>
        )
    }
}

//this export connects the component to the reduxStore as well as allowing us to use the history props
export default withRouter(connect()(withStyles(styles)(FirstPage)))