import React, { PureComponent } from "react";

class SearchInput extends PureComponent {

  handleInputSearch = event => {
    this.props.valueSearch(event.target.value);
  }

  render() {
    return (
      <div>
        <input onChange={this.handleInputSearch} />
      </div>
    );
  }
}

export default SearchInput;
