import axios from "axios";

const defaultURL = "https://social-network.samuraijs.com/api/1.0/";

export const getUsers = (currentPage, pageSize) => {
    return axios.get(defaultURL + `users?page=${currentPage}&count=${pageSize}`, {
        withCredentials: true
    })
}

