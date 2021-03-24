import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
    this.state = {
      counter: props.initial,
    };
  }

  onClick() {
    // eslint-disable-next-line react/destructuring-assignment
    this.setState(state => ({
      counter: state.counter + 1,
    }));
  }

  render() {
    const { counter } = this.state;
    return (
      <>
        <div>Current counter is: {counter}</div>
        <button type="button" onClick={this.onClick}>
          Increment
        </button>
      </>
    );
  }
}

Counter.defaultProps = {
  initial: 0,
};

Counter.propTypes = {
  initial: PropTypes.number,
};

export default Counter;
