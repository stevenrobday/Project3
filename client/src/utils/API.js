import axios from "axios";
require('dotenv').config();

const BASEURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
const APIKEY = process.env.REACT_IGDB_KEY;

export default {
  getArticles: function(topic, begin, end) {
    return axios.get(
      BASEURL, 
      { params: {
          'api-key': APIKEY,
          q: topic,
          begin_date: `${begin}0101`,
          end_date: `${end}1231`
        } 
      });
  }
};
