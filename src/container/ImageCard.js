import React from "react";
import Spinner from "./spinner";

class ImageCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      spanNeeded: 0
    };
    this.imageRef = React.createRef();
  }

  componentDidMount() {
    this.imageRef.current.addEventListener("load", this.onImageLoad);
  }

  onImageLoad = () => {
    if (this.imageRef.current) {
      const height = this.imageRef.current.clientHeight;
      this.setState({
        spanNeeded: Math.ceil(height / 10) + 1
      });
    }
  };

  render() {
    const { description, urls } = this.props.image;
    return (
      <div style={{ gridRowEnd: `span ${this.state.spanNeeded}` }}>
        <img ref={this.imageRef} src={urls.regular} alt={description} />
      </div>
    );
  }
}

export default ImageCard;
