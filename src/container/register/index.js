import React, {Component} from 'react';
import {List, InputItem, WingBlank, WhiteSpace,Radio, Button} from 'antd-mobile'
import Logo from '../../component/logo'

class Register extends Component{
    constructor(props){
        super(props);
        this.state={
            type: 'genius'
        }
    }
    render(){
        let RadioItem = Radio.RadioItem;
        return (
            <div>
                <Logo />
                <WingBlank>
                    <List>
                        <InputItem>用户名</InputItem>
                        <InputItem>密码</InputItem>
                        <InputItem>确认密码</InputItem>

                    </List>
                    <WhiteSpace />
                    <RadioItem checked={this.state.type == 'genius'}>牛人</RadioItem>
                    <RadioItem checked={this.state.type == 'boss'}>BOSS</RadioItem>
                    <WhiteSpace />
                    <Button type='primary'>注册</Button>
                </WingBlank>
            </div>
        )
    }
}

export default Register;