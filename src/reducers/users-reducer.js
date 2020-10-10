import { getUserConstants } from '../constants';

let initialState = {
  loading: false,
  users: [],
  error: ""
};
export function users(state = initialState, action) {

  switch (action.type) {
    case getUserConstants.GET_USERS_REQUEST:
      return {
        ...state,
        loading: true
      };
    case getUserConstants.GET_USERS_SUCCESS:
      return {
        loading: false,
        users: state.users.concat(action.users),
        error: ""
      };
    case getUserConstants.GET_USERS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error
      };
    default:
      return state
  }
}