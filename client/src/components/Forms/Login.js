import React, { Component } from "react";
import { FormBtn, Input } from "../FormComponents";

export class Login extends Component {
  state = {
    username: "",
    password: ""
  };

  handleInputChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    });
  }

  handleFormSubmit = event => {
    event.preventDefault();
    //pass this.state.username and password to passport (?)
  }

  render() {
    return (
      <form>
        <div className="field">
          <Input
            onChange={this.handleInputChange}
            value={this.state.username}
            label="Username"
            icon="fas fa-sign-in-alt"
            name="username"
            placeholder="Username"
            type="text"
          />
        </div>
        <div className="field">
          <Input
            onChange={this.handleInputChange}
            value={this.state.password}
            label="Password"
            icon="fa fa-key"
            name="password"
            placeholder="Password"
            type="password"
          />
        </div>
        <FormBtn color="is-success" onClick={this.handleFormSubmit}>
          LOGIN
        </FormBtn>
      </form>
    );
  }
}