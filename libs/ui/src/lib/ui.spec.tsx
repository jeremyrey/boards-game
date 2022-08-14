import { render } from '@testing-library/react';

import UIProvider from './ui';

describe('Ui', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<UIProvider />);
    expect(baseElement).toBeTruthy();
  });
});
