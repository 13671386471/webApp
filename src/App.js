import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

class App extends Component {
    constructor(props){
        super(props);
        this.state={
            num:1
        }
    }
    componentDidMount(){
        console.log('App:comDIdMOunt')
        axios.get('/data')
            .then(function(response){
            console.log('data》》》', response);
        })
    }

    componentWillMount(){
        console.log('App:componentWillMount')
    }

    componentWillReceiveProps(){
        console.log('App:componentWillReceiveProps')
    }

    shouldComponentUpdate(){
        console.log('App:shouldComponentUpdate')
        return true
    }

    componentWillUpdate(){
        console.log('App:componentWillUpdate')
    }

    componentDidUpdate(){
        console.log('App:componentDidUpdate')
    }

    componentWillUnmount(){
        console.log('App:componentDidUpdate')
    }

    handleClick(){
        this.setState({
            num: this.state.num + 1
        })
    }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            welcome to react
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
            <button onClick={() => this.handleClick()}>点击</button>
        </header>
          <App1 showNum = {this.state.num}></App1>
      </div>
    );
  }
}





class App1 extends Component{
    constructor(props){
        super(props);
    }

    componentWillMount(){
        console.log('app1::componentWillMount');
    }
    componentDidMount(){
        console.log("app1::componentDidMount");
    }

    componentWillReceiveProps(){
        console.log("app1::componentWillReceiveProps");
    }

    shouldComponentUpdate(){
        console.log("app1::shouldComponentUpdate");
        return true
    }

    componentWillUpdate(){
        console.log('app1::componentWillUpdate')
    }

    componentDidUpdate(){
        console.log('app1::componentDidUpdate')
 }

    render(){
        return (
            <div>App1组件: {this.props.showNum}</div>
        )
    }
}




















export default App;
