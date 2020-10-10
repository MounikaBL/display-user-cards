import axios from "axios";

export const userService = {
    fetchUsers
};

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
