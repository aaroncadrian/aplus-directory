import { render } from '@testing-library/react';

import ReactUiForms from './react-ui-forms';

describe('ReactUiForms', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ReactUiForms />);
    expect(baseElement).toBeTruthy();
  });
});
