import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    root: {
      width: '75%',
    },
    row: {
        '&:nth-of-type(odd)':{
            backgroundColor: 'lightblue',
        }
    }
  })
class AdminPage extends Component {
    state ={
        feedback: []
    }

    //This axios request gets data from the server
    getData= () => {
        console.log('getting data')
        axios({
            method: 'GET',
            url: '/feedback',
        }).then(response => {
            console.log(response.data);
            this.setState({feedback: response.data})
        }).catch(err => {
            console.log('GET', err)
        })
    }

    componentDidMount() {
        this.getData();
    }

    render(){
        const {classes} = this.props;
        return(
            <div>
               <Table className={classes.root}>
                   <TableHead>
                       <TableRow>
                           <TableCell>Feeling</TableCell>
                           <TableCell>Comprehension</TableCell>
                           <TableCell>Support</TableCell>
                           <TableCell>Comments</TableCell>
                           <TableCell>Delete</TableCell>
                       </TableRow>
                    </TableHead>
                    <TableBody>
                       {this.state.feedback.map(item=> {
                           return(
                           <TableRow className={classes.row} key={item.id}>
                               <TableCell>{item.feeling}</TableCell>
                               <TableCell>{item.understanding}</TableCell>
                               <TableCell>{item.support}</TableCell>
                               <TableCell>{item.comments}</TableCell>
                           </TableRow>
                           )
                       })}
                   </TableBody>
               </Table>
            </div>
        )
    }
}



//this export connects the component to the reduxStore as well as allowing us to use the history props
export default connect()(withStyles(styles)(AdminPage));