const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState = {
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
    newMessageText: ""
}

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_MESSAGE: {
            let newMessage = {
                id: 4,
                message: state.newMessageText
            };
            let stateCopy = {...state};
            stateCopy.messagesData = [...state.messagesData];
            stateCopy.newMessageText = {...state.newMessageText};
            stateCopy.messagesData.push(newMessage);
            stateCopy.newMessageText = '';
            return stateCopy;
        }
        case UPDATE_NEW_MESSAGE_TEXT: {
            let stateCopy = {...state};
            stateCopy.newMessageText = {...state.newMessageText};
            stateCopy.newMessageText = action.newMessage;
            return stateCopy;
        }
        default:
            return state;
    }

}

export const addMessageActionCreator = () => ({ type: ADD_MESSAGE })

export const updateNewMessageTextActionCreator = (text) =>
    ({ type: UPDATE_NEW_MESSAGE_TEXT, newMessage: text })

export default dialogsReducer;