import { render } from '@testing-library/react';

import WebDirectoryPeopleFeatureDescribe from './web-directory-people-feature-describe';

describe('WebDirectoryPeopleFeatureDescribe', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<WebDirectoryPeopleFeatureDescribe />);
    expect(baseElement).toBeTruthy();
  });
});
