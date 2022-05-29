import { sharedPeopleDomain } from './shared-people-domain';

describe('sharedPeopleDomain', () => {
  it('should work', () => {
    expect(sharedPeopleDomain()).toEqual('shared-people-domain');
  });
});
