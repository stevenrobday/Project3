import React, { Component } from "react";
import { FormBtn } from "../FormComponents";

export class LogOut extends Component {
  handleFormSubmit = event => {
    event.preventDefault();
    console.log(this.props);
    this.props.logOut();
    //pass this.state.username and password to passport (?)
  }

  render() {
    return (
      <form>
        <FormBtn color="is-danger" onClick={this.handleFormSubmit}>
          LOG OUT
        </FormBtn>
      </form>
    );
  }
}