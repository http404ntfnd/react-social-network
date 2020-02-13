import { rerenderEntireTree } from "../render";

let state = {
    profilePage:{
        postData: [
            { message: "In space, no one can hear you laugh", likes: 10 },
            { message: "What dance do all astronauts know? The moonwalk.", likes: 28 },
            { message: "What is an astronauts favourite chocolate? A Mars bar of course!", likes: 2 },
            { message: "What is an astronaut's favourite place on a computer? The space bar...", likes: 15 },
        ],
        newPostText: 'What`s new on your life',
    },
    dialogsPage:{
        dialogsData: [
            { id: 1, name: 'Dima' },
            { id: 2, name: 'Artem' },
            { id: 3, name: 'Vitalik' },
            { id: 4, name: 'Leonid' },
            { id: 5, name: 'Sasha' },
            { id: 6, name: 'Yura' },
            { id: 7, name: 'Andrey' },
        ],
        messageDate: [
            { id: 1, message: 'Hi' },
            { id: 2, message: 'How are you?' },
            { id: 3, message: 'Hello?' },
            { id: 4, message: 'Do you here?' },
        ],
    }
}

window.state = state;

export let addPost = () => {
    let newPost = {
        message: state.profilePage.newPostText,
        likes: 4
    };
    
    state.profilePage.postData.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree(state);
}

export let updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
}
export default state;