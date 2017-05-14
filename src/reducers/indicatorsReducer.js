const initialState = {
    likeCount:0,
    reviewCount:JSON.parse(localStorage.getItem('reviewsList') || '[]').length
}

function indicators(state=initialState,action){
    switch(action.type){
        case 'INCRESE_LIKE_COUNT':
            return Object.assign({},state,{likeCount: state.likeCount+1});
        case 'INCRESE_REVIEW_COUNT':
            return Object.assign({},state,{reviewCount: state.reviewCount+1});
        default:
            return state;
    }
}
export default indicators;