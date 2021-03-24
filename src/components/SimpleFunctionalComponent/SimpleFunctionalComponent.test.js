import React from 'react';
import { render } from '@testing-library/react';

import SimpleFunctionalComponent from './index';

describe('SimpleFunctionalComponent', () => {
  it('should show provided value', () => {
    const { baseElement } = render(
      <SimpleFunctionalComponent value="test-value" />
    );
    expect(baseElement.textContent).toEqual(
      'Simple functional component that just show the provided value: test-value'
    );
  });
});
