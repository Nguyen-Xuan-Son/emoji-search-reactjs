
import React, { PureComponent } from "react";

import SearchInput from './area-search/input';
import ResultSearch from './area-result/result';
import logo from './logo.svg';
import './App.css';

class App extends PureComponent {

  constructor(props) {

    super(props);

    this.state = {
      valueSearch: ''
    }

  }

  receiveValueSearch = value => {
    console.log(value);
    this.setState({
      valueSearch: value
    })
    console.log('this.state', this.state);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <SearchInput valueSearch={this.receiveValueSearch}/>
        <hr />
        <ResultSearch value={this.state.valueSearch}/>
      </div>
    );
  }
}

export default App;
