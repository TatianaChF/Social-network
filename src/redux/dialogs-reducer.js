const ADD_MESSAGE = 'ADD-MESSAGE';

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
    ]
}

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_MESSAGE:
            let newMessageBody = action.newMessageBody;
            return {
                ...state,
                messagesData: [...state.messagesData, {id: 4, message: newMessageBody}]
            }
        default:
            return state;
    }

}

export const addMessageActionCreator = (newMessageBody) => ({ type: ADD_MESSAGE, newMessageBody })

export default dialogsReducer;