import { render } from '@testing-library/react';

import WebDirectoryPeopleUiForms from './web-directory-people-ui-forms';

describe('WebDirectoryPeopleUiForms', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<WebDirectoryPeopleUiForms />);
    expect(baseElement).toBeTruthy();
  });
});
