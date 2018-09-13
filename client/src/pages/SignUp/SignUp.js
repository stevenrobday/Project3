import React, { Component } from "react";
import { Navbar } from "../../components/Layout";
import { SignUpForm } from "../../components/Forms";

class SignUp extends Component {
  render() {
    return (
      <div>
        <Navbar
          // onChange={this.handleInputChange}
          // value={this.state.game}
          onClick={this.handleFormSubmit}
          loggedIn={this.props.loggedIn}
          login={this.props.login}
          logOut={this.props.logOut}
          user={this.props.user}
        />
        <SignUpForm login={this.props.login} />
      </div>
    );
  }
}

export default SignUp;