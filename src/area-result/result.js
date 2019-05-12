import React, { PureComponent } from "react";
import RowResultSearch from "./../rowResult/rowResult";
import db from './../database/icons.json';

class ResultSearch extends PureComponent {

  render() {
    const result = db.filter(icon => {
      return icon.title.indexOf(this.props.value) > -1
    });

    return (
      <div>
        {result.map((icon, index) => {
          return <RowResultSearch key={index} title={icon.title}
                            symbol={icon.symbol}
          />
        })}
      </div>
    );
  }
}

export default ResultSearch;
