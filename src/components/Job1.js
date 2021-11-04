import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createApplication } from '../actions/job';

class Job1 extends Component {
    
    handleApply = () => {

        // const {name,skills,status,location,description,pay,schedule} = this.props.job;
    
        const {user} = this.props.auth;
        const {job} = this.props;
    
        this.props.dispatch(createApplication(user.name,user.address,user.phonenumber,user._id,user.hours,user.dob,user.gender,user.skills,user.email,job.managerid,job.name,job._id))
       
      }
    
    render() {
        const { job } = this.props;
        const {user} = this.props.auth;
        console.log('lalallaalaxxxx')
        const { isLoggedIn } = this.props.auth;
        return (
            <div className="post" key={job._id} style={{width:'50vw',marginLeft:'50px'}}>
            <div className="post-header">
              
              <div className="post-content">{job.name}</div>
             
            {isLoggedIn && user.role == 'Applicant' && <div className="field">
        <button className="button save-btn" onClick={this.handleApply} style={{width:'50%'}}>Apply</button>
        </div> }
            
            </div>
          </div>
        );
    }
}

function mapStateToProps({ auth, job,application }) {
    return {
      auth,
      application,
    //   job
      
    };
  }
  
  export default connect(mapStateToProps)(Job1);