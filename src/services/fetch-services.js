import axios from "axios";

export const userService = {
    fetchUsers
};

/**
 * @name fetchUsers
 * @description To fetch the required number of users
 * @params count: Users count
 * @return users Object
 */
function fetchUsers(count) {
    return axios.get(`https://randomuser.me/api/?results=${count}`)
        .then((response) => {
            if (response.status && response.status === 200) {
                return response.data.results;
            } else {
                return { error: "unable to fetch users" };
            }
        });
}
