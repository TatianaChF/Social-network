import axios from "axios";

const defaultURL = "https://social-network.samuraijs.com/api/1.0/";

export const getUsers = (currentPage = 1, pageSize = 10) => {
    return axios.get(defaultURL + `users?page=${currentPage}&count=${pageSize}`, {
        withCredentials: true
    })
}

