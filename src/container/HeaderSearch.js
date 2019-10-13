import React from "react";
import "../styles.css";

export class HeaderSearch extends React.Component {
  state = {
    searchText: "",
    showLoader: false
  };

  handleFormSubmit = event => {
    event.preventDefault();
    this.props.onSearchHit(this.state.searchText);
  };

  render() {
    return (
      <div className="ui raised inverted segment">
        <form className="ui inverted form" onSubmit={this.handleFormSubmit}>
          <div className="field">
            <label>Search Image</label>
            <input
              type="text"
              value={this.state.searchText}
              placeholder={"Hit the enter button after entering text"}
              onChange={event =>
                this.setState({ searchText: event.target.value })
              }
            />
          </div>
        </form>
      </div>
    );
  }
}

export default HeaderSearch;
