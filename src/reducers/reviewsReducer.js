
const initialState = {
    name:'',
    reviewText:'',
    reviewsList: JSON.parse(localStorage.getItem('reviewsList')) || []
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