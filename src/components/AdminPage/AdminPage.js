import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import DeleteIcon from '@material-ui/icons/Delete';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import swal from 'sweetalert'

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

    //This function will delete a row of feedback from the Admin Page
    //The user will receive an alert asking them to confirm delete
    deleteFeedback =(id)=> {

        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this feedback!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          }).then((willDelete) => {
            if (willDelete) {
                //Axios Delete Reques
                axios({
                    method: 'DELETE',
                    url: `/feedback/${id}`,
                }).then(response => {
                    console.log(response);
                    this.getData();
                }).catch(err => {
                    console.log(err)
                })
              swal("This feedback has been deleted!", {
                icon: "success",
              });
            } else {
              swal("Your feedback is safe!");
            }
          });

        
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
                               <TableCell><IconButton onClick={() =>this.deleteFeedback(item.id)}><DeleteIcon/></IconButton></TableCell>
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