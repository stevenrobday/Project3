import React, { Component } from "react";
import { Navbar } from "../../components/Layout";

class Profile extends Component {
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
        {this.props.match.params.username}
      </div>
    );
  }
}

export default Profile;