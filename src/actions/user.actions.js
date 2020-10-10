import { getUserConstants } from '../constants';
import { userService } from '../services';

export const userActions = {
    getUsers,
};

/**
 * @name getUsers
 * @description Action creator to fetch the users data.
 * @params count: Users count
 * @return users Object
 */
function getUsers(count) {
    return dispatch => {
        dispatch(request());

        userService.fetchUsers(count)
            .then(
                users => dispatch(success(users)),
                error => dispatch(failure(error.toString()))
            );
    };

    function request() { return { type: getUserConstants.GET_USERS_REQUEST } }
    function success(users) { return { type: getUserConstants.GET_USERS_SUCCESS, users } }
    function failure(error) { return { type: getUserConstants.GET_USERS_FAILURE, error } }
}
