import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import axios from 'axios';
// {/*AuthRoute不是路由，因此在AuthRoute里面的this.props里并没有location、history、match*/}
//要想让AuthRoute当作路由使用的话就得使用withRouter
class AuthRoute extends Component{
    constructor(props){
        super(props);
    }

    componentDidMount(){
        //获取用户的信息用来判断前端页面应该跳到哪个页面
        //是否登录
        //现在的url地址，login是不需要跳转的
        //用户的type 是牛人还是BOSS
        //用户是否完善信息
        const pubList = ['/login', '/register'];
        const pathname = this.props.location.pathname;
        if(pubList.includes(pathname)){
            return;
        }

        axios.get('/user/info')
            .then( (res) => {
                console.log('reres:', res);
                if(res.status == 200){
                    if(res.data.code == 0){//code: 0登陆 1未登陆
                        //有登陆信息
                    }else{
                        console.log('props:', this.props);
                        this.props.history.push('/login')                  }
                }
            })
    }

    render(){
        return null
    }
}

export default withRouter(AuthRoute);