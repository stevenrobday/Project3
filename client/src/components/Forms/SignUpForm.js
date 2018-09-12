import React, { Component } from "react";
import { Columns, Column, Box, Section } from "../Layout";
import { FormBtn, Input } from "../FormComponents";
import API from "../../utils/API";
import { Redirect } from 'react-router'

export class SignUpForm extends Component {
  state = {
    name: { input: "", valid: false, text: "Please enter a valid name" },
    username: { input: "", valid: false, text: "Please enter a valid username" },
    password: { input: "", valid: false, text: "Passwords must be at least 6 characters long" },
    redirect: false
  };

  // saveUser = () => {
  //   API.saveUser(this.state.name, this.state.username, this.state.password)
  //     // .then(res => {
  //     //   this.setState({
  //     //     saved: true
  //     //   });
  //     // })
  //     .catch(err => console.log(err));
  // }

  handleInputChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState(prevState => ({
      [name]: {...prevState[name], input: value}
    }), () => {
      this.validateInput(name, value);
    });
  }

  //validation function
  validateInput = (name, value) => {
    switch (name) {
      case "name":
        if (value) {
          this.setState(prevState => ({
            [name]: { ...prevState[name], valid: true }
          }));
        }
        else {
          this.setState(prevState => ({
            [name]: { ...prevState[name], valid: false }
          }));
        }
        break;
      case "username":
        if (value) {
          this.setState(prevState => ({
            [name]: { ...prevState[name], valid: true }
          }));
        }
        else {
          this.setState(prevState => ({
            [name]: { ...prevState[name], valid: false, text: "Please enter a valid username!" }
          }));
        }
        break;
      case "password":
        if (value.length > 5) {      
          this.setState(prevState => ({
            [name]: { ...prevState[name], valid: true }
          }));
        }
        else {
          this.setState(prevState => ({
            [name]: { ...prevState[name], valid: false }
          }));
        }
        break;
      //avoid warning by declaring default
      default:
      //do nothing
    }
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.name.valid && this.state.username.valid && this.state.password.valid) {
      API.findUser(this.state.username.input )
      .then(res => {
        if (res.data.length) {
          this.setState(prevState => ({
            username: { ...prevState.username, valid: false, text: "Someone else took that username already :( :( :(" }
          }));
        }
        else {
          API.saveUser({
            name: this.state.name.input,
            username: this.state.username.input,
            password: this.state.password.input
          })
          .then(res => this.setState({ redirect: true }))
        }
      }) 
      .catch(err => console.log(err));
    }
  }

  render() {
    return this.state.redirect ? (
     <Redirect to="/home" />
    ) : (
      <Section>
        <Columns>
          <Column size="is-4" offset="is-offset-4">
            <Box>
              <h1 className="title">Sign Up!</h1>
              <form>
                <div className="field">
                  <Input
                    onChange={this.handleInputChange}
                    value={this.state.name.input}
                    label="Name"
                    icon="fas fa-user"
                    name="name"
                    placeholder="Full Name"
                    type="text"
                    valid={this.state.name.valid}
                    invalidText={this.state.name.text}
                  />
                </div>
                <div className="field">
                  <Input
                    onChange={this.handleInputChange}
                    value={this.state.username.input}
                    label="Username"
                    icon="far fa-user"
                    name="username"
                    placeholder="Username"
                    type="text"
                    valid={this.state.username.valid}
                    invalidText={this.state.username.text}
                  />
                </div>
                <div className="field">
                  <Input
                    onChange={this.handleInputChange}
                    value={this.state.password.input}
                    label="Password"
                    icon="fa fa-key"
                    name="password"
                    placeholder="Password"
                    type="password"
                    valid={this.state.password.valid}
                    invalidText={this.state.password.text}
                  />
                </div>
                <FormBtn color="is-success" onClick={this.handleFormSubmit}>
                  SIGN UP
                </FormBtn>
              </form>
            </Box>
          </Column>
        </Columns>
      </Section>
    );
  }
}