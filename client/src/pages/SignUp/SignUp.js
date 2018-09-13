import React, { Component } from "react";
import { SignUpForm } from "../../components/Forms";

class SignUp extends Component {
  render() {
    return (
      <div>
        <SignUpForm login={this.props.login} />
      </div>
    );
  }
}

export default SignUp;