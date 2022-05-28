import { render } from '@testing-library/react';

import WebDirectoryPeopleFeatureCreate from './web-directory-people-feature-create';

describe('WebDirectoryPeopleFeatureCreate', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<WebDirectoryPeopleFeatureCreate />);
    expect(baseElement).toBeTruthy();
  });
});
