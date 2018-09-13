import axios from "axios";
require('dotenv').config();

const BASEURL = "https://www.giantbomb.com/api/";

const APIKEY = process.env.REACT_APP_GIANTBOMB_KEY;

export default {
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
  },

  wishlist: function(id, game) {
    return axios.post("/api/games/wishlist/" + id, game);
  },

  owned: function(id, game) {
    return axios.post("/api/games/owned/" + id, game);
  },

  getUser: function(id) {
    return axios.get("/api/users/user/" + id);
  },

  deleteWishlist: function(userid, gameid) {
    return axios.delete(`/api/users/wishlist/${userid}/${gameid}`);
  },

  deleteOwned: function(userid, gameid) {
    return axios.delete(`/api/users/owned/${userid}/${gameid}`);
  },

  returnGame: function(id) {
    return axios.get(`/api/games/${id}`);
  }
};
