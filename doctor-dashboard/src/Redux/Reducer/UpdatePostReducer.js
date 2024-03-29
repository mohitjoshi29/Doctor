import { POST_UPDATE_API } from '../Action/UpdateTreat';

const initialState = {
    postget: null,
}

const UpdPostReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'POST_UPDATE_API':
            return {
                ...state,
                postget: action.value
            };
        default:
            return state;
    }
};
export default UpdPostReducer;