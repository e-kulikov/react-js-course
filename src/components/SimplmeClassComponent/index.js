import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SimpleClassComponent extends Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    // eslint-disable-next-line react/destructuring-assignment
    console.log('SimpleClassComponent says:', this.props.value);
  }

  render() {
    const { value } = this.props;
    return (
      <>
        <div>
          Simple class component that just show the provided value: {value} and
          log it into the console by clicking on the button
        </div>
        <button type="button" onClick={this.onClick}>
          Click me!
        </button>
      </>
    );
  }
}

SimpleClassComponent.propTypes = {
  value: PropTypes.string.isRequired,
};

export default SimpleClassComponent;
