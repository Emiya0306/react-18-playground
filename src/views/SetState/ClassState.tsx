import React, { PureComponent } from 'react';

type Result1 = { key: 'state1', value: true };
type Result2 = { key: 'state2', value: true };
type Results = [Result1, Result2];

function request() {
  return new Promise<Results>(resolve => setTimeout(() => resolve([
    { key: 'state1', value: true },
    { key: 'state2', value: true }
  ]), 1000));
}

class ClassState extends PureComponent {
  state = { state1: false, state2: false };

  handleToggle = async () => {
    const results = await request();

    for (const result of results) {
      this.setState({ [result.key]: result.value });
    }
  };

  render() {
    const { state1, state2 } = this.state;
    console.log('render', state1, state2);
    return (
      <div className="class-state">
        <h1>ClassState</h1>
        <div>
          <span>state1: {JSON.stringify(state1)}</span>&nbsp;
          <span>state2: {JSON.stringify(state2)}</span>
        </div>
        <div>
          <button onClick={this.handleToggle}>Async Toggle State</button>
        </div>
      </div>
    );
  }
}

export default ClassState;
