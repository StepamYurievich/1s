const ADD_MASSAGE = 'ADD-MASSAGE';

let initialState ={
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
};

const dialogsReducer =(state=initialState,action)=>{
    switch (action.type){
        case ADD_MASSAGE:
            let newMassage = {
                massage: action.newMassageText,
                id: 1
            }
            return{
                ...state,
                massages: [...state.massages,newMassage],
            }
        default:
            return state
    }
}
export const addMassageCreator=(newMassageText)=>({type:ADD_MASSAGE,newMassageText})
export default dialogsReducer