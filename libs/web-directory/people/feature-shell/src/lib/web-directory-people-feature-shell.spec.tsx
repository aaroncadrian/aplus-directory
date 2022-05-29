import { render } from '@testing-library/react';

import WebDirectoryPeopleFeatureShell from './web-directory-people-feature-shell';

describe('WebDirectoryPeopleFeatureShell', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<WebDirectoryPeopleFeatureShell />);
    expect(baseElement).toBeTruthy();
  });
});
