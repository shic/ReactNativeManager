import {EMAIL_CHANGED} from "../actions/types"

const INITIAL_STATE = {
    email:''
};

export default (state=INITIAL_STATE,action)=>{
    switch (action.type){
        case EMAIL_CHANGED:
            console.log(`${action.type} action is called.`);

            return {...state,email:action.payload};
            break;
        default:
            return state;
    }
};