import React, { Component } from 'react';

import { Button } from 'Form';

class ExampleComponents extends Component {
  state = {
    error: '',
  }

  showError = () => {
    fetch('/api/test/error')
      .then(response => response.json())
      .then(data => this.setState({ error: JSON.stringify(data) }));
  }

  render() {
    const { error } = this.state;

    return (
      <div className="container">
        <Button className="red" onClick={this.showError}>Show Error Message</Button>
        <p>
          {`Error: ${error}`}
        </p>
      </div>
    );
  }
}

export default ExampleComponents;
