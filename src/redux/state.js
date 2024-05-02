import profileReducer from "./profIle_reducer";
import dialogsReducer from "./dialogs_reducer";
import friendsReducer from "./friends_reducer";

const store = {
    _state: {
        dialogsPage: {
            dialogs: [
                {
                    name: 'Stepan',
                    id: 1,
                    ava: "https://pixelbox.ru/wp-content/uploads/2021/11/avatar-whatsapp-pixelbox.ru-36.jpg"
                },
                {
                    name: 'Stepan1',
                    id: 2,
                    ava: "https://pixelbox.ru/wp-content/uploads/2021/11/avatar-whatsapp-pixelbox.ru-36.jpg"
                },
                {
                    name: 'Stepan2',
                    id: 3,
                    ava: "https://pixelbox.ru/wp-content/uploads/2021/11/avatar-whatsapp-pixelbox.ru-36.jpg"
                },],
            massages: [
                {massage: 'Yo Stepan', id: 1},
                {massage: 'Yo Stepan1', id: 2},
                {massage: 'Yo Stepan2', id: 3},
                {massage: 'Yo Stepan3', id: 4},],
            newMassageText: ''
        },
        profilePage: {
            posts: [
                {
                    name: 'Stepan',
                    likeCount: 12,
                    img: "https://pixelbox.ru/wp-content/uploads/2021/11/avatar-whatsapp-pixelbox.ru-36.jpg",
                    post: "Yo1"
                },
                {
                    name: 'Oksana',
                    likeCount: 13,
                    img: "https://pixelbox.ru/wp-content/uploads/2021/11/avatar-whatsapp-pixelbox.ru-36.jpg",
                    post: "Yo2"
                },
                {
                    name: 'Nikita',
                    likeCount: 114,
                    img: "https://pixelbox.ru/wp-content/uploads/2021/11/avatar-whatsapp-pixelbox.ru-36.jpg",
                    post: "Yo3"
                },
                {
                    name: 'Kirill',
                    likeCount: 13,
                    img: "https://pixelbox.ru/wp-content/uploads/2021/11/avatar-whatsapp-pixelbox.ru-36.jpg",
                    post: "Yo4"
                },
                {
                    name: 'Maksim',
                    likeCount: 151,
                    img: "https://pixelbox.ru/wp-content/uploads/2021/11/avatar-whatsapp-pixelbox.ru-36.jpg",
                    post: "Yo5"
                }],
            newPostText: '',
        },
        sidebar: {
            friend: [
                {names: 'Stepan Buharov1'},
                {names: 'Stepan Buharov2'},
                {names: 'Stepan Buharov3'},
                {names: 'Stepan Buharov4'},
                {names: 'Stepan Buharov5'},
                {names: 'Stepan Buharov6'}
            ],
            newSiteNarText:''
        },
    },
    _callSubs (){
        console.log("state")
    },
    getState(){
        return this._state
    },
    subscribe(observer) {
        this._callSubs = observer;
    },
    dispatch(action){

        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._state.sidebar = friendsReducer(this._state.sidebar, action)

        this._callSubs(this._state);
    }
}

export default store
