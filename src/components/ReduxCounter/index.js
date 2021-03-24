import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const ReduxCounter = ({ count, increment }) => (
  <>
    <div>Redux counter: {count}</div>
    <button type="button" onClick={increment}>
      Click Me
    </button>
  </>
);

ReduxCounter.propTypes = {
  count: PropTypes.number.isRequired,
  increment: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  count: state,
});

const mapDispatchToProps = dispatch => ({
  increment() {
    dispatch({ type: 'INCREMENT' });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ReduxCounter);
