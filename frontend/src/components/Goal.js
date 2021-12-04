import React, { Component } from 'react';
import { connect } from 'react-redux';

import { searchUsers } from '../actions/search';
// import {clearAuthState} from '../actions/auth';
import {clearsearchstate} from '../actions/search';

import 'react-datepicker/dist/react-datepicker.css';

import Widgets from './Widgets.js';
import {createJob} from '../actions/job';


class Goal extends Component {
    errorMsg = "";

    constructor(props) {
        super(props);
    
        this.state = {
          name:'',
          skills: '',
          managerid:'',
          status:'0',
          location:'',
          description:'',
          pay:'',
          schedule:'',
          editMode: false,
        };
      }
    

    handleSearch = (e) => {
        const searchText = e.target.value;
        console.log(searchText)
         
        this.props.dispatch(searchUsers(searchText));
        
      };

   

    clearSearch = () => {
        this.props.dispatch(clearsearchstate([]))
        console.log("UNMOUNT")

    }

    handleInputChange = (fieldName,val) => {

        this.setState({
            [fieldName]: val
        })

        
    
      }

    
  handleSave = () => {

    const {name,skills,status,location,description,pay,schedule} = this.state;

    const {user} = this.props.auth;

    //console.log(this.state);
    if(this.state.name === "" ){
      this.errorMsg = "Missing name field"
    } else if(this.state.skills === ""){
      this.errorMsg = "Missing skills field"
    } else if(this.state.location === ""){
      this.errorMsg = "Missing location field"
    } else if(this.state.description === ""){
      this.errorMsg = "Missing description field"
    } else if(this.state.pay === ""){
      this.errorMsg = "Missing pay field"
    } else if(this.state.schedule === ""){
      this.errorMsg = "Missing schedule field"
    } else {
      this.props.dispatch(createJob(name,skills,user._id,status,location,description,pay,schedule))
      this.errorMsg = "Job Added Successfully";
    }

    //Hard call to reset the page to display the error message correctly.
    this.setState(this.state);
  }

    
    
    render() {
       
      const {error} = this.props.auth;
        
        
        return (
            <div>
           <div className="goal-form" style={{width:'600px',height:'550px',marginLeft:'100px'}} >
           <span className="login-signup-header">Add Job</span>
            {error && <div className="alert error-dailog">{error}</div>}
            
            {/* <form className="login-form"> */}

            <div className="field">
          <input
            placeholder="Job Name"
            type="text"
            id="name"
            required
            onChange={(e) => this.handleInputChange('name', e.target.value)}
          />
        </div>

        <div className="field">
          <input
            placeholder="Skills"
            type="text"
            required
            onChange={(e) => this.handleInputChange('skills', e.target.value)}
          />
        </div>

        <div className="field">
          <input
            placeholder="Location"
            type="text"
            required
            onChange={(e) => this.handleInputChange('location', e.target.value)}
          />
        </div>
        <div className="field">
          <input
            placeholder="Description"
            type="text"
            required
            onChange={(e) => this.handleInputChange('description', e.target.value)}
          />
        </div>

        <div className="field">
          <input
            placeholder="Pay"
            type="text"
            required
            onChange={(e) => this.handleInputChange('pay', e.target.value)}
          />
        </div>

        <div className="field">
          <input
            placeholder="Schedule"
            type="text"
            required
            onChange={(e) => this.handleInputChange('schedule', e.target.value)}
          />
        </div>
        
        <div style={{textAlign:'left'}}>
          <h4 id="response" style ={{marginLeft:'-250px'}}>{this.errorMsg}</h4>
        </div>
        
        <div className="field">
        <button className="button save-btn" onClick={this.handleSave} >Save</button>
        </div>
        

        </div>
        
                <Widgets style={{marginTop:'1000px'}}/>
        
        </div>
        
           
        );
    }
}



function mapStateToProps(state) {
    return {
      auth: state.auth,
      results: state.search.results,
    };
  }
  
  export default connect(mapStateToProps)(Goal);