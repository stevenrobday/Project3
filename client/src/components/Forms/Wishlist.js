import React, { Component } from "react";
import { FormBtn } from "../FormComponents";
import API from "../../utils/API";

export class Wishlist extends Component {
  handleFormSubmit = event => {
    event.preventDefault();
    console.log(this.props.user.username);
    API.wishlist(this.props.user.username, {title: this.props.title});
    //pass this.state.username and password to passport (?)
  }

  render() {
    return (
      <form>
        <FormBtn color="is-success" onClick={this.handleFormSubmit}>
          WISHLIST
        </FormBtn>
      </form>
    );
  }
}