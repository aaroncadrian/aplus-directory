import { render } from '@testing-library/react';

import WebDirectoryPeopleFeatureList from './web-directory-people-feature-list';

describe('WebDirectoryPeopleFeatureList', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<WebDirectoryPeopleFeatureList />);
    expect(baseElement).toBeTruthy();
  });
});
