import axios from "axios";
require('dotenv').config();

// let BASEURL = "https://api-endpoint.igdb.com/games/";

// const APIKEY = process.env.REACT_APP_IGDB_KEY;

const BASEURL = "https://www.giantbomb.com/api/";

const APIKEY = process.env.REACT_APP_GIANTBOMB_KEY;

export default {
  // searchGames: function (game) {
  //   BASEURL += `?search=${game}&fields=*`;
  //   return axios.get(
  //     BASEURL,
  //     {
  //       headers: {
  //         "user-key": APIKEY,
  //         Accept: "application/json"
  //       }
  //     });
  // }
  searchGames: function (game) {
    let URL = BASEURL + `search/?api_key=${APIKEY}&format=json&query="${game}"&resources=game`;
    return axios.get(
      URL);
  },

  getGame: function(url) {
    let URL = url + `?api_key=${APIKEY}&format=json`;
    return axios.get(
      URL);
  },

  findUser: function(username) {
    return axios.get("/api/users/" + username);
  },

  saveUser: function(userData) {
    return axios.post("/api/users/", userData);
  }
};
