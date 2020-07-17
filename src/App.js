
import React, { Component } from 'react';

class Header extends Component {

  state = { keyword: '' };

  onInputChangeHandler = (event) => {
    this.setState({ keyword: event.target.value });
  }

  render() {
    return (
      <div style={{ textAlign: 'left' }}>
        <div>
          <input placeholder="text" onChange={this.onInputChangeHandler} />
        </div>
        <h1>{this.state.keyword}</h1>
      </div>
    );
  }
}

export default Header;