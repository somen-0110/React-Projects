import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };
  onInputChange = (event) => {
    this.setState({ term: event.target.value });
  };

  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state.term);
  };
  render() {
    return (
      <form
        className="form-group d-flex justify-content-center"
        onSubmit={this.onFormSubmit}
      >
        <input
          placeholder="Enter your search term"
          onChange={this.onInputChange}
          className="form-control w-75"
        />
        <button className="btn btn-primary" type="submit">
          Search
        </button>
      </form>
    );
  }
}

export default SearchBar;
