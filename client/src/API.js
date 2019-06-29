import axios from "axios";

export default {
  // Gets all dogs and shelters
  getDogById: function(id) {
    return axios.get("/details/" + id);
  },
  getAll: function() {
    return axios.get("/api/all");
  },
  getShelterZip: function() {
   return axios.get("/details/all");
  },
  
};
