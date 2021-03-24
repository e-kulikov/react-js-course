import React from 'react';
import PropTypes from 'prop-types';

const SimpleFunctionalComponent = ({ value }) => (
  <div>
    Simple functional component that just show the provided value: {value}
  </div>
);

SimpleFunctionalComponent.propTypes = {
  value: PropTypes.string.isRequired,
};

export default SimpleFunctionalComponent;
