import * as Types from './actionTypes';
import axios from 'axios';
/**
 * user: 用户名
 * pwd：密码
 * type：BOSS/牛人
 * */
function errMsgAction(data){
    return {
        data,
        type: Types.REGISTER_ERROR
    }
}
function successAction(data) {
    return {
        data,
        type: Types.REGISTER_SUCCESS
    }
}
export function register({user, pwd, repeadPwd,type}) {
    if(!user || !pwd || !repeadPwd || !type){
        return errMsgAction('请输入完整的用户名或密码或用户类型！')
    }
    if(pwd != repeadPwd){
        return errMsgAction('密码输入不一致！')
    }
    return dispatch=>{
        axios.post('/user/register', {user, pwd, type})
            .then((res) => {
                if(res.status == 20 && res.data.code == 0){
                    dispatch(successAction({user, pwd, type}))
                }else{
                    dispatch(errMsgAction(res.data.msg))
                }
            })
    }
}