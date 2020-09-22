import axios from "axios";

const KEY = "AIzaSyBrUEI_uovDuh4yUBcEPLDTsfSm7F2nEPo";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY,
  },
});
