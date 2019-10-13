import "../styles.css";
import React from "react";
import ImageCard from "./ImageCard";

const ImageCollection = props => {
  const renderImageURLS = props.imageCollections.map(image => {
    return <ImageCard key={image.id} image={image} />;
  });
  return <div className="image-list"> {renderImageURLS}</div>;
};

export default ImageCollection;
