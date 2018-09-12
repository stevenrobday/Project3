import React, { Component } from "react";
import { AboutCard } from "../../components/Layout";
import { GameResults } from "../../components/Results";
import API from "../../utils/API";

class Home extends Component {
  state = {
    games: [],
    game: ""
    // topic: {input: "", valid: false},
    // begin: {input: "", valid: false},
    // end: {input: "", valid: false},
    // year: new Date().getFullYear()
  };

  searchGames = (game) => {
    API.searchGames(game)
      .then(res => {
        let urls = res.data.results.map(result => {
          return result.api_detail_url;
        });

        return Promise.all(urls.map(url => {
          return API.getGame(url);
        }))
      })
      .then(res2 => {
        let games = res2.map(game => {
          let obj = {};
          obj.gameID = game.data.results.id;
          obj.name = game.data.results.name;
          obj.coverImage = game.data.results.image.medium_url;
          obj.description = game.data.results.deck;
          obj.wiki = game.data.results.site_detail_url;
          obj.release = (game.data.results.original_release_date) ? game.data.results.original_release_date.split(" ")[0] : "N/A";

          obj.platforms = game.data.results.platforms.map(platform => {
            let obj2 = {};
            obj2.name = platform.name;
            obj2.href = platform.site_detail_url;
            return obj2;
          });

          obj.images = game.data.results.images.map(image => {
            return image.medium_url;
          });

          return obj;
        });

        this.setState({
          games
        });
      })
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();

    this.searchGames(this.state.game);
  };

  render() {
    return (
      <div>
        {this.state.games.length > 0 ? (
          <GameResults results={this.state.games} />
        ) : (
          <AboutCard />
        )}
      </div>
    );
  }
}

export default Home;