import * as Types from '../actions/actionTypes';
let initState = {
    isAuth: false,
    msg: '',
    user: '',
    pwd: '',
    type: ''
}

export function userReduce(state=initState, action){
    switch (action.type) {
        case Types.REGISTER_SUCCESS:
            return {...state, isAuth: true, ...action.data};
        case Types.REGISTER_ERROR:
            return {...state, isAuth: false, msg: action.data};
        default:
            return state;
    }
}























































