import { combineReducers } from 'redux';
import { HYDRATE } from 'next-redux-wrapper';
import user from './user';
import post from './post';

const rootReducer = combineReducers({
    index:(state={},action) =>{
        switch(action.type){
            case HYDRATE :
                console.log('HYDREATE', action);
                return {...state, ...action.payload}
            default :
                return state;
        }
    },
    user,
    post,
});

export default rootReducer;