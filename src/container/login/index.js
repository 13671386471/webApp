import React, {Component} from 'react';
import Logo from '../../component/logo';
import {List, InputItem, WingBlank, WhiteSpace, Button} from 'antd-mobile'
import RenderInput from "../../component/renderInput";

class Login extends Component{
    constructor(props){
        super(props);
        this.state={
            userName: '',
            pwd: ''
        };
        this.fields = [
            {value: 'userName', label: '用户名'},
            {value: 'pwd', label: '密码', type: 'password'},
        ]
        this.regiser = this.regiser.bind(this);
    }
    regiser(){
        console.log('regggg::', this.props)
        this.props.history.push('/register')
    }
    handleChange = (key, val) => {
        this.setState({
            [key]: val
        })
    }
    handleLogin = () => {
        console.log('Login:', this.state)
    }
    render(){
        console.log('regggg::', this.props)
        return (
            <div>
                <Logo />
                <WingBlank>
                    <RenderInput
                        type='input'
                        data={this.fields}
                        onChange={(key,val) => this.handleChange(key,val)}
                    />
                    <WhiteSpace />
                    <Button
                        type='primary'
                        onClick={() => this.handleLogin()}
                    >
                        登录
                    </Button>
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