

const UPDATE_NEW_POST_TEXT ='UPDATE-POST-TEXT';
let initialState={
    friend: [
        {names: 'Stepan Buharov1'},
        {names: 'Stepan Buharov2'},
        {names: 'Stepan Buharov3'},
        {names: 'Stepan Buharov4'},
        {names: 'Stepan Buharov5'},
        {names: 'Stepan Buharov6'}
    ],
    newSiteNarText:''
}

const friendsReducer =(state=initialState,action)=>{
    switch (action.type===UPDATE_NEW_POST_TEXT){
        case UPDATE_NEW_POST_TEXT:
            let stateCopy = {...state};

            stateCopy.newSiteNarText = action.newText;
            return stateCopy
        default:
            return state
    }
}

export const updateSiteNarText = (text)=>({type:UPDATE_NEW_POST_TEXT,newText:text})
export default friendsReducer