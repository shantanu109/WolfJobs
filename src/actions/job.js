import { APIURLS } from '../helpers/urls';
import { getFormBody } from '../helpers/utils';
import {
    ADD_JOB,
    UPDATE_JOB,
  } from './actionTypes';



export function createJob(
    name,
    skills,
    userId,
    status,
    location,
    description,
    pay,
    schedule
  ) {
    return (dispatch) => {
      const url = APIURLS.createJob();
      fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: getFormBody({
          name,
          id: userId,
          skills,
          status,
          location,
          description,
          pay,
          schedule,
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          // console.log('data', data);
          if (data.success) {
            // do something
            localStorage.setItem("token", data.data.token);
            dispatch(jobSuccess(data.data.job));
            return;
          }
          // dispatch(signupFailed(data.message));
        });
    };
  }
  


// export function jobFailed(error) {
//     return {
//       type: SIGNUP_FAILED,
//       error,
//     };
//   }
  
  export function jobSuccess(job) {
    return {
      type: ADD_JOB,
      job,
    };
  }
  