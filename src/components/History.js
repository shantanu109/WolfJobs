import React, { Component } from 'react';
import ImgSlider from './ImgSlider';
import Widgets from './Widgets';
import Card from './Card';
import {Itembox} from './';
import Application from './Application';
import { connect } from 'react-redux';
import { fetchJobs } from '../actions/job';


class History extends Component {
    
    render() {
        const {application} = this.props;
        
        const {user} = this.props.auth;
        console.log('lalallaala')
        
        return (
            <div>
        {application.map((app) => (
            app.manageremail == user._id && app.status == '0' &&
          <Application app={app} key={app._id} />
        ))}
        
        {/* <Widgets style={{marginTop:'1000px'}}/> */}
          
      </div>
      

            
        );
        
    }
}

function mapStateToProps({auth,job,application}) {
    return {
      auth,
      job,
      application

      
    };
  }
  
export default connect(mapStateToProps)(History);
