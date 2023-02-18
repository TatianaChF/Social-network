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

    getUserProfile(userId = 27018) {
        return profileAPI.getUserProfile(userId);
    }

}

export const profileAPI = {
    getUserProfile(userId = 27018) {
        return instance.get(`profile/${userId}`);
    },

    getStatus(userId) {
        return instance.get(`profile/status/${userId}`);
    },

    updateStatus(status) {
        return instance.put(`profile/status`, { status: status });
    },

    savePhoto(photoFile) {
        const formData = new FormData();
        formData.append("image", photoFile);
        return instance.put(`profile/photo`, formData, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        })
    },

    saveProfile(profile) {
        return instance.put(`profile`, profile );
    }
}

export const authAPI = {
    getAuth() {
        return instance.get('auth/me');
    },

    sendLogin(email, password, rememberMe = false) {
        return instance.post(`/auth/login`, {email, password, rememberMe});
    }, // server authorization request

    logout() {
        return instance.delete(`/auth/login`);
    }
}

export const securityAPI = {
    getCaptcha() {
        return instance.get('/security/get-captcha-url');
    }
}