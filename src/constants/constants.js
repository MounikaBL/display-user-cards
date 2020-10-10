export const getUserConstants = {
    GET_USERS_REQUEST: 'GET_USERS_REQUEST',
    GET_USERS_SUCCESS: 'GET_USERS_SUCCESS',
    GET_USERS_FAILURE: 'GET_USERS_FAILURE'
};

export const getCount = (width) => {
    let usersCount = 5;
    if (width >= 1100) {
        usersCount = 4;
    } else if (width >= 820) {
        usersCount = 3;
    } else {
        usersCount = 2;
    }
    return usersCount;
}
