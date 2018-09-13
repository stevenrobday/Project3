import React, { Component } from "react";
import API from "../../utils/API";
import "./AddGame.css";

export class AddGame extends Component {
  state = {
    wishlist: false,
    owned: false
  }

  componentWillMount() {
    API.getUser(this.props.user._id)
      .then(response => {
        if (response.data.wishlist.findIndex(x => x.giantbombid === `${this.props.gameObj.giantbombid}`) !== -1) {
          this.setState({
            wishlist: true
          });
        }
        if (response.data.owned.findIndex(x => x.giantbombid === `${this.props.gameObj.giantbombid}`) !== -1) {
          this.setState({
            owned: true
          });
        }
      });
  }

  handleWishlistSubmit = event => {
    event.preventDefault();
    API.returnGame(this.props.gameObj.giantbombid)
      .then(response => {
        if (response.data.length) {
          API.deleteOwned(this.props.user._id, response.data[0]._id);
        }
        API.wishlist(this.props.user._id, this.props.gameObj);
        this.setState({
          wishlist: true,
          owned: false
        });
      });
  }

  handleOwnedSubmit = event => {
    event.preventDefault();
    API.returnGame(this.props.gameObj.giantbombid)
      .then(response => {
        if (response.data.length) {
          API.deleteWishlist(this.props.user._id, response.data[0]._id);
        }
        API.owned(this.props.user._id, this.props.gameObj);
        this.setState({
          wishlist: false,
          owned: true
        });
      });
  }

  deleteWishlist = event => {
    event.preventDefault();
    API.returnGame(this.props.gameObj.giantbombid)
      .then(response => {
        API.deleteWishlist(this.props.user._id, response.data[0]._id);
        this.setState({
          wishlist: false
        });
      });
  }

  deleteOwned = event => {
    event.preventDefault();
    API.returnGame(this.props.gameObj.giantbombid)
      .then(response => {
        API.deleteOwned(this.props.user._id, response.data[0]._id);
        this.setState({
          owned: false
        });
      });
  }

  render() {
    return (
      <div>
        <form>
          {this.state.wishlist ? (
            <button className={"button addGame is-danger"} onClick={this.deleteWishlist}>
              WISHLIST
            </button>
          ) : (
              <button className={"button addGame is-success"} onClick={this.handleWishlistSubmit}>
                WISHLIST
              </button>
            )}
        </form>
        <form>
          {this.state.owned ? (
            <button className={"button addGame is-danger"} onClick={this.deleteOwned}>
              OWNED
            </button>
          ) : (
              <button className={"button addGame is-success"} onClick={this.handleOwnedSubmit}>
                OWNED
              </button>
            )}
        </form>
      </div>

    );
  }
}