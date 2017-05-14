<<<<<<< HEAD

const initialState = {
    name:'',
    reviewText:'',
    reviewsList: JSON.parse(localStorage.getItem('reviewsList')) || []
=======
const reviewsList = [
    {
        id: 1,
        name: 'User1',
        date: 13,
        reviewText: 'Some Text1'
    },
    {
        id: 2,
        name: 'User2',
        date: 12,
        reviewText: 'Some Text2'
    },
    {
        id: 3,
        name: 'User3',
        date: 11,
        reviewText: 'Some Text3'
    },
];
const initialState = {
    name:'',
    reviewText:'',
    reviewsList
>>>>>>> 1417737d8a21b44a4583e8e9708c0bdf9f0170c8
};

function reviews(state=initialState,action){

    let payload = action.payload;

    switch(action.type){
        case 'ADD_REVIEW':
            return Object.assign({},state,{reviewsList:[...state.reviewsList,payload]});
        case 'CHANGE_NAME':
            return Object.assign({},state,{name: payload});
        case 'CHANGE_TEXT':
            return Object.assign({},state,{reviewText: payload});
        default:
            return state;
    }
}
export default reviews;