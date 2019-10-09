import axios from "axios";

// const BASEURL = "https://dog.ceo/api/breed/hound/images";
// const APIKEY = "";


// Export an object with a "search" method that searches the Giphy API for the passed query
export default {
    search: function(query) {
        console.log("searched API")
      return axios.get(`https://dog.ceo/api/breed/${query}/images`);
    }
  };
  
