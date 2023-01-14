import { Component } from 'react';

export class App extends Component {
  render() {
    return (
      <div>
        <h2>Please leave feedbeck</h2>
        <div>
          <button type="button">Good</button>
          <button type="button">Neutral</button>
          <button type="button">Bad</button>
        </div>
        <h2>Statistics</h2>
      </div>
    );
  }
}
