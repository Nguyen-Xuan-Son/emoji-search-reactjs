import React, { PureComponent } from "react";


class RowResultSearch extends PureComponent {

  render() {
    return (
      <div>
      	{this.props.title} - {this.props.symbol}
      </div>
    );
  }
}

export default RowResultSearch;
