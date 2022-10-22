const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let store = {
    _state: {
        profilePage: {
            posts: [
                { id: 1, message: "Hi, how are you?", likesCount: 5 },
                { id: 2, message: "It's my first post", likesCount: 15 }
            ],
            newPostText: "Hello everyone!"
        },
        dialogsPage: {
            dialogsData: [
                { id: 1, name: "Alexander" },
                { id: 2, name: "Anna" },
                { id: 3, name: "Irina" },
                { id: 4, name: "Tatiana" },
                { id: 5, name: "Dmitry" },
                { id: 6, name: "Viktor" }
            ],
            messagesData: [
                { id: 1, message: "Hi" },
                { id: 2, message: "How are you?" },
                { id: 3, message: "Yo" }
            ],
            newMessageText: "Add new message!",
        },
        friendsPage: [
            { id: 1, name: "Alexander", avatar: "https://i.insider.com/61d1c0e2aa741500193b2d18?width=700" },
            { id: 2, name: "Tatiana", avatar: "https://cdn.mos.cms.futurecdn.net/fiDmrNrJsmGD2t57x4dRdG-1200-80.jpg" },
            { id: 3, name: "Anna", avatar: "https://www.farmersalmanac.com/wp-content/uploads/2021/04/forget-me-not-flower-as309740666.jpeg" },
            { id: 4, name: "Viktor", avatar: "https://rrsg.s3.amazonaws.com/wp-content/uploads/2018/12/Veyron-Grand-Sport-Vitesse-Black-Bess-1024x562.jpg" },
            { id: 5, name: "Irina", avatar: "https://www.gannett-cdn.com/presto/2020/03/09/PDTF/1ad7be1a-1b59-438e-9627-700753bc9867-GettyImages-1132562466.jpg" }
        ]
    },
    getState() {
       return this._state;
    },
    _callSubscriber () {
        console.log("State changed");
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        if(action.type === ADD_POST) {
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        } else if(action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newPost;
            this._callSubscriber(this._state);
        } else if(action.type === 'ADD-MESSAGE') {
            let newMessage = {
                id: 4,
                message: this._state.dialogsPage.newMessageText
            };
            this._state.dialogsPage.messagesData.push(newMessage);
            this._state.dialogsPage.newMessageText = '';
            this._callSubscriber(this._state);
        } else if(action.type === 'UPDATE-NEW-MESSAGE-TEXT') {
            this._state.dialogsPage.newMessageText = action.newMessage;
            this._callSubscriber(this._state);
        }
    }
}

export const addPostActionCreator = () => ({ type: ADD_POST });

export const updateNewPostTextActionCreator = (text) =>
    ({ type: UPDATE_NEW_POST_TEXT, newPost: text });

export const addMessageActionCreator = () => ({ type: ADD_MESSAGE })

export const updateNewMessageTextActionCreator = (text) =>
    ({ type: UPDATE_NEW_MESSAGE_TEXT, newMessage: text })

window.store = store;
export default store;





