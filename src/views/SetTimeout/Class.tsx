import React, { PureComponent } from 'react';

export default class Class extends PureComponent {
  state = {
    value: 0,
  };

  handleClick = () => {
    this.setState({ value: this.state.value + 1 });
    console.log(this.state.value);
    this.setState({ value: this.state.value + 1 });
    console.log(this.state.value);

    setTimeout(() => {
      console.log(this.state.value);
      this.setState({ value: this.state.value + 1 });
      console.log(this.state.value);
      this.setState({ value: this.state.value + 1 });
      console.log(this.state.value);
    });
  }

  render() {
    const { value } = this.state;
    console.log('render class:', value);
    return (
      <>
        <div>Class</div>
        <div>
          <button onClick={this.handleClick}>Update state</button>
        </div>
      </>
    );
  }
}
