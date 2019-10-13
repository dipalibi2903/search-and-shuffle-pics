import React from "react";
import API from "../config/axiosapi";
import HeaderSearch from "./HeaderSearch";
import ImageCollection from "./ImageCollection";
import Spinner from "./spinner";

class ImageContainer extends React.Component {
  state = {
    imageCollection: [],
    showLoader: false
  };

  onSearchHit = term => {
    this.setState({ showLoader: true });
    API.get("https://api.unsplash.com/search/photos", {
      params: { query: term }
    }).then(output => {
      this.setState({
        imageCollection: output.data.results,
        showLoader: false
      });
    });
  };

  render() {
    return (
      <>
        <HeaderSearch onSearchHit={this.onSearchHit} />
        {this.state.showLoader ? (
          <Spinner message={"Fetching Images"} />
        ) : (
          <ImageCollection imageCollections={this.state.imageCollection} />
        )}
      </>
    );
  }
}

export default ImageContainer;
