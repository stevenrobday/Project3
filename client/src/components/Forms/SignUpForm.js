import React, { Component } from "react";
import { Box, Section } from "../Layout";
import { FormBtn, Input } from "../FormComponents";

export class SignUpForm extends Component {
  state = {
    name: "",
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
      <Section>
        <div className="columns">
          <div className="column is-4 is-offset-4">
            <Box>
              <h1 className="title">Sign Up!</h1>
              <form>
                <div className="field">
                  <Input
                    onChange={this.handleInputChange}
                    value={this.state.name}
                    label="Name"
                    icon="fas fa-user-plus"
                    name="name"
                    placeholder="Full Name"
                    type="text"
                  />
                </div>
                <div className="field">
                  <Input
                    onChange={this.handleInputChange}
                    value={this.state.username}
                    label="Username"
                    icon="fas fa-user-plus"
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
                  SIGN UP
                </FormBtn>
              </form>
            </Box>
          </div>
        </div>
      </Section>
    );
  }
}