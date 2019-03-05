import React, {Component} from 'react';
import Logo from '../../component/logo';
import {List, InputItem, WingBlank, WhiteSpace, Button} from 'antd-mobile'

class Login extends Component{
    constructor(props){
        super(props);
        this.regiser = this.regiser.bind(this);
    }
    regiser(){
        console.log('regggg::', this.props)
        this.props.history.push('/register')
    }
    render(){
        console.log('regggg::', this.props)
        return (
            <div>
                <Logo />
                <WingBlank>
                    <List>
                        <InputItem>用户名</InputItem>
                        <InputItem>密码</InputItem>
                    </List>
                    <WhiteSpace />
                    <Button type='primary'>登录</Button>
                    <WhiteSpace/>
                    <Button
                        type='primary'
                        onClick={this.regiser}
                    >
                        注册
                    </Button>
                </WingBlank>
            </div>
        )
    }
}

export default Login;