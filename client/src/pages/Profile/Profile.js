import React, { Component } from "react";
import { Navbar, Columns, Column, Box, Section } from "../../components/Layout";
import API from "../../utils/API";

class Profile extends Component {
  state = {
    wishlist: [],
    owned: []
  };

  componentDidMount() {
    API.findOneUser(this.props.match.params.username)
      .then(response => {
        this.setState({
          wishlist: response.data.wishlist,
          owned: response.data.owned
        });
      });
  }

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
        {/* {this.props.match.params.username} */}
        <Section>
          <Columns>
            <Column size="is-8" offset="is-offset-2">
              <Box>
                <div className="is-size-5">
                  <strong>
                    Wishlist
                  </strong>
                </div>
                <Columns addClass="is-multiline">
                  {this.state.wishlist.map(obj => {
                    return (
                      <Column key={obj._id} size="is-3">
                        <div className="tile is-parent">
                          <article className="tile is-child notification is-link">
                            <p className="is-size-5 has-text-centered">{obj.title}</p>
                            <figure>
                              <img src={obj.coverimage} alt="" />
                            </figure>
                          </article>
                        </div>
                      </Column>
                    );
                  })}
                </Columns>
              </Box>
            </Column>
          </Columns>
        </Section>
        <Section>
          <Columns>
            <Column size="is-8" offset="is-offset-2">
              <Box>
                <div className="is-size-5">
                  <strong>
                    Owned
                  </strong>
                </div>
                <Columns addClass="is-multiline">
                  {this.state.owned.map(obj => {
                    return (
                      <Column key={obj._id} size="is-3">
                        <div className="tile is-parent">
                          <article className="tile is-child notification is-link">
                            <p className="is-size-5 has-text-centered">{obj.title}</p>
                            <figure>
                              <img src={obj.coverimage} alt="" />
                            </figure>
                          </article>
                        </div>
                      </Column>
                    );
                  })}
                </Columns>
              </Box>
            </Column>
          </Columns>
        </Section>
      </div>
    );
  }
}

export default Profile;