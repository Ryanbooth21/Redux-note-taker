import React, { Component } from 'react';

import { addMessage } from './redux'
import { connect } from 'react-redux'
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      input: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.submitMessage = this.submitMessage.bind(this);
  }

  handleChange(e){
    this.setState({
      input: e.target.value
    });
  }

  submitMessage(){
    this.props.submitNewMessage(this.state.input)
    this.setState({
      input: '',
    });
  }

  render() {
    return (
      <div className="App">
        <h2>Notes:</h2>
        <input
          value={this.state.input}
          onChange={this.handleChange}/><br/>
        <button onClick={this.submitMessage}>Submit</button>
        <ul>
          {this.props.messages.map( (message, idx) => {
              return (
                 <li key={idx}>{message}</li>
              )
            })
          }
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {messages: state} //The state is an array of messages
}

const MapDispatchToProps = (dispatch) => {
  return {
    submitNewMessage: (message)=>{
      //our method is taking "message as an arguement, which will pass it to the actions' message property"
      dispatch(addMessage(message))
    }
  }
}
const AppContainer = connect(mapStateToProps, MapDispatchToProps)(App)



export default AppContainer;
