import React, { Component } from "react";
import axios from 'axios';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
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

        console.log(response.data.user);
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

  logOut = () => {
		console.log('logging out');
		axios.post('/auth/logout').then(response => {
			console.log(response.data);
			if (response.status === 200) {
				this.setState({
					loggedIn: false,
					user: null
				})
			}
		});
	};

  render() {
    return (
      <div>
        <Router>
          <div>
            <Route exact path="/" render={() => <Home 
                loggedIn={this.state.loggedIn}
                login={this.login}
                logOut={this.logOut}
                user={this.state.user}
              />} 
            />
            <Route exact path="/home" render={() => <Home 
                loggedIn={this.state.loggedIn}
                login={this.login}
                logOut={this.logOut}
                user={this.state.user}
              />} 
            />
            <Route exact path="/profile/:username" render={(props) => <Profile 
                {...props}
                loggedIn={this.state.loggedIn}
                login={this.login}
                logOut={this.logOut}
                user={this.state.user}
              />} 
            />
            <Route exact path="/signup" component={SignUp} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;