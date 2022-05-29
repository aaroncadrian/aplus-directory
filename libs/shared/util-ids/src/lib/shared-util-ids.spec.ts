import { sharedUtilIds } from './shared-util-ids';

describe('sharedUtilIds', () => {
  it('should work', () => {
    expect(sharedUtilIds()).toEqual('shared-util-ids');
  });
});
