import React, { Component } from "react";
import { Navbar } from "../../components/Layout";
import { SignUpForm } from "../../components/Forms";

class SignUp extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <SignUpForm />
      </div>
    );
  }
}

export default SignUp;