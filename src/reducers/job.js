import { UPDATE_JOB,ADD_JOB} from '../actions/actionTypes';

export default function jobs(state = [], action) {
  // { posts : [] }

  switch (action.type) {
    case UPDATE_JOB:
      return action.posts;

    case ADD_JOB:
      return [action.job, ...state];

    default:
      return state;
  }
}
