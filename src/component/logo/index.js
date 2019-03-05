import React, {Component} from 'react';
import loginImg from '../../img/job.jpg';

class Logo extends Component{
    constructor(props){
        super(props);

    }

    render(){
        return (
            <div style={{textAlign: 'center', margin: '10px 0 20px 0'}}>
                <img src={loginImg} alt="" style={{width: '98vw'}}/>
            </div>
        )
    }
}

export default Logo;