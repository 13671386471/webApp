/**
 * data = [
 *   {value: '', label: ''}
 *];
 */
import React, {Component} from 'react';
import {List, InputItem, WingBlank, WhiteSpace,Radio} from 'antd-mobile'

class Test extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        let RadioItem = Radio.RadioItem;
        let {
            data, //渲染的数据源
            select,//Radio类型的选中值
            type, //要渲染的类型
            onChange //事件回调
        } = this.props;
        console.log('state:::', data);
        return (<div>
            <List>
            {
                type === 'checkInput'?
                    data.map(i => (
                        <RadioItem
                            key={i.value}
                            checked={select === i.value}
                            onClick={() => onChange(i.value)}
                        >
                            {i.label}
                        </RadioItem>
                    ))
                    :
                    data.map(item => (
                        <InputItem
                            type={item.type}
                            key={item.value}
                            onChange={(val) => onChange(item.value, val)}
                        >
                            {item.label}
                        </InputItem>
                    ))
            }
            </List>
            <WhiteSpace size="lg" />
        </div>);
    }
}
export default Test;