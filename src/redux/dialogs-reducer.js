const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

const dialogsReducer = (state, action) => {

    if(action.type === ADD_MESSAGE) {
        let newMessage = {
            id: 4,
            message: this._state.dialogsPage.newMessageText
        };
        this._state.dialogsPage.messagesData.push(newMessage);
        this._state.dialogsPage.newMessageText = '';
        this._callSubscriber(this._state);
    } else if(action.type === UPDATE_NEW_MESSAGE_TEXT) {
        this._state.dialogsPage.newMessageText = action.newMessage;
        this._callSubscriber(this._state);
    }

    return state;
}