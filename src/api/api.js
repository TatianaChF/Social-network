import axios from "axios";

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
        return instance.post(`follow/${id}`).then(response => response.data)
    },

    deleteStateFollow(id) {
        return instance.delete(`follow/${id}`).then(response => response.data)
    },

    getAuth() {
        return instance.get('auth/me').then(response => response.data)
    },

    getUserProfile(userId = 27206) {
        return profileAPI.getUserProfile(userId);
    }

}

export const profileAPI = {
    getUserProfile(userId = 27206) {
        return instance.get(`profile/${userId}`).then(response => response.data)
    },

    getStatus(userId) {
        return instance.get(`profile/${userId}`);
    },

    updateStatus(status) {
        return instance.put(`status`, { status: status });
    },
}

