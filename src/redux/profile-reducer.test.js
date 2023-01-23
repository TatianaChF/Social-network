import profileReducer, {addPostActionCreator} from "./profile-reducer";

let state  = {
    posts: [
        {id: 1, message: "Hi, how are you?", likesCount: 5},
        {id: 2, message: "It's my first post", likesCount: 15}
    ],
    newPostText: "Hello everyone!",
    profile: null
};
test('increase in the number of posts', () => {
    let action  = addPostActionCreator("Hello everyone!");

    let newState = profileReducer(state, action);

    expect(newState.posts.length).toBe(3);

});

test('message correctness', () => {
    let action  = addPostActionCreator("Hello everyone!");

    let newState = profileReducer(state, action);

    expect(newState.posts[2].message).toBe("Hello everyone!");

});
