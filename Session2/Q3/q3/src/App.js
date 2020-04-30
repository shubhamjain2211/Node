import React, { Component } from 'react';
import './App.css';
import Axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      response: '',
    }
    this.home = this.home.bind(this);
    this.about= this.about.bind(this);
    this.contact = this.contact.bind(this);
  }
  home() {
    Axios.get('http://localhost:8080/home')
      .then(response => this.setState({response:response.data}))
      .catch(error => this.setState({ response: error.message }))
  }

  about() {
    Axios.get('http://localhost:8080/about')
      .then(response => this.setState({response:response.data}))
      .catch(error => this.setState({ response: error.message }))
  }

  contact() {
    Axios.get('http://localhost:8080/contact')
      .then(response => this.setState({response:response.data}))
      .catch(error => this.setState({ response: error.message }))
  }

  render() {
    return (
      <div className="App">
        <ul>
          <li onClick={this.home}>Home</li>
          <li onClick={this.about}>About</li>
          <li onClick={this.contact}>Contact Us</li>
        </ul>
        <div>
          <h1>{this.state.response}</h1>
        </div>
      </div>
    );
  }
}

export default App;