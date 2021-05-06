import {rerenderEntireDOM} from '../render';

let state = {
    profilePage:{
        posts: [
            { id: 1, body: "Hey, my name is Roma and it`s my first tweet" },
            { id: 2, body: "Test post for my new app" }
        ]
    },
    dialoguesPage:{
        messages: [
            {id: 1, message:[
                { id: 1, text: "Hello, Andrew, how are you? Where have you been?"},
                { id: 0, text: "Hello, Me, how are you? Where have you been?"},
                { id: 1, text: "Hello, Andrew, how are you? Where have you been?"},
                { id: 0, text: "Hello, Me, how are you? Where have you been?"}
            ]},
            {id: 2, message:[
                { id: 2, text: "Hello, Dmirtiy, how are you? Where have you been?"},
                { id: 0, text: "Hello, Me, how are you? Where have you been?"},
                { id: 2, text: "Hello, Dmirtiy, how are you? Where have you been?"},
                { id: 0, text: "Hello, Me, how are you? Where have you been?"}
            ]},
            {id: 3, message:[
                { id: 0, text: "Hello, Me, how are you? Where have you been?"},
                { id: 0, text: "Hello, Me, how are you? Where have you been?"},
                { id: 3, text: "Hello, Sasha, how are you? Where have you been?"},
                { id: 3, text: "Hello, Sasha, how are you? Where have you been?"}
            ]},
            {id: 4, message:[
                { id: 0, text: "Hello, Me, how are you? Where have you been?"},
                { id: 0, text: "Hello, Me, how are you? Where have you been?"},
                { id: 4, text: "Hello, Sceta, how are you? Where have you been?"},
                { id: 4, text: "Hello, Sceta, how are you? Where have you been?"}
            ]},
            {id: 8, message:[
                { id: 8, text: "Hello, Sceta, how are you? Where have you been?"},
                { id: 0, text: "Hello, Me, how are you? Where have you been?"},
                { id: 8, text: "Hello, Sceta, how are you? Where have you been?"},
                { id: 8, text: "Hello, Sceta, how are you? Where have you been?"}
            ]}
        ],
        users: [
            {id: 1, name: "Andrew"},
            {id: 2, name: "Dmitriy"},
            {id: 3, name: "Sasha"},
            {id: 4, name: "Sceta"},
            {id: 5, name: "Roma"},
            {id: 6, name: "Fil"},
            {id: 7, name: "John"},
            {id: 8, name: "Max"}
        ]
    }   

    
}

export let addPost = (body) => {
    let newId = state.profilePage.posts.slice(-1)[0].id + 1; 
    let newPost = {
        id: newId,
        body: body
    }
    state.profilePage.posts.push(newPost);

    rerenderEntireDOM(state);
}

export default state;