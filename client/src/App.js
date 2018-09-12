import React, { Component } from "react";
import axios from 'axios';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Navbar } from "./components/Layout";
import { Login } from "./components/Forms";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";

class App extends Component {
  state = {
    loggedIn: false,
    user: null
  }

  componentDidMount() {
    axios.get('/auth/user').then(response => {

      if (!!response.data.user) {
        console.log('THERE IS A USER');
        this.setState({
          loggedIn: true,
          user: response.data.user
        });
      }
      else {
        this.setState({
          loggedIn: false,
          user: null
        });
      }
    });
  }

  login = (username, password) => {
    axios
      .post('/auth/login', {
        username,
        password
      })
      .then((response) => {
        console.log("asdflkjasdflkafds");
        if (response.status === 200) {
          // update the state
          this.setState({
            loggedIn: true,
            user: response.data.user
          });
        }
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        <Navbar
          onChange={this.handleInputChange}
          value={this.state.game}
          onClick={this.handleFormSubmit}
        >
          <Login 
            login={this.login}
          />
        </Navbar>
        <Router>
          <div>
            <Route exact path="/" component={Home} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/signup" component={SignUp} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;