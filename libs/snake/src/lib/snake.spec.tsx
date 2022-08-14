import { render } from '@testing-library/react';

import Snake from './snake';

describe('Snake', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Snake />);
    expect(baseElement).toBeTruthy();
  });
});
