import React, {Component} from 'react';
import {WingBlank, WhiteSpace, Button} from 'antd-mobile'
import Logo from '../../component/logo';
import RenderInput from '../../component/renderInput';

class Register extends Component{
    constructor(props){
        super(props);
        this.state={
            select: 'genius',
            userName: '',
            pwd: '',
            repeadpwd: ''
        };
        this.typeFields = [
            {value: 'genius', label: '牛人'},
            {value: 'boss', label: '老板'}
        ];
        this.fields = [
            {value: 'userName', label: '用户名'},
            {value: 'pwd', label: '密码', type: 'password'},
            {value: 'repeadPwd', label: '确认密码', type: 'password'},
        ]
    }
    handleChange = (key, val) => {
        console.log('key:', key, val)
        this.setState({
            [key]: val
        })
    }
    handleRegister = () => {
        console.log('click::', this.state)
    }
    render(){
        console.log('field::', this.fields)
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
                    <RenderInput
                        type='checkInput'
                        data={this.typeFields}
                        select={this.state.select}
                        onChange={(val) => this.handleChange('select', val)}
                    />
                    <WhiteSpace />
                    <Button
                        type='primary'
                        onClick={() => this.handleRegister()}
                    >
                        注册
                    </Button>
                </WingBlank>
            </div>
        )
    }
}

export default Register;