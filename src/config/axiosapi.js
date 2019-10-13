import axios from "axios";

const withAPI = axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID 9459269b0a63216f6b419c0c653d41f10a24418b7e9019cdca26d19ba69f924c"
  }
});

export default withAPI;
