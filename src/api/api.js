import axios from "axios";
import {unfollow} from "../redux/users-reducer";

const instance = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: {
        'API-KEY': '17b11f10-0d7a-451f-ad4a-a9dc5d2831f8'
    }
});

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data)
    },

    putStateFollow(id) {
        return instance.post(`https://social-network.samuraijs.com/api/1.0/follow/${id}`).then(response => response.data)
    },

    deleteStateFollow(id) {
        return instance.delete(`https://social-network.samuraijs.com/api/1.0/follow/${id}`).then(response => response.data)
    }

}

